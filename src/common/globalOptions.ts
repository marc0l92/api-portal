import { writable, type Unsubscriber } from 'svelte/store'
import { getOptions, storeOptions } from '../common/localStorage'

interface GlobalOptions {
    fluidLayout?: boolean
}

const LOCAL_STORAGE_KEY = 'globalOptions'
const DEFAULT_OPTIONS: GlobalOptions = {
    fluidLayout: false,
}

export const globalOptions = writable(Object.assign({}, DEFAULT_OPTIONS))

let unsubscribe: Unsubscriber = null
export const globalOptionsMount = () => {
    if (!unsubscribe) {
        globalOptions.set(Object.assign({}, DEFAULT_OPTIONS, getOptions(LOCAL_STORAGE_KEY, DEFAULT_OPTIONS)))
        unsubscribe = globalOptions.subscribe((newValue: GlobalOptions) => {
            storeOptions(LOCAL_STORAGE_KEY, newValue)
        })
    }
}
export const globalOptionsDestroy = () => {
    if (unsubscribe) unsubscribe()
}
