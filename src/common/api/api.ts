import type { ApiModelDoc, ApiModelDocMap } from "./apiModel"
import { resolveReferences } from "./refParser"

export interface ApiGenericDoc {
    swagger?: string
    openapi?: string
    ['x-metadata']?: {
        status?: number
        tags?: string[]
        branch?: string
        pullRequest?: string
    }
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

export interface ApiMetadata {
    [metadataName: string]: string
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
    getStatus(): number {
        if (this.apiDoc['x-metadata'] && this.apiDoc['x-metadata'].status) {
            return this.apiDoc['x-metadata'].status
        }
        return 0
    }
    getMetadata(): ApiMetadata {
        const apiMetadata: any = this.apiDoc['x-metadata']
        const metadata: ApiMetadata = {}

        for (const name in apiMetadata) {
            if (typeof apiMetadata[name] === 'string') {
                metadata[name] = apiMetadata[name] as string
            } else {
                metadata[name] = JSON.stringify(apiMetadata[name])
            }
        }
        return metadata
    }
    toJson(): any {
        return this.apiDoc
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