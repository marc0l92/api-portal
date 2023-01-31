const dictionaryApiUri = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

interface DictionaryApiResult {
    word: string
    meanings: {
        partOfSpeech: string
        definitions: {
            definition: string
        }[]
    }[]
}

export interface QueryResponse {
    found: boolean
    stats: {
        noun: number
        verb: number
        adjective: number
    }
    type: {
        isNoun: boolean
        isVerb: boolean
        isAdjective: boolean
    }
}

function computeType(queryResponse: QueryResponse): void {
    if (queryResponse.stats.noun >= queryResponse.stats.verb && queryResponse.stats.noun >= queryResponse.stats.adjective) {
        queryResponse.type.isNoun = true
    }
    if (queryResponse.stats.verb >= queryResponse.stats.noun && queryResponse.stats.verb >= queryResponse.stats.adjective) {
        queryResponse.type.isVerb = true
    }
    if (queryResponse.stats.adjective >= queryResponse.stats.noun && queryResponse.stats.adjective >= queryResponse.stats.verb) {
        queryResponse.type.isAdjective = true
    }
}

function convertStatsToPercentage(queryResponse: QueryResponse): void {
    const total = Math.max(1, queryResponse.stats.noun + queryResponse.stats.verb + queryResponse.stats.adjective)
    queryResponse.stats.noun = Math.round(queryResponse.stats.noun / total * 100)
    queryResponse.stats.verb = Math.round(queryResponse.stats.verb / total * 100)
    queryResponse.stats.adjective = Math.round(queryResponse.stats.adjective / total * 100)
}

export const queryDictionary = async (word: string): Promise<QueryResponse> => {
    const queryResponse: QueryResponse = {
        found: true,
        stats: { noun: 0, verb: 0, adjective: 0 },
        type: { isNoun: false, isVerb: false, isAdjective: false }
    }

    const response = await fetch(dictionaryApiUri + encodeURIComponent(word), { method: 'GET' })
    if (!response.ok) {
        queryResponse.found = false
        return queryResponse
    }

    const responseJson = await response.json() as DictionaryApiResult[]

    for (const result of responseJson) {
        for (const meaning of result.meanings) {
            switch (meaning.partOfSpeech) {
                case 'noun':
                    queryResponse.stats.noun += meaning.definitions.length
                    break
                case 'verb':
                    queryResponse.stats.verb += meaning.definitions.length
                    break
                case 'adjective':
                    queryResponse.stats.adjective += meaning.definitions.length
                    break
            }
        }
    }

    computeType(queryResponse)
    convertStatsToPercentage(queryResponse)
    return queryResponse
}

