export const storeOptions = (key: string, options: any) => {
    localStorage.setItem(key, JSON.stringify(options))
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