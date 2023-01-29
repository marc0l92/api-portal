jest.mock('./dictionaryApi', () => { return { queryDictionary: jest.fn() } })

import { ApiMethods, apiToTokens, ApiTokenType, type RestApiToTextOptions, type RestApiToTextResults, type ApiUriToken, refreshApiTokens, apiTokensToString } from './restApiToText'
import * as DictionaryApi from './dictionaryApi'

const queryDictionaryMock = DictionaryApi.queryDictionary as jest.Mock

const kQueryDictionaryPass = {
    found: true, stats: { noun: 1, verb: 1, adjective: 1 }, type: { isNoun: true, isVerb: true, isAdjective: true }
}

function tokenByType(type: ApiTokenType, alternativeTypes: ApiTokenType[] = []): ApiUriToken {
    return { text: '', type, alternativeTypes, warnings: [] }
}
function tokenByTypeName(type: ApiTokenType, text: string): ApiUriToken {
    return { text, type, alternativeTypes: [], warnings: [] }
}

describe('RestApiToText.test', () => {

    describe('apiToTokens', () => {
        test('Empty URI', async () => {
            const kUri = ''
            const kMethod = ApiMethods.GET
            const kOptions: RestApiToTextOptions = { version: false, capability: false }

            expect(await apiToTokens(kMethod, kUri, kOptions)).toEqual({
                errors: ["Uri not completed, continue typing..."],
                tokens: [],
            } as RestApiToTextResults)
        })
        test('Collection URI', async () => {
            const kUri = '/books'
            const kMethods = Object.values(ApiMethods)
            const kOptions: RestApiToTextOptions = { version: false, capability: false }
            queryDictionaryMock.mockReturnValue(kQueryDictionaryPass)

            for (const method of kMethods) {
                expect(await apiToTokens(method, kUri, kOptions)).toEqual({
                    errors: [],
                    tokens: [{ text: 'books', type: ApiTokenType.COLLECTION, warnings: [], alternativeTypes: [] }],

                } as RestApiToTextResults)
            }
        })
        test('Resource URI', async () => {
            const kUri = '/books/12'
            const kMethods = Object.values(ApiMethods).filter(m => m !== ApiMethods.POST)
            const kOptions: RestApiToTextOptions = { version: false, capability: false }
            queryDictionaryMock.mockReturnValue(kQueryDictionaryPass)

            for (const method of kMethods) {
                expect(await apiToTokens(method, kUri, kOptions)).toEqual({
                    errors: [],
                    tokens: [
                        { text: 'books', type: ApiTokenType.COLLECTION, warnings: [], alternativeTypes: [] },
                        { text: '12', type: ApiTokenType.RESOURCE, warnings: [], alternativeTypes: [] },
                    ],
                } as RestApiToTextResults)
            }
        })
        test('Controller URI', async () => {
            const kUri = '/books/search'
            const kMethods = [ApiMethods.POST]
            const kOptions: RestApiToTextOptions = { version: false, capability: false }
            queryDictionaryMock.mockReturnValue(kQueryDictionaryPass)

            for (const method of kMethods) {
                expect(await apiToTokens(method, kUri, kOptions)).toEqual({
                    errors: [],
                    tokens: [
                        { text: 'books', type: ApiTokenType.COLLECTION, warnings: [], alternativeTypes: [] },
                        { text: 'search', type: ApiTokenType.CONTROLLER, warnings: [], alternativeTypes: [] },
                    ],
                } as RestApiToTextResults)
            }
        })
    })

    describe('refreshApiTokens', () => {
        test('Empty tokens sequence', async () => {
            const kMethod = ApiMethods.POST
            const kTokens: ApiUriToken[] = []

            expect(await refreshApiTokens(kMethod, kTokens, 2)).toEqual(kTokens)
        })
        test('Correct tokens sequence', async () => {
            const kMethod = ApiMethods.POST
            const kTokens: ApiUriToken[] = [
                tokenByType(ApiTokenType.COLLECTION),
                tokenByType(ApiTokenType.RESOURCE),
                tokenByType(ApiTokenType.COLLECTION),
                tokenByType(ApiTokenType.RESOURCE),
            ]

            expect(await refreshApiTokens(kMethod, kTokens, 2)).toEqual(kTokens)
        })
        test('Sub resource sequence', async () => {
            const kMethod = ApiMethods.POST
            const kTokens: ApiUriToken[] = [
                tokenByType(ApiTokenType.COLLECTION),
                tokenByType(ApiTokenType.RESOURCE),
                tokenByType(ApiTokenType.SUB_RESOURCE),
                tokenByType(ApiTokenType.COLLECTION),
            ]

            expect(await refreshApiTokens(kMethod, kTokens, 2)).toEqual(kTokens)
        })
    })

    describe('apiTokensToString', () => {
        test('Create new items in a collection', async () => {
            const kMethod = ApiMethods.POST
            const kTokens: ApiUriToken[] = [
                tokenByTypeName(ApiTokenType.COLLECTION, 'authors'),
                tokenByTypeName(ApiTokenType.RESOURCE, 'Dante'),
                tokenByTypeName(ApiTokenType.COLLECTION, 'books'),
            ]
            const kUriString = 'Create a new book of the author with id "Dante"'

            expect(await apiTokensToString(kMethod, kTokens)).toEqual(kUriString)
        })
        test('Retrieve resource', async () => {
            const kMethod = ApiMethods.GET
            const kTokens: ApiUriToken[] = [
                tokenByTypeName(ApiTokenType.COLLECTION, 'authors'),
                tokenByTypeName(ApiTokenType.RESOURCE, 'Dante'),
                tokenByTypeName(ApiTokenType.COLLECTION, 'books'),
                tokenByTypeName(ApiTokenType.RESOURCE, 'Divina-Commedia'),
            ]
            const kUriString = 'Retrieve the book with id "Divina-Commedia" of the author with id "Dante"'

            expect(await apiTokensToString(kMethod, kTokens)).toEqual(kUriString)
        })
    })
})

export { }