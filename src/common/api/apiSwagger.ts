import { Api, ApiService, ApiType, type ApiParameterDoc, type ApiReleaseNotes } from "./api"
import type { ApiModelDocMap } from "./apiModel"

export interface ApiSwaggerDoc {
    swagger: string
    info?: {
        title?: string
        version?: string
        'x-release-note'?: ApiReleaseNotes
        [otherMetadata: string]: any
    }
    paths: {
        [path: string]: {
            parameters?: ApiParameterDoc[]
            [method: string]: ApiSwaggerServiceDoc | ApiParameterDoc[] | undefined
        }
    }
    definitions?: ApiModelDocMap
    responses?: {
        [name: string]: ApiParameterDoc
    }
    parameters?: {
        [name: string]: ApiParameterDoc
    }
    [otherMetadata: string]: any
}

interface ApiSwaggerServiceDoc {
    parameters?: ApiParameterDoc[]
    responses?: {
        [statusCode: string]: ApiParameterDoc
    }
}


export class ApiSwagger extends Api {
    private getApi(): ApiSwaggerDoc {
        return this.apiDoc as ApiSwaggerDoc
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
        const services: ApiServiceSwagger[] = []
        for (const path in this.getApi().paths) {
            const globalParam = this.getApi().paths[path].parameters || []
            for (const method in this.getApi().paths[path]) {
                if (method !== 'parameters') {
                    const apiService = new ApiServiceSwagger(this.getApi().paths[path][method] as ApiSwaggerServiceDoc)
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
        if (this.getApi().definitions) {
            return this.getApi().definitions
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
        return ApiType.Swagger2
    }
}

export class ApiServiceSwagger extends ApiService {
    private getServiceDoc(): ApiSwaggerServiceDoc {
        return this.serviceDoc as ApiSwaggerServiceDoc
    }

    constructor(serviceDoc: ApiSwaggerServiceDoc) {
        super()
        this.serviceDoc = serviceDoc
        this.initParameters()
        this.initRequest()
        this.initResponse()
    }

    private initParameters() {
        if (this.getServiceDoc().parameters) {
            this.requestParameters = this.getServiceDoc().parameters.filter((parameter) => {
                return parameter.in === 'path' || parameter.in === 'query' || parameter.in === 'header'
            })
        }
    }

    private initRequest() {
        if (this.getServiceDoc().parameters) {
            const requestParam = this.getServiceDoc().parameters.find(p => p.in === 'body')
            if (requestParam) {
                this.request = requestParam
            }
        }
    }

    private initResponse() {
        if (this.getServiceDoc().responses) {
            this.responses = this.getServiceDoc().responses
        }
    }
}