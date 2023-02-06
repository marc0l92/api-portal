import { ModelPropertyCardinality } from "./interfaces"
import type { ModelProperty, ModelPropertiesMap } from "./interfaces"
import type { ApiParameterDoc, ApiService } from "common/api"
import { mergeAllOfDefinitions, ModelType, type ApiModelDoc } from "common/apiModel"

const LOCATION_BODY = 'Body'

function getAuthorizedValues(model: ApiModelDoc): string {
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

function generateModelFlatMap(model: ApiModelDoc, required: boolean = false, path: string = '', level: number = 0): ModelProperty[] {
    let flatMap: ModelProperty[] = []
    // console.log('generateModelFlatMap:', { model })

    const flatItem: ModelProperty = {
        Location: LOCATION_BODY,
        Level: level,
        Path: path,
        Cardinality: required ? ModelPropertyCardinality.Required : ModelPropertyCardinality.Optional,
        Type: model.type || ModelType.Object,
        Authorized: getAuthorizedValues(model),
        Description: model.description || '',
        Example: model.example ? JSON.stringify(model.example) : '',
    }
    flatMap.push(flatItem)

    if (model.type === ModelType.Array && 'items' in model) {
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

function generateParameterFlatMap(parameter: ApiParameterDoc): ModelProperty {
    parameter.in = parameter.in[0].toUpperCase() + parameter.in.substring(1)
    return {
        Location: parameter.in,
        Level: 0,
        Path: parameter.name,
        Cardinality: parameter.required ? ModelPropertyCardinality.Required : ModelPropertyCardinality.Optional,
        Type: parameter.type || parameter.schema.type || 'string',
        Authorized: getAuthorizedValues(parameter.schema),
        Description: parameter.description || '',
        Example: parameter.example ? JSON.stringify(parameter.example) : '',
    }
}

export const generateServiceWorkbook = (service: ApiService): ModelPropertiesMap => {
    console.log('Service:', { service })
    const workbook: ModelPropertiesMap = { Request: [] }
    const parameters = service.getRequestParameters()
    console.log('Parameters:', { parameters })
    for (const parameter of parameters) {
        workbook.Request.push(generateParameterFlatMap(parameter))
    }

    const request = service.getRequest()
    console.log('Request:', { request })
    if (request && request.schema) {
        request.schema = mergeAllOfDefinitions(request.schema)
        workbook.Request = workbook.Request.concat(generateModelFlatMap(request.schema, !!request.required))
    }
    if (workbook.Request.length === 0) {
        delete workbook.Request
    }

    // console.log({ workbook })
    const responses = service.getResponses()
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
