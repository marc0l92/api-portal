import type { ApiIndex } from "common/api/apiIndex"
import type { ServiceTags, BuildConfig } from "./buildConfig"
import fs from 'fs-extra'
import { API_INDEX_FILE_PATH, BACKUP_SUFFIX, SERVICES_TAGS_SCHEMA } from "./cliConstants"
import type { ServiceCriteria, ServicesTagsConfig, ServicesTagsRule } from "./servicesTagsConfig"

function loadApiIndex(): ApiIndex {
    let apiIndex: ApiIndex = {}
    if (fs.existsSync(API_INDEX_FILE_PATH)) {
        apiIndex = fs.readJsonSync(API_INDEX_FILE_PATH)
    }
    return apiIndex
}

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
                                        delete service.tags[sectionName][categoryName][propertyName]
                                    }
                                }
                            } else {
                                delete service.tags[sectionName][categoryName]
                            }
                        }
                    } else {
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

function getMatchingServicesTags(servicesTagsRules: ServicesTagsRule[], serviceCriteria: ServiceCriteria): ServicesTagsRule[] {
    return servicesTagsRules.filter(servicesTagsRule => (
        (!servicesTagsRule.packageName || serviceCriteria.packageName.match(servicesTagsRule.packageName) !== null)
        && (!servicesTagsRule.apiName || serviceCriteria.apiName.match(servicesTagsRule.apiName) !== null)
        && (!servicesTagsRule.versionName || serviceCriteria.versionName.match(servicesTagsRule.versionName) !== null)
        && (!servicesTagsRule.fileName || serviceCriteria.fileName.match(servicesTagsRule.fileName) !== null)
        && (!servicesTagsRule.path || serviceCriteria.path.match(servicesTagsRule.path) !== null)
        && (!servicesTagsRule.method || serviceCriteria.method.match(servicesTagsRule.method) !== null)
        && (!servicesTagsRule.metadata || Object.entries(servicesTagsRule.metadata)
            .map(([ruleKey, ruleValue]) => (ruleKey in serviceCriteria.metadata && serviceCriteria.metadata[ruleKey].match(ruleValue) !== null))
            .every(x => x)
        )
    ))
}

function mergeServiceTags(servicesTagsList: ServiceTags[]): ServiceTags {
    const mergedServiceTags: ServiceTags = {}
    for (const servicesTags of servicesTagsList) {
        for (const sectionName in servicesTags) {
            for (const categoryName in servicesTags[sectionName]) {
                for (const propertyName in servicesTags[sectionName][categoryName]) {
                    if (servicesTags[sectionName][categoryName][propertyName]) {
                        if (!(sectionName in mergedServiceTags)) {
                            mergedServiceTags[sectionName] = {}
                        }
                        if (!(categoryName in mergedServiceTags[sectionName])) {
                            mergedServiceTags[sectionName][categoryName] = {}
                        }
                        mergedServiceTags[sectionName][categoryName][propertyName] = true
                    }
                }
            }
        }
    }
    return mergedServiceTags
}

export async function applyServicesTags(appConfig: BuildConfig, servicesTagsFileName: string) {
    const defaultFilters: ServiceTags = appConfig?.browser?.filters || {}
    const apiIndex: ApiIndex = loadApiIndex()
    const servicesTagsConfig: ServicesTagsConfig = loadServicesTags(defaultFilters, servicesTagsFileName)
    const servicesTagsRules: ServicesTagsRule[] = servicesTagsConfig?.rules || []

    for (const packageName in apiIndex) {
        for (const apiName in apiIndex[packageName]) {
            for (const versionName in apiIndex[packageName][apiName]) {
                for (const fileName in apiIndex[packageName][apiName][versionName]) {
                    const apiIndexItem = apiIndex[packageName][apiName][versionName][fileName]
                    if (apiIndexItem.services) {
                        for (const service of apiIndexItem.services) {
                            const matchingRules = getMatchingServicesTags(servicesTagsRules, {
                                packageName, apiName, versionName, fileName, path: service.path, method: service.method,
                                metadata: apiIndexItem.metadata
                            })
                            service.tags = mergeServiceTags([...matchingRules.map(r => r.tags), service.tags])
                        }
                    }
                    apiIndexItem.tags = mergeServiceTags([...apiIndexItem.services?.map(s => s.tags) || []])
                }
            }
        }
    }
    await fs.outputJson(API_INDEX_FILE_PATH, apiIndex)
}