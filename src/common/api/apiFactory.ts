import { ApiType, type Api, type ApiGenericDoc } from './api'
import { ApiOpenApi } from './apiOpenApi'
import { ApiSwagger } from './apiSwagger'

export const getApiDocumentationVersion = (api: ApiGenericDoc): ApiType => {
    if (api.swagger === '2.0') {
        return ApiType.Swagger2
    }
    else if (api.openapi && api.openapi.startsWith('3')) {
        return ApiType.OpenAPI3
    }
    throw new Error('Api version not recognized')
}

export const apiFactory = (apiDoc: ApiGenericDoc): Api => {
    switch (getApiDocumentationVersion(apiDoc)) {
        case ApiType.Swagger2:
            return new ApiSwagger(apiDoc)
        case ApiType.OpenAPI3:
            return new ApiOpenApi(apiDoc)
    }
    throw new Error('Api not recognized')
}