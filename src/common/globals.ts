import type { BrowserFilters, BuildConfig, HomeLink } from "../cli/buildConfig"

declare const IS_TEST: boolean
declare const APP_CONFIG: BuildConfig

const API_INDEX_PATH = '/apis/_apiIndex.json';

const isTest = (): boolean => {
    return IS_TEST
}

export const getAppName = (): string => {
    return APP_CONFIG.name || 'Api Portal'
}

export const getBasePath = (): string => {
    return APP_CONFIG.basePath || ''
}

export const getApiIndexPath = (): string => {
    return getBasePath() + API_INDEX_PATH
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

export const getBrowserFiltersCopy = (): BrowserFilters => {
    if (APP_CONFIG.browser && APP_CONFIG.browser.filters) {
        return JSON.parse(JSON.stringify(APP_CONFIG.browser.filters))
    }
    return {}
}

export const setupHotReload = () => {
    if (isTest()) {
        new EventSource('/esbuild').addEventListener('change', () => location.reload())
    }
}