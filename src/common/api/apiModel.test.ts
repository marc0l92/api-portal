import { mergeAllOfDefinitions, ModelType, type ApiModelDoc } from "./apiModel"

describe('ApiModel', () => {
    describe('mergeAllOfDefinitions', () => {
        test('Object without allOf', () => {
            const kInput: ApiModelDoc = {
                type: ModelType.Object,
                properties: {
                    name: { type: ModelType.String },
                    surname: { type: ModelType.String },
                }
            }
            const kExpected = kInput
            expect(mergeAllOfDefinitions(kInput)).toEqual(kExpected)
        })
    })
})

export { }