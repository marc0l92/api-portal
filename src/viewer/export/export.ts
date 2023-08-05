export enum AsideTabsName {
    RELEASE_NOTES = 'Release Notes',
    API = 'Api',
    DIAGRAMS = 'Diagrams',
    SPREADSHEET = 'SpreadSheet',
    TAGS = 'Tags',
    SERVICES = 'Services',
}

export interface OptionValue {
    name: string
    value: any
    selectedCssClass?: string
}

export interface OptionItem {
    name: string
    values: OptionValue[]
}

export async function exportApi() {
    return new Promise((resolve) => {
        setTimeout(() => { return resolve(null) }, 3000)
    })
}