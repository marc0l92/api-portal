import type { Api } from "common/api/api"

export interface ApiDiff {
    metadata: DiffItem[]
    services: {
        [serviceName: string]: DiffItem[]
    }
}

export enum DiffType {
    ADDED,
    REMOVED,
    MODIFIED,
}

interface DiffItem {
    type: DiffType
    path: string
    leftValue?: any
    rightValue?: any
}

const KEYS_NOT_METADATA = ['paths', 'definitions', 'responses', 'parameters', 'components']

export function compareApis(leftApi: Api, rightApi: Api) {
    const apiDiff: ApiDiff = { metadata: [], services: {} }
    apiDiff.metadata = compareMetadata(extractMetadataFromApi(leftApi), extractMetadataFromApi(rightApi))
    return apiDiff
}

function extractMetadataFromApi(api: Api) {
    return Object.fromEntries(Object.entries(api.toJson()).filter(([key, _]) => KEYS_NOT_METADATA.indexOf(key) === -1))
}

function compareMetadata(leftDoc: any, rightDoc: any, path: string = '/'): DiffItem[] {
    let diffItems: DiffItem[] = []
    const rightKeys = Object.keys(rightDoc)
    for (const leftKey of Object.keys(leftDoc)) {
        const rightKeysIndex = rightKeys.indexOf(leftKey)
        if (rightKeysIndex >= 0) {
            rightKeys.splice(rightKeysIndex, 1)
            if (typeof leftDoc[leftKey] === 'object' && typeof rightDoc[leftKey] === 'object') {
                diffItems = diffItems.concat(compareMetadata(leftDoc[leftKey], rightDoc[leftKey], path + leftKey + '/'))
            } else {
                if (leftDoc[leftKey] !== rightDoc[leftKey]) {
                    diffItems.push({
                        path: `${path}${leftKey}`,
                        type: DiffType.MODIFIED,
                        leftValue: leftDoc[leftKey],
                        rightValue: rightDoc[leftKey],
                    })
                }
            }
        } else {
            diffItems.push({
                path: `${path}${leftKey}`,
                type: DiffType.REMOVED,
                leftValue: leftDoc[leftKey],
            })
        }
    }
    for (const rightKey of rightKeys) {
        diffItems.push({
            path: `${path}${rightKey}`,
            type: DiffType.ADDED,
            rightValue: rightDoc[rightKey],
        })
    }
    return diffItems
}
