import { Api, ApiService, ApiType, type ApiParameterDoc, type ApiReleaseNotes, type ApiGenericDoc } from './api'
import type { ApiModelDocMap } from './apiModel'

export interface ApiSwaggerDoc extends ApiGenericDoc {
    swagger: string
    info?: {
        title?: string
        version?: string
        'x-release-note'?: ApiReleaseNotes
        ['x-tags']?: string[]
        [otherMetadata: string]: any
    }
    basePath?: string
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
    private get apiDoc(): ApiSwaggerDoc {
        return this.apiDoc as ApiSwaggerDoc
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

    getBasePaths(): string[] {
        return [this.apiDoc?.basePath || '']
    }

    getServices(): ApiService[] {
        const services: ApiServiceSwagger[] = []
        for (const path in this.apiDoc.paths) {
            const globalParam = this.apiDoc.paths[path].parameters || []
            globalParam.forEach((p, i) => (p['x-path'] = `/paths["${path}"]/parameters[${i}]`))
            for (const method in this.apiDoc.paths[path]) {
                if (method !== 'parameters') {
                    const apiService = new ApiServiceSwagger(this.getBasePaths(), path, method, this.apiDoc.paths[path][method] as ApiSwaggerServiceDoc)
                    apiService.addGlobalParameters(globalParam)
                    services.push(apiService)
                }
            }
        }
        return services
    }

    getModels(): ApiModelDocMap {
        if (this.apiDoc.definitions) {
            return this.apiDoc.definitions
        }
        return {}
    }

    getReleaseNotes(): ApiReleaseNotes {
        if (this.apiDoc && this.apiDoc.info && this.apiDoc.info['x-release-note']) {
            return this.apiDoc.info['x-release-note']
        }
        return null
    }

    getType(): ApiType {
        return ApiType.Swagger2
    }
}

export class ApiServiceSwagger extends ApiService {
    private get serviceDoc(): ApiSwaggerServiceDoc {
        return this._serviceDoc as ApiSwaggerServiceDoc
    }

    constructor(basePaths: string[], path: string, method: string, serviceDoc: ApiSwaggerServiceDoc) {
        super()
        this.basePaths = basePaths
        this.path = path
        this.method = method
        this._serviceDoc = JSON.parse(JSON.stringify(serviceDoc))
        this.initParameters()
        this.initRequest()
        this.initResponse()
    }

    private initParameters() {
        if (this.serviceDoc.parameters) {
            this.serviceDoc.parameters.forEach((p, i) => (p['x-path'] = `${this.getServiceBasePath()}/parameters[${i}]`))
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
            for (const statusCode in this.serviceDoc.responses) {
                this.serviceDoc.responses[statusCode]['x-path'] = `${this.getServiceBasePath()}/responses[${statusCode}]`
            }
            this.responses = this.serviceDoc.responses
        }
    }

    getServiceBasePath(): string {
        return `/paths["${this.getPath()}"]/${this.getMethod()}`
    }
}