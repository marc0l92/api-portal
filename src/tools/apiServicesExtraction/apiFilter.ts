import type { Api, ApiService } from "common/api/api";


export interface ApiServiceFilterItem {
    data: ApiService;
    keep: boolean;
}

export function filterApiServices(api: Api, servicesFilter: ApiServiceFilterItem[]): Api {
    return api
}