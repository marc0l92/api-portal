import { fuzzySearchMatch } from "./search"


describe('Search', () => {
    describe('fuzzySearchMatch', () => {
        test('Equal strings', () => {
            const kKey = 'aaaa'
            const kItem = 'aaaa'
            expect(fuzzySearchMatch(kKey, kItem)).toBeTruthy()
        })
        test('Different strings', () => {
            const kKey = 'aaaa'
            const kItem = 'bbbb'
            expect(fuzzySearchMatch(kKey, kItem)).toBeFalsy()
        })
        test('Case insensitive match', () => {
            const kKey = 'aaaa'
            const kItem = 'AAAA'
            expect(fuzzySearchMatch(kKey, kItem)).toBeTruthy()
        })
        test('Start with shorter strings', () => {
            const kKey = 'aa'
            const kItem = 'aaaaaa'
            expect(fuzzySearchMatch(kKey, kItem)).toBeTruthy()
        })
        test('Start with longer strings', () => {
            const kKey  = 'aaaaaaaaaaa'
            const kItem = 'aaaaaa'
            expect(fuzzySearchMatch(kKey, kItem)).toBeFalsy()
        })
        test('Contains strings', () => {
            const kKey = 'rtyu'
            const kItem = 'qwertyuiop'
            expect(fuzzySearchMatch(kKey, kItem)).toBeTruthy()
        })
        test('Ends with strings', () => {
            const kKey = 'uiop'
            const kItem = 'qwertyuiop'
            expect(fuzzySearchMatch(kKey, kItem)).toBeTruthy()
        })
        test('Escape regular expressions', () => {
            const kKey = '+{/\\tt'
            const kItem = 'c+{/\\tt=^@#$'
            expect(fuzzySearchMatch(kKey, kItem)).toBeTruthy()
        })
        test('Begin of multiple words', () => {
            const kKey = 'SWA pet opena'
            const kItem = 'swagger_ .+-#  petstore-OPENapi'
            expect(fuzzySearchMatch(kKey, kItem)).toBeTruthy()
        })
    })
})

export { }