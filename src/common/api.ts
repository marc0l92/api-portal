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
    abstract getName(): string
    abstract getServices(): ApiService[]
}

export abstract class ApiService {
    protected parameters: ApiParameterDoc[] = []
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
        this.parameters.concat(globalParameters)
    }

    getName(): string {
        return `${this.method.toUpperCase()} ${this.path}`
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