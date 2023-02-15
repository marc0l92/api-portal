export interface ApiIndex {
    [name: string]: ApiSummary
}

export interface ApiSummary {
    version: string;
    hash: string;
    otherVersions: {
        version: string;
        hash: string;
    }[];
}