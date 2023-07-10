import { type ApiOpenApiServiceDoc, ApiServiceOpenApi } from '../../common/api/apiOpenApi'
import { type ApiModelDoc, ModelType } from '../../common/api/apiModel'
import { generateServiceWorkbook } from './swaggerParsing'

const kModelWithAdditionalProperties: ApiModelDoc = {
    type: ModelType.Object,
    additionalProperties: {
        type: ModelType.String
    }
}

const kBasicModel: ApiModelDoc = {
    type: ModelType.Object,
    properties: {
        name: {
            type: ModelType.String
        }
    }
}

const kServiceBaseDoc: ApiOpenApiServiceDoc = {
    parameters: [],
    requestBody: {
        content: {
            'application/json': {
                type: 'object',
                schema: {}
            }
        }
    }
}

const kServiceBase = new ApiServiceOpenApi([''], '/', 'post', kServiceBaseDoc)


describe('SwaggerParsing', () => {
    describe('generateServiceWorkbook', () => {
        test('Basic test with request only', async () => {
            kServiceBaseDoc.requestBody.content['application/json'].schema = kBasicModel
            expect(generateServiceWorkbook(kServiceBase)).toEqual({
                Request: [
                    {
                        Authorized: '',
                        Cardinality: 'Optional',
                        Description: '',
                        Example: '',
                        Level: 0,
                        Location: 'Body',
                        Path: '',
                        Type: 'object',
                    }, {
                        Authorized: '',
                        Cardinality: 'Optional',
                        Description: '',
                        Example: '',
                        Level: 1,
                        Location: 'Body',
                        Path: '/name',
                        Type: 'string',
                    },
                ]
            })
        })

        test('Model with additionalProperties', async () => {
            kServiceBaseDoc.requestBody.content['application/json'].schema = kModelWithAdditionalProperties
            expect(generateServiceWorkbook(kServiceBase)).toEqual({
                Request: [
                    {
                        Authorized: '',
                        Cardinality: 'Optional',
                        Description: '',
                        Example: '',
                        Level: 0,
                        Location: 'Body',
                        Path: '',
                        Type: 'object',
                    }, {
                        Authorized: '',
                        Cardinality: 'Optional',
                        Description: '',
                        Example: '',
                        Level: 1,
                        Location: 'Body',
                        Path: '/<*>',
                        Type: 'string',
                    },
                ]
            })
        })
    })
})

export { }