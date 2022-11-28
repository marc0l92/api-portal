import $RefParser from '@apidevtools/json-schema-ref-parser'
import yaml from 'js-yaml'
import { convertToTable, generateSpreadsheet, readInputFile } from './filesUtils.js'
import { extractServices, generateServiceWorkbook, getApiDocumentationVersion } from './swaggerParsing'

let fileName = ''
let api = {}
let services = []
let version = -1


document.getElementById('openApiFile').addEventListener('change', async (e) => {
    try {
        const file = e.target.files[0]
        fileName = file.name
        const fileContent = await readInputFile(file)
        api = await $RefParser.dereference(yaml.load(fileContent))
        version = getApiDocumentationVersion(api)
        parseApi(api, version)
    } catch (e) {
        logError(e)
    }
})

// document.getElementById('selectAllServices').addEventListener('click', () => {
//     document.querySelectorAll('#services>option').forEach(x => x.selected = true)
// })

document.getElementById('download').addEventListener('click', () => {
    document.querySelectorAll('#services>option:checked').forEach(selectOption => {
        const service = services[selectOption.value]
        const workbook = generateServiceWorkbook(service, version)
        console.log({ service, workbook })
        convertToTable(workbook)
        generateSpreadsheet(workbook, fileName)
    })
})


function logError(message) {
    // TODO: show errors
    console.warn(message)
}

function parseApi(api) {
    try {
        services = extractServices(api)
        fillServicesSelect(services)
    } catch (e) {
        logError(e)
    }
}

function fillServicesSelect(services) {
    const servicesElm = document.getElementById('services')
    servicesElm.replaceChildren()
    for (const i in services) {
        const optionElem = document.createElement('option')
        optionElem.innerHTML = services[i]['x-name']
        optionElem.value = i
        // optionElem.selected = true
        servicesElm.appendChild(optionElem)
    }
}
