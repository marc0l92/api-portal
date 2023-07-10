import { DiffDirection, type ApiModelDocMetadata, DiffType } from './compareInterfaces'
type CompatibilityFunction = (leftValue: any, rightValue: any, direction: DiffDirection, isRequired: boolean) => boolean
type CompatibilityMap = { [K in typeof ApiModelDocMetadata[number]]?: (leftValue: any, rightValue: any, direction: DiffDirection, isRequired: boolean) => boolean }

const minCheck: CompatibilityFunction = (leftValue: number, rightValue: number, direction: DiffDirection) => ((direction === DiffDirection.REQUEST && (rightValue === null || (leftValue !== null && leftValue >= rightValue)))
    || (direction === DiffDirection.RESPONSE && (leftValue === null || (rightValue !== null && leftValue <= rightValue))))
const maxCheck: CompatibilityFunction = (leftValue: number, rightValue: number, direction: DiffDirection) => ((direction === DiffDirection.REQUEST && (rightValue === null || (leftValue !== null && leftValue <= rightValue)))
    || (direction === DiffDirection.RESPONSE && (leftValue === null || (rightValue !== null && leftValue >= rightValue))))
const equalCheck: CompatibilityFunction = (leftValue: any, rightValue: any) => (rightValue !== null && leftValue === rightValue)
const equalOrNullCheck: CompatibilityFunction = (leftValue: any, rightValue: any) => (rightValue === null || leftValue === rightValue)
const noCheck: CompatibilityFunction = () => true


export const ApiModelPropertiesBackwardCompatibility: CompatibilityMap = {
    title: noCheck,
    example: noCheck,
    description: noCheck,
    type: equalCheck,
    minLength: minCheck,
    maxLength: maxCheck,
    minItems: minCheck,
    maxItems: maxCheck,
    minProperties: minCheck,
    maxProperties: maxCheck,
    minimum: minCheck,
    maximum: maxCheck,
    exclusiveMinimum: (leftValue: any, rightValue: any, direction: DiffDirection) => (rightValue === leftValue || direction !== DiffDirection.REQUEST && rightValue !== true || direction !== DiffDirection.RESPONSE && rightValue === true),
    exclusiveMaximum: (leftValue: any, rightValue: any, direction: DiffDirection) => (rightValue === leftValue || direction !== DiffDirection.REQUEST && rightValue !== true || direction !== DiffDirection.RESPONSE && rightValue === true),
    pattern: equalOrNullCheck,
    format: equalOrNullCheck,
    collectionFormat: equalOrNullCheck,
    multipleOf: equalOrNullCheck,
    uniqueItems: equalOrNullCheck,
    default: noCheck,
    allowEmptyValue: (leftValue: any, rightValue: any, direction: DiffDirection, isRequired: boolean) => (rightValue === null || rightValue !== isRequired || leftValue === rightValue),
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
