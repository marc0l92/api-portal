import type { ApiModelDoc, ApiModelDocMap } from "./apiModel"
import { resolveReferences } from "./refParser"

export interface ApiGenericDoc {
    swagger?: string
    openapi?: string
    ['x-status']: string
    ['x-tags']: string[]
    ['x-pull-request']: string
}

export interface ApiParameterDoc {
    in?: string
    name?: string
    type: string
    required?: string
    schema?: ApiModelDoc
    description?: string
    example?: any
}

export interface ApiParameterDocMap {
    [key: string]: ApiParameterDoc
}

export interface ApiReleaseNotes {
    [version: string]: string[]
}

export abstract class Api {
    protected apiDoc: ApiGenericDoc = null
    constructor(apiDoc: ApiGenericDoc) {
        this.apiDoc = apiDoc
    }
    setModelsTitle(): void {
        const models = this.getModels()
        for (const defName in models) {
            if (!models[defName].hasOwnProperty('title')) {
                models[defName].title = defName
            }
        }
    }
    async resolveReferences(): Promise<void> {
        this.apiDoc = await resolveReferences(this.apiDoc)
    }
    getStatus(): string {
        return this.apiDoc['x-status']
    }
    getTags(): string[] {
        return this.apiDoc['x-tags']
    }
    getPullRequest(): string {
        return this.apiDoc['x-pull-request']
    }
    abstract getReleaseNotes(): ApiReleaseNotes
    abstract getName(): string
    abstract getVersion(): string
    abstract getServices(): ApiService[]
    abstract getModels(): ApiModelDocMap
}

export abstract class ApiService {
    protected requestParameters: ApiParameterDoc[] = []
    protected request: ApiParameterDoc = null
    protected responses: ApiParameterDocMap = {}
    protected path: string
    protected method: string

    setPath(path: string) {
        this.path = path
    }
    setMethod(method: string) {
        this.method = method
    }

    addGlobalParameters(globalParameters: ApiParameterDoc[]): void {
        this.requestParameters = this.requestParameters.concat(globalParameters)
    }

    getName(): string {
        return `${this.method.toUpperCase()} ${this.path}`
    }
    getRequestParameters(): ApiParameterDoc[] {
        return this.requestParameters
    }
    getRequest(): ApiParameterDoc {
        return this.request
    }
    getResponses(): ApiParameterDocMap {
        return this.responses
    }
}