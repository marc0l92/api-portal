import type { Api, ApiService } from "common/api/api";
import { apiCopy } from "common/api/apiFactory";


export interface ApiServiceFilterItem {
    data: ApiService;
    keep: boolean;
}

export function filterApiServices(api: Api, servicesFilter: ApiServiceFilterItem[]): Api {
    const filteredApi: Api = apiCopy(api)
    for (const serviceFilter of servicesFilter) {
        if (!serviceFilter.keep) {
            filteredApi.deleteService(serviceFilter.data)
        }
    }
    return filteredApi
}