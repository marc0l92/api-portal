import { DataSheetItemMap, DataSheetWorkbook } from "./interfaces"

const XLSX = require("xlsx")


export const readInputFile = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        if (!file) {
            reject()
        }
        const reader = new FileReader()
        reader.onload = function (e) {
            resolve(e.target.result.toString())
        };
        reader.readAsText(file)
    })
}

export const convertToTable = (itemsMap: DataSheetItemMap): DataSheetWorkbook => {
    const workbook: DataSheetWorkbook = {}
    for (const sheetName in itemsMap) {
        const sheetData = itemsMap[sheetName]
        if (sheetData.length > 0) {
            const header = Object.keys(sheetData[0])
            for (const i in sheetData) {
                workbook[sheetName].push(Object.values(sheetData[i]))
            }
            workbook[sheetName].unshift(header)
        }
    }
    return workbook
}

export const generateSpreadsheet = (workbookData: DataSheetWorkbook, fileName: string): void => {
    const workbook = XLSX.utils.book_new()
    for (const sheetName in workbookData) {
        const worksheet = XLSX.utils.aoa_to_sheet(workbookData[sheetName]);
        XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
    }
    // var data = XLSX.write(workbook, { bookType: 'ods' });
    XLSX.writeFile(workbook, fileName + ".ods");
}

// downloadFile: (fileName, content) => {
//     const blob = new Blob([content], { type: 'text/csv' })
//     const url = URL.createObjectURL(blob)
//     const anchor = document.createElement('a')
//     anchor.href = url
//     anchor.download = `${fileName}.csv`
//     document.body.appendChild(anchor)
//     anchor.click()
//     document.body.removeChild(anchor)
//     URL.revokeObjectURL(url)
// }
