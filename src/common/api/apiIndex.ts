import type { BrowserFilters } from "cli/buildConfig"
import type { Api, ApiMetadata } from "./api"

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
    services: {
        path: string
        method: string
        tags: BrowserFilters
    }[]
    tags: BrowserFilters
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

export function getApiSummaryFlatByHash(hash: string, apiIndex: ApiIndex): ApiSummaryFlat {
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

export function getApiSummaryFlatFromApi(api: Api): ApiSummaryFlat {
    const apiSummary: ApiSummary = {}
    apiSummary[api.getVersion()] = {
        '$InputApi': {
            hash: '',
            status: api.getStatus(),
            metadata: api.getMetadata(),
            updateTime: '',
            services: [],
        }
    }
    return {
        packageName: '',
        apiName: api.getName(),
        versionName: api.getVersion(),
        fileName: '$InputApi',
        status: api.getStatus(),
        metadata: api.getMetadata(),
        updateTime: '',
        hash: '',
        apiSummary: apiSummary,
    }
}

export function getApiSummaryToFlat(packageName: string, apiName: string, apiSummary: ApiSummary): ApiSummaryFlat {
    const versionName = Object.keys(apiSummary)[0]
    const fileName = Object.keys(apiSummary[versionName])[0]
    const apiIndexItem: ApiIndexItem = apiSummary[versionName][fileName]
    return {
        apiSummary, packageName, apiName, versionName, fileName,
        status: apiIndexItem.status,
        metadata: apiIndexItem.metadata,
        updateTime: apiIndexItem.updateTime,
        hash: apiIndexItem.hash,
    }
}

export function modifyApiSummaryFlat(apiSummaryFlat: ApiSummaryFlat, changes: { versionName?: string, fileName?: string }): ApiSummaryFlat {
    const versionName = changes.versionName || apiSummaryFlat.versionName
    const fileName = changes.fileName || (changes.versionName ? Object.keys(apiSummaryFlat.apiSummary[versionName])[0] : apiSummaryFlat.apiName)
    const apiIndexItem: ApiIndexItem = apiSummaryFlat.apiSummary[versionName][fileName]
    return {
        apiSummary: apiSummaryFlat.apiSummary,
        packageName: apiSummaryFlat.packageName,
        apiName: apiSummaryFlat.apiName,
        versionName, fileName,
        status: apiIndexItem.status,
        metadata: apiIndexItem.metadata,
        updateTime: apiIndexItem.updateTime,
        hash: apiIndexItem.hash,
    }
}