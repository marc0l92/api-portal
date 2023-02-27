import type { DiagramBuilderOptions } from "tools/apiToPlantUml/diagramBuilderOptions"
import { parseServiceDiagrams, type DiagramData } from "tools/apiToPlantUml/serivceDiagrams"
import { generateServiceWorkbook } from "tools/apiToSpreadsheet/swaggerParsing"
import { modelPropertiesToTables, tablesMapToXLSX } from "tools/apiToSpreadsheet/xlsxUtils"
import type { Api } from "common/api/api"
import { apiFactory } from "common/api/apiFactory"
import { toBlob } from "common/filesUtils"
import * as RefParser from "common/api/refParser"

export const resolveReferences = RefParser.resolveReferences

export async function parseApi(apiObject: any, options: { ignoreReferenceErrors?: boolean } = {}): Promise<Api> {
    const api = apiFactory(apiObject)
    api.setModelsTitle()
    try {
        await api.resolveReferences()
    } catch (e) {
        if (e instanceof RefParser.ReferenceNotFoundError && options.ignoreReferenceErrors) {
            console.error(e.message)
        } else {
            throw e
        }
    }
    return api
}

export const apiToPlantUmlDiagrams = async (apiObject: any, options: DiagramBuilderOptions) => {
    const api = await parseApi(apiObject)
    let diagramsData: DiagramData[] = []
    for (const service of api.getServices()) {
        diagramsData = diagramsData.concat(parseServiceDiagrams(service, options))
    }
    return diagramsData
}

export const apiToSpreadsheet = async (apiObject: any) => {
    const api = await parseApi(apiObject)
    let spreadsheetsData: { name: string, data: Blob }[] = []
    for (const service of api.getServices()) {
        const itemMap = generateServiceWorkbook(service);
        const workbook = modelPropertiesToTables(itemMap);
        spreadsheetsData.push({
            name: service.getName(),
            data: toBlob(tablesMapToXLSX(workbook)),
        })
    }
    return spreadsheetsData
}

export const apiToTables = async (apiObject: any) => {
    const api = await parseApi(apiObject)
    let tablesData: { name: string, tables: any }[] = []
    for (const service of api.getServices()) {
        const itemMap = generateServiceWorkbook(service);
        const tables = modelPropertiesToTables(itemMap);
        tablesData.push({
            name: service.getName(),
            tables: tables,
        })
    }
    return tablesData
}