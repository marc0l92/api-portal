export const storeOptions = (key: string, options: any) => {
    localStorage.setItem(key, JSON.stringify(options))
}

export const getOptions = (key: string) => {
    return JSON.parse(localStorage.getItem(key))
}