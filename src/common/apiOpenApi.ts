import { Api, ApiService, type ApiParameterDoc } from "./api"

const PATH_METHODS = ['get', 'put', 'post', 'delete', 'options', 'head', 'patch', 'trace']

export interface ApiOpenApiDoc {
    openapi: string
    info?: {
        title?: string
        version?: string
    }
    paths: {
        [path: string]: {
            parameters?: ApiParameterDoc[]
            [method: string]: ApiOpenApiServiceDoc | ApiParameterDoc[]
        }
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
    private apiDoc: ApiOpenApiDoc = null
    constructor(apiDoc: ApiOpenApiDoc) {
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
        const services: ApiServiceOpenApi[] = []
        for (const path in this.apiDoc.paths) {
            const globalParam = this.apiDoc.paths[path].parameters || []
            for (const method in this.apiDoc.paths[path]) {
                if (PATH_METHODS.indexOf(method) >= 0) {
                    const apiService = new ApiServiceOpenApi(this.apiDoc.paths[path][method] as ApiOpenApiServiceDoc)
                    apiService.setPath(path)
                    apiService.setMethod(method)
                    apiService.addGlobalParameters(globalParam)
                    services.push(apiService)
                }
            }
        }
        return services
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