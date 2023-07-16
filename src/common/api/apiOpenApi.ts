import { Api, ApiService, ApiType, type ApiParameterDoc, type ApiReleaseNotes, type ApiGenericDoc } from './api'
import type { ApiModelDocMap } from './apiModel'

const PATH_METHODS = ['get', 'put', 'post', 'delete', 'options', 'head', 'patch', 'trace']

export interface ApiOpenApiDoc extends ApiGenericDoc {
    openapi: string
    info?: {
        title?: string
        version?: string
        'x-release-note'?: ApiReleaseNotes
        ['x-tags']?: string[]
        [otherMetadata: string]: any
    }
    servers?: { url: string }[]
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
    [otherMetadata: string]: any
}

export interface ApiOpenApiServiceDoc {
    parameters?: ApiParameterDoc[]
    requestBody?: ApiOpenApiParameterDoc
    responses?: {
        [statusCode: string]: ApiOpenApiParameterDoc
    }
}

export interface ApiOpenApiParameterDoc {
    headers?: {
        [headerName: string]: {
            schema: ApiParameterDoc
        }
    }
    content: {
        [type: string]: ApiParameterDoc
    }
}

export class ApiOpenApi extends Api {
    private get apiDoc(): ApiOpenApiDoc {
        return this._apiDoc as ApiOpenApiDoc
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
        try {
            return this.apiDoc?.servers.map(s => new URL(s.url).pathname) || ['']
        } catch (_) {
            return ['']
        }
    }

    getServices(): ApiService[] {
        const services: ApiServiceOpenApi[] = []
        for (const path in this.apiDoc.paths) {
            const globalParam = this.apiDoc.paths[path].parameters || []
            globalParam.forEach((p, i) => (p['x-path'] = `/paths["${path}"]/parameters[${i}]`))
            for (const method in this.apiDoc.paths[path]) {
                if (PATH_METHODS.indexOf(method) >= 0) {
                    const apiService = new ApiServiceOpenApi(this.getBasePaths(), path, method, this.apiDoc.paths[path][method] as ApiOpenApiServiceDoc)
                    apiService.addGlobalParameters(globalParam)
                    services.push(apiService)
                }
            }
        }
        return services
    }

    getModels(): ApiModelDocMap {
        if (this.apiDoc.components && this.apiDoc.components.schemas) {
            return this.apiDoc.components.schemas
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
        return ApiType.OpenAPI3
    }
}

export class ApiServiceOpenApi extends ApiService {
    private get serviceDoc(): ApiOpenApiServiceDoc {
        return this._serviceDoc as ApiOpenApiServiceDoc
    }

    constructor(basePaths: string[], path: string, method: string, serviceDoc: ApiOpenApiServiceDoc) {
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
            this.requestParameters = this.serviceDoc.parameters
        }
    }

    private initRequest() {
        if (this.serviceDoc.requestBody
            && this.getContentType(this.serviceDoc.requestBody)) {
            this.getContentType(this.serviceDoc.requestBody)['x-path'] = `${this.getServiceBasePath()}/requestBody/content["application/json"]`
            this.request = this.getContentType(this.serviceDoc.requestBody)
        }
    }

    private initResponse() {
        if (this.serviceDoc.responses) {
            for (const statusCode in this.serviceDoc.responses) {
                const response = this.serviceDoc.responses[statusCode]
                if (this.getContentType(response)) {
                    this.getContentType(response)['x-path'] = `${this.getServiceBasePath()}/responses[${statusCode}]/content["application/json"]`
                    this.responses[statusCode] = this.getContentType(response)
                }
            }
        }
    }

    private getContentType(apiOpenApiParameterDoc: ApiOpenApiParameterDoc): ApiParameterDoc {
        if (apiOpenApiParameterDoc.content) {
            const contentTypes = Object.keys(apiOpenApiParameterDoc.content)
            if (contentTypes.length === 1) {
                return apiOpenApiParameterDoc.content[contentTypes[0]]
            } else if (contentTypes.length > 1) {
                const jsonContentType = contentTypes.find(t => t.match(/json/i))
                if (jsonContentType) {
                    return apiOpenApiParameterDoc.content[jsonContentType]
                }
            }

        }
        return null
    }

    getServiceBasePath(): string {
        return `/paths["${this.getPath()}"]/${this.getMethod()}`
    }
}