import { getApiIndexPath } from 'common/globals'
import type { Api, ApiMetadata } from './api'
import { MAX_VERSION_DIGITS } from 'cli/cliConstants'
import objectHash from 'object-hash'

export interface ApiIndexPackages {
    [packageName: string]: {
        [apiName: string]: ApiHash
    }
}

export class ApiIndex {
    public static CURRENT_API_INDEX_VERSION: number = 1
    private indexVersion: number = ApiIndex.CURRENT_API_INDEX_VERSION
    private apis: {
        [apiHash: ApiHash]: ApiIndexItem
    } = {}
    private packages: ApiIndexPackages = {}

    public static async fetch(): Promise<ApiIndex> {
        const response = await fetch(getApiIndexPath())
        if (response.ok) {
            return ApiIndex.fromJSON(await response.json())
        }
        throw new Error('Error while fetching ApiIndex: ' + response.status)
    }
    public static fromJSON(jsonObj: any): ApiIndex {
        return Object.assign(new ApiIndex(), jsonObj)
    }

    public getApis() {
        return Object.values(this.apis)
    }
    public getApisHash() {
        return Object.keys(this.apis)
    }
    public getApi(apiHash: ApiHash) {
        if (apiHash in this.apis)
            return this.apis[apiHash]
        return null
    }
    public getPackages() {
        return this.packages
    }
    public getPackage(packageName: string) {
        if (packageName in this.packages) {
            return this.packages[packageName]
        } else {
            return {}
        }
    }
    public getApiByName(packageName: string, apiName: string, versionName: string = null) {
        if (packageName in this.packages && apiName in this.packages[packageName]) {
            const apiIndexItem = this.apis[this.packages[packageName][apiName]]
            if (versionName) {
                return this.apis[apiIndexItem.otherVersions[versionName]]
            }
            return apiIndexItem
        } else {
            return null
        }
    }
    public getUniqueApis() {
        const uniqueApisHash: ApiHash[] = []
        for (const packageName in this.packages) {
            for (const apiName in this.packages[packageName]) {
                uniqueApisHash.push(this.packages[packageName][apiName])
            }
        }
        return uniqueApisHash.map(h => this.getApi(h))
    }
    public deleteApiRaw(apiHash: ApiHash) {
        delete this.apis[apiHash]
    }
    public addApi(api: ApiIndexItem) {
        this.apis[api.hash] = api
    }
    public getIndexVersion() {
        return this.indexVersion
    }

    public generateRelationships() {
        const relationships: ApiRelationships = {}
        for (const apiIndexItem of this.getApis()) {
            const apiPath = objectHash(apiIndexItem.packageName + apiIndexItem.apiName)
            const apiVersionPath = objectHash(apiIndexItem.packageName + apiIndexItem.apiName + apiIndexItem.versionName)
            if (!(apiPath in relationships)) {
                relationships[apiPath] = {}
            }
            if (!(apiVersionPath in relationships)) {
                relationships[apiVersionPath] = {}
            }
            if (!(apiIndexItem.versionName in relationships[apiPath])
                || compareFileName(this.getApi(relationships[apiPath][apiIndexItem.versionName]).fileName, apiIndexItem.fileName) > 0) {
                relationships[apiPath][apiIndexItem.versionName] = apiIndexItem.hash
            }
            relationships[apiVersionPath][apiIndexItem.fileName] = apiIndexItem.hash

            if (!(apiIndexItem.packageName in this.packages)) {
                this.packages[apiIndexItem.packageName] = {}
            }
            if (!(apiIndexItem.apiName in this.packages[apiIndexItem.packageName])) {
                this.packages[apiIndexItem.packageName][apiIndexItem.apiName] = apiIndexItem.hash
            } else {
                const currentApiHash = this.packages[apiIndexItem.packageName][apiIndexItem.apiName]
                if (isNewerApiIndexItem(this.apis[currentApiHash], apiIndexItem)) {
                    this.packages[apiIndexItem.packageName][apiIndexItem.apiName] = apiIndexItem.hash
                }
            }
        }

        for (const apiIndexItem of this.getApis()) {
            const apiPath = objectHash(apiIndexItem.packageName + apiIndexItem.apiName)
            const apiVersionPath = objectHash(apiIndexItem.packageName + apiIndexItem.apiName + apiIndexItem.versionName)
            apiIndexItem.otherVersions = relationships[apiPath]
            apiIndexItem.otherFiles = relationships[apiVersionPath]
        }
    }

    public sortRelationship() {
        const sortedApiIndex = new ApiIndex()
        for (const packageName of Object.keys(this.packages).sort()) {
            sortedApiIndex.packages[packageName] = {}
            for (const apiName of Object.keys(this.packages[packageName]).sort()) {
                sortedApiIndex.packages[packageName][apiName] = this.packages[packageName][apiName]
            }
        }
        this.packages = sortedApiIndex.packages

        for (const apiHash of Object.keys(this.apis).sort()) {
            sortedApiIndex.apis[apiHash] = this.apis[apiHash]
            sortedApiIndex.apis[apiHash].otherVersions = Object.fromEntries(
                Object.entries(this.apis[apiHash].otherVersions).sort(([k1], [k2]) => compareVersion(k1, k2))
            )
            sortedApiIndex.apis[apiHash].otherFiles = Object.fromEntries(
                Object.entries(this.apis[apiHash].otherFiles).sort(([k1], [k2]) => compareFileName(k1, k2))
            )
        }
        this.apis = sortedApiIndex.apis
    }
}

export class ApiIndexItem {
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

    public static fromApi(api: Api): ApiIndexItem {
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
}

export interface ApiIndexService {
    path: string
    method: string
    tags: string[]
}

export type ApiHash = string

interface ApiRelationships {
    [path: string]: {
        [key: string]: string
    }
}

function compareVersion(v1: string, v2: string): number {
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

function compareFileName(f1: string, f2: string): number {
    return f1.length - f2.length
}

function isNewerApiIndexItem(currentItem: ApiIndexItem, newItem: ApiIndexItem) {
    return compareVersion(currentItem.versionName, newItem.versionName) > 0 || (
        currentItem.versionName === newItem.versionName && compareFileName(currentItem.fileName, newItem.fileName) > 0
    )
}