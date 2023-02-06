import type { ModelPropertiesMap, TablesMap } from "./interfaces"
import * as XLSX from "xlsx"

export const modelPropertiesToTable = (modelPropertiesMap: ModelPropertiesMap): TablesMap => {
    const tablesMap: TablesMap = {}
    for (const sheetName in modelPropertiesMap) {
        const modelProperties = modelPropertiesMap[sheetName]
        if (modelProperties.length > 0) {
            const header = Object.keys(modelProperties[0])
            tablesMap[sheetName] = [header]
            for (const i in modelProperties) {
                tablesMap[sheetName].push(Object.values(modelProperties[i]))
            }
        }
    }
    return tablesMap
}

export const tablesMapToXLSX = (tablesMap: TablesMap): Buffer => {
    if (Object.keys(tablesMap).length > 0) {
        const workbook = XLSX.utils.book_new()
        for (const sheetName in tablesMap) {
            console.log(tablesMap[sheetName])
            const worksheet = XLSX.utils.aoa_to_sheet(tablesMap[sheetName]);
            XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
        }
        return XLSX.write(workbook, { bookType: 'ods', type: 'buffer' }) as Buffer;
    }
    return null
    // XLSX.writeFile(workbook, sanitizeFilename(fileName) + ".ods");
}
