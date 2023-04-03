import { ApiModelBackwardCompatibility, ApiModelPropertiesBackwardCompatibility } from "./backwardCompatibility"
import { DiffType, DiffDirection } from "./compareInterfaces"
import { ModelType } from "common/api/apiModel"


describe('Compare', () => {
    describe('Backward compatibility', () => {
        test('title', () => {
            const kLeftValue = 'value 1'
            const kRightValue = 'value 2'
            expect(ApiModelPropertiesBackwardCompatibility.title(null, null, null, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.title(null, kRightValue, null, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.title(kLeftValue, null, null, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.title(kLeftValue, kRightValue, null, null)).toBeTruthy()
        })
        test('example', () => {
            const kLeftValue = 'value 1'
            const kRightValue = 'value 2'
            expect(ApiModelPropertiesBackwardCompatibility.example(null, null, null, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.example(null, kRightValue, null, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.example(kLeftValue, null, null, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.example(kLeftValue, kRightValue, null, null)).toBeTruthy()
        })
        test('description', () => {
            const kLeftValue = 'value 1'
            const kRightValue = 'value 2'
            expect(ApiModelPropertiesBackwardCompatibility.description(null, null, null, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.description(null, kRightValue, null, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.description(kLeftValue, null, null, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.description(kLeftValue, kRightValue, null, null)).toBeTruthy()
        })
        test('type', () => {
            const kLeftValue = ModelType.Array
            const kRightValue = ModelType.Object
            expect(ApiModelPropertiesBackwardCompatibility.type(kLeftValue, kLeftValue, null, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.type(kLeftValue, kRightValue, null, null)).toBeFalsy()
        })
        test('min', () => {
            const kSmall = 3
            const kLarge = 9
            const params = ['minLength', 'minItems', 'minProperties'] as const
            for (const param of params) {
                expect(ApiModelPropertiesBackwardCompatibility[param](null, null, DiffDirection.REQUEST, null)).toBeTruthy()
                expect(ApiModelPropertiesBackwardCompatibility[param](null, null, DiffDirection.RESPONSE, null)).toBeTruthy()
                expect(ApiModelPropertiesBackwardCompatibility[param](kSmall, null, DiffDirection.REQUEST, null)).toBeTruthy()
                expect(ApiModelPropertiesBackwardCompatibility[param](kSmall, null, DiffDirection.RESPONSE, null)).toBeFalsy()
                expect(ApiModelPropertiesBackwardCompatibility[param](null, kSmall, DiffDirection.REQUEST, null)).toBeFalsy()
                expect(ApiModelPropertiesBackwardCompatibility[param](null, kSmall, DiffDirection.RESPONSE, null)).toBeTruthy()
                expect(ApiModelPropertiesBackwardCompatibility[param](kSmall, kSmall, DiffDirection.REQUEST, null)).toBeTruthy()
                expect(ApiModelPropertiesBackwardCompatibility[param](kSmall, kSmall, DiffDirection.RESPONSE, null)).toBeTruthy()
                expect(ApiModelPropertiesBackwardCompatibility[param](kSmall, kLarge, DiffDirection.REQUEST, null)).toBeFalsy()
                expect(ApiModelPropertiesBackwardCompatibility[param](kSmall, kLarge, DiffDirection.RESPONSE, null)).toBeTruthy()
                expect(ApiModelPropertiesBackwardCompatibility[param](kLarge, kSmall, DiffDirection.REQUEST, null)).toBeTruthy()
                expect(ApiModelPropertiesBackwardCompatibility[param](kLarge, kSmall, DiffDirection.RESPONSE, null)).toBeFalsy()
            }
        })
        test('max', () => {
            const kSmall = 3
            const kLarge = 9
            const params = ['maxLength', 'maxItems', 'maxProperties'] as const
            for (const param of params) {
                expect(ApiModelPropertiesBackwardCompatibility[param](null, null, DiffDirection.REQUEST, null)).toBeTruthy()
                expect(ApiModelPropertiesBackwardCompatibility[param](null, null, DiffDirection.RESPONSE, null)).toBeTruthy()
                expect(ApiModelPropertiesBackwardCompatibility[param](kSmall, null, DiffDirection.REQUEST, null)).toBeTruthy()
                expect(ApiModelPropertiesBackwardCompatibility[param](kSmall, null, DiffDirection.RESPONSE, null)).toBeFalsy()
                expect(ApiModelPropertiesBackwardCompatibility[param](null, kSmall, DiffDirection.REQUEST, null)).toBeFalsy()
                expect(ApiModelPropertiesBackwardCompatibility[param](null, kSmall, DiffDirection.RESPONSE, null)).toBeTruthy()
                expect(ApiModelPropertiesBackwardCompatibility[param](kSmall, kSmall, DiffDirection.REQUEST, null)).toBeTruthy()
                expect(ApiModelPropertiesBackwardCompatibility[param](kSmall, kSmall, DiffDirection.RESPONSE, null)).toBeTruthy()
                expect(ApiModelPropertiesBackwardCompatibility[param](kSmall, kLarge, DiffDirection.REQUEST, null)).toBeTruthy()
                expect(ApiModelPropertiesBackwardCompatibility[param](kSmall, kLarge, DiffDirection.RESPONSE, null)).toBeFalsy()
                expect(ApiModelPropertiesBackwardCompatibility[param](kLarge, kSmall, DiffDirection.REQUEST, null)).toBeFalsy()
                expect(ApiModelPropertiesBackwardCompatibility[param](kLarge, kSmall, DiffDirection.RESPONSE, null)).toBeTruthy()
            }
        })
        test('pattern', () => {
            const kLeftValue = 'value 1'
            const kRightValue = 'value 2'
            expect(ApiModelPropertiesBackwardCompatibility.pattern(null, null, null, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.pattern(null, kRightValue, null, null)).toBeFalsy()
            expect(ApiModelPropertiesBackwardCompatibility.pattern(kLeftValue, null, null, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.pattern(kLeftValue, kRightValue, null, null)).toBeFalsy()
        })
        test('format', () => {
            const kLeftValue = 'date'
            const kRightValue = 'datetime'
            expect(ApiModelPropertiesBackwardCompatibility.format(null, null, null, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.format(null, kRightValue, null, null)).toBeFalsy()
            expect(ApiModelPropertiesBackwardCompatibility.format(kLeftValue, null, null, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.format(kLeftValue, kRightValue, null, null)).toBeFalsy()
        })
        test('enum', () => {
            const kArrayLess = ['value 1', 'value 2']
            const kArrayMore = ['value 1', 'value 2', 'value 3']
            expect(ApiModelPropertiesBackwardCompatibility.enum(null, null, DiffDirection.REQUEST, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.enum(null, null, DiffDirection.RESPONSE, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.enum(kArrayLess, null, DiffDirection.REQUEST, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.enum(kArrayLess, null, DiffDirection.RESPONSE, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.enum(null, kArrayLess, DiffDirection.REQUEST, null)).toBeFalsy()
            expect(ApiModelPropertiesBackwardCompatibility.enum(null, kArrayLess, DiffDirection.RESPONSE, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.enum(kArrayLess, kArrayLess, DiffDirection.REQUEST, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.enum(kArrayLess, kArrayLess, DiffDirection.RESPONSE, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.enum(kArrayLess, kArrayMore, DiffDirection.REQUEST, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.enum(kArrayLess, kArrayMore, DiffDirection.RESPONSE, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.enum(kArrayMore, kArrayLess, DiffDirection.REQUEST, null)).toBeFalsy()
            expect(ApiModelPropertiesBackwardCompatibility.enum(kArrayMore, kArrayLess, DiffDirection.RESPONSE, null)).toBeTruthy()
        })
        test('required', () => {
            const kArrayLess = ['value 1', 'value 2']
            const kArrayMore = ['value 1', 'value 2', 'value 3']
            expect(ApiModelPropertiesBackwardCompatibility.required(null, null, DiffDirection.REQUEST, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.required(null, null, DiffDirection.RESPONSE, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.required(kArrayLess, null, DiffDirection.REQUEST, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.required(kArrayLess, null, DiffDirection.RESPONSE, null)).toBeFalsy()
            expect(ApiModelPropertiesBackwardCompatibility.required(null, kArrayLess, DiffDirection.REQUEST, null)).toBeFalsy()
            expect(ApiModelPropertiesBackwardCompatibility.required(null, kArrayLess, DiffDirection.RESPONSE, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.required(kArrayLess, kArrayLess, DiffDirection.REQUEST, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.required(kArrayLess, kArrayLess, DiffDirection.RESPONSE, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.required(kArrayLess, kArrayMore, DiffDirection.REQUEST, null)).toBeFalsy()
            expect(ApiModelPropertiesBackwardCompatibility.required(kArrayLess, kArrayMore, DiffDirection.RESPONSE, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.required(kArrayMore, kArrayLess, DiffDirection.REQUEST, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.required(kArrayMore, kArrayLess, DiffDirection.RESPONSE, null)).toBeFalsy()
        })
        test('readOnly', () => {
            expect(ApiModelPropertiesBackwardCompatibility.readOnly(null, null, DiffDirection.REQUEST, false)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.readOnly(null, null, DiffDirection.RESPONSE, false)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.readOnly(null, null, DiffDirection.REQUEST, true)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.readOnly(null, null, DiffDirection.RESPONSE, true)).toBeTruthy()

            expect(ApiModelPropertiesBackwardCompatibility.readOnly(false, null, DiffDirection.REQUEST, false)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.readOnly(false, null, DiffDirection.RESPONSE, false)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.readOnly(false, null, DiffDirection.REQUEST, true)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.readOnly(false, null, DiffDirection.RESPONSE, true)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.readOnly(null, false, DiffDirection.REQUEST, false)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.readOnly(null, false, DiffDirection.RESPONSE, false)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.readOnly(null, false, DiffDirection.REQUEST, true)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.readOnly(null, false, DiffDirection.RESPONSE, true)).toBeTruthy()

            expect(ApiModelPropertiesBackwardCompatibility.readOnly(true, null, DiffDirection.REQUEST, false)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.readOnly(true, null, DiffDirection.RESPONSE, false)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.readOnly(true, null, DiffDirection.REQUEST, true)).toBeFalsy()
            expect(ApiModelPropertiesBackwardCompatibility.readOnly(true, null, DiffDirection.RESPONSE, true)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.readOnly(null, true, DiffDirection.REQUEST, false)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.readOnly(null, true, DiffDirection.RESPONSE, false)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.readOnly(null, true, DiffDirection.REQUEST, true)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.readOnly(null, true, DiffDirection.RESPONSE, true)).toBeTruthy()

            expect(ApiModelPropertiesBackwardCompatibility.readOnly(true, false, DiffDirection.REQUEST, false)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.readOnly(true, false, DiffDirection.RESPONSE, false)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.readOnly(true, false, DiffDirection.REQUEST, true)).toBeFalsy()
            expect(ApiModelPropertiesBackwardCompatibility.readOnly(true, false, DiffDirection.RESPONSE, true)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.readOnly(false, true, DiffDirection.REQUEST, false)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.readOnly(false, true, DiffDirection.RESPONSE, false)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.readOnly(false, true, DiffDirection.REQUEST, true)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.readOnly(false, true, DiffDirection.RESPONSE, true)).toBeTruthy()

            expect(ApiModelPropertiesBackwardCompatibility.readOnly(false, false, DiffDirection.REQUEST, false)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.readOnly(false, false, DiffDirection.RESPONSE, false)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.readOnly(false, false, DiffDirection.REQUEST, true)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.readOnly(false, false, DiffDirection.RESPONSE, true)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.readOnly(true, true, DiffDirection.REQUEST, false)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.readOnly(true, true, DiffDirection.RESPONSE, false)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.readOnly(true, true, DiffDirection.REQUEST, true)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.readOnly(true, true, DiffDirection.RESPONSE, true)).toBeTruthy()
        })
        test('writeOnly', () => {
            expect(ApiModelPropertiesBackwardCompatibility.writeOnly(null, null, DiffDirection.REQUEST, false)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.writeOnly(null, null, DiffDirection.RESPONSE, false)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.writeOnly(null, null, DiffDirection.REQUEST, true)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.writeOnly(null, null, DiffDirection.RESPONSE, true)).toBeTruthy()

            expect(ApiModelPropertiesBackwardCompatibility.writeOnly(false, null, DiffDirection.REQUEST, false)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.writeOnly(false, null, DiffDirection.RESPONSE, false)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.writeOnly(false, null, DiffDirection.REQUEST, true)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.writeOnly(false, null, DiffDirection.RESPONSE, true)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.writeOnly(null, false, DiffDirection.REQUEST, false)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.writeOnly(null, false, DiffDirection.RESPONSE, false)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.writeOnly(null, false, DiffDirection.REQUEST, true)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.writeOnly(null, false, DiffDirection.RESPONSE, true)).toBeTruthy()

            expect(ApiModelPropertiesBackwardCompatibility.writeOnly(true, null, DiffDirection.REQUEST, false)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.writeOnly(true, null, DiffDirection.RESPONSE, false)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.writeOnly(true, null, DiffDirection.REQUEST, true)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.writeOnly(true, null, DiffDirection.RESPONSE, true)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.writeOnly(null, true, DiffDirection.REQUEST, false)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.writeOnly(null, true, DiffDirection.RESPONSE, false)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.writeOnly(null, true, DiffDirection.REQUEST, true)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.writeOnly(null, true, DiffDirection.RESPONSE, true)).toBeFalsy()

            expect(ApiModelPropertiesBackwardCompatibility.writeOnly(true, false, DiffDirection.REQUEST, false)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.writeOnly(true, false, DiffDirection.RESPONSE, false)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.writeOnly(true, false, DiffDirection.REQUEST, true)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.writeOnly(true, false, DiffDirection.RESPONSE, true)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.writeOnly(false, true, DiffDirection.REQUEST, false)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.writeOnly(false, true, DiffDirection.RESPONSE, false)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.writeOnly(false, true, DiffDirection.REQUEST, true)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.writeOnly(false, true, DiffDirection.RESPONSE, true)).toBeFalsy()

            expect(ApiModelPropertiesBackwardCompatibility.writeOnly(false, false, DiffDirection.REQUEST, false)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.writeOnly(false, false, DiffDirection.RESPONSE, false)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.writeOnly(false, false, DiffDirection.REQUEST, true)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.writeOnly(false, false, DiffDirection.RESPONSE, true)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.writeOnly(true, true, DiffDirection.REQUEST, false)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.writeOnly(true, true, DiffDirection.RESPONSE, false)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.writeOnly(true, true, DiffDirection.REQUEST, true)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.writeOnly(true, true, DiffDirection.RESPONSE, true)).toBeTruthy()
        })
        test('additionalProperties', () => {
            expect(ApiModelPropertiesBackwardCompatibility.additionalProperties(null, null, DiffDirection.REQUEST, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.additionalProperties(null, null, DiffDirection.RESPONSE, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.additionalProperties(false, false, DiffDirection.REQUEST, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.additionalProperties(false, false, DiffDirection.RESPONSE, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.additionalProperties(true, true, DiffDirection.REQUEST, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.additionalProperties(true, true, DiffDirection.RESPONSE, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.additionalProperties({}, {}, DiffDirection.REQUEST, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.additionalProperties({}, {}, DiffDirection.RESPONSE, null)).toBeTruthy()

            expect(ApiModelPropertiesBackwardCompatibility.additionalProperties(true, null, DiffDirection.REQUEST, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.additionalProperties(true, null, DiffDirection.RESPONSE, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.additionalProperties(null, true, DiffDirection.REQUEST, null)).toBeFalsy()
            expect(ApiModelPropertiesBackwardCompatibility.additionalProperties(null, true, DiffDirection.RESPONSE, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.additionalProperties(false, null, DiffDirection.REQUEST, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.additionalProperties(false, null, DiffDirection.RESPONSE, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.additionalProperties(null, false, DiffDirection.REQUEST, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.additionalProperties(null, false, DiffDirection.RESPONSE, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.additionalProperties({}, null, DiffDirection.REQUEST, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.additionalProperties({}, null, DiffDirection.RESPONSE, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.additionalProperties(null, {}, DiffDirection.REQUEST, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.additionalProperties(null, {}, DiffDirection.RESPONSE, null)).toBeTruthy()

            expect(ApiModelPropertiesBackwardCompatibility.additionalProperties(false, true, DiffDirection.REQUEST, null)).toBeFalsy()
            expect(ApiModelPropertiesBackwardCompatibility.additionalProperties(false, true, DiffDirection.RESPONSE, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.additionalProperties(true, false, DiffDirection.REQUEST, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.additionalProperties(true, false, DiffDirection.RESPONSE, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.additionalProperties({}, true, DiffDirection.REQUEST, null)).toBeFalsy()
            expect(ApiModelPropertiesBackwardCompatibility.additionalProperties({}, true, DiffDirection.RESPONSE, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.additionalProperties(true, {}, DiffDirection.REQUEST, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.additionalProperties(true, {}, DiffDirection.RESPONSE, null)).toBeTruthy()

            expect(ApiModelPropertiesBackwardCompatibility.additionalProperties({}, false, DiffDirection.REQUEST, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.additionalProperties({}, false, DiffDirection.RESPONSE, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.additionalProperties(false, {}, DiffDirection.REQUEST, null)).toBeTruthy()
            expect(ApiModelPropertiesBackwardCompatibility.additionalProperties(false, {}, DiffDirection.RESPONSE, null)).toBeTruthy()
        })
        test('model', () => {
            expect(ApiModelBackwardCompatibility(DiffType.ADDED, DiffDirection.REQUEST, false)).toBeTruthy()
            expect(ApiModelBackwardCompatibility(DiffType.MODIFIED, DiffDirection.REQUEST, false)).toBeTruthy()
            expect(ApiModelBackwardCompatibility(DiffType.NO_CHANGES, DiffDirection.REQUEST, false)).toBeTruthy()
            expect(ApiModelBackwardCompatibility(DiffType.REMOVED, DiffDirection.REQUEST, false)).toBeTruthy()

            expect(ApiModelBackwardCompatibility(DiffType.ADDED, DiffDirection.RESPONSE, false)).toBeTruthy()
            expect(ApiModelBackwardCompatibility(DiffType.MODIFIED, DiffDirection.RESPONSE, false)).toBeTruthy()
            expect(ApiModelBackwardCompatibility(DiffType.NO_CHANGES, DiffDirection.RESPONSE, false)).toBeTruthy()
            expect(ApiModelBackwardCompatibility(DiffType.REMOVED, DiffDirection.RESPONSE, false)).toBeTruthy()

            expect(ApiModelBackwardCompatibility(DiffType.ADDED, DiffDirection.REQUEST, true)).toBeFalsy()
            expect(ApiModelBackwardCompatibility(DiffType.MODIFIED, DiffDirection.REQUEST, true)).toBeFalsy()
            expect(ApiModelBackwardCompatibility(DiffType.NO_CHANGES, DiffDirection.REQUEST, true)).toBeTruthy()
            expect(ApiModelBackwardCompatibility(DiffType.REMOVED, DiffDirection.REQUEST, true)).toBeTruthy()

            expect(ApiModelBackwardCompatibility(DiffType.ADDED, DiffDirection.RESPONSE, true)).toBeTruthy()
            expect(ApiModelBackwardCompatibility(DiffType.MODIFIED, DiffDirection.RESPONSE, true)).toBeFalsy()
            expect(ApiModelBackwardCompatibility(DiffType.NO_CHANGES, DiffDirection.RESPONSE, true)).toBeTruthy()
            expect(ApiModelBackwardCompatibility(DiffType.REMOVED, DiffDirection.RESPONSE, true)).toBeFalsy()
        })
    })
})

export { }