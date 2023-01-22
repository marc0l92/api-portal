import $RefParser from '@apidevtools/json-schema-ref-parser'
import yaml from 'js-yaml'
import { convertToTable, generateSpreadsheet, readInputFile } from './utils/filesUtils'
import { OpenApi, OpenApiService, OpenApiVersion } from './utils/interfaces'
import { extractServices, generateServiceWorkbook } from './utils/swaggerParsing'

let fileName = ''
let api: OpenApi = null
let services: OpenApiService[] = []
let version = OpenApiVersion.Invalid


document.getElementById('openApiFile').addEventListener('change', async (e: Event) => {
    try {
        const file = (e.target as HTMLInputElement).files[0]
        fileName = file.name
        const fileContent = await readInputFile(file)
        api = await $RefParser.dereference(yaml.load(fileContent)) as OpenApi
        parseApi(api)
    } catch (e) {
        logError(e)
    }
})

// document.getElementById('selectAllServices').addEventListener('click', () => {
//     document.querySelectorAll('#services>option').forEach(x => x.selected = true)
// })

document.getElementById('download').addEventListener('click', () => {
    document.querySelectorAll('#services>option:checked').forEach((selectOption: HTMLOptionElement) => {
        const service = services[parseInt(selectOption.value)]
        const itemMap = generateServiceWorkbook(service, version)
        console.log({ service, dataSheetItemMap: itemMap })
        const workbook = convertToTable(itemMap)
        generateSpreadsheet(workbook, fileName)
    })
})


function logError(message: any) {
    // TODO: show errors
    console.warn(message)
}

function parseApi(api: OpenApi) {
    try {
        services = extractServices(api)
        fillServicesSelect(services)
    } catch (e) {
        logError(e)
    }
}

function fillServicesSelect(services: OpenApiService[]) {
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
