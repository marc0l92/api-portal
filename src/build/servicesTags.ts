/**
 * @id api-portal-services-tags
 * @additionalProperties false
 */
export interface ServicesTags {
    $schema?: string
    /**
     * List of services extracted from the input api processed
     * @additionalProperties false
     */
    services: {
        path: string
        method: ServiceMethod
        tags: {
            [category: string]: {
                [tag: string]: {
                    [value: string]: boolean
                }
            }
        }
    }[]
}

enum ServiceMethod {
    POST = 'POST',
    GET = 'GET',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE',
    HEAD = 'HEAD'
}