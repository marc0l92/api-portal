import { getDiagramsDefaultServer } from '../../common/globals'
import { getOptions, storeOptions } from '../../common/localStorage'
import { writable, type Unsubscriber } from 'svelte/store'

export enum DiagramBuilderFormat {
    SVG = 'svg',
    PNG = 'png',
    UML = 'uml',
    TXT = 'txt',
}

export interface DiagramBuilderOptions {
    serverUrl?: string
    format?: DiagramBuilderFormat
    diagramHeader?: string
    colors?: boolean
    parameters?: boolean
}


const LOCAL_STORAGE_KEY = 'diagramsBuilderOptions'
export const DEFAULT_DIAGRAM_BUILDER_OPTIONS: DiagramBuilderOptions = {
    serverUrl: getDiagramsDefaultServer(),
    diagramHeader: '',
    format: DiagramBuilderFormat.PNG,
    colors: true,
    parameters: true,
}

export const diagramBuilderOptions = writable(Object.assign({}, DEFAULT_DIAGRAM_BUILDER_OPTIONS))

let unsubscribe: Unsubscriber = null
export const diagramBuilderOptionsMount = () => {
    if (!unsubscribe) {
        diagramBuilderOptions.set(getOptions(LOCAL_STORAGE_KEY, DEFAULT_DIAGRAM_BUILDER_OPTIONS))
        unsubscribe = diagramBuilderOptions.subscribe((newValue: DiagramBuilderOptions) => {
            storeOptions(LOCAL_STORAGE_KEY, newValue)
        })
    }
}
export const diagramBuilderOptionsDestroy = () => {
    if (unsubscribe) unsubscribe()
}