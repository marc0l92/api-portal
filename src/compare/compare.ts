import type { Api, ApiParameterDoc, ApiParameterDocMap, ApiService } from "common/api/api"
import type { ApiModelDoc } from "common/api/apiModel"
import { DiffType, type ApiDiff, type ServiceDiff, type DiffSection, type ResponseDiff, type ApiModelDocDiff, DiffDirection, type DiffItem, ApiModelDocMetadata } from "./compareInterfaces"
import { ApiModelBackwardCompatibility, ApiModelPropertiesBackwardCompatibility } from "./backwardCompatibility"

export function compareApis(leftApi: Api, rightApi: Api) {
    const apiDiff: ApiDiff = { isBackwardCompatible: true, metadata: [], services: {} }
    apiDiff.metadata = compareMetadata(extractMetadataFromApi(leftApi), extractMetadataFromApi(rightApi)).items

    const rightServices = rightApi.getServices()
    for (const leftService of leftApi.getServices()) {
        const rightServiceIndex = rightServices.findIndex(s => s.getName() === leftService.getName())
        if (rightServiceIndex >= 0) {
            const rightService = rightServices[rightServiceIndex]
            const serviceDiff: ServiceDiff = {
                diffType: DiffType.MODIFIED,
                isBackwardCompatible: true,
                metadata: { isBackwardCompatible: true, items: [] },
                parameters: { isBackwardCompatible: true, items: [] },
                request: { isBackwardCompatible: true, items: [] },
                responses: {},
            }

            serviceDiff.metadata = compareMetadata(extractMetadataFromService(leftService), extractMetadataFromService(rightService))
            serviceDiff.parameters = compareRequestParameters(leftService.getRequestParameters(), rightService.getRequestParameters())
            serviceDiff.request = compareApiParameters(leftService.getRequest(), rightService.getRequest(), DiffDirection.REQUEST)
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
                diffType: DiffType.REMOVED,
                isBackwardCompatible: false,
            }
        }
    }
    for (const rightService of rightServices) {
        apiDiff.services[rightService.getName()] = {
            diffType: DiffType.ADDED,
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

function getDiffType(leftValue: any, rightValue: any): DiffType {
    if (leftValue === null || leftValue === undefined) {
        return DiffType.ADDED
    }
    if (rightValue === null || rightValue === undefined) {
        return DiffType.REMOVED
    }
    return leftValue === rightValue ? DiffType.NO_CHANGES : DiffType.MODIFIED
}

function compareMetadata(leftDoc: any, rightDoc: any, basePath: string = '', notBackwardCompatiblePaths: string[] = []): DiffSection {
    let diffSection: DiffSection = { isBackwardCompatible: true, items: [] }
    const rightKeys = Object.keys(rightDoc)
    for (const leftKey of Object.keys(leftDoc)) {
        const rightKeysIndex = rightKeys.indexOf(leftKey)
        if (rightKeysIndex >= 0) {
            if (typeof leftDoc[leftKey] === 'object' && typeof rightDoc[leftKey] === 'object') {
                const childDiff = compareMetadata(leftDoc[leftKey], rightDoc[leftKey], getPath(basePath, leftKey, Array.isArray(leftDoc)), notBackwardCompatiblePaths)
                diffSection.isBackwardCompatible &&= childDiff.isBackwardCompatible
                diffSection.items = diffSection.items.concat(childDiff.items)
            } else {
                if (leftDoc[leftKey] !== rightDoc[leftKey]) {
                    const path = getPath(basePath, leftKey, Array.isArray(leftDoc))
                    const isBackwardCompatible = notBackwardCompatiblePaths.indexOf(path) === -1
                    diffSection.isBackwardCompatible &&= isBackwardCompatible
                    diffSection.items.push({
                        path: path,
                        diffType: DiffType.MODIFIED,
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
            diffSection.isBackwardCompatible &&= isBackwardCompatible
            diffSection.items.push({
                path: path,
                diffType: DiffType.REMOVED,
                leftValue: leftDoc[leftKey],
                isBackwardCompatible: isBackwardCompatible,
            })
        }
    }
    for (const rightKey of rightKeys) {
        const path = getPath(basePath, rightKey, Array.isArray(rightDoc))
        const isBackwardCompatible = notBackwardCompatiblePaths.indexOf(path) === -1
        diffSection.isBackwardCompatible &&= isBackwardCompatible
        diffSection.items.push({
            path: path,
            diffType: DiffType.ADDED,
            rightValue: rightDoc[rightKey],
            isBackwardCompatible: isBackwardCompatible,
        })
    }
    return diffSection
}


function compareRequestParameters(leftRequestParameters: ApiParameterDoc[], rightRequestParameters: ApiParameterDoc[]): DiffSection {
    let diffSection: DiffSection = { isBackwardCompatible: true, items: [] }
    const rightRequestParametersIndexes = Object.keys(rightRequestParameters).map(x => parseInt(x))
    for (const leftRequestParameter of leftRequestParameters) {
        const rightRequestParameterIndex = rightRequestParameters.findIndex(p => p.name === leftRequestParameter.name && p.in === leftRequestParameter.in)
        if (rightRequestParameterIndex >= 0) {
            const rightRequestParameter = rightRequestParameters[rightRequestParameterIndex]
            const childDiff = compareApiParameters(leftRequestParameter, rightRequestParameter, DiffDirection.REQUEST)
            diffSection.isBackwardCompatible &&= childDiff.isBackwardCompatible
            diffSection.items = diffSection.items.concat(childDiff.items)
            rightRequestParametersIndexes.splice(rightRequestParametersIndexes.indexOf(rightRequestParameterIndex), 1)
        } else {
            diffSection.isBackwardCompatible = false
            diffSection.items.push({
                path: leftRequestParameter["x-path"],
                diffType: DiffType.REMOVED,
                leftValue: leftRequestParameter,
                isBackwardCompatible: false,
            })
        }
    }
    for (const rightRequestParametersIndex of rightRequestParametersIndexes) {
        const param: ApiParameterDoc = rightRequestParameters[rightRequestParametersIndex]
        diffSection.items.push({
            path: param["x-path"],
            diffType: DiffType.ADDED,
            rightValue: param,
            isBackwardCompatible: true,
        })
    }
    return diffSection
}

function compareApiParameters(leftParameter: ApiParameterDoc, rightParameter: ApiParameterDoc, direction: DiffDirection): DiffSection {
    let diffSection: DiffSection = { isBackwardCompatible: true, items: [] }
    if (!leftParameter && !rightParameter) {
        return diffSection
    }
    if (!leftParameter && rightParameter) {
        return {
            items: [{
                path: rightParameter["x-path"],
                diffType: DiffType.ADDED,
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
                diffType: DiffType.REMOVED,
                rightValue: leftParameter,
                isBackwardCompatible: false,
            }],
            isBackwardCompatible: false,
        }
    }
    const notBackwardCompatiblePaths: string[] = ['in', 'name', 'type', 'required', 'schema']
    const metadataDiff = compareMetadata(extractMetadataFromApiParameter(leftParameter), extractMetadataFromApiParameter(rightParameter), leftParameter["x-path"], notBackwardCompatiblePaths)
    diffSection.model = compareModels(leftParameter.schema, rightParameter.schema, direction)
    diffSection.isBackwardCompatible &&= metadataDiff.isBackwardCompatible && diffSection.model.isBackwardCompatible
    return diffSection
}

function compareResponses(leftResponses: ApiParameterDocMap, rightResponses: ApiParameterDocMap): ResponseDiff {
    const responseDiff: ResponseDiff = {}
    const rightResponsesStatusCode = Object.keys(rightResponses)
    for (const leftResponseStatusCode of Object.keys(leftResponses)) {
        const leftResponse = leftResponses[leftResponseStatusCode]
        const rightResponseStatusCodeIndex = rightResponsesStatusCode.indexOf(leftResponseStatusCode)
        if (rightResponseStatusCodeIndex >= 0) {
            const rightResponse = rightResponses[leftResponseStatusCode]
            const childDiff = compareApiParameters(leftResponse, rightResponse, DiffDirection.RESPONSE)
            if (childDiff.items.length) {
                responseDiff[leftResponseStatusCode] = childDiff
            }
            rightResponsesStatusCode.splice(rightResponseStatusCodeIndex, 1)
        } else {
            responseDiff[leftResponseStatusCode] = {
                items: [{
                    path: leftResponse["x-path"],
                    diffType: DiffType.REMOVED,
                    rightValue: leftResponse,
                    isBackwardCompatible: false,
                }],
                isBackwardCompatible: false,
            }
        }
    }
    for (const rightResponseStatusCode of rightResponsesStatusCode) {
        const rightResponse = rightResponses[rightResponseStatusCode]
        responseDiff[rightResponseStatusCode] = {
            items: [{
                path: rightResponse["x-path"],
                diffType: DiffType.ADDED,
                rightValue: rightResponse,
                isBackwardCompatible: true,
            }],
            isBackwardCompatible: true,
        }
    }
    return responseDiff
}

function compareModels(leftModel: ApiModelDoc, rightModel: ApiModelDoc, direction: DiffDirection, isRequired: boolean = false): DiffItem {
    if (!leftModel && !rightModel) {
        return { diffType: DiffType.NO_CHANGES, isBackwardCompatible: true, leftValue: leftModel, rightValue: rightModel }
    }
    if (!leftModel && rightModel) {
        return {
            diffType: DiffType.ADDED,
            isBackwardCompatible: ApiModelBackwardCompatibility(DiffType.ADDED, direction, isRequired),
            rightValue: rightModel
        }
    }
    if (leftModel && !rightModel) {
        return {
            diffType: DiffType.REMOVED,
            isBackwardCompatible: ApiModelBackwardCompatibility(DiffType.REMOVED, direction, isRequired),
            leftValue: leftModel,
        }
    }
    const modelDiff: ApiModelDocDiff = { isBackwardCompatible: true, diffType: DiffType.MODIFIED }
    for (const metadataKey of ApiModelDocMetadata) {
        modelDiff[metadataKey] = {
            diffType: getDiffType(leftModel[metadataKey], rightModel[metadataKey]),
            isBackwardCompatible: ApiModelPropertiesBackwardCompatibility[metadataKey](leftModel[metadataKey] ?? null, rightModel[metadataKey] ?? null, direction, isRequired),
            leftValue: leftModel[metadataKey], rightValue: rightModel[metadataKey],
        }
    }
    // TODO: check properties, items, additionalProperties
    return modelDiff
}