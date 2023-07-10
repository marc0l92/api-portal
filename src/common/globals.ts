import type { ServiceTags, BuildConfig, HomeLink } from '../cli/buildConfig'

declare const IS_TEST: boolean
declare const APP_CONFIG: BuildConfig
declare const RELEASE_ID: string

const API_INDEX_PATH = '/apis/_apiIndex.json'

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
    return APP_CONFIG?.diagrams?.defaultServer || 'https://www.plantuml.com/plantuml'
}

export const isChangeDiagramServerAllowed = (): boolean => {
    return APP_CONFIG?.diagrams?.allowServerChange || true
}

export const getHomeLinks = (): HomeLink[] => {
    return APP_CONFIG?.home?.links || []
}

export const getBrowserFiltersCopy = (): ServiceTags => {
    return JSON.parse(JSON.stringify(APP_CONFIG?.browser?.filters || {}))
}

export const setupHotReload = () => {
    if (isTest()) {
        new EventSource('/esbuild').addEventListener('change', () => location.reload())
    }
}

export const getReleaseId = (): string => {
    return RELEASE_ID
}