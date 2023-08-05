import { writable, type Unsubscriber, type Writable } from 'svelte/store'

export const storeOptions = (key: string, options: any) => {
    try {
        localStorage.setItem(key, JSON.stringify(options))
    } catch (error) {
        console.warn('Failure while storing local options:', key, error)
    }
}

export const getOptions = (key: string, defaultValue: any = null) => {
    try {
        const options = localStorage.getItem(key)
        if (options) {
            return JSON.parse(options)
        }
    } catch (error) {
        console.warn('Failure while parsing local options:', key, error)
        storeOptions(key, defaultValue)
    }
    return defaultValue
}

export const cleanAllOptions = () => {
    localStorage.clear()
}

export const generateGlobalStore = <T>(localStorageKey: string, defaultOptions: T, validate: (x: T) => T = (x) => x): [Writable<T>, () => void, () => void] => {
    const writableObject = writable(Object.assign({}, defaultOptions))

    let unsubscribe: Unsubscriber = null
    const mountFunction = () => {
        if (!unsubscribe) {
            writableObject.set(Object.assign({}, defaultOptions, validate(getOptions(localStorageKey, defaultOptions))))
            unsubscribe = writableObject.subscribe((newValue: any) => {
                storeOptions(localStorageKey, newValue)
            })
        }
    }
    const destroyFunction = () => {
        if (unsubscribe) unsubscribe()
    }
    return [writableObject, mountFunction, destroyFunction]
}