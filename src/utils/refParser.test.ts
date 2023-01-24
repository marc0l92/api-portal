import { resolveReferences } from './refParser'

describe('RefParser', () => {
    describe('resolveReferences', () => {
        test('Not an object', () => {
            const kInput = { a: 1, b: 2 }
            const kExpected = kInput
            expect(resolveReferences(kInput)).toEqual(kExpected)
        })

        test('Object without references', () => {
            const kInput = { a: 1, b: 2 }
            const kExpected = kInput
            expect(resolveReferences(kInput)).toEqual(kExpected)
        })

        test('Object with simple reference', () => {
            const kInput = { a: { c: 1 }, b: { '$ref': '#/a' } }
            const kExpected = { a: { c: 1 }, b: { c: 1 } }
            expect(resolveReferences(kInput)).toEqual(kExpected)
        })

        test('Object with simple reference and override description', () => {
            const kInput = { a: { c: 1, desc: 'global' }, b: { '$ref': '#/a', desc: 'local' } }
            const kExpected = { a: { c: 1, desc: 'global' }, b: { c: 1, desc: 'local' } }
            expect(resolveReferences(kInput)).toEqual(kExpected)
        })

        test('Object with not local reference', () => {
            const kInput = { a: { c: 1 }, b: { '$ref': 'https://www.example.com/model.json' } }
            const kExpected = new Error('Only local references are supported')
            expect(() => resolveReferences(kInput)).toThrow(kExpected)
        })

        test('Object with wrong reference', () => {
            const kInput = { a: { c: 1 }, b: { '$ref': '#/d' } }
            const kExpected = new Error('Reference not found: #/d')
            expect(() => resolveReferences(kInput)).toThrow(kExpected)
        })
    })
})

export { }