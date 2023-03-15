import type { ApiIndex } from "./api/apiIndex"

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