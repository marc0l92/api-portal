import Fuse from 'fuse.js'
import type { ServiceTags } from '../cli/buildConfig'
import type { ApiIndex, ApiIndexItem } from './api/apiIndex'

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

export function initializeSearch(apiIndex: ApiIndex) {
    fuse = new Fuse(Object.values(apiIndex.getUniqueApis()), searchOptions)
}

export function searchInApiIndexFlat(searchText: string): SearchResult[] {
    if (fuse) {
        return fuse.search(searchText)
    } else {
        return []
    }
}

export function apiIndexItemMatchFilters(apiIndexItem: ApiIndexItem, filters: ServiceTags): boolean {
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