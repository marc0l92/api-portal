export enum OpenApiVersion {
    Invalid = -1,
    Swagger2 = 2,
    OpenAPI3 = 3,
}

export interface OpenApi {
    swagger?: string
    openapi?: string
    paths: {
        [path: string]: {
            parameters: OpenApiParameter[]
            [method: string]: OpenApiService | OpenApiParameter[]
        }
    }
}

export interface OpenApiService {
    'x-name'?: string
    parameters?: OpenApiParameter[]
    requestBody?: OpenApi3Parameter
    responses?: {
        [statusCode: string]: OpenApiParameter | OpenApi3Parameter
    }
}

export interface OpenApi3Parameter {
    content: {
        [type: string]: OpenApiParameter
    }
}

export interface OpenApiParameter {
    in: string
    name: string
    type: string
    required?: string
    schema?: OpenApiModel
    description?: string
    example: any
}

export interface OpenApiModel {
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
    items?: OpenApiModel
    required?: string[]
    properties?: {
        [name: string]: OpenApiModel
    }
    allOf?: OpenApiModel[]
    additionalProperties?: OpenApiModel
}

export interface OpenApiParameterMap {
    [key: string]: OpenApiParameter
}

export enum DataSheetItemCardinality {
    Required = 'Required',
    Optional = 'Optional',
}

export interface DataSheetItem {
    Location: string
    Level: number
    Path: string
    Type: string
    Cardinality: DataSheetItemCardinality
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
