import { mergeAllOfDefinitions, type ApiModelDoc } from "./apiModel"

describe('ApiModel', () => {
    describe('mergeAllOfDefinitions', () => {
        test('Object without allOf', () => {
            const kInput: ApiModelDoc = {
                type: 'object',
                properties: {
                    name: { type: 'string' },
                    surname: { type: 'string' },
                }
            }
            const kExpected = kInput
            expect(mergeAllOfDefinitions(kInput)).toEqual(kExpected)
        })
    })
})

export { }