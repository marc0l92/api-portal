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
