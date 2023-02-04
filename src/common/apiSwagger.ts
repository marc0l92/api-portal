import { Api, ApiService, type ApiParameterDoc } from "./api"

export interface ApiSwaggerDoc {
    swagger: string
    paths: {
        [path: string]: {
            parameters?: ApiParameterDoc[]
            [method: string]: ApiSwaggerServiceDoc | ApiParameterDoc[]
        }
    }
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

    getServices(): ApiService[] {
        const services: ApiServiceSwagger[] = []
        for (const path in this.apiDoc.paths) {
            const globalParam = this.apiDoc.paths[path].parameters || []
            for (const method in this.apiDoc.paths[path]) {
                if (method !== 'parameters') {
                    const apiService = new ApiServiceSwagger(this.apiDoc.paths[path][method] as ApiSwaggerServiceDoc)
                    apiService.setName(`${method.toUpperCase()} ${path}`)
                    apiService.addGlobalParameters(globalParam)
                    services.push(apiService)
                }
            }
        }
        return services
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
        this.parameters = this.serviceDoc.parameters.filter((parameter) => {
            return parameter.in === 'path' || parameter.in === 'query' || parameter.in === 'header'
        })
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