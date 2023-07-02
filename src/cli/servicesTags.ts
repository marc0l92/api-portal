import type { BrowserFilters } from "./buildConfig"

/**
 * @id api-portal-services-tags
 * @additionalProperties false
 */
export interface ServicesTags {
    $schema?: string
    /**
     * Patterns to match services and the corresponding tags
     * @additionalProperties false
     */
    services?: {
        packageName?: string
        apiName?: string
        fileName?: string
        metadata?: {
            [metadataName: string]: string
        }
        versionName?: string
        fullPath?: string
        method?: string
        tags: BrowserFilters
    }[]
}