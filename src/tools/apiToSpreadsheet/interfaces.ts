export enum ModelPropertyCardinality {
    Required = 'Required',
    Optional = 'Optional',
}

export interface ModelProperty {
    Location: string
    Level: number
    Path: string
    Cardinality: ModelPropertyCardinality
    Type: string
    Authorized: string
    Description: string
    Example: string
}

export interface ModelPropertiesMap {
    [sheetName: string]: ModelProperty[]
}

export interface TablesMap {
    [sheetName: string]: string[][]
}

export enum ApiReqRes {
    REQUEST = 1,
    RESPONSE = 2,
}