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

export interface DiffItem {
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

function getPath(basePath: string, key: string, isArray: boolean): string {
    if (isArray) {
        return `${basePath}[${key}]`
    } else {
        return `${basePath}/${key}`
    }
}

function compareMetadata(leftDoc: any, rightDoc: any, path: string = ''): DiffItem[] {
    let diffItems: DiffItem[] = []
    const rightKeys = Object.keys(rightDoc)
    for (const leftKey of Object.keys(leftDoc)) {
        const rightKeysIndex = rightKeys.indexOf(leftKey)
        if (rightKeysIndex >= 0) {
            rightKeys.splice(rightKeysIndex, 1)
            if (typeof leftDoc[leftKey] === 'object' && typeof rightDoc[leftKey] === 'object') {
                diffItems = diffItems.concat(compareMetadata(leftDoc[leftKey], rightDoc[leftKey], getPath(path, leftKey, Array.isArray(leftDoc))))
            } else {
                if (leftDoc[leftKey] !== rightDoc[leftKey]) {
                    diffItems.push({
                        path: getPath(path, leftKey, Array.isArray(leftDoc)),
                        type: DiffType.MODIFIED,
                        leftValue: leftDoc[leftKey],
                        rightValue: rightDoc[leftKey],
                    })
                }
            }
        } else {
            diffItems.push({
                path: getPath(path, leftKey, Array.isArray(leftDoc)),
                type: DiffType.REMOVED,
                leftValue: leftDoc[leftKey],
            })
        }
    }
    for (const rightKey of rightKeys) {
        diffItems.push({
            path: getPath(path, rightKey, Array.isArray(rightDoc)),
            type: DiffType.ADDED,
            rightValue: rightDoc[rightKey],
        })
    }
    return diffItems
}
