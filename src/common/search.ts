import Fuse from 'fuse.js'
import type { ApiIndexFlat, ApiSummaryFlat } from './api/apiIndex'

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