import type { ServiceTags } from "cli/buildConfig"
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
        tags: ServiceTags
    }[]
    tags: ServiceTags
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
    services: {
        path: string
        method: string
        tags: ServiceTags
    }[]
}

export type ApiIndexFlat = ApiSummaryFlat[]

export function getApiSummaryFlatByHash(hash: string, apiIndex: ApiIndex): ApiSummaryFlat {
    for (const packageName in apiIndex) {
        for (const apiName in apiIndex[packageName]) {
            for (const versionName in apiIndex[packageName][apiName]) {
                for (const fileName in apiIndex[packageName][apiName][versionName]) {
                    const apiIndexItem = apiIndex[packageName][apiName][versionName][fileName]
                    if (apiIndexItem.hash === hash) {
                        return {
                            packageName, apiName, versionName, fileName,
                            status: apiIndexItem.status,
                            metadata: apiIndexItem.metadata,
                            updateTime: apiIndexItem.updateTime,
                            hash: apiIndexItem.hash,
                            apiSummary: apiIndex[packageName][apiName],
                            services: apiIndexItem.services,
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
    const services = api.getServices().map(s => ({
        method: s.getMethod(),
        path: s.getPath(),
        tags: {}
    }))
    apiSummary[api.getVersion()] = {
        '$InputApi': {
            hash: '',
            status: api.getStatus(),
            metadata: api.getMetadata(),
            updateTime: '',
            services: services,
            tags: {},
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
        services: services,
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
        services: apiIndexItem.services,
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
        services: apiIndexItem.services
    }
}

export function apiIndexToApiIndexFlat(apiIndex: ApiIndex): ApiIndexFlat {
    const apiIndexFlat: ApiIndexFlat = []
    for (const packageName in apiIndex) {
        for (const apiName in apiIndex[packageName]) {
            apiIndexFlat.push(getApiSummaryToFlat(packageName, apiName, apiIndex[packageName][apiName]))
        }
    }
    return apiIndexFlat
}