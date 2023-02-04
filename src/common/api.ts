import type { ApiModelDoc } from "./apiModel"

export interface ApiGenericDoc {
    swagger?: string
    openapi?: string
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

export abstract class Api {
    abstract getServices(): ApiService[]
}

export abstract class ApiService {
    protected name: string = ''
    protected parameters: ApiParameterDoc[] = []
    protected request: ApiParameterDoc = null
    protected responses: ApiParameterDocMap = {}
    setName(name: string): void {
        this.name = name
    }
    getName(): string {
        return this.name
    }
    addGlobalParameters(globalParameters: ApiParameterDoc[]): void {
        this.parameters.concat(globalParameters)
    }
    getParameters(): ApiParameterDoc[] {
        return this.parameters
    }
    getRequest(): ApiParameterDoc {
        return this.request
    }
    getResponses(): ApiParameterDocMap {
        return this.responses
    }
}