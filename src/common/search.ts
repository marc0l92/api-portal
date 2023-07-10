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
            if (!isApiIndexItemMatchingFilters(apiIndex.getApiByName(packageName, apiName), filters)) {
                delete filteredPackages[packageName][apiName]
            }
        }
        if (Object.keys(filteredPackages[packageName]).length === 0) {
            delete filteredPackages[packageName]
        }
    }
    return filteredPackages
}

export function isApiIndexItemMatchingFilters(apiIndexItem: ApiIndexItem, filters: ServiceTags): boolean {
    for (const sectionName in filters) {
        for (const categoryName in filters[sectionName]) {
            for (const propertyName in filters[sectionName][categoryName]) {
                if (filters[sectionName][categoryName][propertyName]) {
                    const tagPath = sectionName + '/' + categoryName + '/' + propertyName
                    const tagPosition = apiIndexItem.tags.indexOf(tagPath)
                    if (tagPosition === -1) {
                        return false
                    }
                }
            }
        }
    }
    return true
}