import { writable, type Unsubscriber } from "svelte/store"
import { getOptions, storeOptions } from "common/localStorage";

interface ViewerOptions {
    fluidLayout?: boolean
}

const LOCAL_STORAGE_KEY = 'viewerOptions';
const DEFAULT_OPTIONS: ViewerOptions = {
    fluidLayout: false,
}

export const viewerOptions = writable(Object.assign({}, DEFAULT_OPTIONS))

let unsubscribe: Unsubscriber = null
export const viewerOptionsMount = () => {
    viewerOptions.set(getOptions(LOCAL_STORAGE_KEY, DEFAULT_OPTIONS));
    unsubscribe = viewerOptions.subscribe(() => {
        storeOptions(LOCAL_STORAGE_KEY, viewerOptions);
    });
}
export const viewerOptionsDestroy = () => {
    unsubscribe();
}
