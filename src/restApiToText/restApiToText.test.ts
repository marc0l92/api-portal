jest.mock('./dictionaryApi', () => { return { queryDictionary: jest.fn() } })

import * as DictionaryApi from './dictionaryApi'
// (DictionaryApi.queryDictionary as jest.Mock).mockReturnValue(kIssue);

describe('RestApiToText.test', () => {

    describe('apiToTokens', () => {
        test.todo('Create tests')
    })

    describe('apiTokensToString', () => {
        test.todo('Create tests')
    })
})

export { }