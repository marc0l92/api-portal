import { getOptions, storeOptions } from "common/localStorage"
import { writable, type Unsubscriber } from "svelte/store"

export interface DiagramBuilderOptions {
    serverUrl?: string
    format?: string
    diagramHeader?: string
    colors?: boolean
    parameters?: boolean
}


const LOCAL_STORAGE_KEY = 'diagramsBuilderOptions';
export const DEFAULT_DIAGRAM_BUILDER_OPTIONS: DiagramBuilderOptions = {
    serverUrl: 'https://www.plantuml.com/plantuml',
    diagramHeader: '',
    format: 'svg',
    colors: true,
    parameters: true,
}

export const diagramBuilderOptions = writable(Object.assign({}, DEFAULT_DIAGRAM_BUILDER_OPTIONS))

let unsubscribe: Unsubscriber = null
export const diagramBuilderOptionsMount = () => {
    diagramBuilderOptions.set(getOptions(LOCAL_STORAGE_KEY, DEFAULT_DIAGRAM_BUILDER_OPTIONS));
    unsubscribe = diagramBuilderOptions.subscribe(() => {
        storeOptions(LOCAL_STORAGE_KEY, diagramBuilderOptions);
    });
}
export const diagramBuilderOptionsDestroy = () => {
    unsubscribe();
}