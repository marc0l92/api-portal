import Fuse from 'fuse.js'
import type { ServiceTags } from '../cli/buildConfig'
import type { ApiIndex, ApiIndexItem, ApiIndexPackages } from './api/apiIndex'

const searchOptions: Fuse.IFuseOptions<ApiIndexItem> = {
    includeMatches: true,
    ignoreLocation: false,
    threshold: 0.4,
    minMatchCharLength: 2,
    keys: [
        'packageName',
        'apiName',
        'versionName',
        'fileName',
        {
            name: 'uri',
            getFn: (apiIndexItem: ApiIndexItem) => (apiIndexItem.services.map(s => s.path)),
        },
    ],
}
let fuse: Fuse<ApiIndexItem> = null

export type SearchResult = Fuse.FuseResult<ApiIndexItem>
export type SearchMatch = Fuse.FuseResultMatch;

export function initializeApiSearch(apiIndex: ApiIndex) {
    fuse = new Fuse(Object.values(apiIndex.getUniqueApis()), searchOptions)
}

export function getApiSearchResults(searchText: string): SearchResult[] {
    if (fuse) {
        return fuse.search(searchText)
    } else {
        return []
    }
}

export function filterSearchResults(searchResults: SearchResult[], filters: ServiceTags): SearchResult[] {
    return searchResults.filter(r => isApiIndexItemMatchingFilters(r.item, filters))
}

export function filterApiIndexPackages(apiIndex: ApiIndex, filters: ServiceTags): ApiIndexPackages {
    const filteredPackages = JSON.parse(JSON.stringify(apiIndex.getPackages()))
    for (const packageName in apiIndex.getPackages()) {
        for (const apiName in apiIndex.getPackage(packageName)) {
            if (!isApiIndexItemMatchingFiltersDeep(apiIndex, apiIndex.getApiByName(packageName, apiName), filters)) {
                delete filteredPackages[packageName][apiName]
            }
        }
        if (Object.keys(filteredPackages[packageName]).length === 0) {
            delete filteredPackages[packageName]
        }
    }
    return filteredPackages
}

function isApiIndexItemMatchingFiltersDeep(apiIndex: ApiIndex, apiIndexItem: ApiIndexItem, filters: ServiceTags): boolean {
    const checkedApiHashMap: { [apiHash: string]: boolean } = {}
    if (isApiIndexItemMatchingFilters(apiIndexItem, filters)) {
        return true
    }
    checkedApiHashMap[apiIndexItem.hash] = true
    for (const otherFileHash of Object.values(apiIndexItem.otherFiles)) {
        if (!(otherFileHash in checkedApiHashMap)) {
            if (isApiIndexItemMatchingFilters(apiIndex.getApi(otherFileHash), filters)) {
                return true
            }
            checkedApiHashMap[otherFileHash] = true
        }
    }
    for (const versionHash of Object.values(apiIndexItem.otherVersions)) {
        if (!(versionHash in checkedApiHashMap)) {
            if (isApiIndexItemMatchingFilters(apiIndex.getApi(versionHash), filters)) {
                return true
            }
            checkedApiHashMap[versionHash] = true
            for (const otherFileHash of Object.values(apiIndexItem.otherFiles)) {
                if (otherFileHash !== apiIndexItem.hash) {
                    if (isApiIndexItemMatchingFilters(apiIndex.getApi(otherFileHash), filters)) {
                        return true
                    }
                    checkedApiHashMap[otherFileHash] = true
                }
            }
        }
    }
    return false
}

export function isApiIndexItemMatchingFilters(apiIndexItem: ApiIndexItem, filters: ServiceTags): boolean {
    for (const sectionName in filters) {
        for (const categoryName in filters[sectionName]) {
            const propertyLevelFilters = []
            for (const propertyName in filters[sectionName][categoryName]) {
                if (filters[sectionName][categoryName][propertyName]) {
                    const tagPath = sectionName + '/' + categoryName + '/' + propertyName
                    propertyLevelFilters.push(tagPath)
                }
            }
            if (propertyLevelFilters.length > 0 && propertyLevelFilters.every(tagPath => apiIndexItem.tags.indexOf(tagPath) === -1)) {
                return false
            }
        }
    }
    return true
}