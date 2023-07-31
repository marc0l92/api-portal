import { getDiagramsDefaultServer } from '../../common/globals'
import { generateGlobalStore } from '../../common/localStorage'

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

export const [diagramBuilderOptions, diagramBuilderOptionsMount, diagramBuilderOptionsDestroy] = generateGlobalStore(LOCAL_STORAGE_KEY, DEFAULT_DIAGRAM_BUILDER_OPTIONS)