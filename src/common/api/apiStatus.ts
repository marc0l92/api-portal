export function getApiStatusName(statusId: number): string {
    switch (statusId) {
        case 0:
            return 'Validated'
        case 1:
            return 'Work in progress'
        case 2:
            return 'Draft'
    }
    return `status-${statusId}`
}