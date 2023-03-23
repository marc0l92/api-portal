import { ApiType, type Api, type ApiService } from "common/api/api";
import { getApiDocumentationVersion } from "common/api/apiFactory";


export interface ApiServiceFilterItem {
    data: ApiService;
    keep: boolean;
}

export function filterApiServices(api: Api, servicesFilter: ApiServiceFilterItem[]): any {
    const apiDocCopy = JSON.parse(JSON.stringify(api.toJson()))
    for (const serviceFilter of servicesFilter) {
        if (!serviceFilter.keep) {
            const service = serviceFilter.data
            if (service.getPath() in apiDocCopy.paths) {
                if (service.getMethod() in apiDocCopy.paths[service.getPath()]) {
                    delete apiDocCopy.paths[service.getPath()][service.getMethod()]
                }
                if (Object.keys(apiDocCopy.paths[service.getPath()]).length === 0) {
                    delete apiDocCopy.paths[service.getPath()]
                }
            }
        }
    }
    switch (getApiDocumentationVersion(apiDocCopy)) {
        case ApiType.Swagger2:
            deleteOrphanDefinitionsInSection(apiDocCopy, apiDocCopy.parameters, '#/parameters')
            deleteOrphanDefinitionsInSection(apiDocCopy, apiDocCopy.responses, '#/responses')
            deleteOrphanDefinitionsInSection(apiDocCopy, apiDocCopy.definitions, '#/definitions')
            break
        case ApiType.OpenAPI3:
            if (apiDocCopy.components) {
                deleteOrphanDefinitionsInSection(apiDocCopy, apiDocCopy.components.parameters, '#/components/parameters')
                deleteOrphanDefinitionsInSection(apiDocCopy, apiDocCopy.components.headers, '#/components/headers')
                deleteOrphanDefinitionsInSection(apiDocCopy, apiDocCopy.components.callbacks, '#/components/callbacks')
                deleteOrphanDefinitionsInSection(apiDocCopy, apiDocCopy.components.requestBodies, '#/components/requestBodies')
                deleteOrphanDefinitionsInSection(apiDocCopy, apiDocCopy.components.responses, '#/components/responses')
                deleteOrphanDefinitionsInSection(apiDocCopy, apiDocCopy.components.schemas, '#/components/schemas')
            }
            break
    }
    return apiDocCopy
}

export const deleteOrphanDefinitionsInSection = (apiDoc: any, apiSection: { [name: string]: any }, basePath: string) => {
    if (apiSection) {
        let orphanFound = true
        while (orphanFound) {
            orphanFound = false
            const jsonObjStr = JSON.stringify(apiDoc)
            for (const definition in apiSection) {
                const referenceStr = `"$ref":"${basePath}/${definition}"`
                if (jsonObjStr.indexOf(referenceStr) == -1) {
                    delete apiSection[definition]
                    orphanFound = true
                }
            }
        }
    }
}