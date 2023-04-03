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
export type CompatibilityMapKey = typeof ApiModelDocMetadata[number]
type CompatibilityMap = { [K in CompatibilityMapKey]?: (leftValue: any, rightValue: any, direction: DiffDirection, isRequired: boolean) => boolean }
export const ApiModelPropertiesBackwardCompatibility: CompatibilityMap = {
    title: () => true,
    example: () => true,
    description: () => true,
    type: (leftValue: any, rightValue: any) => (rightValue !== null && leftValue === rightValue),
    minLength: (leftValue: number, rightValue: number, direction: DiffDirection) => ((direction === DiffDirection.REQUEST && (rightValue === null || (leftValue !== null && leftValue >= rightValue)))
        || (direction === DiffDirection.RESPONSE && (leftValue === null || (rightValue !== null && leftValue <= rightValue)))),
    maxLength: (leftValue: number, rightValue: number, direction: DiffDirection) => ((direction === DiffDirection.REQUEST && (rightValue === null || (leftValue !== null && leftValue <= rightValue)))
        || (direction === DiffDirection.RESPONSE && (leftValue === null || (rightValue !== null && leftValue >= rightValue)))),
    minItems: (leftValue: number, rightValue: number, direction: DiffDirection) => ((direction === DiffDirection.REQUEST && (rightValue === null || (leftValue !== null && leftValue >= rightValue)))
        || (direction === DiffDirection.RESPONSE && (leftValue === null || (rightValue !== null && leftValue <= rightValue)))),
    maxItems: (leftValue: number, rightValue: number, direction: DiffDirection) => ((direction === DiffDirection.REQUEST && (rightValue === null || (leftValue !== null && leftValue <= rightValue)))
        || (direction === DiffDirection.RESPONSE && (leftValue === null || (rightValue !== null && leftValue >= rightValue)))),
    minProperties: (leftValue: number, rightValue: number, direction: DiffDirection) => ((direction === DiffDirection.REQUEST && (rightValue === null || (leftValue !== null && leftValue >= rightValue)))
        || (direction === DiffDirection.RESPONSE && (leftValue === null || (rightValue !== null && leftValue <= rightValue)))),
    maxProperties: (leftValue: number, rightValue: number, direction: DiffDirection) => ((direction === DiffDirection.REQUEST && (rightValue === null || (leftValue !== null && leftValue <= rightValue)))
        || (direction === DiffDirection.RESPONSE && (leftValue === null || (rightValue !== null && leftValue >= rightValue)))),
    pattern: (leftValue: any, rightValue: any) => (rightValue === null || leftValue === rightValue),
    format: (leftValue: any, rightValue: any) => (rightValue === null || leftValue === rightValue),
    enum: (leftValue: string[], rightValue: string[], direction: DiffDirection) => ((direction === DiffDirection.RESPONSE)
        || (rightValue === null)
        || (leftValue !== null && leftValue.every(r => (rightValue.indexOf(r) !== -1)))),
    required: (leftValue: string[], rightValue: string[], direction: DiffDirection) => ((direction === DiffDirection.REQUEST && (rightValue === null || leftValue !== null && rightValue.every(r => (leftValue.indexOf(r) !== -1))))
        || (direction === DiffDirection.RESPONSE && (leftValue === null || rightValue !== null && leftValue.every(r => (rightValue.indexOf(r) !== -1))))),
    readOnly: (leftValue: any, rightValue: any, direction: DiffDirection, isRequired: boolean) => (direction === DiffDirection.RESPONSE
        || isRequired === false
        || leftValue !== true
        || rightValue === true),
    writeOnly: (leftValue: any, rightValue: any, direction: DiffDirection, isRequired: boolean) => (direction === DiffDirection.REQUEST
        || isRequired === false
        || rightValue !== true
        || leftValue === true),
    additionalProperties: (leftValue: any, rightValue: any, direction: DiffDirection) => (direction === DiffDirection.RESPONSE
        || rightValue !== true
        || leftValue === true
    ),
}

export const ApiModelBackwardCompatibility = (diffType: DiffType, direction: DiffDirection, isRequired: boolean): boolean => (diffType === DiffType.NO_CHANGES
    || isRequired === false
    || (direction === DiffDirection.REQUEST && diffType === DiffType.REMOVED)
    || (direction === DiffDirection.RESPONSE && diffType === DiffType.ADDED))
