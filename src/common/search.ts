import Fuse from 'fuse.js'
import type { ApiIndexFlat, ApiSummary, ApiSummaryFlat } from './api/apiIndex'
import type { ServiceTags } from 'cli/buildConfig'

const searchOptions: Fuse.IFuseOptions<ApiSummaryFlat> = {
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
let fuse: Fuse<ApiSummaryFlat> = null

export type SearchResult = Fuse.FuseResult<ApiSummaryFlat>
export type SearchMatch = Fuse.FuseResultMatch;

export function initializeSearch(apiIndexFlat: ApiIndexFlat) {
    fuse = new Fuse(apiIndexFlat, searchOptions)
}

export function searchInApiIndexFlat(searchText: string): SearchResult[] {
    if (fuse) {
        return fuse.search(searchText)
    } else {
        return []
    }
}

export function tagsMatchFilters(tags: ServiceTags, filters: ServiceTags): boolean {
    for (const sectionName in filters) {
        for (const categoryName in filters[sectionName]) {
            for (const propertyName in filters[sectionName][categoryName]) {
                if (filters[sectionName][categoryName][propertyName]) {
                    const matchingTagsPosition = tags?.[sectionName]?.[categoryName]?.[propertyName] || false
                    if (!matchingTagsPosition) {
                        return false
                    }
                }
            }
        }
    }
    return true
}

export function apiSummaryMatchFilters(apiSummary: ApiSummary, filters: ServiceTags, version: string = null): boolean {
    const versions = version ? [version] : Object.keys(apiSummary)
    for (const versionName of versions) {
        for (const fileName in apiSummary[versionName]) {
            if (tagsMatchFilters(apiSummary[versionName][fileName].tags, filters)) {
                return true
            }
        }
    }
    return false
}