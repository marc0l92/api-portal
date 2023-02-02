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

        test('Object with simple reference with override', () => {
            const kInput = { a: { c: 1 }, b: { '$ref': '#/a', d: 2 } }
            const kExpected = { a: { c: 1 }, b: { c: 1, d: 2 } }
            expect(resolveReferences(kInput)).toEqual(kExpected)
        })

        test('Object with reference of reference', () => {
            const kInput = { a: { c: 1 }, b: { '$ref': '#/d' }, d: { '$ref': '#/a' } }
            const kExpected = { a: { c: 1 }, b: { c: 1 }, d: { c: 1 } }
            expect(resolveReferences(kInput)).toEqual(kExpected)
        })

        test('Object with reference of reference reverse', () => {
            const kInput = { a: { c: 1 }, d: { '$ref': '#/a' }, b: { '$ref': '#/d' } }
            const kExpected = { a: { c: 1 }, b: { c: 1 }, d: { c: 1 } }
            expect(resolveReferences(kInput)).toEqual(kExpected)
        })

        test('Object with deep reference', () => {
            const kInput = { a: { c: { d: 1 } }, b: { '$ref': '#/a/c' } }
            const kExpected = { a: { c: { d: 1 } }, b: { d: 1 } }
            expect(resolveReferences(kInput)).toEqual(kExpected)
        })

        test('Object with deep reference of reference', () => {
            const kInput = { a: { aa: { aaa: 1 } }, b: { bb: { '$ref': '#/a/aa' } }, c: { cc: { '$ref': '#/b' } } }
            const kExpected = { a: { aa: { aaa: 1 } }, b: { bb: { aaa: 1 } }, c: { cc: { bb: { aaa: 1 } } } }
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

        test('Object with reference to not object', () => {
            const kInput = { a: { c: 1 }, b: { '$ref': '#/a/c' } }
            const kExpected = new Error('Reference to not object items forbidden: #/a/c')
            expect(() => resolveReferences(kInput)).toThrow(kExpected)
        })

        test('Object with wrong reference', () => {
            const kInput = { a: { c: 1 }, b: { '$ref': '#/d' } }
            const kExpected = new Error('Reference not found: #/d')
            expect(() => resolveReferences(kInput)).toThrow(kExpected)
        })

        test('Object with cyclic reference', () => {
            const kInput = {
                a: { aa: 1, ab: { '$ref': '#/b' } },
                b: { ba: 2, bb: { '$ref': '#/c' } },
                c: { ca: 3, cb: { '$ref': '#/a' } }
            }
            const kExpected = {
                a: { aa: 1, ab: { ba: 2, bb: { ca: 3, cb: { aa: 1, ab: {} } } } },
                b: { ba: 2, bb: { ca: 3, cb: { aa: 1, ab: {} } } },
                c: { ca: 3, cb: { aa: 1, ab: {} } }
            }
            expect(resolveReferences(kInput)).toEqual(kExpected)
        })

        // test('Object with cyclic reference', () => {
        //     const kInput = {
        //         a: { aa: 1, ab: { '$ref': '#/b' } },
        //         b: { ba: 2, bb: { '$ref': '#/c' } },
        //         c: { ca: 3, cb: { '$ref': '#/a' } },
        //     }
        //     const kExpected = {
        //         a: { aa: 1, ab: { ba: 2, bb: {} } },
        //         b: { ba: 2, bb: {} },
        //         c: { ca: 3, cb: { aa: 1, ab: { ba: 2, bb: {} } } },
        //     }
        //     expect(resolveReferences(kInput)).toEqual(kExpected)
        // })

        test('Object with self reference', () => {
            const kInput = {
                a: { '$ref': '#/a' }
            }
            const kExpected = {
                a: {}
            }
            expect(resolveReferences(kInput)).toEqual(kExpected)
        })
    })
})

export { }