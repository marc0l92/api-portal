declare const IS_TEST: boolean

export const isTest = (): boolean => {
    return IS_TEST
}

export const setupHotReload = () => {
    if (isTest()) {
        new EventSource('/esbuild').addEventListener('change', () => location.reload())
    }
}