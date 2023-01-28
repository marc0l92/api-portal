import yaml from 'js-yaml'
import { convertToTable, generateSpreadsheet, readInputFile } from './utils/filesUtils'
import { OpenApiVersion } from './utils/interfaces'
import type { OpenApi, OpenApiService } from './utils/interfaces'
import { resolveReferences } from './utils/refParser'
import { extractServices, generateServiceWorkbook, getApiDocumentationVersion } from './utils/swaggerParsing'

let api: OpenApi = null
let services: OpenApiService[] = []
let version = OpenApiVersion.Invalid


document.getElementById('openApiFile').addEventListener('change', async (e: Event) => {
    try {
        const file = (e.target as HTMLInputElement).files[0]
        const fileContent = await readInputFile(file)
        api = await resolveReferences(yaml.load(fileContent))
        console.log({ resolvedApi: api })
        version = getApiDocumentationVersion(api)
        services = extractServices(api)
        fillServicesSelect(services)
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
        const workbook = convertToTable(itemMap)
        console.log({ service, itemMap, workbook })
        generateSpreadsheet(workbook, service['x-name'])
    })
})


function logError(message: any) {
    // TODO: show errors
    console.warn(message)
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
