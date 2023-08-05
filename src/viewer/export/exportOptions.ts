import type { ApiIndexService } from 'common/api/apiIndex'
import { generateGlobalStore } from '../../common/localStorage'

export enum ReleaseNotesFormat {
    JSON = 'JSON',
    MARKDOWN = 'Markdown',
}

export enum ApiFormat {
    JSON = 'JSON',
    YAML = 'YAML',
}

export enum DiagramsFormat {
    PNG = 'PNG',
    SVG = 'SVG',
}

export interface ExportOptions {
    releaseNotes: {
        enable: boolean,
        format: ReleaseNotesFormat,
    },
    api: {
        enable: boolean,
        format: ApiFormat,
    },
    diagrams: {
        enable: boolean,
        format: DiagramsFormat,
        diagramSource: boolean,
    },
    spreadSheet: {
        enable: boolean,
    },
    apisOptions: {
        [apiHash: string]: {
            tags: string[],
            servicesToExclude: ApiIndexService[],
        }
    },
}

const LOCAL_STORAGE_KEY = 'exportOptions'
const DEFAULT_OPTIONS: ExportOptions = {
    releaseNotes: {
        enable: false,
        format: ReleaseNotesFormat.MARKDOWN,
    },
    api: {
        enable: true,
        format: ApiFormat.JSON,
    },
    diagrams: {
        enable: false,
        format: DiagramsFormat.PNG,
        diagramSource: true,
    },
    spreadSheet: {
        enable: false,
    },
    apisOptions: {},
}

export const [exportOptions, exportOptionsMount, exportOptionsDestroy] = generateGlobalStore(LOCAL_STORAGE_KEY, DEFAULT_OPTIONS)