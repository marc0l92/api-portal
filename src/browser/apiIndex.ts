export interface ApiIndex {
    [packageName: string]: {
        [name: string]: ApiSummary
    }
}

export interface ApiSummary {
    lastVersion: string;
    versions: {
        [version: string]: ApiVersion
    };
}

export interface ApiVersion {
    fileName: string;
    hash: string;
}