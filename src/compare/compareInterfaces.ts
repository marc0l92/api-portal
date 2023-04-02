export interface ApiDiff {
    isBackwardCompatible: boolean
    metadata: DiffItem[]
    services: {
        [serviceName: string]: ServiceDiff
    }
}

export interface ServiceDiff {
    diffType: DiffType
    isBackwardCompatible: boolean
    metadata?: DiffSection
    parameters?: DiffSection
    request?: DiffSection
    responses?: ResponseDiff
}

export interface ResponseDiff {
    [statusCode: string]: DiffSection
}

export enum DiffType {
    ADDED = 'Added',
    REMOVED = 'Removed',
    MODIFIED = 'Modified',
    NO_CHANGES = 'No Changes'
}

export enum DiffDirection {
    REQUEST,
    RESPONSE,
}

export const DiffTypeColor: { [type: string]: string } = {
    [DiffType.ADDED]: 'is-success',
    [DiffType.MODIFIED]: 'is-warning',
    [DiffType.REMOVED]: 'is-danger',
};

export interface DiffSection {
    isBackwardCompatible: boolean
    items: DiffItem[]
    model?: ApiModelDocDiff
}

export interface DiffItem {
    diffType: DiffType
    path?: string
    isBackwardCompatible: boolean
    leftValue?: any
    rightValue?: any
}

export const ApiModelDocMetadata = ['title', 'type', 'example', 'minLength', 'maxLength', 'minItems', 'maxItems', 'minProperties', 'maxProperties', 'pattern', 'format', 'enum', 'description', 'required', 'additionalProperties', 'readOnly', 'writeOnly'] as const
type ApiModelDocMetadataType = { [K in typeof ApiModelDocMetadata[number]]?: DiffItem }
export interface ApiModelDocDiff extends ApiModelDocMetadataType {
    isBackwardCompatible: boolean
    diffType: DiffType

    items?: DiffItem
    properties?: {
        [name: string]: DiffItem
    }
}

type CompatibilityMap = { [K in typeof ApiModelDocMetadata[number]]?: (leftValue: any, rightValue: any, direction: DiffDirection, isRequired: boolean) => boolean }
export const ApiModelDocBackwardCompatibility: CompatibilityMap = {
    title: () => true,
    example: () => true,
    description: () => true,
    type: (leftValue: any, rightValue: any) => (leftValue === rightValue),
    minLength: (leftValue: number, rightValue: number, direction: DiffDirection) => ((direction === DiffDirection.REQUEST && leftValue >= rightValue)
        || (direction === DiffDirection.RESPONSE && leftValue <= rightValue)),
    maxLength: (leftValue: number, rightValue: number, direction: DiffDirection) => ((direction === DiffDirection.REQUEST && leftValue <= rightValue)
        || (direction === DiffDirection.RESPONSE && leftValue >= rightValue)),
    minItems: (leftValue: number, rightValue: number, direction: DiffDirection) => ((direction === DiffDirection.REQUEST && leftValue >= rightValue)
        || (direction === DiffDirection.RESPONSE && leftValue <= rightValue)),
    maxItems: (leftValue: number, rightValue: number, direction: DiffDirection) => ((direction === DiffDirection.REQUEST && leftValue <= rightValue)
        || (direction === DiffDirection.RESPONSE && leftValue >= rightValue)),
    minProperties: (leftValue: number, rightValue: number, direction: DiffDirection) => ((direction === DiffDirection.REQUEST && leftValue >= rightValue)
        || (direction === DiffDirection.RESPONSE && leftValue <= rightValue)),
    maxProperties: (leftValue: number, rightValue: number, direction: DiffDirection) => ((direction === DiffDirection.REQUEST && leftValue <= rightValue)
        || (direction === DiffDirection.RESPONSE && leftValue >= rightValue)),
    pattern: (leftValue: any, rightValue: any) => (leftValue === rightValue),
    format: (leftValue: any, rightValue: any) => (leftValue === rightValue),
    enum: (leftValue: string[], rightValue: string[]) => (leftValue.every(r => (rightValue.indexOf(r) !== -1))),
    required: (leftValue: string[], rightValue: string[], direction: DiffDirection) => ((direction === DiffDirection.REQUEST && rightValue.every(r => (leftValue.indexOf(r) !== -1)))
        || (direction === DiffDirection.RESPONSE && leftValue.every(r => (rightValue.indexOf(r) !== -1)))),
    readOnly: (leftValue: any, rightValue: any, direction: DiffDirection, isRequired: boolean) => (direction === DiffDirection.RESPONSE
        || leftValue === rightValue
        || (rightValue === false && !isRequired)),
    writeOnly: (leftValue: any, rightValue: any, direction: DiffDirection, isRequired: boolean) => (direction === DiffDirection.REQUEST
        || leftValue === rightValue
        || (rightValue === true && !isRequired)
        || (rightValue === false && !isRequired)),
    additionalProperties: (leftValue: any, rightValue: any, direction: DiffDirection) => (direction === DiffDirection.REQUEST && leftValue !== rightValue && rightValue !== false),
}
