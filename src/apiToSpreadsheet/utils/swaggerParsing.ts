import { ApiVersion, DataSheetItemCardinality } from "./interfaces"
import type { ApiService, ApiParameter, ApiParameterMap, Api3Parameter, ApiModel, DataSheetItem, Api, DataSheetItemMap } from "./interfaces"

const LOCATION_BODY = 'Body'

function getRequest(service: ApiService, version: ApiVersion): ApiParameter {
    if (version === ApiVersion.Swagger2) {
        if (service.parameters) {
            const requestParam = service.parameters.find(p => p.in === 'body')
            if (requestParam) {
                return requestParam
            }
        }
    } else if (version === ApiVersion.OpenAPI3) {
        if (service.requestBody
            && service.requestBody.content
            && service.requestBody.content['application/json']) {
            return service.requestBody.content['application/json']
        }
    }
    return null
}

function getResponses(service: ApiService, version: ApiVersion): ApiParameterMap {
    const responses: ApiParameterMap = {}
    if (service.responses) {
        for (const statusCode in service.responses) {
            const response2 = service.responses[statusCode] as ApiParameter
            const response3 = service.responses[statusCode] as Api3Parameter
            if (version === ApiVersion.Swagger2) {
                responses[statusCode] = response2
            }
            else if (version === ApiVersion.OpenAPI3 && response3.content && response3.content['application/json']) {
                responses[statusCode] = response3.content['application/json']
            }
        }
    }
    return responses
}

function getParameters(service: ApiService): ApiParameter[] {
    if (service.parameters) {
        return service.parameters.filter((parameter) => {
            return parameter.in === 'path' || parameter.in === 'query' || parameter.in === 'header'
        })
    } else {
        return []
    }
}

function getAuthorizedValues(model: ApiModel): string {
    if (!model) {
        return ''
    }
    const rules = []
    if (model.minLength) {
        rules.push(`minLength=${model.minLength}`)
    }
    if (model.maxLength) {
        rules.push(`maxLength=${model.maxLength}`)
    }
    if (model.minItems) {
        rules.push(`minItems=${model.minItems}`)
    }
    if (model.maxItems) {
        rules.push(`maxItems=${model.maxItems}`)
    }
    if (model.minProperties) {
        rules.push(`minProperties=${model.minProperties}`)
    }
    if (model.maxProperties) {
        rules.push(`maxProperties=${model.maxProperties}`)
    }
    if (model.pattern) {
        rules.push(`pattern=${model.pattern}`)
    }
    if (model.format) {
        rules.push(`format=${model.format}`)
    }
    if (model.enum) {
        rules.push(`enum=[${model.enum.join(',')}]`)
    }
    return rules.join('; ')
}

function generateModelFlatMap(model: ApiModel, required: boolean = false, path: string = '', level: number = 0): DataSheetItem[] {
    let flatMap: DataSheetItem[] = []
    // console.log('generateModelFlatMap:', { model })

    const flatItem: DataSheetItem = {
        Location: LOCATION_BODY,
        Level: level,
        Path: path,
        Cardinality: required ? DataSheetItemCardinality.Required : DataSheetItemCardinality.Optional,
        Type: model.type || 'object',
        Authorized: getAuthorizedValues(model),
        Description: model.description || '',
        Example: model.example ? JSON.stringify(model.example) : '',
    }
    flatMap.push(flatItem)

    if (model.type === 'array' && 'items' in model) {
        flatMap = flatMap.concat(
            generateModelFlatMap(
                model.items,
                false,
                path + '[]',
                level + 1
            )
        )
    } else if ('properties' in model) {
        const requiredProperties = new Set(model.required)
        for (const propertyName of Object.keys(model.properties).sort()) {
            const property = model.properties[propertyName]
            flatMap = flatMap.concat(
                generateModelFlatMap(
                    property,
                    requiredProperties.has(propertyName),
                    path + '/' + propertyName,
                    level + 1
                )
            )
        }
    }
    return flatMap
}

function generateParameterFlatMap(parameter: ApiParameter): DataSheetItem {
    parameter.in = parameter.in[0].toUpperCase() + parameter.in.substring(1)
    return {
        Location: parameter.in,
        Level: 0,
        Path: parameter.name,
        Cardinality: parameter.required ? DataSheetItemCardinality.Required : DataSheetItemCardinality.Optional,
        Type: parameter.type || parameter.schema.type || 'string',
        Authorized: getAuthorizedValues(parameter.schema),
        Description: parameter.description || '',
        Example: parameter.example ? JSON.stringify(parameter.example) : '',
    }
}

function mergeAllOfDefinitions(model: ApiModel, path: string = ''): ApiModel {
    // console.log(path, 'mergeAllOfDefinitions->input', model)
    if (!model) {
        return model
    }
    for (const key in model) {
        if (key === 'allOf') {
            if (model[key].length === 1) {
                // No objects to merge, allOf used only to override the description
                model = Object.assign({}, mergeAllOfDefinitions(model[key][0]), model)
                delete model.allOf
            } else {
                const mergedModel: ApiModel = Object.assign({}, model, { type: 'object', required: [], properties: {} })
                delete mergedModel.allOf

                for (const i in model[key]) {
                    const childModel = mergeAllOfDefinitions(model[key][i], path + '/[' + i + ']')
                    if ('properties' in childModel) {
                        Object.assign(mergedModel.properties, childModel.properties)
                    }
                    if ('required' in childModel) {
                        mergedModel.required = mergedModel.required.concat(childModel.required)
                    }
                    if ('additionalProperties' in childModel) {
                        Object.assign(mergedModel.additionalProperties, childModel.additionalProperties)
                    }
                    if ('minProperties' in childModel) {
                        if ('minProperties' in mergedModel) {
                            mergedModel.minProperties += childModel.minProperties
                        } else {
                            mergedModel.minProperties = childModel.minProperties
                        }
                    }
                    if ('maxProperties' in childModel) {
                        console.warn('WARNING: maxProperties not supported while merging allOf definitions')
                    }
                }
                if (mergedModel.required.length === 0) {
                    delete mergedModel.required
                } else {
                    mergedModel.required = [...new Set([...mergedModel.required])]
                }
                if (Object.keys(mergedModel.properties).length === 0) {
                    delete mergedModel.properties
                }
                model = mergedModel
            }
            // console.log(path, 'mergeAllOfDefinitions->merged', model)
            break
        }
    }

    // continue in deep
    if ('properties' in model) {
        for (const propertyName in model.properties) {
            model.properties[propertyName] = mergeAllOfDefinitions(model.properties[propertyName], path + '/' + propertyName)
        }
    } else if ('items' in model) {
        model.items = mergeAllOfDefinitions(model.items, path + '[]')
    } else if ('additionalProperties' in model) {
        model.additionalProperties = mergeAllOfDefinitions(model.additionalProperties)
    }
    return model
}


export const getApiDocumentationVersion = (api: Api): ApiVersion => {
    if (api.swagger === '2.0') {
        return ApiVersion.Swagger2
    }
    else if (api.openapi && api.openapi.startsWith('3')) {
        return ApiVersion.OpenAPI3
    }
    return ApiVersion.Invalid
}

export const extractServices = (api: Api): ApiService[] => {
    const services: ApiService[] = []
    for (const path in api.paths) {
        const globalParam = api.paths[path].parameters || []
        for (const method in api.paths[path]) {
            if (method !== 'parameters') {
                const service = api.paths[path][method] as ApiService
                service['x-name'] = `${method.toUpperCase()} ${path}`
                service.parameters = service.parameters || []
                service.parameters = service.parameters.concat(globalParam)
                services.push(service)
            }
        }
    }
    return services
}

export const generateServiceWorkbook = (service: ApiService, version: ApiVersion): DataSheetItemMap => {
    console.log('Service:', { service, version })
    const workbook: DataSheetItemMap = { Request: [] }
    const parameters = getParameters(service)
    console.log('Parameters:', { parameters })
    for (const parameter of parameters) {
        workbook.Request.push(generateParameterFlatMap(parameter))
    }

    const request = getRequest(service, version)
    console.log('Request:', { request })
    if (request && request.schema) {
        request.schema = mergeAllOfDefinitions(request.schema)
        workbook.Request = workbook.Request.concat(generateModelFlatMap(request.schema, !!request.required))
    }
    if (workbook.Request.length === 0) {
        delete workbook.Request
    }

    // console.log({ workbook })
    const responses = getResponses(service, version)
    console.log('Responses:', { responses })
    for (const statusCode in responses) {
        const response = responses[statusCode]
        response.schema = mergeAllOfDefinitions(response.schema)
        // console.log({ statusCode, response })
        if (response && response.schema) {
            workbook[`Response-${statusCode}`] = generateModelFlatMap(response.schema, !!response.required)
        }
    }
    return workbook
}
