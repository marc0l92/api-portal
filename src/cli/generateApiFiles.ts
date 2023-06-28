import path from 'path'
import glob from 'glob'
import yaml from 'js-yaml'
import objectHash from 'object-hash'
import fs from 'fs-extra'
import { exec } from 'child_process'
import type { BuildConfig } from './buildConfig'
import type { ServicesTags } from './servicesTags'
import type { ApiIndex, ApiIndexItem } from 'common/api/apiIndex'
import { compressToArray } from 'common/compress'
import type { Api } from 'common/api/api'
import { apiFactory } from 'common/api/apiFactory'
import { ReferenceNotFoundError } from 'common/api/refParser'

const INPUT_FOLDER = 'inputApi/'
const OUTPUT_FOLDER = 'public/apis'
const INDEX_FILE_PATH = `${OUTPUT_FOLDER}/_apiIndex.json`
const API_SUFFIX = '.api.json.gzip'
const VALIDATION_SUFFIX = '.validation.json.gzip'
const MAX_VERSION_DIGITS = 5
const MAX_PARALLEL_VALIDATIONS = 10
const VALIDATION_TIMEOUT = 300000

function dateNow(): string {
    return new Date().toISOString()
}

function deleteFilesByHash(fileName: string): void {
    const apiHashMatches = fileName.match(new RegExp(`^.*\\/([a-z0-9]+)${API_SUFFIX.replace('.', '\\.')}$`))
    if (apiHashMatches) {
        const apiHash = apiHashMatches[1]
        fs.remove(`${OUTPUT_FOLDER}/${apiHash}${API_SUFFIX}`)
        fs.remove(`${OUTPUT_FOLDER}/${apiHash}${VALIDATION_SUFFIX}`)
    }
}

function deleteDiscrepanciesBetweenIndexAndFiles(apiIndex: ApiIndex, fileNames: string[]): void {
    for (const packageName in apiIndex) {
        for (const apiName in apiIndex[packageName]) {
            for (const versionName in apiIndex[packageName][apiName]) {
                for (const fileName in apiIndex[packageName][apiName][versionName]) {
                    const hash = apiIndex[packageName][apiName][versionName][fileName].hash
                    const position = fileNames.indexOf(`${OUTPUT_FOLDER}/${hash}${API_SUFFIX}`)
                    if (position === -1) {
                        console.warn('File not found on disk:', `${OUTPUT_FOLDER}/${hash}${API_SUFFIX}`)
                        delete apiIndex[packageName][apiName][versionName][fileName]
                    } else {
                        fileNames.splice(position, 1)
                    }
                }
                if (Object.keys(apiIndex[packageName][apiName][versionName]).length === 0) {
                    delete apiIndex[packageName][apiName][versionName]
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

async function loadAndValidateApiIndex(): Promise<ApiIndex> {
    let apiIndex: ApiIndex = {}
    if (fs.existsSync(INDEX_FILE_PATH)) {
        apiIndex = fs.readJsonSync(INDEX_FILE_PATH)
    }
    const fileNames = await glob.glob(`${OUTPUT_FOLDER}**/*${API_SUFFIX}`, { platform: 'linux' })
    deleteDiscrepanciesBetweenIndexAndFiles(apiIndex, fileNames)
    return apiIndex
}

async function validateServicesTags(apiIndex: ApiIndex, servicesTags: ServicesTags): Promise<ServicesTags> {
    return servicesTags
}

async function generateApi(apiDoc: any, apiHash: string): Promise<void> {
    await fs.outputFile(`${OUTPUT_FOLDER}/${apiHash}${API_SUFFIX}`, compressToArray(JSON.stringify(apiDoc)))
}

async function minifyAndCompressJsonFile(filename: string): Promise<void> {
    await fs.outputFile(filename, compressToArray(JSON.stringify(fs.readJSONSync(filename))))
}

async function generateValidation(fileName: string, apiHash: string, appConfig: BuildConfig): Promise<any> {
    return new Promise((resolve, reject) => {
        if (appConfig && appConfig.validation && appConfig.validation.spectralRulesFile && appConfig.validation.enable) {
            const outputFile = `${OUTPUT_FOLDER}/${apiHash}${VALIDATION_SUFFIX}`
            const executable = 'node --max_old_space_size=8192 ./node_modules/@stoplight/spectral-cli/dist/index.js'
            const options = `lint --quiet --ruleset ${appConfig.validation.spectralRulesFile} --format json ${fileName} --output ${outputFile}`
            console.log('Run:', `${executable} ${options}`)
            exec(`${executable} ${options}`, { timeout: VALIDATION_TIMEOUT }, async (error, stdout, stderr) => {
                if (stderr) {
                    return reject(stderr)
                } if (error && error.killed && error.signal === 'SIGTERM') {
                    return reject('Execution timeout reached while validating: ' + apiHash)
                } else {
                    await minifyAndCompressJsonFile(outputFile)
                    return resolve(null)
                }
            })
        } else {
            return resolve(null)
        }
    })
}

function hasApiVersion(apiIndex: ApiIndex, packageName: string, apiName: string, apiVersion: string, fileName: string, apiHash: string): boolean {
    return apiIndex
        && apiIndex[packageName]
        && apiIndex[packageName][apiName]
        && apiIndex[packageName][apiName][apiVersion]
        && apiIndex[packageName][apiName][apiVersion][fileName]
        && apiIndex[packageName][apiName][apiVersion][fileName].hash === apiHash
}

function createApiVersion(apiIndex: ApiIndex, packageName: string, apiName: string, apiVersion: string, fileName: string, apiIndexItem: ApiIndexItem): void {
    if (!apiIndex[packageName]) {
        apiIndex[packageName] = {}
    }
    if (!apiIndex[packageName][apiName]) {
        apiIndex[packageName][apiName] = {}
    }
    if (!apiIndex[packageName][apiName][apiVersion]) {
        apiIndex[packageName][apiName][apiVersion] = {}
    }
    apiIndex[packageName][apiName][apiVersion][fileName] = apiIndexItem
}

function isSmallerVersion(v1: string, v2: string): number {
    function versionToNumber(v: string | null): number {
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

function isSmallerFileName(f1: string, f2: string): number {
    return f1.length - f2.length
}

function sortApiIndex(apiIndex: ApiIndex): ApiIndex {
    const sortedApiIndex: ApiIndex = {}
    for (const packageName of Object.keys(apiIndex).sort()) {
        sortedApiIndex[packageName] = {}
        for (const apiName of Object.keys(apiIndex[packageName]).sort()) {
            sortedApiIndex[packageName][apiName] = {}
            for (const versionName of Object.keys(apiIndex[packageName][apiName]).sort(isSmallerVersion)) {
                sortedApiIndex[packageName][apiName][versionName] = {}
                for (const fileName of Object.keys(apiIndex[packageName][apiName][versionName]).sort(isSmallerFileName)) {
                    sortedApiIndex[packageName][apiName][versionName][fileName] = apiIndex[packageName][apiName][versionName][fileName]
                }
            }
        }
    }
    return sortedApiIndex
}

async function parseApi(apiObject: any): Promise<Api> {
    const api = apiFactory(apiObject)
    api.setModelsTitle()
    try {
        await api.resolveReferences()
    } catch (e) {
        if (e instanceof ReferenceNotFoundError) {
            console.error(e.message)
        } else {
            throw e
        }
    }
    return api
}

export async function generateApiFiles(appConfig: BuildConfig, servicesTags: ServicesTags) {
    const apiIndex: ApiIndex = {}
    const apiIndexHashes: { [hash: string]: boolean } = {}
    let validationPromises: Promise<any>[] = []

    const oldApiIndex: ApiIndex = await loadAndValidateApiIndex()

    const fileNames = await glob.glob(`${INPUT_FOLDER}**/*.+(json|yaml|yml)`, { platform: 'linux' })
    for (const fileName of fileNames) {
        try {
            console.log('>', fileName)
            const apiDoc: any = yaml.load(fs.readFileSync(fileName, { encoding: 'utf-8' }))
            const apiHash = objectHash(apiDoc)
            const relativeFileName = fileName.replace(INPUT_FOLDER, '').replace(/\.(json|ya?ml)$/, '')
            const packageName = path.dirname(relativeFileName)
            const api = await parseApi(apiDoc)

            if (!(apiHash in apiIndexHashes)) {
                apiIndexHashes[apiHash] = true

                if (hasApiVersion(oldApiIndex, packageName, api.getName(), api.getVersion(), relativeFileName, apiHash)) {
                    createApiVersion(apiIndex, packageName, api.getName(), api.getVersion(), relativeFileName,
                        oldApiIndex[packageName][api.getName()][api.getVersion()][relativeFileName])
                } else {
                    createApiVersion(apiIndex, packageName, api.getName(), api.getVersion(), relativeFileName, {
                        hash: apiHash,
                        status: api.getStatus(),
                        metadata: api.getMetadata(),
                        updateTime: dateNow(),
                    })

                    await generateApi(apiDoc, apiHash)
                    validationPromises.push(generateValidation(fileName, apiHash, appConfig).catch(reason => {
                        console.warn('!', reason)
                    }))

                    if (validationPromises.length > MAX_PARALLEL_VALIDATIONS) {
                        fs.outputJson(INDEX_FILE_PATH, apiIndex)
                        await Promise.allSettled(validationPromises)
                        validationPromises = []
                    }
                }
            }
        } catch (e) {
            console.error('Error:', e.message || e)
        }
    }

    await fs.outputJson(INDEX_FILE_PATH, sortApiIndex(apiIndex))
    await Promise.allSettled(validationPromises)
    loadAndValidateApiIndex() // Delete files that are not part of the new index
}