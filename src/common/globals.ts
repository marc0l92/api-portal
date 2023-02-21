declare const IS_TEST: boolean
declare const APP_CONFIG: any

const isTest = (): boolean => {
    return IS_TEST
}

export const getBasePath = (): string => {
    return APP_CONFIG.basePath || ''
}

export const getDiagramsDefaultServer = (): string => {
    if (APP_CONFIG.diagrams && APP_CONFIG.diagrams.defaultServer) {
        return APP_CONFIG.diagrams.defaultServer
    }
    return 'https://www.plantuml.com/plantuml'
}

export const isChangeDiagramServerAllowed = (): boolean => {
    if (APP_CONFIG.diagrams && APP_CONFIG.diagrams.allowServerChange) {
        return !!APP_CONFIG.diagrams.allowServerChange
    }
    return true
}

export const setupHotReload = () => {
    if (isTest()) {
        new EventSource('/esbuild').addEventListener('change', () => location.reload())
    }
}