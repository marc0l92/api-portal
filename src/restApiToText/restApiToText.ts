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
    subResource: {
        [k in ApiMethods]: (subResourceName: string, resourceId: string, collectionName: string) => string
    }
    controller: {
        controllerOnCollection: (controllerName: string, collectionName: string) => string
        controllerOnResource: (controllerName: string, resourceId: string, collectionName: string) => string
        controllerOnSubResource: (controllerName: string, subResourceName: string, resourceId: string, collectionName: string) => string
    }
    middle: {
        resourceAndCollection: (resourceId: string, collectionName: string) => string
        subResourceAndResourceAndCollection: (subResourceName: string, resourceId: string, collectionName: string) => string
    }
}

const UriNotCompleted = 'Uri not completed, continue typing...'

function checkAllowedCharacters(word: string, warnings: string[]) {
    if (!word.match(/^[a-z0-9\-]*$/)) {
        warnings.push(`The word "${word}" contains some characters not allowed. Allowed characters are: lowercase letters, numbers, hyphen`)
    }
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
    checkAllowedCharacters(collectionName, part.warnings)
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
    checkAllowedCharacters(subResourceName, part.warnings)
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
    checkAllowedCharacters(controllerName, part.warnings)
    // await checkIsNoun(controllerName, part.warnings)
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
                const token = await parseCollection(uriTokens[tokensIndex])
                if (!isFirstToken) {
                    if (!isLastToken || method !== ApiMethods.POST) {
                        token.alternativeTypes.push(ApiTokenType.SUB_RESOURCE)
                    }
                    if (isLastToken && method === ApiMethods.POST) {
                        token.alternativeTypes.push(ApiTokenType.CONTROLLER)
                    }
                }
                results.tokens.push(token)
            } else {
                if (isLastToken && method === ApiMethods.POST) {
                    results.tokens.push(await parseController(uriTokens[tokensIndex]))
                } else {
                    results.tokens.push(await parseResource(uriTokens[tokensIndex]))
                }
            }
            oddNotEven = !oddNotEven
            isFirstToken = false
            tokensIndex++
        }
    } else {
        results.errors.push(UriNotCompleted)
    }
    return results
}

export const refreshApiTokens = async (method: ApiMethods, tokens: ApiUriToken[], updatedIndex: number) => {
    let tokensIndex = 0

    // Skip version and capability
    while (tokensIndex < tokens.length && (tokens[tokensIndex].type == ApiTokenType.VERSION || tokens[tokensIndex].type == ApiTokenType.CAPABILITY)) {
        tokensIndex++
    }

    let nextTypes = [ApiTokenType.COLLECTION]
    let isFirstToken = true
    while (tokensIndex < tokens.length) {
        const token = tokens[tokensIndex]
        const isNextLastToken = tokensIndex === tokens.length - 2
        console.log({ token, tokensIndex, nextTypes })
        if (nextTypes.indexOf(token.type) >= 0) {
            if (tokensIndex === updatedIndex) {
                tokens[tokensIndex] = await parseByType(token.type, token.text)
                tokens[tokensIndex].alternativeTypes = token.alternativeTypes
            }
            switch (token.type) {
                case ApiTokenType.COLLECTION:
                    nextTypes = [ApiTokenType.RESOURCE]
                    if (isNextLastToken && !isFirstToken && method === ApiMethods.POST) {
                        nextTypes.push(ApiTokenType.CONTROLLER)
                    }
                    break
                case ApiTokenType.RESOURCE:
                    nextTypes = [ApiTokenType.COLLECTION]
                    if (!isNextLastToken || method !== ApiMethods.POST) {
                        nextTypes.push(ApiTokenType.SUB_RESOURCE)
                    }
                    if (isNextLastToken && method === ApiMethods.POST) {
                        nextTypes.push(ApiTokenType.CONTROLLER)
                    }
                    break
                case ApiTokenType.SUB_RESOURCE:
                    nextTypes = [ApiTokenType.COLLECTION]
                    if (isNextLastToken && method === ApiMethods.POST) {
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

export const rotateTokenType = (tokens: ApiUriToken[], toUpdateIndex: number): ApiUriToken[] => {
    const itemToChange = tokens[toUpdateIndex];
    itemToChange.alternativeTypes.push(itemToChange.type);
    itemToChange.type = itemToChange.alternativeTypes.shift();
    return tokens
}

export const apiTokensToString = (method: ApiMethods, tokens: ApiUriToken[]): string => {
    let text = ''
    let tokensIndex = tokens.length - 1
    let isFirstToken = true

    while (tokensIndex >= 0) {
        switch (tokens[tokensIndex].type) {
            case ApiTokenType.COLLECTION:
                if (isFirstToken) {
                    text += methodsVerb.collection[method](tokens[tokensIndex].text)
                }
                break
            case ApiTokenType.RESOURCE:
                if (tokensIndex >= 1 && tokens[tokensIndex - 1].type === ApiTokenType.COLLECTION) {
                    if (isFirstToken) {
                        if (method !== ApiMethods.POST) {
                            text += methodsVerb.resource[method](tokens[tokensIndex].text, tokens[tokensIndex - 1].text)
                        } else {
                            return 'Error: method POST not supported on resources'
                        }
                    } else {
                        text += methodsVerb.middle.resourceAndCollection(tokens[tokensIndex].text, tokens[tokensIndex - 1].text)
                    }
                    tokensIndex--
                } else {
                    return 'Error: the URI should start with a collection/resource'
                }
                break
            case ApiTokenType.SUB_RESOURCE:
                if (tokensIndex >= 2 && tokens[tokensIndex - 1].type === ApiTokenType.RESOURCE && tokens[tokensIndex - 2].type === ApiTokenType.COLLECTION) {
                    if (isFirstToken) {
                        if (method !== ApiMethods.POST) {
                            text += methodsVerb.subResource[method](tokens[tokensIndex].text, tokens[tokensIndex - 1].text, tokens[tokensIndex - 2].text)
                        } else {
                            return 'Error: method POST not supported on sub-resources'
                        }
                    } else {
                        text += methodsVerb.middle.subResourceAndResourceAndCollection(tokens[tokensIndex].text, tokens[tokensIndex - 1].text, tokens[tokensIndex - 2].text)
                    }
                    tokensIndex -= 2
                } else {
                    return 'Error: the URI should start with a collection/resource/sub-resource'
                }
                break
            case ApiTokenType.CONTROLLER:
                if (method === ApiMethods.POST && isFirstToken) {
                    if (tokensIndex >= 1 && tokens[tokensIndex - 1].type === ApiTokenType.COLLECTION) {
                        text += methodsVerb.controller.controllerOnCollection(tokens[tokensIndex].text, tokens[tokensIndex - 1].text)
                        tokensIndex--
                    } else if (tokensIndex >= 2 && tokens[tokensIndex - 1].type === ApiTokenType.RESOURCE && tokens[tokensIndex - 2].type === ApiTokenType.COLLECTION) {
                        text += methodsVerb.controller.controllerOnResource(tokens[tokensIndex].text, tokens[tokensIndex - 1].text, tokens[tokensIndex - 2].text)
                        tokensIndex -= 2
                    } else if (tokensIndex >= 3 && tokens[tokensIndex - 1].type === ApiTokenType.SUB_RESOURCE && tokens[tokensIndex - 2].type === ApiTokenType.RESOURCE && tokens[tokensIndex - 3].type === ApiTokenType.COLLECTION) {
                        text += methodsVerb.controller.controllerOnSubResource(tokens[tokensIndex].text, tokens[tokensIndex - 1].text, tokens[tokensIndex - 2].text, tokens[tokensIndex - 3].text)
                        tokensIndex -= 3
                    }
                } else {
                    return 'Error: it is possible to use controller only at the end of the URI with the method POST'
                }
                break
        }
        tokensIndex--
        isFirstToken = false
    }
    return text
}


const methodsVerb: MethodsVerbs = {
    resource: {
        GET: (resourceId: string, collectionName: string): string => `Retrieve the ${pluralize.singular(collectionName)} with id "${resourceId}"`,
        POST: (resourceId: string, collectionName: string): string => '',
        PUT: (resourceId: string, collectionName: string): string => `Replace with the one in request, the ${pluralize.singular(collectionName)} with id "${resourceId}"`,
        PATCH: (resourceId: string, collectionName: string): string => `Apply the changes listed in request to the ${pluralize.singular(collectionName)} with id "${resourceId}"`,
        DELETE: (resourceId: string, collectionName: string): string => `Delete the ${pluralize.singular(collectionName)} with id "${resourceId}"`,
    },
    collection: {
        GET: (collectionName: string): string => `Search in the ${collectionName}`,
        POST: (collectionName: string): string => `Create a new ${pluralize.singular(collectionName)}`,
        PUT: (collectionName: string): string => `Replace with the list in request all the ${collectionName}`,
        PATCH: (collectionName: string): string => `Replace with the list in request all the ${collectionName}`,
        DELETE: (collectionName: string): string => `Delete all the ${collectionName}`,
    },
    subResource: {
        GET: (subResourceName: string, resourceId: string, collectionName: string): string => `Retrieve the ${subResourceName} of the ${pluralize.singular(collectionName)} with id "${resourceId}"`,
        POST: (subResourceName: string, resourceId: string, collectionName: string): string => '',
        PUT: (subResourceName: string, resourceId: string, collectionName: string): string => `Replace with the one in request, the ${subResourceName} of the ${pluralize.singular(collectionName)} with id "${resourceId}"`,
        PATCH: (subResourceName: string, resourceId: string, collectionName: string): string => `Apply the changes listed in request to the ${subResourceName} of the ${pluralize.singular(collectionName)} with id "${resourceId}"`,
        DELETE: (subResourceName: string, resourceId: string, collectionName: string): string => `Delete the ${subResourceName} of the ${pluralize.singular(collectionName)} with id "${resourceId}"`,
    },
    controller: {
        controllerOnCollection: (controllerName: string, collectionName: string): string => `Perform the action of "${controllerName}" on the ${collectionName}`,
        controllerOnResource: (controllerName: string, resourceId: string, collectionName: string): string => `Perform the action of "${controllerName}" on the ${pluralize.singular(collectionName)} with id "${resourceId}"`,
        controllerOnSubResource: (controllerName, subResourceName, resourceId, collectionName) => `Perform the action of "${controllerName}" on the ${subResourceName}, of the ${pluralize.singular(collectionName)} with id "${resourceId}"`,
    },
    middle: {
        resourceAndCollection: (resourceId: string, collectionName: string) => `, of the ${pluralize.singular(collectionName)} with id "${resourceId}"`,
        subResourceAndResourceAndCollection: (subResourceName: string, resourceId: string, collectionName: string) => `, of the ${subResourceName} of the ${pluralize.singular(collectionName)} with id "${resourceId}"`,
    },
}