import { generateGlobalStore } from '../common/localStorage'

interface GlobalOptions {
    fluidLayout?: boolean
}

const LOCAL_STORAGE_KEY = 'globalOptions'
const DEFAULT_OPTIONS: GlobalOptions = {
    fluidLayout: false,
}

export const [globalOptions, globalOptionsMount, globalOptionsDestroy] = generateGlobalStore(LOCAL_STORAGE_KEY, DEFAULT_OPTIONS)