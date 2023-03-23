import { Api, ApiService, ApiType, type ApiParameterDoc, type ApiReleaseNotes } from "./api"
import type { ApiModelDocMap } from "./apiModel"

const PATH_METHODS = ['get', 'put', 'post', 'delete', 'options', 'head', 'patch', 'trace']

export interface ApiOpenApiDoc {
    openapi: string
    info?: {
        title?: string
        version?: string
        'x-release-note'?: ApiReleaseNotes
    }
    paths: {
        [path: string]: {
            parameters?: ApiParameterDoc[]
            [method: string]: ApiOpenApiServiceDoc | ApiParameterDoc[] | undefined
        }
    }
    components?: {
        schemas?: ApiModelDocMap
        parameters?: { [name: string]: any }
        headers?: { [name: string]: any }
        callbacks?: { [name: string]: any }
        requestBodies?: { [name: string]: any }
        responses?: { [name: string]: any }
    }
}

export interface ApiOpenApiServiceDoc {
    parameters?: ApiParameterDoc[]
    requestBody?: ApiOpenApiParameterDoc
    responses?: {
        [statusCode: string]: ApiOpenApiParameterDoc
    }
}

export interface ApiOpenApiParameterDoc {
    content: {
        [type: string]: ApiParameterDoc
    }
}

export class ApiOpenApi extends Api {
    private getApi(): ApiOpenApiDoc {
        return this.apiDoc as ApiOpenApiDoc
    }

    getName(): string {
        if (this.getApi().info && this.getApi().info.title) {
            return this.getApi().info.title
        }
        return 'api'
    }

    getVersion(): string {
        if (this.getApi().info && this.getApi().info.version) {
            return this.getApi().info.version
        }
        return '0'
    }

    getServices(): ApiService[] {
        const services: ApiServiceOpenApi[] = []
        for (const path in this.getApi().paths) {
            const globalParam = this.getApi().paths[path].parameters || []
            for (const method in this.getApi().paths[path]) {
                if (PATH_METHODS.indexOf(method) >= 0) {
                    const apiService = new ApiServiceOpenApi(this.getApi().paths[path][method] as ApiOpenApiServiceDoc)
                    apiService.setPath(path)
                    apiService.setMethod(method)
                    apiService.addGlobalParameters(globalParam)
                    services.push(apiService)
                }
            }
        }
        return services
    }

    getModels(): ApiModelDocMap {
        if (this.getApi().components && this.getApi().components.schemas) {
            return this.getApi().components.schemas
        }
        return {}
    }

    getReleaseNotes(): ApiReleaseNotes {
        if (this.getApi() && this.getApi().info && this.getApi().info["x-release-note"]) {
            return this.getApi().info["x-release-note"]
        }
        return null
    }

    getType(): ApiType {
        return ApiType.OpenAPI3
    }
}

export class ApiServiceOpenApi extends ApiService {
    private serviceDoc: ApiOpenApiServiceDoc = null

    constructor(serviceDoc: ApiOpenApiServiceDoc) {
        super()
        this.serviceDoc = serviceDoc
        this.initParameters()
        this.initRequest()
        this.initResponse()
    }

    private initParameters() {
        if (this.serviceDoc.parameters) {
            this.requestParameters = this.serviceDoc.parameters
        }
    }

    private initRequest() {
        if (this.serviceDoc.requestBody
            && this.serviceDoc.requestBody.content
            && this.serviceDoc.requestBody.content['application/json']) {
            this.request = this.serviceDoc.requestBody.content['application/json']
        }
    }

    private initResponse() {
        if (this.serviceDoc.responses) {
            for (const statusCode in this.serviceDoc.responses) {
                const response = this.serviceDoc.responses[statusCode]
                if (response.content && response.content['application/json']) {
                    this.responses[statusCode] = response.content['application/json']
                }
            }
        }
    }
}