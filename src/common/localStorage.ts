export const storeOptions = (key: string, options: any) => {
    localStorage.setItem(key, JSON.stringify(options))
}

export const getOptions = (key: string, defaultValue: any = null) => {
    const item = localStorage.getItem(key)
    if (item) {
        return JSON.parse(item)
    } else {
        return defaultValue
    }
}