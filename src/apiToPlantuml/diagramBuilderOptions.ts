import { writable } from "svelte/store"

export interface DiagramBuilderOptions {
    serverUrl?: string
    format?: string
    diagramHeader?: string
    colors?: boolean
    parameters?: boolean
}

export const DEFAULT_DIAGRAM_BUILDER_OPTIONS: DiagramBuilderOptions = {
    serverUrl: 'https://www.plantuml.com/plantuml',
    diagramHeader: '',
    format: 'svg',
    colors: true,
    parameters: true,
}

export const diagramBuilderOptions = writable(Object.assign({}, DEFAULT_DIAGRAM_BUILDER_OPTIONS))