import type { ApiParameterDoc, ApiService } from "common/api/api"
import { mergeAllOfDefinitions, type ApiModelDoc } from "common/api/apiModel"
import DiagramBuilder from "./diagramBuilder"
import type { DiagramBuilderOptions } from "./diagramBuilderOptions"

export interface DiagramData {
    name: string
    uml: string
    image: string
}

function getDiagramData(model: ApiModelDoc, parameters: ApiParameterDoc[], title: string, options: DiagramBuilderOptions): DiagramData {
    const diagramBuilder = new DiagramBuilder(options)
    diagramBuilder.buildTitle(title)
    if (options.parameters) {
        diagramBuilder.buildParameters(parameters)
    }
    if (model) {
        diagramBuilder.buildModel(mergeAllOfDefinitions(model))
    }
    return {
        name: title,
        uml: diagramBuilder.getDiagramText(),
        image: diagramBuilder.getDiagramImageUri(),
    }
}

function buildRequestDiagrams(service: ApiService, options: DiagramBuilderOptions): DiagramData[] {
    const request = service.getRequest()
    let requestSchema = null
    if (request && request.schema) {
        if (!request.schema.title) {
            request.schema.title = 'Request'
        }
        requestSchema = request.schema
    }
    if (options.parameters || requestSchema) {
        return [getDiagramData(requestSchema, service.getRequestParameters(), `${service.getName()} - Request`, options)]
    }
    return []
}

function buildResponseDiagrams(service: ApiService, options: DiagramBuilderOptions): DiagramData[] {
    let diagrams: DiagramData[] = []
    const responses = service.getResponses()
    for (const statusCode in responses) {
        if (responses[statusCode].schema) {
            if (!responses[statusCode].schema.title) {
                responses[statusCode].schema.title = 'Response'
            }
            diagrams.push(getDiagramData(responses[statusCode].schema, [], `${service.getName()} - Response [${statusCode}]`, options))
        }
    }
    return diagrams
}

export const parseServiceDiagrams = (service: ApiService, options: DiagramBuilderOptions): DiagramData[] => {
    let diagrams: DiagramData[] = []
    if (service) {
        diagrams = diagrams.concat(buildRequestDiagrams(service, options))
        diagrams = diagrams.concat(buildResponseDiagrams(service, options))
    }
    return diagrams
}