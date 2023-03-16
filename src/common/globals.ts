import type { BuildConfig, HomeLink } from "build/buildConfig"

declare const IS_TEST: boolean
declare const APP_CONFIG: BuildConfig

const isTest = (): boolean => {
    return IS_TEST
}

export const getAppName = (): string => {
    return APP_CONFIG.name || 'Api Tools'
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

export const getHomeLinks = (): HomeLink[] => {
    if (APP_CONFIG.home && APP_CONFIG.home.links) {
        return APP_CONFIG.home.links
    }
    return []
}

export const setupHotReload = () => {
    if (isTest()) {
        new EventSource('/esbuild').addEventListener('change', () => location.reload())
    }
}