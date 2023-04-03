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