const MAX_VERSION_DIGITS = 5;

export interface ApiIndex {
    [packageName: string]: {
        [apiName: string]: ApiSummary
    }
}

export interface ApiSummary {
    [version: string]: {
        [fileName: string]: {
            hash: string;
            status: string;
            updateTime: string;
        }
    }
}

export interface FullApiSummary {
    packageName: string
    apiName: string
    versionName: string
    fileName: string
    apiSummary: ApiSummary
}

export function getApiByHash(hash: string, apiIndex: ApiIndex): FullApiSummary {
    for (const packageName in apiIndex) {
        for (const apiName in apiIndex[packageName]) {
            for (const versionName in apiIndex[packageName][apiName]) {
                for (const fileName in apiIndex[packageName][apiName][versionName]) {
                    if (apiIndex[packageName][apiName][versionName][fileName].hash === hash) {
                        return {
                            packageName, apiName, versionName, fileName,
                            apiSummary: apiIndex[packageName][apiName]
                        }
                    }
                }
            }
        }
    }
    return null
}

// export function sortVersions(v1: [string, ApiVersion], v2: [string, ApiVersion]) {
//     function versionToNumber(v: string): number {
//         let total = 0;
//         let i = 0;
//         for (const split of v.split('.').reverse()) {
//             total += parseInt(split) * Math.pow(10, i * MAX_VERSION_DIGITS);
//             i++;
//         }
//         return total;
//     }
//     return versionToNumber(v2[0]) - versionToNumber(v1[0]);
// }