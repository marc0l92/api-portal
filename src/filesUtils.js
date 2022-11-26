const XLSX = require("xlsx")

const FilesUtils = {
    readInputFile: (file) => {
        return new Promise((resolve, reject) => {
            if (!file) {
                reject()
            }
            const reader = new FileReader()
            reader.onload = function (e) {
                resolve(e.target.result)
            };
            reader.readAsText(file)
        })
    },

    convertToTable(workbookData) {
        for (const sheetName in workbookData) {
            const sheetData = workbookData[sheetName]
            if (sheetData.length > 0) {
                const header = Object.keys(sheetData[0])
                for (const i in sheetData) {
                    sheetData[i] = Object.values(sheetData[i])
                }
                sheetData.unshift(header)
            }
        }
    },

    generateSpreadsheet(workbookData) {
        const workbook = XLSX.utils.book_new()
        for (const sheetName in workbookData) {
            const worksheet = XLSX.utils.aoa_to_sheet(workbookData[sheetName]);
            XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
        }
        // var data = XLSX.write(workbook, { bookType: 'ods' });
        XLSX.writeFile(workbook, "out.ods");
    },

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
}
module.exports = FilesUtils
