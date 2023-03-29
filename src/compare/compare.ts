import type { Api, ApiParameterDoc, ApiParameterDocMap, ApiService } from "common/api/api"
import type { ApiModelDoc } from "common/api/apiModel"

export interface ApiDiff {
    isBackwardCompatible: boolean
    metadata: DiffItem[]
    services: {
        [serviceName: string]: ServiceDiff
    }
}

interface ServiceDiff {
    type: DiffType
    metadata?: DiffItem[]
    parameters?: DiffItem[]
    request?: DiffItem[]
    responses?: ResponseDiff
}

interface ResponseDiff {
    [statusCode: string]: DiffItem[]
}

export enum DiffType {
    ADDED = 'Added',
    REMOVED = 'Removed',
    MODIFIED = 'Modified',
}

export const diffTypeColor: { [type: string]: string } = {
    [DiffType.ADDED]: 'is-success',
    [DiffType.MODIFIED]: 'is-warning',
    [DiffType.REMOVED]: 'is-danger',
};

export interface DiffItem {
    type: DiffType
    path: string
    isBackwardCompatible: boolean
    leftValue?: any
    rightValue?: any
}

export function compareApis(leftApi: Api, rightApi: Api) {
    const apiDiff: ApiDiff = { isBackwardCompatible: true, metadata: [], services: {} }
    apiDiff.metadata = compareMetadata(extractMetadataFromApi(leftApi), extractMetadataFromApi(rightApi))

    const rightServices = rightApi.getServices()
    for (const leftService of leftApi.getServices()) {
        const rightServiceIndex = rightServices.findIndex(s => s.getName() === leftService.getName())
        if (rightServiceIndex >= 0) {
            const rightService = rightServices[rightServiceIndex]
            const serviceDiff: ServiceDiff = {
                type: DiffType.MODIFIED,
                metadata: [], parameters: [], request: [], responses: {},
            }
            // console.log(leftService.getName())
            serviceDiff.metadata = compareMetadata(extractMetadataFromService(leftService), extractMetadataFromService(rightService))
            serviceDiff.parameters = compareRequestParameters(leftService.getRequestParameters(), rightService.getRequestParameters())
            serviceDiff.request = compareApiParameters(leftService.getRequest(), rightService.getRequest(), 'Request body')
            serviceDiff.responses = compareResponses(leftService.getResponses(), rightService.getResponses())

            if (serviceDiff.metadata.length || serviceDiff.parameters.length || serviceDiff.request.length || Object.keys(serviceDiff.responses).length) {
                apiDiff.isBackwardCompatible &&= serviceDiff.metadata.every(i => i.isBackwardCompatible)
                    && serviceDiff.parameters.every(i => i.isBackwardCompatible)
                    && serviceDiff.request.every(i => i.isBackwardCompatible)
                    && Object.values(serviceDiff.responses).every(r => r.every(i => i.isBackwardCompatible))
                apiDiff.services[leftService.getName()] = serviceDiff
            }
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
    return Object.fromEntries(Object.entries(api.toJson())
        .filter(([key, _]) => ['paths', 'definitions', 'responses', 'parameters', 'components'].indexOf(key) === -1)
    )
}

function extractMetadataFromService(service: ApiService) {
    return Object.fromEntries(Object.entries(service.toJson())
        .filter(([key, _]) => ['parameters', 'responses', 'requestBody'].indexOf(key) === -1)
    )
}

function extractMetadataFromApiParameter(service: ApiParameterDoc) {
    return Object.fromEntries(Object.entries(service)
        .filter(([key, _]) => ['schema'].indexOf(key) === -1)
    )
}

function getPath(basePath: string, key: string, isArray: boolean): string {
    if (isArray) {
        return `${basePath}[${key}]`
    } else {
        return `${basePath}/${key}`
    }
}

function compareMetadata(leftDoc: any, rightDoc: any, basePath: string = '', notBackwardCompatiblePaths: string[] = []): DiffItem[] {
    let diffItems: DiffItem[] = []
    const rightKeys = Object.keys(rightDoc)
    for (const leftKey of Object.keys(leftDoc)) {
        const rightKeysIndex = rightKeys.indexOf(leftKey)
        if (rightKeysIndex >= 0) {
            if (typeof leftDoc[leftKey] === 'object' && typeof rightDoc[leftKey] === 'object') {
                diffItems = diffItems.concat(compareMetadata(leftDoc[leftKey], rightDoc[leftKey], getPath(basePath, leftKey, Array.isArray(leftDoc)), notBackwardCompatiblePaths))
            } else {
                if (leftDoc[leftKey] !== rightDoc[leftKey]) {
                    const path = getPath(basePath, leftKey, Array.isArray(leftDoc))
                    diffItems.push({
                        path: path,
                        type: DiffType.MODIFIED,
                        leftValue: leftDoc[leftKey],
                        rightValue: rightDoc[leftKey],
                        isBackwardCompatible: notBackwardCompatiblePaths.indexOf(path) === -1,
                    })
                }
            }
            rightKeys.splice(rightKeysIndex, 1)
        } else {
            const path = getPath(basePath, leftKey, Array.isArray(leftDoc))
            diffItems.push({
                path: path,
                type: DiffType.REMOVED,
                leftValue: leftDoc[leftKey],
                isBackwardCompatible: notBackwardCompatiblePaths.indexOf(path) === -1,
            })
        }
    }
    for (const rightKey of rightKeys) {
        const path = getPath(basePath, rightKey, Array.isArray(rightDoc))
        diffItems.push({
            path: path,
            type: DiffType.ADDED,
            rightValue: rightDoc[rightKey],
            isBackwardCompatible: notBackwardCompatiblePaths.indexOf(path) === -1,
        })
    }
    return diffItems
}


function compareRequestParameters(leftRequestParameters: ApiParameterDoc[], rightRequestParameters: ApiParameterDoc[]): DiffItem[] {
    let diffItems: DiffItem[] = []
    const rightRequestParametersIndexes = Object.keys(rightRequestParameters).map(x => parseInt(x))
    for (const leftRequestParameter of leftRequestParameters) {
        const rightRequestParameterIndex = rightRequestParameters.findIndex(p => p.name === leftRequestParameter.name && p.in === leftRequestParameter.in)
        if (rightRequestParameterIndex >= 0) {
            const rightRequestParameter = rightRequestParameters[rightRequestParameterIndex]
            diffItems = diffItems.concat(compareApiParameters(leftRequestParameter, rightRequestParameter, `${leftRequestParameter.name} [${leftRequestParameter.in}]`))
            rightRequestParametersIndexes.splice(rightRequestParametersIndexes.indexOf(rightRequestParameterIndex), 1)
        } else {
            diffItems.push({
                path: `${leftRequestParameter.name} [${leftRequestParameter.in}]`,
                type: DiffType.REMOVED,
                leftValue: leftRequestParameter,
                isBackwardCompatible: false,
            })
        }
    }
    for (const rightRequestParametersIndex of rightRequestParametersIndexes) {
        const param: ApiParameterDoc = rightRequestParameters[rightRequestParametersIndex]
        diffItems.push({
            path: `${param.name} [${param.in}]`,
            type: DiffType.ADDED,
            rightValue: param,
            isBackwardCompatible: true,
        })
    }
    return diffItems
}

function compareApiParameters(leftParameter: ApiParameterDoc, rightParameter: ApiParameterDoc, basePath: string): DiffItem[] {
    let diffItems: DiffItem[] = []
    if (!leftParameter && rightParameter) {
        return [{
            path: basePath,
            type: DiffType.ADDED,
            rightValue: rightParameter,
            isBackwardCompatible: true,
        }]
    }
    if (leftParameter && !rightParameter) {
        return [{
            path: basePath,
            type: DiffType.REMOVED,
            rightValue: leftParameter,
            isBackwardCompatible: false,
        }]
    }
    const notBackwardCompatiblePaths: string[] = ['in', 'name', 'type', 'required', 'schema']
    diffItems = diffItems.concat(compareMetadata(extractMetadataFromApiParameter(leftParameter), extractMetadataFromApiParameter(rightParameter), basePath, notBackwardCompatiblePaths))
    diffItems = diffItems.concat(compareModels(leftParameter.schema, rightParameter.schema, basePath))
    return diffItems
}

function compareResponses(leftResponses: ApiParameterDocMap, rightResponses: ApiParameterDocMap): ResponseDiff {
    const diffItems: ResponseDiff = {}
    return diffItems
}

function compareModels(leftModel: ApiModelDoc, rightModel: ApiModelDoc, basePath: string): DiffItem[] {
    const diffItems: DiffItem[] = []
    return diffItems
}