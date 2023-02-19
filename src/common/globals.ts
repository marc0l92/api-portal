declare const IS_TEST: boolean
declare const BASE_PATH: string

export const isTest = (): boolean => {
    return IS_TEST
}

export const getBasePath = (): string => {
    return BASE_PATH
}

export const setupHotReload = () => {
    if (isTest()) {
        new EventSource('/esbuild').addEventListener('change', () => location.reload())
    }
}