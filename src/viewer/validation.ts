export interface ApiValidation {
    code: string
    message: string
    path: string[]
    severity: number
    range: {
        start: {
            line: number
            character: number
        }
        end: {
            line: number
            character: number
        }
    }
}

export interface ValidationSummary {
    [severity: string]: {
        [code: string]: { count: number };
    };
}

interface Severity {
    [severity: string]: {
        title: string;
        css: string;
    };
}

export const severityNames: Severity = {
    '0': { title: 'Errors', css: 'is-danger' },
    '1': { title: 'Warnings', css: 'is-warning' },
    '2': { title: 'Infos', css: 'is-info' },
    '3': { title: 'Hints', css: 'is-light' },
    '4': { title: '', css: 'is-success' },
};

export function getValidationSummary(validationData: ApiValidation[]): ValidationSummary {
    const summary: ValidationSummary = { 0: {}, 1: {}, 2: {}, 3: {} }
    for (const validationItem of validationData) {
        if (validationItem.code in summary[validationItem.severity]) {
            summary[validationItem.severity][validationItem.code].count++;
        } else {
            summary[validationItem.severity][validationItem.code] = { count: 1 };
        }
    }
    return summary
}

export function getValidationBadgeCss(validationData: ApiValidation[]): string {
    let maxSeverity = 4
    for (const validationItem of validationData) {
        if (validationItem.severity < maxSeverity) {
            maxSeverity = validationItem.severity
        }
        if (maxSeverity === 0) {
            break
        }
    }
    return severityNames[maxSeverity].css
}