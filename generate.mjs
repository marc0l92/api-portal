import path from 'path'
import glob from 'glob'
import yaml from 'js-yaml'
import hash from 'object-hash'
import { exit } from 'process'
import fs from 'fs-extra'
import apiTools from './dist/api-tools.js'
import { exec } from 'child_process'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import process from 'process'

const INPUT_FOLDER = './inputApi/'
const OUTPUT_FOLDER = './public/apis'
const INDEX_FILE_PATH = `${OUTPUT_FOLDER}/apiIndex.json`
const API_SUFFIX = '.api.json'
const VALIDATION_SUFFIX = '.validation.json'
const MAX_VERSION_DIGITS = 5
const MAX_PARALLEL_VALIDATIONS = 10
const VALIDATION_TIMEOUT = 300000

const argv = yargs(hideBin(process.argv)).argv
let appConfig = {}
console.log(argv)
if (argv.configFile) {
    appConfig = yaml.load(fs.readFileSync(argv.configFile))
    console.log('Config loaded:', appConfig)
}

function dateNow() {
    return new Date().toISOString()
}

function deleteFilesByHash(fileName) {
    const apiHashMatches = fileName.match(/^.*\/([a-z0-9]+)\.[a-z]+\.json$/)
    if (apiHashMatches) {
        const apiHash = apiHashMatches[1]
        fs.remove(`${OUTPUT_FOLDER}/${apiHash}${API_SUFFIX}`)
        fs.remove(`${OUTPUT_FOLDER}/${apiHash}${VALIDATION_SUFFIX}`)
    }
}

function fixDiscrepanciesBetweenIndexAndFiles(apiIndex, fileNames) {
    for (const packageName in apiIndex) {
        for (const apiName in apiIndex[packageName]) {
            for (const versionName in apiIndex[packageName][apiName]) {
                const hash = apiIndex[packageName][apiName][versionName].hash
                const position = fileNames.indexOf(`${OUTPUT_FOLDER}/${hash}.api.json`)
                if (position === -1) {
                    console.warn('File not found on disk:', `${OUTPUT_FOLDER}/${hash}.api.json`)
                    delete apiIndex[packageName][apiName][versionName]
                } else {
                    fileNames.splice(position, 1)
                }
            }
            if (Object.keys(apiIndex[packageName][apiName]).length === 0) {
                delete apiIndex[packageName][apiName]
            }
        }
        if (Object.keys(apiIndex[packageName]).length === 0) {
            delete apiIndex[packageName]
        }
    }
    for (const fileName of fileNames) {
        console.warn('File not found in the index:', fileName)
        deleteFilesByHash(fileName)
    }
}

function loadAndValidateApiIndex() {
    return new Promise((resolve, reject) => {
        let apiIndex = {}
        if (fs.existsSync(INDEX_FILE_PATH)) {
            apiIndex = fs.readJsonSync(INDEX_FILE_PATH)
        }
        glob(`${OUTPUT_FOLDER}**/*.api.json`, async (error, fileNames) => {
            if (error) {
                reject(error)
            }
            fixDiscrepanciesBetweenIndexAndFiles(apiIndex, fileNames)
            return resolve(apiIndex)
        })
    })
}

async function generateApi(apiDoc, apiHash) {
    await fs.outputJson(`${OUTPUT_FOLDER}/${apiHash}${API_SUFFIX}`, apiDoc)
}

async function generateValidation(apiHash) {
    return new Promise((resolve, reject) => {
        if (appConfig && appConfig.validation && appConfig.validation.spectralRulesFile) {
            const inputFile = `${OUTPUT_FOLDER}/${apiHash}${API_SUFFIX}`
            const outputFile = `${OUTPUT_FOLDER}/${apiHash}${VALIDATION_SUFFIX}`
            const executable = 'node --max_old_space_size=8192 ./node_modules/@stoplight/spectral-cli/dist/index.js'
            const options = `lint --quiet --ruleset ${appConfig.validation.spectralRulesFile} --format json ${inputFile} --output ${outputFile}`
            console.log('Run:', `${executable} ${options}`)
            exec(`${executable} ${options}`, { timeout: VALIDATION_TIMEOUT }, (error, stdout, stderr) => {
                if (stderr) {
                    return reject(stderr)
                } if (error && error.killed && error.signal === 'SIGTERM') {
                    return reject('Execution timeout reached while validating: ' + apiHash)
                } else {
                    return resolve(null)
                }
            })
        } else {
            return resolve(null)
        }
    })
}

function hasApiVersion(apiIndex, packageName, apiName, apiVersion, apiHash) {
    return apiIndex[packageName]
        && apiIndex[packageName][apiName]
        && apiIndex[packageName][apiName]
        && apiIndex[packageName][apiName][apiVersion]
        && apiIndex[packageName][apiName][apiVersion].hash === apiHash
}

function createApiVersion(apiIndex, packageName, apiName, apiVersion, versionObject) {
    if (!apiIndex[packageName]) {
        apiIndex[packageName] = {}
    }
    if (!apiIndex[packageName][apiName]) {
        apiIndex[packageName][apiName] = {}
    }
    apiIndex[packageName][apiName][apiVersion] = versionObject
}

function isSmallerVersion(v1, v2) {
    function versionToNumber(v) {
        let total = 0;
        let i = 0;
        if (typeof v === 'string') {
            for (const split of v.split('.').reverse()) {
                total += parseInt(split) * Math.pow(10, i * MAX_VERSION_DIGITS);
                i++;
            }
        }
        return total;
    }
    return versionToNumber(v2) - versionToNumber(v1)
}

function sortApiIndex(apiIndex) {
    const sortedApiIndex = {}
    for (const packageName of Object.keys(apiIndex).sort()) {
        sortedApiIndex[packageName] = {}
        for (const apiName of Object.keys(apiIndex[packageName]).sort()) {
            sortedApiIndex[packageName][apiName] = {}
            for (const versionName of Object.keys(apiIndex[packageName][apiName]).sort(isSmallerVersion)) {
                sortedApiIndex[packageName][apiName][versionName] = apiIndex[packageName][apiName][versionName]
            }
        }
    }
    return sortedApiIndex
}

glob(`${INPUT_FOLDER}**/*.+(json|yaml|yml)`, async (error, fileNames) => {
    if (error) {
        console.error(error)
        exit(1)
    }

    const apiIndex = await loadAndValidateApiIndex()
    let validationPromises = []
    for (const fileName of fileNames) {
        try {
            console.log('>', fileName)
            const apiDoc = yaml.load(await fs.readFile(fileName))
            const apiHash = hash(apiDoc)
            const relativeFileName = fileName.replace(INPUT_FOLDER, '')
            const packageName = path.dirname(relativeFileName)
            const api = await apiTools.parseApi(apiDoc, { ignoreReferenceErrors: true })

            if (!hasApiVersion(apiIndex, packageName, api.getName(), api.getVersion(), apiHash)) {
                console.log('+', fileName)
                await generateApi(apiDoc, apiHash)
                validationPromises.push(generateValidation(apiHash).catch(reason => {
                    console.warn('!', reason)
                }))

                createApiVersion(apiIndex, packageName, api.getName(), api.getVersion(), {
                    hash: apiHash,
                    fileName: relativeFileName,
                    status: 'VALIDATED',
                    updateTime: dateNow(),
                })

                if (validationPromises.length > MAX_PARALLEL_VALIDATIONS) {
                    fs.outputJson(INDEX_FILE_PATH, apiIndex)
                    await Promise.allSettled(validationPromises)
                    validationPromises = []
                }
            }
        } catch (e) {
            console.error('Error:', e.message || e)
        }
    }
    fs.outputJson(INDEX_FILE_PATH, sortApiIndex(apiIndex))
})
