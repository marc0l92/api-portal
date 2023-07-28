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
import { API_SUFFIX, API_INDEX_FILE_PATH, INPUT_FOLDER, MAX_PARALLEL_VALIDATIONS, OUTPUT_FOLDER, VALIDATION_SUFFIX } from './cliConstants'
import { validateApiDoc } from './validateApi'
import { ApiIndex } from 'common/api/apiIndex'
import { apiIndexFromFile } from './cliCommon'

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
    for (const apiHash of apiIndex.getApisHash()) {
        const position = fileNames.indexOf(`${OUTPUT_FOLDER}/${apiHash}${API_SUFFIX}`)
        if (position === -1) {
            console.warn('File not found on disk, deleting index entry:', `${OUTPUT_FOLDER}/${apiHash}${API_SUFFIX}`)
            apiIndex.deleteApiRaw(apiHash)
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
    const apiIndex = apiIndexFromFile()
    const fileNames = await glob.glob(`${OUTPUT_FOLDER}**/*${API_SUFFIX}`, { platform: 'linux' })
    deleteDiscrepanciesBetweenIndexAndFiles(apiIndex, fileNames)
    return apiIndex
}

async function writeApi(apiDoc: any, apiHash: string): Promise<void> {
    await fs.outputFile(`${OUTPUT_FOLDER}/${apiHash}${API_SUFFIX}`, compressToArray(JSON.stringify(apiDoc)))
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
    const apiIndex = new ApiIndex()
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

                if (oldApiIndex.getApi(apiHash)) {
                    apiIndex.addApi(oldApiIndex.getApi(apiHash))
                } else {
                    apiIndex.addApi({
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
                    })

                    await writeApi(apiDoc, apiHash)
                    validationPromises.push(validateApiDoc(apiDoc, apiHash, appConfig).catch((reason: string) => {
                        console.warn('!', reason)
                    }))

                    if (validationPromises.length > (appConfig?.validation?.parallelValidation || MAX_PARALLEL_VALIDATIONS)) {
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

    apiIndex.generateRelationships()
    apiIndex.sortRelationship()
    await fs.outputJson(API_INDEX_FILE_PATH, apiIndex)
    await Promise.allSettled(validationPromises)
    loadAndValidateApiIndex() // Delete files that are not part of the new index
}