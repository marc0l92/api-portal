const pluralize = require('pluralize')
import { queryDictionary } from './dictionaryApi'

export enum ApiTokenType {
    VERSION = 'version',
    CAPABILITY = 'capability',
    COLLECTION = 'collection',
    RESOURCE = 'resource',
    SUB_RESOURCE = 'sub-resource',
    CONTROLLER = 'controller',
}

export interface RestApiToTextResults {
    errors: string[]
    tokens: ApiUriToken[]
}

export interface ApiUriToken {
    text: string
    type: ApiTokenType
    warnings: string[]
    alternativeTypes: ApiTokenType[]
}

export interface RestApiToTextOptions {
    version?: boolean
    capability?: boolean
}

export enum ApiMethods {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE',
}

interface MethodsVerbs {
    resource: {
        [k in ApiMethods]: (resourceId: string, collectionName: string) => string
    }
    collection: {
        [k in ApiMethods]: (collectionName: string) => string
    }
    controller: (controllerName: string, resourceId: string, collectionName: string) => string
    resourceAndCollection: (resourceId: string, collectionName: string) => string
}

const UriNotCompleted = 'Uri not completed, continue typing...'

const methodsVerb: MethodsVerbs = {
    resource: {
        GET: (resourceId: string, collectionName: string): string => `Retrieve the ${pluralize.singular(collectionName)} with id ${resourceId}`,
        POST: (controllerName: string, collectionName: string): string => `Perform the action of ${controllerName} on the ${collectionName}`,
        PUT: (resourceId: string, collectionName: string): string => `Replace with the one in request, the ${pluralize.singular(collectionName)} with id ${resourceId}`,
        PATCH: (resourceId: string, collectionName: string): string => `Apply the changes listed in request to the ${pluralize.singular(collectionName)} with id ${resourceId}`,
        DELETE: (resourceId: string, collectionName: string): string => `Delete the ${pluralize.singular(collectionName)} with id ${resourceId}`,
    },
    collection: {
        GET: (collectionName: string): string => `Search in the ${collectionName}`,
        POST: (collectionName: string): string => `Create a new ${pluralize.singular(collectionName)}`,
        PUT: (collectionName: string): string => `Replace with the list in request all the ${collectionName}`,
        PATCH: (collectionName: string): string => `Replace with the list in request all the ${collectionName}`,
        DELETE: (collectionName: string): string => `Delete all the ${collectionName}`,
    },
    controller: (controllerName: string, resourceId: string, collectionName: string): string => `Perform the action of ${controllerName} on the ${pluralize.singular(collectionName)} with id ${resourceId}`,
    resourceAndCollection: (resourceId: string, collectionName: string) => ` of the ${pluralize.singular(collectionName)} with id ${resourceId}`,
}

async function checkIsNoun(word: string, warnings: string[]) {
    const dictionaryResult = await queryDictionary(word)
    if (!dictionaryResult.found) {
        warnings.push(`The word "${word}" is not present in the english dictionary`)
    } else if (!dictionaryResult.type.isNoun) {
        warnings.push(`The word "${word}" is not usually used as noun (noun: ${dictionaryResult.stats.noun}%, verb: ${dictionaryResult.stats.verb}%, adjective: ${dictionaryResult.stats.adjective}%)`)
    }
}

function parseVersion(version: string): ApiUriToken {
    const part: ApiUriToken = {
        type: ApiTokenType.VERSION,
        text: version,
        alternativeTypes: [],
        warnings: [],
    }
    if (!version.match(/^[vV]?\d+(\.\d+)?$/)) {
        part.warnings.push(`The version "${version}" has an invalid structure. Expected something like: v1`)
    }
    if (!version.match(/^v/)) {
        part.warnings.push(`The version "${version}" should start with a lowercase "v"`)
    }
    return part
}

async function parseCapability(capability: string): Promise<ApiUriToken> {
    const part: ApiUriToken = {
        type: ApiTokenType.CAPABILITY,
        text: capability,
        alternativeTypes: [],
        warnings: [],
    }
    if (!pluralize.isSingular(capability)) {
        part.warnings.push(`The capability "${capability}" should be a singular word`)
    }
    await checkIsNoun(capability, part.warnings)
    return part
}

async function parseCollection(collectionName: string): Promise<ApiUriToken> {
    const part: ApiUriToken = {
        type: ApiTokenType.COLLECTION,
        text: collectionName,
        alternativeTypes: [],
        warnings: [],
    }
    if (!pluralize.isPlural(collectionName)) {
        part.warnings.push(`The collection "${collectionName}" should be a plural word`)
    }
    await checkIsNoun(collectionName, part.warnings)
    return part
}

async function parseResource(resourceId: string): Promise<ApiUriToken> {
    const part: ApiUriToken = {
        type: ApiTokenType.RESOURCE,
        text: resourceId,
        alternativeTypes: [],
        warnings: [],
    }
    return part
}

async function parseSubResource(subResourceName: string): Promise<ApiUriToken> {
    const part: ApiUriToken = {
        type: ApiTokenType.SUB_RESOURCE,
        text: subResourceName,
        alternativeTypes: [],
        warnings: [],
    }
    if (!pluralize.isSingular(subResourceName)) {
        part.warnings.push(`The sub-resource "${subResourceName}" should be a singular word`)
    }
    await checkIsNoun(subResourceName, part.warnings)
    return part

}

async function parseController(controllerName: string): Promise<ApiUriToken> {
    const part: ApiUriToken = {
        type: ApiTokenType.CONTROLLER,
        text: controllerName,
        alternativeTypes: [],
        warnings: [],
    }
    if (!pluralize.isSingular(controllerName)) {
        part.warnings.push(`The controller "${controllerName}" should be a singular word`)
    }
    await checkIsNoun(controllerName, part.warnings)
    return part
}

async function parseByType(type: ApiTokenType, text: string): Promise<ApiUriToken> {
    switch (type) {
        case ApiTokenType.COLLECTION:
            return await parseCollection(text)
        case ApiTokenType.RESOURCE:
            return await parseResource(text)
        case ApiTokenType.SUB_RESOURCE:
            return await parseSubResource(text)
        case ApiTokenType.CONTROLLER:
            return await parseController(text)
    }
    return null
}

export const apiToTokens = async (method: ApiMethods, uri: string, options: RestApiToTextOptions): Promise<RestApiToTextResults> => {
    const results: RestApiToTextResults = { errors: [], tokens: [] }
    let uriTokens: string[] = uri.split('/').filter((part) => part !== '')
    const minParts = (options.version ? 1 : 0) + (options.capability ? 1 : 0) + 1

    if (uriTokens.length >= minParts) {
        let tokensIndex = 0
        if (options.version) {
            results.tokens.push(parseVersion(uriTokens[tokensIndex++]))
        }
        if (options.capability) {
            results.tokens.push(await parseCapability(uriTokens[tokensIndex++]))
        }
        let oddNotEven = true
        let isFirstToken = true
        while (tokensIndex < uriTokens.length) {
            const isLastToken = tokensIndex === uriTokens.length - 1
            if (oddNotEven) {
                const token = await parseCollection(uriTokens[tokensIndex++])
                if (!isFirstToken) {
                    if (isLastToken) {
                        token.alternativeTypes.push(ApiTokenType.CONTROLLER)
                    } else {
                        token.alternativeTypes.push(ApiTokenType.SUB_RESOURCE)
                    }
                }
                results.tokens.push(token)
            } else {
                if (isLastToken && method === ApiMethods.POST) {
                    results.tokens.push(await parseController(uriTokens[tokensIndex++]))
                } else {
                    results.tokens.push(await parseResource(uriTokens[tokensIndex++]))
                }
            }
            oddNotEven = !oddNotEven
            isFirstToken = false
        }
    } else {
        results.errors.push(UriNotCompleted)
    }
    return results
}

export const refreshApiTokens = async (method: ApiMethods, tokens: ApiUriToken[], updatedIndex: number) => {
    let tokensIndex = 0

    while (tokensIndex < tokens.length && (tokens[tokensIndex].type == ApiTokenType.VERSION || tokens[tokensIndex].type == ApiTokenType.CAPABILITY)) {
        tokensIndex++
    }

    let nextTypes = [ApiTokenType.COLLECTION]
    let isFirstToken = true
    while (tokensIndex < tokens.length) {
        const token = tokens[tokensIndex]
        console.log({ token, tokensIndex, nextTypes })
        if (nextTypes.indexOf(token.type) >= 0) {
            if (tokensIndex === updatedIndex) {
                tokens[tokensIndex] = await parseByType(token.type, token.text)
                tokens[tokensIndex].alternativeTypes = token.alternativeTypes
            }
            switch (token.type) {
                case ApiTokenType.COLLECTION:
                    nextTypes = [ApiTokenType.RESOURCE]
                    if (tokensIndex === tokens.length - 2 && !isFirstToken && method === ApiMethods.POST) {
                        nextTypes.push(ApiTokenType.CONTROLLER)
                    }
                    break
                case ApiTokenType.RESOURCE:
                    nextTypes = [ApiTokenType.COLLECTION, ApiTokenType.SUB_RESOURCE]
                    break
                case ApiTokenType.SUB_RESOURCE:
                    nextTypes = [ApiTokenType.COLLECTION]
                    if (tokensIndex === tokens.length - 2) {
                        nextTypes.push(ApiTokenType.CONTROLLER)
                    }
                    break
                case ApiTokenType.CONTROLLER:
                    nextTypes = []
                    if (tokensIndex !== tokens.length - 1) {
                        return null
                    }
                    break
                default:
                    console.error('Invalid token type')
                    return null
            }
            isFirstToken = false
            tokensIndex++
        } else {
            tokens[tokensIndex] = await parseByType(nextTypes[0], token.text)
            tokens[tokensIndex].alternativeTypes = nextTypes.slice(1)
        }
    }
    return tokens
}

export const apiTokensToString = (method: ApiMethods, tokens: ApiUriToken[]): string => {
    let text = ''
    for (const token of tokens) {
        switch (token.type) {

        }
    }
    return text
}