import type { ApiIndex } from "common/api/apiIndex"
import type { BrowserFilters, BuildConfig } from "./buildConfig"
import fs from 'fs-extra'
import { API_INDEX_FILE_PATH, BACKUP_SUFFIX, SERVICES_TAGS_SCHEMA } from "./cliConstants"
import type { ServicesTags } from "./servicesTags"

function loadApiIndex(): ApiIndex {
    let apiIndex: ApiIndex = {}
    if (fs.existsSync(API_INDEX_FILE_PATH)) {
        apiIndex = fs.readJsonSync(API_INDEX_FILE_PATH)
    }
    return apiIndex
}

function loadServicesTags(defaultFilters: BrowserFilters, servicesTagsFileName: string): ServicesTags {
    let servicesTags: ServicesTags = null
    let servicesTagsFixed = false
    if (fs.existsSync(servicesTagsFileName)) {
        servicesTags = fs.readJsonSync(servicesTagsFileName)
        if (servicesTags.services) {
            for (const service of servicesTags.services) {
                if (!service.tags) {
                    service.tags = defaultFilters
                    servicesTagsFixed = true
                }
                for (const sectionName in service.tags) {
                    if (sectionName in Object.keys(defaultFilters)) {
                        for (const categoryName in service.tags[sectionName]) {
                            if (categoryName in Object.keys(defaultFilters[sectionName])) {
                                for (const propertyName in service.tags[sectionName][categoryName]) {
                                    if (!(propertyName in Object.keys(defaultFilters[sectionName][categoryName]))) {
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
    if (servicesTags === null || !servicesTags.services || servicesTags.services.length === 0) {
        servicesTags = {
            '$schema': SERVICES_TAGS_SCHEMA,
            services: [{
                method: '.*',
                fullPath: '.*',
                versionName: '.*',
                apiName: '.*',
                fileName: '.*',
                packageName: '.*',
                metadata: {},
                tags: defaultFilters,
            }],
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

export async function applyServicesTags(appConfig: BuildConfig, servicesTagsFileName: string) {
    const defaultFilters: BrowserFilters = appConfig?.browser?.filters || {}
    const apiIndex: ApiIndex = loadApiIndex()
    const servicesTags: ServicesTags = loadServicesTags(defaultFilters, servicesTagsFileName)

    for (const packageName in apiIndex) {
        for (const apiName in apiIndex[packageName]) {
            for (const version in apiIndex[packageName][apiName]) {
                for (const fileName in apiIndex[packageName][apiName][version]) {
                    if (apiIndex[packageName][apiName][version][fileName].services) {
                        for (const service of apiIndex[packageName][apiName][version][fileName].services) {
                        }
                    }
                }
            }
        }
    }
}