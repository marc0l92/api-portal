type MapAllRefCallback = (item: any, ref: string) => void

const mapAllRef = (obj: any, callback: MapAllRefCallback): any => {
    for (const key in obj) {
        if (key === '$ref' && typeof obj[key] === 'string') {
            return callback(obj, obj['$ref'])
        } else if (typeof obj[key] === 'object') {
            obj[key] = mapAllRef(obj[key], callback)
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

const overrideWithLocalProperties = (local: any, global: any): any => {
    const localCopy = Object.assign({}, local)
    delete localCopy['$ref']
    return Object.assign({}, global, localCopy)
}

const resolveReferencesRecursive = (root: any, obj: any, exploredPaths: string[]): any => {
    // console.log('resolveReferencesRecursive begin:', { root, obj, exploredPaths: JSON.stringify(exploredPaths) })
    if (typeof obj === 'object') {
        obj = mapAllRef(obj, (item, ref) => {
            // console.log('mapAllRef begin:', { item, ref, exploredPaths: JSON.stringify(exploredPaths) })
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
            const resolvedObj = overrideWithLocalProperties(item, referencedObj)
            // console.log('mapAllRef end:', resolvedObj)
            return resolvedObj
        })
    }
    // console.log('resolveReferencesRecursive end:', { obj })
    return obj
}


// const resolveReferencesIterative = (root: any): any => {
//     const stack: { data: any, path: string }[] = [{ data: root, path: '#' }]

//     while (stack.length > 0) {
//         // console.log('Stack: ', { stack: JSON.stringify(stack), root: JSON.stringify(root) })
//         let obj = stack.pop()
//         // console.log('Begin obj: ', { obj: JSON.stringify(obj) })
//         if (typeof obj.data === 'object') {
//             for (const key in obj.data) {
//                 if (key === '$ref' && typeof obj.data[key] === 'string') {
//                     if (obj.path.startsWith(obj.data[key])) {
//                         //Circular reference
//                         delete obj.data['$ref']
//                     } else {
//                         const referencedObj = getObjectByRef(root, obj.data['$ref'])
//                         if (typeof referencedObj !== 'object') {
//                             throw new Error(`Reference to not object items forbidden: ${obj.data['$ref']}`)
//                         }
//                         delete obj.data['$ref']
//                         const objCopy = Object.assign({}, obj.data)
//                         Object.assign(obj.data, referencedObj, objCopy)
//                         stack.push(obj)
//                         // console.log({ referencedObj, root: JSON.stringify(root) })
//                     }
//                 } else if (typeof obj.data[key] === 'object') {
//                     stack.push({ data: obj.data[key], path: `${obj.path}/${key}` })
//                 }
//             }
//         }
//         // console.log('End obj: ', { obj: JSON.stringify(obj) })
//     }
//     return root
// }


export const resolveReferences = (obj: any): any => {
    return resolveReferencesRecursive(obj, obj, [])
    // return resolveReferencesIterative(obj)
}
