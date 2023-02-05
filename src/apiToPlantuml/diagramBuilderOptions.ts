import { writable } from "svelte/store"

export interface DiagramBuilderOptions {
    serverUrl?: string
    format?: string
    diagramHeader?: string
    colors?: boolean
}

export const DEFAULT_DIAGRAM_BUILDER_OPTIONS: DiagramBuilderOptions = {
    serverUrl: 'https://www.plantuml.com/plantuml',
    format: 'svg',
    colors: true,
}

export const diagramBuilderOptions = writable(Object.assign({}, DEFAULT_DIAGRAM_BUILDER_OPTIONS))