import { writable, type Unsubscriber } from 'svelte/store'
import { getOptions, storeOptions } from '../common/localStorage'
import type { ServiceTags } from '../cli/buildConfig'
import { getServicesTagsCopy } from '../common/globals'

interface BrowserOptions {
    favorites: {
        [packageName: string]: {
            [apiName: string]: boolean
        }
    }
    filters: ServiceTags
}

const LOCAL_STORAGE_KEY = 'browserOptions'
const DEFAULT_OPTIONS: BrowserOptions = {
    favorites: {},
    filters: getServicesTagsCopy(),
}

export const browserOptions = writable(Object.assign({}, DEFAULT_OPTIONS))

let unsubscribe: Unsubscriber = null
export const browserOptionsMount = () => {
    if (!unsubscribe) {
        browserOptions.set(Object.assign({}, DEFAULT_OPTIONS, getOptions(LOCAL_STORAGE_KEY, DEFAULT_OPTIONS)))
        unsubscribe = browserOptions.subscribe((newValue: BrowserOptions) => {
            storeOptions(LOCAL_STORAGE_KEY, newValue)
        })
    }
}
export const browserOptionsDestroy = () => {
    if (unsubscribe) unsubscribe()
}
