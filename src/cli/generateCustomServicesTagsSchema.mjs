import fs from 'fs-extra'

/**
 * @typedef {import('./buildConfig').BuildConfig} BuildConfig
 */

const serviceTagsConfigFilePath = './dist/servicesTagsConfig.schema.json'
const customServiceTagsConfigFilePath = './dist/customServicesTagsConfig.schema.json'

/**
 * @param {BuildConfig} appConfig
 */
export function generateCustomServicesTagsSchema(appConfig) {
    if (appConfig && appConfig.browser && appConfig.browser.filters) {
        const serviceTagsConfig = fs.readJSONSync(serviceTagsConfigFilePath)
        serviceTagsConfig.definitions.ServiceTags = { properties: {}, additionalProperties: false }
        for (const sectionName in appConfig.browser.filters) {
            serviceTagsConfig.definitions.ServiceTags.properties[sectionName] = {
                type: 'object',
                properties: {},
                additionalProperties: false,
            }
            for (const categoryName in appConfig.browser.filters[sectionName]) {
                serviceTagsConfig.definitions.ServiceTags.properties[sectionName].properties[categoryName] = {
                    type: 'object',
                    properties: {},
                    additionalProperties: false,
                }
                for (const propertyName in appConfig.browser.filters[sectionName][categoryName]) {
                    serviceTagsConfig.definitions.ServiceTags.properties[sectionName].properties[categoryName].properties[propertyName] = {
                        type: 'boolean',
                    }
                }
            }
        }
        fs.writeJSONSync(customServiceTagsConfigFilePath, serviceTagsConfig)
    }
}