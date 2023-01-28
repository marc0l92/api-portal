const pluralize = require('pluralize')
import { queryDictionary } from './dictionaryApi'

export enum RestApiPartType {
    VERSION = 'version',
    CAPABILITY = 'capability',
    COLLECTION = 'collection',
    RESOURCE = 'resource',
    SUB_RESOURCE = 'sub-resource',
    CONTROLLER = 'controller',
}

export interface RestApiToTextResults {
    errors: string[]
    tokens: RestApiToTextUriTokens[]
}

export interface RestApiToTextUriTokens {
    text: string
    type: RestApiPartType
    warnings: string[]
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
        warnings.push(`The word "${word}" is not usually used as noun (noun:${dictionaryResult.stats.noun}%, verb:${dictionaryResult.stats.verb}%, adjective:${dictionaryResult.stats.adjective}%)`)
    }
}

function parseVersion(version: string): RestApiToTextUriTokens {
    const part: RestApiToTextUriTokens = {
        type: RestApiPartType.VERSION,
        text: version,
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

async function parseCapability(capability: string): Promise<RestApiToTextUriTokens> {
    const part: RestApiToTextUriTokens = {
        type: RestApiPartType.CAPABILITY,
        text: capability,
        warnings: [],
    }
    if (!pluralize.isSingular(capability)) {
        part.warnings.push(`The capability "${capability}" should be a singular word`)
    }
    await checkIsNoun(capability, part.warnings)
    return part
}

async function parseCollection(collectionName: string): Promise<RestApiToTextUriTokens> {
    const part: RestApiToTextUriTokens = {
        type: RestApiPartType.COLLECTION,
        text: collectionName,
        warnings: [],
    }
    if (!pluralize.isPlural(collectionName)) {
        part.warnings.push(`The collection "${collectionName}" should be a plural word`)
    }
    await checkIsNoun(collectionName, part.warnings)
    return part
}

async function parseResource(resourceId: string): Promise<RestApiToTextUriTokens> {
    const part: RestApiToTextUriTokens = {
        type: RestApiPartType.RESOURCE,
        text: resourceId,
        warnings: [],
    }
    return part
}

async function parseController(controllerName: string): Promise<RestApiToTextUriTokens> {
    const part: RestApiToTextUriTokens = {
        type: RestApiPartType.CONTROLLER,
        text: controllerName,
        warnings: [],
    }
    await checkIsNoun(controllerName, part.warnings)
    return part
}

export const apiToTokens = async (method: ApiMethods, uri: string, options: RestApiToTextOptions): Promise<RestApiToTextResults> => {
    const results: RestApiToTextResults = { errors: [], tokens: [] }
    let uriParts1: string[] = uri.split('/').filter((part) => part !== '')
    let uriParts2: string[] = []
    const minParts = (options.version ? 1 : 0) + (options.capability ? 1 : 0) + 1

    if (uriParts1.length >= minParts) {
        const uriPrefix: RestApiToTextUriTokens[] = []
        if (options.version) {
            uriPrefix.push(parseVersion(uriParts1.splice(0, 1)[0]))
        }
        if (options.capability) {
            uriPrefix.push(await parseCapability(uriParts1.splice(0, 1)[0]))
        }
        uriParts1 = uriParts1.reverse()

        if (uriParts1.length % 2 === 0) {
            // Target resource or controller
            // results.text += methodsVerb.resource[method](uriParts1[0], uriParts1[1])
            results.tokens.push((method === ApiMethods.POST) ? await parseController(uriParts1[0]) : await parseResource(uriParts1[0]))
            results.tokens.push(await parseCollection(uriParts1[1]))
            uriParts1.splice(0, 2)
        } else {
            // Target collection
            // results.text += methodsVerb.collection[method](uriParts1[0])
            results.tokens.push(await parseCollection(uriParts1[0]))
            if (method === ApiMethods.POST) {
                uriParts2 = uriParts1.slice() // Copy elements
                result2.text += methodsVerb.controller(uriParts2[0], uriParts2[1], uriParts2[2])
                result2.tokens.push(await parseController(uriParts2[0]))
                result2.tokens.push(await parseResource(uriParts2[1]))
                result2.tokens.push(await parseCollection(uriParts2[2]))
                uriParts2.splice(0, 3)
            }
            uriParts1.splice(0, 1)
        }

        while (uriParts1.length > 0) {
            // results.text += methodsVerb.resourceAndCollection(uriParts1[0], uriParts1[1])
            results.tokens.push(await parseResource(uriParts1[0]))
            results.tokens.push(await parseCollection(uriParts1[1]))
            uriParts1.splice(0, 2)
        }
        while (uriParts2.length > 0) {
            result2.text += methodsVerb.resourceAndCollection(uriParts2[0], uriParts2[1])
            result2.tokens.push(await parseResource(uriParts2[0]))
            result2.tokens.push(await parseCollection(uriParts2[1]))
            uriParts2.splice(0, 2)
        }

        results.tokens = uriPrefix.concat(results.tokens.reverse())
    } else {
        results.errors.push(UriNotCompleted)
    }
    return results
}

export const apiTokensToString = (tokens: RestApiToTextUriTokens[]): string => {
    let text = ''
    for (const token of tokens) {
        switch (token.type) {

        }
    }
    return text
}