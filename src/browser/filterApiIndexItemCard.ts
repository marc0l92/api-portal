import { getBasePath } from '../common/globals'
import type { ServiceTags } from '../cli/buildConfig'
import type { ApiIndex, ApiIndexItem } from '../common/api/apiIndex'
import { isApiIndexItemMatchingFilters } from '../common/search'

export interface ApiIndexItemCardData {
    headerHref: string
    versions: { name: string, href: string, cssClass: string }[]
}

function getWorstStateForVersion(apiIndex: ApiIndex, apiHash: string): string {
    const apiIndexItemOfVersion = apiIndex.getApi(apiHash)
    const maxStatus = Object.values(apiIndexItemOfVersion.otherFiles)
        .map((otherFileApiHash) => apiIndex.getApi(otherFileApiHash).status)
        .reduce((prev, curr) => Math.max(prev, curr))
    return `status-${maxStatus}`
}

export function buildCardData(apiIndex: ApiIndex, apiIndexItem: ApiIndexItem, filters: ServiceTags | null): ApiIndexItemCardData {
    let cardData: ApiIndexItemCardData = null
    const viewerBasePath = getBasePath() + '/viewer.html'
    if (filters === null || isApiIndexItemMatchingFilters(apiIndexItem, filters)) {
        cardData = {
            headerHref: `${viewerBasePath}?packageName=${apiIndexItem.packageName}&apiName=${apiIndexItem.apiName}`,
            versions: []
        }
    }
    for (const versionName in apiIndexItem.otherVersions) {
        const otherVersionApi = apiIndex.getApi(apiIndexItem.otherVersions[versionName])
        if (filters === null || isApiIndexItemMatchingFilters(otherVersionApi, filters)) {
            const apiHref = `${viewerBasePath}?packageName=${apiIndexItem.packageName}&apiName=${apiIndexItem.apiName}&versionName=${versionName}`
            if (cardData === null) {
                cardData = {
                    headerHref: apiHref,
                    versions: []
                }
            }
            cardData.versions.push({
                name: versionName,
                href: apiHref,
                cssClass: getWorstStateForVersion(apiIndex, otherVersionApi.hash),
            })
        } else {
            for (const otherFileHash of Object.values(otherVersionApi.otherFiles)) {
                if (otherFileHash !== otherVersionApi.hash) {
                    if (filters === null || isApiIndexItemMatchingFilters(apiIndex.getApi(otherFileHash), filters)) {
                        const apiHref = `${viewerBasePath}?api=${otherFileHash}`
                        if (cardData === null) {
                            cardData = {
                                headerHref: apiHref,
                                versions: []
                            }
                        }
                        cardData.versions.push({
                            name: versionName,
                            href: apiHref,
                            cssClass: getWorstStateForVersion(apiIndex, otherVersionApi.hash),
                        })
                    }
                }
            }
        }
    }
    return cardData
}