import type { Api, ApiGenericDoc } from "./api"
import { ApiOpenApi, type ApiOpenApiDoc } from "./apiOpenApi"
import { ApiSwagger, type ApiSwaggerDoc } from "./apiSwagger"

enum ApiVersion {
    Swagger2 = 2,
    OpenAPI3 = 3,
}

const getApiDocumentationVersion = (api: ApiGenericDoc): ApiVersion => {
    if (api.swagger === '2.0') {
        return ApiVersion.Swagger2
    }
    else if (api.openapi && api.openapi.startsWith('3')) {
        return ApiVersion.OpenAPI3
    }
    throw new Error('Api version not recognized')
}

export const apiFactory = (apiDoc: ApiGenericDoc): Api => {
    switch (getApiDocumentationVersion(apiDoc)) {
        case ApiVersion.Swagger2:
            return new ApiSwagger(apiDoc as ApiSwaggerDoc)
        case ApiVersion.OpenAPI3:
            return new ApiOpenApi(apiDoc as ApiOpenApiDoc)
    }
    throw new Error('Api not recognized')
}