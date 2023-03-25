import { getApiSummaryToFlat, type ApiIndex, type ApiSummaryFlat } from "./api/apiIndex"

export interface LimitedSearchResults {
    list: ApiSummaryFlat[]
    isLast: boolean
}

function escapeRegExp(str: string) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export function fuzzySearchMatch(searchText: string, item: string) {
    let keyRegex = ''
    for (const c of searchText) {
        keyRegex += `.*${escapeRegExp(c)}.*`
    }
    return item.match(new RegExp(keyRegex, 'i'))
}

export function filterApiIndex(apiIndex: ApiIndex, searchText: string) {
    const apiIndexFiltered: ApiIndex = {}
    for (const packageName in apiIndex) {
        for (const apiName in apiIndex[packageName]) {
            if (fuzzySearchMatch(searchText, packageName + apiName)) {
                if (!(packageName in apiIndexFiltered)) {
                    apiIndexFiltered[packageName] = {}
                }
                apiIndexFiltered[packageName][apiName] = apiIndex[packageName][apiName]
            }
        }
    }
    return apiIndexFiltered
}

export function searchInApiIndex(apiIndex: ApiIndex, searchText: string, limit: number = -1): LimitedSearchResults {
    const results: LimitedSearchResults = { list: [], isLast: true }
    for (const packageName in apiIndex) {
        for (const apiName in apiIndex[packageName]) {
            if (fuzzySearchMatch(searchText, packageName + apiName)) {
                results.list.push(getApiSummaryToFlat(packageName, apiName, apiIndex[packageName][apiName]))
                if (limit > 0 && results.list.length === limit) {
                    results.isLast = false
                    return results
                }
            }
        }
    }
    return results
}