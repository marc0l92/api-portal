import type { ApiParameterDoc, ApiService } from "common/api"
import { mergeAllOfDefinitions, type ApiModelDoc, type ApiModelDocMap } from "common/apiModel"
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
    diagramBuilder.buildModel(mergeAllOfDefinitions(model))
    return {
        name: title,
        uml: diagramBuilder.getDiagramText(),
        image: diagramBuilder.getDiagramImageUri(),
    }
}

export const parseServiceDiagrams = (service: ApiService, options: DiagramBuilderOptions): DiagramData[] => {
    const diagrams: DiagramData[] = []
    if (service) {
        const request = service.getRequest()
        if (request && request.schema) {
            if (!request.schema.title) {
                request.schema.title = 'Request'
            }
            diagrams.push(getDiagramData(request.schema, service.getRequestParameters(), `${service.getName()} - Request`, options))
        }
        const responses = service.getResponses()
        for (const statusCode in responses) {
            if (responses[statusCode].schema) {
                if (!responses[statusCode].schema.title) {
                    responses[statusCode].schema.title = 'Response'
                }
                diagrams.push(getDiagramData(responses[statusCode].schema, [], `${service.getName()} - Response [${statusCode}]`, options))
            }
        }
    }
    return diagrams
}