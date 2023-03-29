import type { Api } from "common/api/api"

export interface ApiDiff {
    isBackwardCompatible: boolean
    metadata: DiffItem[]
    services: {
        [serviceName: string]: {
            type: DiffType
            metadata?: DiffItem[]
            parameters?: DiffItem[]
            request?: DiffItem[]
            responses?: {
                [statusCode: string]: DiffItem[]
            }
        }
    }
}

export enum DiffType {
    ADDED = 'Added',
    REMOVED = 'Removed',
    MODIFIED = 'Modified',
}

export const diffTypeColor: { [type: string]: string } = {
    [DiffType.ADDED]:'is-success',
    [DiffType.MODIFIED]:'is-warning',
    [DiffType.REMOVED]:'is-danger',
};

export interface DiffItem {
    type: DiffType
    path: string
    isBackwardCompatible: boolean
    leftValue?: any
    rightValue?: any
}

const KEYS_NOT_METADATA = ['paths', 'definitions', 'responses', 'parameters', 'components']

export function compareApis(leftApi: Api, rightApi: Api) {
    const apiDiff: ApiDiff = { isBackwardCompatible: true, metadata: [], services: {} }
    apiDiff.metadata = compareMetadata(extractMetadataFromApi(leftApi), extractMetadataFromApi(rightApi))

    const rightServices = rightApi.getServices()
    for (const leftService of leftApi.getServices()) {
        const rightServiceIndex = rightServices.findIndex(s => s.getName() === leftService.getName())
        if (rightServiceIndex >= 0) {
            rightServices.splice(rightServiceIndex, 1)
        } else {
            apiDiff.isBackwardCompatible = false
            apiDiff.services[leftService.getName()] = {
                type: DiffType.REMOVED,
            }
        }
    }
    for (const rightService of rightServices) {
        apiDiff.services[rightService.getName()] = {
            type: DiffType.ADDED,
        }
    }

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
            if (typeof leftDoc[leftKey] === 'object' && typeof rightDoc[leftKey] === 'object') {
                diffItems = diffItems.concat(compareMetadata(leftDoc[leftKey], rightDoc[leftKey], getPath(path, leftKey, Array.isArray(leftDoc))))
            } else {
                if (leftDoc[leftKey] !== rightDoc[leftKey]) {
                    diffItems.push({
                        path: getPath(path, leftKey, Array.isArray(leftDoc)),
                        type: DiffType.MODIFIED,
                        leftValue: leftDoc[leftKey],
                        rightValue: rightDoc[leftKey],
                        isBackwardCompatible: true,
                    })
                }
            }
            rightKeys.splice(rightKeysIndex, 1)
        } else {
            diffItems.push({
                path: getPath(path, leftKey, Array.isArray(leftDoc)),
                type: DiffType.REMOVED,
                leftValue: leftDoc[leftKey],
                isBackwardCompatible: true,
            })
        }
    }
    for (const rightKey of rightKeys) {
        diffItems.push({
            path: getPath(path, rightKey, Array.isArray(rightDoc)),
            type: DiffType.ADDED,
            rightValue: rightDoc[rightKey],
            isBackwardCompatible: true,
        })
    }
    return diffItems
}
