import type { Api, ApiMetadata } from './api'

export const CURRENT_API_INDEX_VERSION = 1

export interface ApiIndex {
    indexVersion: number
    apis: {
        [apiHash: ApiHash]: ApiIndexItem
    }
    packages: {
        [packageName: string]: {
            [apiName: string]: ApiHash
        }
    }
}
export const getEmptyApiIndex = (): ApiIndex => ({ indexVersion: CURRENT_API_INDEX_VERSION, apis: {}, packages: {} })

export interface ApiIndexItem {
    packageName: string
    apiName: string
    versionName: string
    fileName: string
    status: number
    metadata: ApiMetadata
    updateTime: string
    hash: string
    otherVersions: {
        [versionName: string]: ApiHash
    }
    otherFiles: {
        [fileName: string]: ApiHash
    }
    services: ApiIndexService[]
    tags: string[]
}

export interface ApiIndexService {
    path: string
    method: string
    tags: string[]
}

export type ApiHash = string

export function getApiIndexItemFromApi(api: Api): ApiIndexItem {
    const services: ApiIndexService[] = api.getServices().map(s => ({
        method: s.getMethod(),
        path: s.getPath(),
        tags: []
    }))
    return {
        packageName: '',
        apiName: api.getName(),
        versionName: api.getVersion(),
        fileName: '$InputApi',
        status: api.getStatus(),
        metadata: api.getMetadata(),
        updateTime: new Date().toISOString(),
        hash: '',
        otherVersions: {},
        otherFiles: {},
        services: services,
        tags: [],
    }
}
