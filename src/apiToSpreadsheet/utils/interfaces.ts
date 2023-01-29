export enum ApiVersion {
    Invalid = -1,
    Swagger2 = 2,
    OpenAPI3 = 3,
}

export interface Api {
    swagger?: string
    openapi?: string
    paths: {
        [path: string]: {
            parameters: ApiParameter[]
            [method: string]: ApiService | ApiParameter[]
        }
    }
}

export interface ApiService {
    'x-name'?: string
    parameters?: ApiParameter[]
    requestBody?: Api3Parameter
    responses?: {
        [statusCode: string]: ApiParameter | Api3Parameter
    }
}

export interface Api3Parameter {
    content: {
        [type: string]: ApiParameter
    }
}

export interface ApiParameter {
    in: string
    name: string
    type: string
    required?: string
    schema?: ApiModel
    description?: string
    example: any
}

export interface ApiModel {
    type?: string
    example?: any
    minLength?: number
    maxLength?: number
    minItems?: number
    maxItems?: number
    minProperties?: number
    maxProperties?: number
    pattern?: string
    format?: string
    enum?: string[]
    description?: string
    items?: ApiModel
    required?: string[]
    properties?: {
        [name: string]: ApiModel
    }
    allOf?: ApiModel[]
    additionalProperties?: ApiModel
}

export interface ApiParameterMap {
    [key: string]: ApiParameter
}

export enum DataSheetItemCardinality {
    Required = 'Required',
    Optional = 'Optional',
}

export interface DataSheetItem {
    Location: string
    Level: number
    Path: string
    Cardinality: DataSheetItemCardinality
    Type: string
    Authorized: string
    Description: string
    Example: string
}

export interface DataSheetItemMap {
    [sheetName: string]: DataSheetItem[]
}

export interface DataSheetWorkbook {
    [sheetName: string]: string[][]
}
