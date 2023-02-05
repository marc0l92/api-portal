import type { ApiParameterDoc, ApiService } from "common/api"
import DiagramBuilder from "./diagramBuilder"
import type { DiagramBuilderOptions } from "./diagramBuilderOptions"

export interface DiagramData {
    name: string
    uml: string
    image: string
}

function getDiagramData(parameter: ApiParameterDoc, title: string, options: DiagramBuilderOptions): DiagramData {
    if (parameter.schema) {
        const diagramBuilder = new DiagramBuilder(options)
        diagramBuilder.buildTitle(title)
        diagramBuilder.buildModel(parameter.schema)
        return {
            name: title,
            uml: diagramBuilder.getDiagramText(),
            image: diagramBuilder.getDiagramImageUri(),
        }
    }
}

export const parseServiceDiagrams = (service: ApiService, options: DiagramBuilderOptions): DiagramData[] => {
    const diagrams: DiagramData[] = []
    if (service) {
        const request = service.getRequest()
        if (request) {
            diagrams.push(getDiagramData(request, `${service.getName()} - Request`, options))
        }
        const responses = service.getResponses()
        for (const statusCode in responses) {
            diagrams.push(getDiagramData(responses[statusCode], `${service.getName()} - Response [${statusCode}]`, options))
        }
    }
    return diagrams
}