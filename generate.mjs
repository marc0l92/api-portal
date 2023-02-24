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
const VALIDATION_TIMEOUT = 20000

const argv = yargs(hideBin(process.argv)).argv
let appConfig = {}
console.log(argv)
if (argv.configFile) {
    appConfig = yaml.load(fs.readFileSync(argv.configFile))
    console.log('Config loaded:', appConfig)
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

function isSmallerVersion(v1, v2) {
    function versionToNumber(v) {
        let total = 0;
        let i = 0;
        if (v) {
            for (const split of v.split('.').reverse()) {
                total += parseInt(split) * Math.pow(10, i * MAX_VERSION_DIGITS);
                i++;
            }
        }
        return total;
    }
    return versionToNumber(v1) < versionToNumber(v2)
}

fs.removeSync(OUTPUT_FOLDER)
glob(`${INPUT_FOLDER}**/*.+(json|yaml|yml)`, async (error, fileNames) => {
    if (error) {
        console.error(error)
        exit(1)
    }

    const apiIndex = {}
    let validationPromises = []
    for (const fileName of fileNames) {
        try {
            console.log('+', fileName)
            const apiDoc = yaml.load(await fs.readFile(fileName))
            const apiHash = hash(apiDoc)
            const relativeFileName = fileName.replace(INPUT_FOLDER, '')
            const packageName = path.dirname(relativeFileName)

            await generateApi(apiDoc, apiHash)
            validationPromises.push(generateValidation(apiHash).catch(reason => {
                console.warn('!', reason)
            }))

            const api = await apiTools.parseApi(apiDoc, { ignoreReferenceErrors: true })

            if (!apiIndex[packageName]) {
                apiIndex[packageName] = {}
            }
            if (!apiIndex[packageName][api.getName()]) {
                apiIndex[packageName][api.getName()] = { lastVersion: null, versions: {} }
            }
            if (!apiIndex[packageName][api.getName()].lastVersion || isSmallerVersion(apiIndex[packageName][api.getName()].lastVersion, api.getVersion())) {
                apiIndex[packageName][api.getName()].lastVersion = api.getVersion()
            }
            apiIndex[packageName][api.getName()].versions[api.getVersion()] = {
                hash: apiHash,
                fileName: relativeFileName,
            }
            if (validationPromises.length > MAX_PARALLEL_VALIDATIONS) {
                fs.outputJson(INDEX_FILE_PATH, apiIndex)
                await Promise.allSettled(validationPromises)
                validationPromises = []
            }
        } catch (e) {
            console.error('Error:', e.message || e)
        }
    }
    fs.outputJson(INDEX_FILE_PATH, apiIndex)
})
