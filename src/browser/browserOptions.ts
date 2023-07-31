import { generateGlobalStore } from '../common/localStorage'
import type { ServiceTags } from '../cli/buildConfig'
import { getServicesTagsCopy } from '../common/globals'

interface BrowserOptions {
    favorites?: {
        [packageName: string]: {
            [apiName: string]: boolean
        }
    }
    filters?: ServiceTags
}

const LOCAL_STORAGE_KEY = 'browserOptions'
const DEFAULT_OPTIONS: BrowserOptions = {
    favorites: {},
    filters: getServicesTagsCopy(),
}

export const [browserOptions, browserOptionsMount, browserOptionsDestroy] = generateGlobalStore(LOCAL_STORAGE_KEY, DEFAULT_OPTIONS, validate)


function validate(options: BrowserOptions): BrowserOptions {
    const defaultOptions = getServicesTagsCopy()
    if (options.filters) {
        const hasValidFilters = JSON.stringify(defaultOptions) === JSON.stringify(options.filters).replace(/true/g, 'false')
        if (!hasValidFilters) {
            options.filters = defaultOptions
        }
    } else {
        options.filters = defaultOptions
    }

    return options
}