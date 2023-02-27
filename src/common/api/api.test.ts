import { ApiSwagger, type ApiSwaggerDoc } from "./apiSwagger"
import { ApiOpenApi, type ApiOpenApiDoc } from "./apiOpenApi"
import type { ApiGenericDoc, ApiParameterDoc } from "./api"
import { apiFactory } from "./apiFactory"

const kPathParameter1: ApiParameterDoc = {
    in: 'path',
    name: 'bookId',
    type: 'string'
}
const kQueryParameter1: ApiParameterDoc = {
    in: 'query',
    name: 'param1',
    type: 'string'
}

const kApiSwagger1: ApiSwaggerDoc = {
    swagger: '2.0',
    paths: {
        '/books/{bookId}': {
            parameters: [kPathParameter1],
            get: {
                parameters: [kQueryParameter1],
                responses: {
                    200: {
                        type: 'object'
                    }
                },
            }
        }
    }
}

const kApiOpenApi1: ApiOpenApiDoc = {
    openapi: '3.0',
    paths: {
        '/books/{bookId}': {
            parameters: [kPathParameter1],
            get: {
                parameters: [kQueryParameter1],
                responses: {
                    200: {
                        content: {
                            'application/json': {
                                type: 'object'
                            }
                        }
                    }
                },
            }
        }
    }
}

describe('Api', () => {
    describe('ApiFactory', () => {
        test('Detect swagger 2.0', () => {
            const kInput: ApiGenericDoc = {
                swagger: '2.0'
            }
            expect(apiFactory(kInput)).toBeInstanceOf(ApiSwagger)
        })
        test('Detect openApi 3', () => {
            const kInput: ApiGenericDoc = {
                openapi: '3.0'
            }
            expect(apiFactory(kInput)).toBeInstanceOf(ApiOpenApi)
        })
        test('Api type not detected', () => {
            const kInput: ApiGenericDoc = {}
            expect(() => apiFactory(kInput)).toThrow(new Error('Api version not recognized'))
        })
    })

    describe('ApiSwagger', () => {
        test('getServices', () => {
            const api = apiFactory(kApiSwagger1)
            expect(api).toBeInstanceOf(ApiSwagger)
            const services = api.getServices()
            expect(services.length).toEqual(1)
        })
    })

    describe('ApiOpenApi', () => {
        test('getServices', () => {
            const api = apiFactory(kApiOpenApi1)
            expect(api).toBeInstanceOf(ApiOpenApi)
            const services = api.getServices()
            expect(services.length).toEqual(1)
        })
    })
})

export { }