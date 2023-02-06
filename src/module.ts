import type { DiagramBuilderOptions } from "apiToPlantuml/diagramBuilderOptions"
import { parseServiceDiagrams, type DiagramData } from "apiToPlantuml/serivceDiagrams"
import { generateServiceWorkbook } from "apiToSpreadsheet/swaggerParsing"
import { modelPropertiesToTable, tablesMapToXLSX } from "apiToSpreadsheet/xlsxUtils"
import type { Api } from "common/api"
import { apiFactory } from "common/apiFactory"
import { toBlob } from "common/filesUtils"
import * as RefParser from "common/refParser"

export const resolveReferences = RefParser.resolveReferences

async function parseApi(apiObject: any): Promise<Api> {
    const api = apiFactory(apiObject)
    api.setModelsTitle()
    await api.resolveReferences()
    return api
}

export const apiToPlantumlDiagrams = async (apiObject: any, options: DiagramBuilderOptions) => {
    const api = await parseApi(apiObject)
    let diagramsData: DiagramData[] = []
    for (const service of api.getServices()) {
        diagramsData = diagramsData.concat(parseServiceDiagrams(service, options))
    }
    return diagramsData
}

export const apiToSpreadsheet = async (apiObject: any, options: DiagramBuilderOptions) => {
    const api = await parseApi(apiObject)
    let spreadsheetsData: { name: string, data: Blob }[] = []
    for (const service of api.getServices()) {
        const itemMap = generateServiceWorkbook(service);
        const workbook = modelPropertiesToTable(itemMap);
        spreadsheetsData.push({
            name: service.getName(),
            data: toBlob(tablesMapToXLSX(workbook)),
        })
    }
    return spreadsheetsData
}