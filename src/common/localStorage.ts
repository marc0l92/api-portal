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