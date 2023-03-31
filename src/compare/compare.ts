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
    isBackwardCompatible: boolean
    metadata?: DiffSection
    parameters?: DiffSection
    request?: DiffSection
    responses?: ResponseDiff
}

interface ResponseDiff {
    [statusCode: string]: DiffSection
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

interface DiffSection {
    isBackwardCompatible: boolean
    items: DiffItem[]
}

export interface DiffItem {
    type: DiffType
    path: string
    isBackwardCompatible: boolean
    leftValue?: any
    rightValue?: any
}

export function compareApis(leftApi: Api, rightApi: Api) {
    const apiDiff: ApiDiff = { isBackwardCompatible: true, metadata: [], services: {} }
    apiDiff.metadata = compareMetadata(extractMetadataFromApi(leftApi), extractMetadataFromApi(rightApi)).items

    const rightServices = rightApi.getServices()
    for (const leftService of leftApi.getServices()) {
        const rightServiceIndex = rightServices.findIndex(s => s.getName() === leftService.getName())
        if (rightServiceIndex >= 0) {
            const rightService = rightServices[rightServiceIndex]
            const serviceDiff: ServiceDiff = {
                type: DiffType.MODIFIED,
                isBackwardCompatible: true,
                metadata: { isBackwardCompatible: true, items: [] },
                parameters: { isBackwardCompatible: true, items: [] },
                request: { isBackwardCompatible: true, items: [] },
                responses: {},
            }

            serviceDiff.metadata = compareMetadata(extractMetadataFromService(leftService), extractMetadataFromService(rightService))
            serviceDiff.parameters = compareRequestParameters(leftService.getRequestParameters(), rightService.getRequestParameters())
            serviceDiff.request = compareApiParameters(leftService.getRequest(), rightService.getRequest())
            serviceDiff.responses = compareResponses(leftService.getResponses(), rightService.getResponses())

            if (serviceDiff.metadata.items.length
                || serviceDiff.parameters.items.length
                || serviceDiff.request.items.length
                || Object.keys(serviceDiff.responses).length) {
                serviceDiff.isBackwardCompatible &&= serviceDiff.metadata.isBackwardCompatible
                    && serviceDiff.parameters.isBackwardCompatible
                    && serviceDiff.request.isBackwardCompatible
                    && Object.values(serviceDiff.responses).every(r => r.isBackwardCompatible)
                apiDiff.isBackwardCompatible &&= serviceDiff.isBackwardCompatible
                apiDiff.services[leftService.getName()] = serviceDiff
            }
            rightServices.splice(rightServiceIndex, 1)
        } else {
            apiDiff.isBackwardCompatible = false
            apiDiff.services[leftService.getName()] = {
                type: DiffType.REMOVED,
                isBackwardCompatible: false,
            }
        }
    }
    for (const rightService of rightServices) {
        apiDiff.services[rightService.getName()] = {
            type: DiffType.ADDED,
            isBackwardCompatible: true,
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

function extractMetadataFromApiParameter(apiParameter: ApiParameterDoc) {
    return Object.fromEntries(Object.entries(apiParameter)
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

function compareMetadata(leftDoc: any, rightDoc: any, basePath: string = '', notBackwardCompatiblePaths: string[] = []): DiffSection {
    let diffItems: DiffSection = { isBackwardCompatible: true, items: [] }
    const rightKeys = Object.keys(rightDoc)
    for (const leftKey of Object.keys(leftDoc)) {
        const rightKeysIndex = rightKeys.indexOf(leftKey)
        if (rightKeysIndex >= 0) {
            if (typeof leftDoc[leftKey] === 'object' && typeof rightDoc[leftKey] === 'object') {
                const childDiff = compareMetadata(leftDoc[leftKey], rightDoc[leftKey], getPath(basePath, leftKey, Array.isArray(leftDoc)), notBackwardCompatiblePaths)
                diffItems.isBackwardCompatible &&= childDiff.isBackwardCompatible
                diffItems.items = diffItems.items.concat(childDiff.items)
            } else {
                if (leftDoc[leftKey] !== rightDoc[leftKey]) {
                    const path = getPath(basePath, leftKey, Array.isArray(leftDoc))
                    const isBackwardCompatible = notBackwardCompatiblePaths.indexOf(path) === -1
                    diffItems.isBackwardCompatible &&= isBackwardCompatible
                    diffItems.items.push({
                        path: path,
                        type: DiffType.MODIFIED,
                        leftValue: leftDoc[leftKey],
                        rightValue: rightDoc[leftKey],
                        isBackwardCompatible: isBackwardCompatible,
                    })
                }
            }
            rightKeys.splice(rightKeysIndex, 1)
        } else {
            const path = getPath(basePath, leftKey, Array.isArray(leftDoc))
            const isBackwardCompatible = notBackwardCompatiblePaths.indexOf(path) === -1
            diffItems.isBackwardCompatible &&= isBackwardCompatible
            diffItems.items.push({
                path: path,
                type: DiffType.REMOVED,
                leftValue: leftDoc[leftKey],
                isBackwardCompatible: isBackwardCompatible,
            })
        }
    }
    for (const rightKey of rightKeys) {
        const path = getPath(basePath, rightKey, Array.isArray(rightDoc))
        const isBackwardCompatible = notBackwardCompatiblePaths.indexOf(path) === -1
        diffItems.isBackwardCompatible &&= isBackwardCompatible
        diffItems.items.push({
            path: path,
            type: DiffType.ADDED,
            rightValue: rightDoc[rightKey],
            isBackwardCompatible: isBackwardCompatible,
        })
    }
    return diffItems
}


function compareRequestParameters(leftRequestParameters: ApiParameterDoc[], rightRequestParameters: ApiParameterDoc[]): DiffSection {
    let diffItems: DiffSection = { isBackwardCompatible: true, items: [] }
    const rightRequestParametersIndexes = Object.keys(rightRequestParameters).map(x => parseInt(x))
    for (const leftRequestParameter of leftRequestParameters) {
        const rightRequestParameterIndex = rightRequestParameters.findIndex(p => p.name === leftRequestParameter.name && p.in === leftRequestParameter.in)
        if (rightRequestParameterIndex >= 0) {
            const rightRequestParameter = rightRequestParameters[rightRequestParameterIndex]
            const childDiff = compareApiParameters(leftRequestParameter, rightRequestParameter)
            diffItems.isBackwardCompatible &&= childDiff.isBackwardCompatible
            diffItems.items = diffItems.items.concat(childDiff.items)
            rightRequestParametersIndexes.splice(rightRequestParametersIndexes.indexOf(rightRequestParameterIndex), 1)
        } else {
            diffItems.isBackwardCompatible = false
            diffItems.items.push({
                path: leftRequestParameter["x-path"],
                type: DiffType.REMOVED,
                leftValue: leftRequestParameter,
                isBackwardCompatible: false,
            })
        }
    }
    for (const rightRequestParametersIndex of rightRequestParametersIndexes) {
        const param: ApiParameterDoc = rightRequestParameters[rightRequestParametersIndex]
        diffItems.items.push({
            path: param["x-path"],
            type: DiffType.ADDED,
            rightValue: param,
            isBackwardCompatible: true,
        })
    }
    return diffItems
}

function compareApiParameters(leftParameter: ApiParameterDoc, rightParameter: ApiParameterDoc): DiffSection {
    let diffItems: DiffSection = { isBackwardCompatible: true, items: [] }
    if (!leftParameter && !rightParameter) {
        return diffItems
    }
    if (!leftParameter && rightParameter) {
        return {
            items: [{
                path: rightParameter["x-path"],
                type: DiffType.ADDED,
                rightValue: rightParameter,
                isBackwardCompatible: true,
            }],
            isBackwardCompatible: true,
        }
    }
    if (leftParameter && !rightParameter) {
        return {
            items: [{
                path: leftParameter["x-path"],
                type: DiffType.REMOVED,
                rightValue: leftParameter,
                isBackwardCompatible: false,
            }],
            isBackwardCompatible: false,
        }
    }
    const notBackwardCompatiblePaths: string[] = ['in', 'name', 'type', 'required', 'schema']
    const metadataDiff = compareMetadata(extractMetadataFromApiParameter(leftParameter), extractMetadataFromApiParameter(rightParameter), leftParameter["x-path"], notBackwardCompatiblePaths)
    const modelDiff = compareModels(leftParameter.schema, rightParameter.schema, leftParameter["x-path"])
    diffItems.isBackwardCompatible &&= metadataDiff.isBackwardCompatible && modelDiff.isBackwardCompatible
    diffItems.items = diffItems.items.concat(metadataDiff.items, modelDiff.items)
    return diffItems
}

function compareResponses(leftResponses: ApiParameterDocMap, rightResponses: ApiParameterDocMap): ResponseDiff {
    const diffItems: ResponseDiff = {}
    const rightResponsesStatusCode = Object.keys(rightResponses)
    for (const leftResponseStatusCode of Object.keys(leftResponses)) {
        const leftResponse = leftResponses[leftResponseStatusCode]
        const rightResponseStatusCodeIndex = rightResponsesStatusCode.indexOf(leftResponseStatusCode)
        if (rightResponseStatusCodeIndex >= 0) {
            const rightResponse = rightResponses[leftResponseStatusCode]
            const childDiff = compareApiParameters(leftResponse, rightResponse)
            if (childDiff.items.length) {
                diffItems[leftResponseStatusCode] = childDiff
            }
            rightResponsesStatusCode.splice(rightResponseStatusCodeIndex, 1)
        } else {
            diffItems[leftResponseStatusCode] = {
                items: [{
                    path: leftResponse["x-path"],
                    type: DiffType.REMOVED,
                    rightValue: leftResponse,
                    isBackwardCompatible: false,
                }],
                isBackwardCompatible: false,
            }
        }
    }
    for (const rightResponseStatusCode of rightResponsesStatusCode) {
        const rightResponse = rightResponses[rightResponseStatusCode]
        diffItems[rightResponseStatusCode] = {
            items: [{
                path: rightResponse["x-path"],
                type: DiffType.ADDED,
                rightValue: rightResponse,
                isBackwardCompatible: true,
            }],
            isBackwardCompatible: true,
        }
    }
    return diffItems
}

function compareModels(leftModel: ApiModelDoc, rightModel: ApiModelDoc, basePath: string): DiffSection {
    const diffItems: DiffSection = { isBackwardCompatible: true, items: [] }
    return diffItems
}