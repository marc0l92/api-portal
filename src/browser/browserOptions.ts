import { writable, type Unsubscriber } from 'svelte/store'
import { getOptions, storeOptions } from '../common/localStorage'

interface BrowserOptions {
    favorites: {
        [packageName: string]: {
            [apiName: string]: boolean
        }
    }
}

const LOCAL_STORAGE_KEY = 'browserOptions'
const DEFAULT_OPTIONS: BrowserOptions = {
    favorites: {},
}

export const browserOptions = writable(Object.assign({}, DEFAULT_OPTIONS))

let unsubscribe: Unsubscriber = null
export const browserOptionsMount = () => {
    if (!unsubscribe) {
        browserOptions.set(getOptions(LOCAL_STORAGE_KEY, DEFAULT_OPTIONS))
        unsubscribe = browserOptions.subscribe((newValue: BrowserOptions) => {
            storeOptions(LOCAL_STORAGE_KEY, newValue)
        })
    }
}
export const browserOptionsDestroy = () => {
    if (unsubscribe) unsubscribe()
}
