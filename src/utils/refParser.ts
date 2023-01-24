type MapAllRefCallback = (item: any, ref: string) => void

const mapAllRef = (obj: any, callback: MapAllRefCallback): any => {
    for (const key in obj) {
        if (key === '$ref' && typeof obj[key] === 'string') {
            return callback(obj, obj['$ref'])
        }
        if (typeof obj[key] === 'object') {
            obj[key] = mapAllRef(obj[key], callback)
        }
    }
    return obj
}
const getObjectByRef = (obj: any, ref: string): any => {
    if (!ref.startsWith('#/')) {
        throw new Error('Only local references are supported')
    }
    const steps = ref.substring(2).split('/')
    let referencedObj = obj
    for (const step of steps) {
        if (step in referencedObj) {
            referencedObj = referencedObj[step]
        } else {
            throw new Error(`Reference not found: ${ref}`)
        }
    }
    return referencedObj
}

export const resolveReferences = (obj: any): any => {
    if (typeof obj === 'object') {
        obj = mapAllRef(obj, (item, ref) => {
            const referencedObj = getObjectByRef(obj, ref)
            delete item['$ref']
            return Object.assign({}, referencedObj, item)
        })
    }
    return obj
}