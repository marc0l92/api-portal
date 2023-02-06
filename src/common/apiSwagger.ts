import { Api, ApiService, type ApiParameterDoc } from "./api"
import type { ApiModelDocMap } from "./apiModel"

export interface ApiSwaggerDoc {
    swagger: string
    info?: {
        title?: string
        version?: string
    }
    paths: {
        [path: string]: {
            parameters?: ApiParameterDoc[]
            [method: string]: ApiSwaggerServiceDoc | ApiParameterDoc[]
        }
    }
    definitions: ApiModelDocMap
}

interface ApiSwaggerServiceDoc {
    parameters?: ApiParameterDoc[]
    responses?: {
        [statusCode: string]: ApiParameterDoc
    }
}


export class ApiSwagger extends Api {
    private apiDoc: ApiSwaggerDoc = null

    constructor(apiDoc: ApiSwaggerDoc) {
        super()
        this.apiDoc = apiDoc
    }

    getName(): string {
        if (this.apiDoc.info && this.apiDoc.info.title) {
            return this.apiDoc.info.title
        }
        return 'api'
    }

    getVersion(): string {
        if (this.apiDoc.info && this.apiDoc.info.version) {
            return this.apiDoc.info.version
        }
        return '0'
    }

    getServices(): ApiService[] {
        const services: ApiServiceSwagger[] = []
        for (const path in this.apiDoc.paths) {
            const globalParam = this.apiDoc.paths[path].parameters || []
            for (const method in this.apiDoc.paths[path]) {
                if (method !== 'parameters') {
                    const apiService = new ApiServiceSwagger(this.apiDoc.paths[path][method] as ApiSwaggerServiceDoc)
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
        return this.apiDoc.definitions
    }
}

export class ApiServiceSwagger extends ApiService {
    private serviceDoc: ApiSwaggerServiceDoc = null

    constructor(serviceDoc: ApiSwaggerServiceDoc) {
        super()
        this.serviceDoc = serviceDoc
        this.initParameters()
        this.initRequest()
        this.initResponse()
    }

    private initParameters() {
        if (this.serviceDoc.parameters) {
            this.requestParameters = this.serviceDoc.parameters.filter((parameter) => {
                return parameter.in === 'path' || parameter.in === 'query' || parameter.in === 'header'
            })
        }
    }

    private initRequest() {
        if (this.serviceDoc.parameters) {
            const requestParam = this.serviceDoc.parameters.find(p => p.in === 'body')
            if (requestParam) {
                this.request = requestParam
            }
        }
    }

    private initResponse() {
        if (this.serviceDoc.responses) {
            this.responses = this.serviceDoc.responses
        }
    }
}