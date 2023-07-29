import type { ServiceTags, BuildConfig } from './buildConfig'
import fs from 'fs-extra'
import { API_INDEX_FILE_PATH, BACKUP_SUFFIX, SERVICES_TAGS_SCHEMA } from './cliConstants'
import type { ServicesTagsConfig, ServicesTagsRule } from './servicesTagsConfig'
import { apiIndexFromFile } from './cliCommon'
import type { ApiIndexItem, ApiIndexService } from '../common/api/apiIndex'
import { compressToArray } from 'common/compress'

function loadServicesTags(defaultFilters: ServiceTags, servicesTagsFileName: string): ServicesTagsConfig {
    let servicesTags: ServicesTagsConfig = null
    let servicesTagsFixed = false
    if (fs.existsSync(servicesTagsFileName)) {
        servicesTags = fs.readJsonSync(servicesTagsFileName)
        if (servicesTags.rules) {
            for (const service of servicesTags.rules) {
                if (!service.tags) {
                    service.tags = {}
                    servicesTagsFixed = true
                }
                for (const sectionName in service.tags) {
                    if (sectionName in defaultFilters) {
                        for (const categoryName in service.tags[sectionName]) {
                            if (categoryName in defaultFilters[sectionName]) {
                                for (const propertyName in service.tags[sectionName][categoryName]) {
                                    if (!(propertyName in defaultFilters[sectionName][categoryName])) {
                                        console.warn(`Warning: tag not supported: /${sectionName}/${categoryName}/${propertyName}`)
                                        delete service.tags[sectionName][categoryName][propertyName]
                                    }
                                }
                            } else {
                                console.warn(`Warning: tag not supported: /${sectionName}/${categoryName}`)
                                delete service.tags[sectionName][categoryName]
                            }
                        }
                    } else {
                        console.warn(`Warning: tag not supported: /${sectionName}`)
                        delete service.tags[sectionName]
                    }
                }
            }
        }
    }
    if (servicesTags === null || !servicesTags.rules) {
        servicesTags = {
            '$schema': SERVICES_TAGS_SCHEMA,
            rules: [],
        }
        servicesTagsFixed = true
    }
    if (servicesTagsFixed) {
        if (fs.existsSync(servicesTagsFileName)) {
            fs.moveSync(servicesTagsFileName, servicesTagsFileName + BACKUP_SUFFIX, { overwrite: true })
        }
        fs.writeJsonSync(servicesTagsFileName, servicesTags)
    }
    return servicesTags
}

function getMatchingServicesTags(servicesTagsRules: ServicesTagsRule[], apiIndexItem: ApiIndexItem, service: ApiIndexService): ServicesTagsRule[] {
    return servicesTagsRules.filter(servicesTagsRule => (
        (!servicesTagsRule.packageName || apiIndexItem.packageName.match(servicesTagsRule.packageName) !== null)
        && (!servicesTagsRule.apiName || apiIndexItem.apiName.match(servicesTagsRule.apiName) !== null)
        && (!servicesTagsRule.versionName || apiIndexItem.versionName.match(servicesTagsRule.versionName) !== null)
        && (!servicesTagsRule.fileName || apiIndexItem.fileName.match(servicesTagsRule.fileName) !== null)
        && (!servicesTagsRule.path || service.path.match(servicesTagsRule.path) !== null)
        && (!servicesTagsRule.method || service.method.match(servicesTagsRule.method) !== null)
        && (!servicesTagsRule.metadata || Object.entries(servicesTagsRule.metadata)
            .map(([ruleKey, ruleValue]) => (ruleKey in apiIndexItem.metadata && apiIndexItem.metadata[ruleKey].match(ruleValue) !== null))
            .every(x => x)
        )
    ))
}

function stringifyServiceTags(servicesTagsList: ServiceTags[]): string[] {
    const stringified: string[] = []
    for (const servicesTags of servicesTagsList) {
        for (const sectionName in servicesTags) {
            for (const categoryName in servicesTags[sectionName]) {
                for (const propertyName in servicesTags[sectionName][categoryName]) {
                    if (servicesTags[sectionName][categoryName][propertyName]) {
                        stringified.push(`${sectionName}/${categoryName}/${propertyName}`)
                    }
                }
            }
        }
    }
    return stringified
}

export async function applyServicesTags(appConfig: BuildConfig, servicesTagsFileName: string) {
    const defaultFilters: ServiceTags = appConfig?.browser?.filters || {}
    const apiIndex = apiIndexFromFile()
    const servicesTagsConfig: ServicesTagsConfig = loadServicesTags(defaultFilters, servicesTagsFileName)
    const servicesTagsRules: ServicesTagsRule[] = servicesTagsConfig?.rules || []

    for (const apiIndexItem of apiIndex.getApis()) {
        for (const service of apiIndexItem.services) {
            const matchingRules = getMatchingServicesTags(servicesTagsRules, apiIndexItem, service)
            service.tags = stringifyServiceTags([...matchingRules.map(r => r.tags)])
        }
        apiIndexItem.tags = [...(new Set([...apiIndexItem.services.map(s => s.tags)].flat()))]
    }

    await fs.outputJson(API_INDEX_FILE_PATH, apiIndex) // Used for debugging
    await fs.outputFile(API_INDEX_FILE_PATH + '.gzip', compressToArray(JSON.stringify(apiIndex)))
}