import type JSZip from 'jszip'

export const readInputFile = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        if (!file) {
            reject()
        }
        const reader = new FileReader()
        reader.onload = function (e) {
            resolve(e.target.result.toString())
        }
        reader.readAsText(file)
    })
}

export const sanitizeFilename = (fileName: string): string => {
    return fileName.replace(/\//g, '-')
}

export async function generateAndDownloadZip(fileName: string, zip: JSZip) {
    const zipBlob = await zip.generateAsync({ type: 'blob', compression: 'DEFLATE' })
    downloadFile(`${fileName}.zip`, zipBlob)
}

export function bufferToBlob(data: Buffer) {
    return new Blob([data], { type: 'application/octet-stream' })
}

export function objToBlob(data: any) {
    return new Blob([JSON.stringify(data)], { type: 'application/json' })
}

export function downloadFile(fileName: string, content: Blob) {
    const url = window.URL || window.webkitURL
    const link = url.createObjectURL(content)
    const a = document.createElement("a")
    a.setAttribute("download", fileName)
    a.setAttribute("href", link)
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}