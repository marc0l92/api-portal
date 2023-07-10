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

    getBasePaths(): string[] {
        try {
            return this.getApi()?.servers.map(s => new URL(s.url).pathname) || ['']
        } catch (_) {
            return ['']
        }
    }

    getServices(): ApiService[] {
        const services: ApiServiceOpenApi[] = []
        for (const path in this.getApi().paths) {
            const globalParam = this.getApi().paths[path].parameters || []
            globalParam.forEach((p, i) => (p['x-path'] = `/paths["${path}"]/parameters[${i}]`))
            for (const method in this.getApi().paths[path]) {
                if (PATH_METHODS.indexOf(method) >= 0) {
                    const apiService = new ApiServiceOpenApi(this.getBasePaths(), path, method, this.getApi().paths[path][method] as ApiOpenApiServiceDoc)
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
        if (this.getApi() && this.getApi().info && this.getApi().info['x-release-note']) {
            return this.getApi().info['x-release-note']
        }
        return null
    }

    getType(): ApiType {
        return ApiType.OpenAPI3
    }
}

export class ApiServiceOpenApi extends ApiService {
    private getServiceDoc(): ApiOpenApiServiceDoc {
        return this.serviceDoc as ApiOpenApiServiceDoc
    }

    constructor(basePaths: string[], path: string, method: string, serviceDoc: ApiOpenApiServiceDoc) {
        super()
        this.basePaths = basePaths
        this.path = path
        this.method = method
        this.serviceDoc = serviceDoc
        this.initParameters()
        this.initRequest()
        this.initResponse()
    }

    private initParameters() {
        if (this.getServiceDoc().parameters) {
            this.getServiceDoc().parameters.forEach((p, i) => (p['x-path'] = `${this.getServiceBasePath()}/parameters[${i}]`))
            this.requestParameters = this.getServiceDoc().parameters
        }
    }

    private initRequest() {
        if (this.getServiceDoc().requestBody
            && this.getContentType(this.getServiceDoc().requestBody)) {
            this.getContentType(this.getServiceDoc().requestBody)['x-path'] = `${this.getServiceBasePath()}/requestBody/content["application/json"]`
            this.request = this.getContentType(this.getServiceDoc().requestBody)
        }
    }

    private initResponse() {
        if (this.getServiceDoc().responses) {
            for (const statusCode in this.getServiceDoc().responses) {
                const response = this.getServiceDoc().responses[statusCode]
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