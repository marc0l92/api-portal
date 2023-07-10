import path from 'path'
import glob from 'glob'
import yaml from 'js-yaml'
import objectHash from 'object-hash'
import fs from 'fs-extra'
import type { BuildConfig } from './buildConfig'
import { compressToArray } from '../common/compress'
import type { Api } from '../common/api/api'
import { apiFactory } from '../common/api/apiFactory'
import { ReferenceNotFoundError } from '../common/api/refParser'
import { API_SUFFIX, API_INDEX_FILE_PATH, INPUT_FOLDER, MAX_PARALLEL_VALIDATIONS, MAX_VERSION_DIGITS, OUTPUT_FOLDER, VALIDATION_SUFFIX } from './cliConstants'
import { validateApiDoc } from './validateApi'
import { getEmptyApiIndex, type ApiIndex, type ApiIndexItem, CURRENT_API_INDEX_VERSION } from '../common/api/apiIndex'

interface ApiRelationships {
    [path: string]: {
        [key: string]: string
    }
}

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
    for (const apiHash in apiIndex.apis) {
        const position = fileNames.indexOf(`${OUTPUT_FOLDER}/${apiHash}${API_SUFFIX}`)
        if (position === -1) {
            console.warn('File not found on disk, deleting index entry:', `${OUTPUT_FOLDER}/${apiHash}${API_SUFFIX}`)
            delete apiIndex.apis[apiHash]
        } else {
            fileNames.splice(position, 1)
        }
    }
    for (const fileName of fileNames) {
        console.warn('File not found in the index, deleting file:', fileName)
        deleteFilesByHash(fileName)
    }
}

async function loadAndValidateApiIndex(): Promise<ApiIndex> {
    let apiIndex: ApiIndex = getEmptyApiIndex()
    if (fs.existsSync(API_INDEX_FILE_PATH)) {
        const apiIndexFromFile: ApiIndex = fs.readJsonSync(API_INDEX_FILE_PATH)
        if (apiIndexFromFile.indexVersion === CURRENT_API_INDEX_VERSION) {
            apiIndex = apiIndexFromFile
        }
    }
    const fileNames = await glob.glob(`${OUTPUT_FOLDER}**/*${API_SUFFIX}`, { platform: 'linux' })
    deleteDiscrepanciesBetweenIndexAndFiles(apiIndex, fileNames)
    return apiIndex
}

async function writeApi(apiDoc: any, apiHash: string): Promise<void> {
    await fs.outputFile(`${OUTPUT_FOLDER}/${apiHash}${API_SUFFIX}`, compressToArray(JSON.stringify(apiDoc)))
}

function isSmallerVersion(v1: string, v2: string): number {
    function versionToNumber(v: string | null): number {
        let total = 0
        let i = 0
        if (typeof v === 'string') {
            for (const split of v.split('.').reverse()) {
                total += parseInt(split) * Math.pow(10, i * MAX_VERSION_DIGITS)
                i++
            }
        }
        return total
    }
    return versionToNumber(v2) - versionToNumber(v1)
}

function isSmallerFileName(f1: string, f2: string): number {
    return f1.length - f2.length
}

function isNewerApiIndexItem(currentItem: ApiIndexItem, newItem: ApiIndexItem) {
    return isSmallerVersion(currentItem.versionName, newItem.versionName) || (
        currentItem.versionName === newItem.versionName && isSmallerFileName(currentItem.fileName, newItem.fileName)
    )
}

function generateRelationships(apiIndex: ApiIndex): ApiIndex {
    const relationships: ApiRelationships = {}
    for (const apiHash in apiIndex.apis) {
        const apiIndexItem = apiIndex.apis[apiHash]
        const apiPath = objectHash(apiIndexItem.packageName + apiIndexItem.apiName)
        const apiVersionPath = objectHash(apiIndexItem.packageName + apiIndexItem.apiName + apiIndexItem.versionName)
        if (!(apiPath in relationships)) {
            relationships[apiPath] = {}
        }
        if (!(apiVersionPath in relationships)) {
            relationships[apiVersionPath] = {}
        }
        relationships[apiPath][apiIndexItem.versionName] = apiHash
        relationships[apiVersionPath][apiIndexItem.fileName] = apiHash

        if (!(apiIndexItem.packageName in apiIndex.packages)) {
            apiIndex.packages[apiIndexItem.packageName] = {}
        }
        if (!(apiIndexItem.apiName in apiIndex.packages[apiIndexItem.packageName])) {
            apiIndex.packages[apiIndexItem.packageName][apiIndexItem.apiName] = apiHash
        } else {
            const currentApiHash = apiIndex.packages[apiIndexItem.packageName][apiIndexItem.apiName]
            if (isNewerApiIndexItem(apiIndex.apis[currentApiHash], apiIndexItem)) {
                apiIndex.packages[apiIndexItem.packageName][apiIndexItem.apiName] = apiHash
            }
        }
    }

    for (const apiHash in apiIndex.apis) {
        const apiIndexItem = apiIndex.apis[apiHash]
        const apiPath = objectHash(apiIndexItem.packageName + apiIndexItem.apiName)
        const apiVersionPath = objectHash(apiIndexItem.packageName + apiIndexItem.apiName + apiIndexItem.versionName)
        apiIndexItem.otherVersions = relationships[apiPath]
        apiIndexItem.otherFiles = relationships[apiVersionPath]
    }
    return apiIndex
}

function sortRelationship(apiIndex: ApiIndex): ApiIndex {
    const sortedApiIndex: ApiIndex = getEmptyApiIndex()
    for (const packageName of Object.keys(apiIndex.packages).sort()) {
        sortedApiIndex.packages[packageName] = {}
        for (const apiName of Object.keys(apiIndex.packages[packageName]).sort()) {
            sortedApiIndex.packages[packageName][apiName] = apiIndex.packages[packageName][apiName]
        }
    }
    for (const apiHash in apiIndex.apis) {
        sortedApiIndex.apis[apiHash] = apiIndex.apis[apiHash]
        sortedApiIndex.apis[apiHash].otherVersions = Object.fromEntries(
            Object.entries(apiIndex.apis[apiHash].otherVersions).sort(([k1, v1], [k2, v2]) => isSmallerVersion(k1, k2))
        )
        sortedApiIndex.apis[apiHash].otherFiles = Object.fromEntries(
            Object.entries(apiIndex.apis[apiHash].otherFiles).sort(([k1, v1], [k2, v2]) => isSmallerFileName(k1, k2))
        )
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

export async function generateApiFiles(appConfig: BuildConfig) {
    const apiIndex: ApiIndex = getEmptyApiIndex()
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

                if (apiHash in oldApiIndex.apis) {
                    apiIndex.apis[apiHash] = oldApiIndex.apis[apiHash]
                } else {
                    apiIndex.apis[apiHash] = {
                        packageName,
                        apiName: api.getName(),
                        versionName: api.getVersion(),
                        fileName: relativeFileName,
                        hash: apiHash,
                        status: api.getStatus(),
                        metadata: api.getMetadata(),
                        updateTime: dateNow(),
                        otherVersions: {},
                        otherFiles: {},
                        services: api.getServices().map(s => ({
                            method: s.getMethod(),
                            path: s.getPath(),
                            tags: [],
                        })),
                        tags: [],
                    }

                    await writeApi(apiDoc, apiHash)
                    validationPromises.push(validateApiDoc(apiDoc, apiHash, appConfig).catch((reason: string) => {
                        console.warn('!', reason)
                    }))

                    if (validationPromises.length > MAX_PARALLEL_VALIDATIONS) {
                        fs.outputJson(API_INDEX_FILE_PATH, apiIndex)
                        await Promise.allSettled(validationPromises)
                        validationPromises = []
                    }
                }
            }
        } catch (e) {
            console.error('Error:', e.message || e)
        }
    }

    await fs.outputJson(API_INDEX_FILE_PATH, sortRelationship(generateRelationships(apiIndex)))
    await Promise.allSettled(validationPromises)
    loadAndValidateApiIndex() // Delete files that are not part of the new index
}