type MapAllRefCallback = (item: any, ref: string) => void

const mapAllRef = (root: any, obj: any, callback: MapAllRefCallback): any => {
    for (const key in obj) {
        if (key === '$ref' && typeof obj[key] === 'string') {
            return callback(obj, obj['$ref'])
        }
        if (typeof obj[key] === 'object') {
            obj[key] = mapAllRef(root, obj[key], callback)
        }
    }
    return obj
}

const getObjectByRef = (root: any, ref: string): any => {
    if (!ref.startsWith('#/')) {
        throw new Error('Only local references are supported')
    }
    const steps = ref.substring(2).split('/')
    let referencedObj = root
    for (const step of steps) {
        if (step in referencedObj) {
            referencedObj = referencedObj[step]
        } else {
            throw new Error(`Reference not found: ${ref}`)
        }
    }
    return referencedObj
}

const resolveReferencesRecursive = (root: any, obj: any, exploredPaths: string[]): any => {
    // console.log('resolveReferencesRecursive begin:', { root, obj, exploredPaths })
    if (typeof obj === 'object') {
        obj = mapAllRef(root, obj, (item, ref) => {
            // console.log('mapAllRef begin:', { item, ref })
            let referencedObj = {}
            if (exploredPaths.indexOf(ref) === -1) {
                exploredPaths.push(ref)
                referencedObj = getObjectByRef(root, ref)
                // console.log('mapAllRef getObjectByRef:', { referencedObj })
                referencedObj = resolveReferencesRecursive(root, referencedObj, exploredPaths)
                // console.log('mapAllRef resolveReferencesRecursive:', { referencedObj })
                exploredPaths.pop()
                if (typeof referencedObj !== 'object') {
                    throw new Error(`Reference to not object items forbidden: ${ref}`)
                }
            }
            const itemCopy = Object.assign({}, item)
            delete itemCopy['$ref']
            // console.log('mapAllRef end:', { output: Object.assign({}, referencedObj, itemCopy) })
            return Object.assign({}, referencedObj, itemCopy)
        })
    }
    // console.log('resolveReferencesRecursive end:', { obj })
    return obj
}

export const resolveReferences = (obj: any): any => {
    return resolveReferencesRecursive(obj, obj, [])
}
