import type { ApiMetadata } from "./api"

export interface ApiIndex {
    [packageName: string]: {
        [apiName: string]: ApiSummary
    }
}

export interface ApiSummary {
    [version: string]: {
        [fileName: string]: ApiIndexItem
    }
}

export interface ApiIndexItem {
    hash: string
    status: number
    metadata: ApiMetadata
    updateTime: string
}

export interface ApiSummaryFlat {
    packageName: string
    apiName: string
    versionName: string
    fileName: string
    status: number
    metadata: ApiMetadata
    updateTime: string
    hash: string
    apiSummary: ApiSummary
}

export function getApiByHash(hash: string, apiIndex: ApiIndex): ApiSummaryFlat {
    for (const packageName in apiIndex) {
        for (const apiName in apiIndex[packageName]) {
            for (const versionName in apiIndex[packageName][apiName]) {
                for (const fileName in apiIndex[packageName][apiName][versionName]) {
                    if (apiIndex[packageName][apiName][versionName][fileName].hash === hash) {
                        return {
                            packageName, apiName, versionName, fileName,
                            status: apiIndex[packageName][apiName][versionName][fileName].status,
                            metadata: apiIndex[packageName][apiName][versionName][fileName].metadata,
                            updateTime: apiIndex[packageName][apiName][versionName][fileName].updateTime,
                            hash: apiIndex[packageName][apiName][versionName][fileName].hash,
                            apiSummary: apiIndex[packageName][apiName],
                        }
                    }
                }
            }
        }
    }
    return null
}