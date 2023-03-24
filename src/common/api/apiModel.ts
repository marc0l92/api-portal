export interface ApiModelDoc {
    title?: string
    type?: ModelType
    example?: any
    minLength?: number
    maxLength?: number
    minItems?: number
    maxItems?: number
    minProperties?: number
    maxProperties?: number
    pattern?: string
    format?: string
    enum?: string[]
    description?: string
    items?: ApiModelDoc
    required?: string[]
    properties?: {
        [name: string]: ApiModelDoc
    }
    allOf?: ApiModelDoc[]
    additionalProperties?: ApiModelDoc | boolean
    $ref?: string
    readOnly: boolean
    writeOnly: boolean
}

export enum ModelType {
    Array = 'array',
    Boolean = 'boolean',
    Integer = 'integer',
    Number = 'number',
    Object = 'object',
    String = 'string',
}

export interface ApiModelDocMap {
    [name: string]: ApiModelDoc
}

export const mergeAllOfDefinitions = (model: ApiModelDoc, path: string = ''): ApiModelDoc => {
    // console.log(path, 'mergeAllOfDefinitions->input', model)
    if (!model) {
        return model
    }
    for (const key in model) {
        if (key === 'allOf') {
            if (model[key].length === 1) {
                // No objects to merge, allOf used only to override the description
                model = Object.assign({}, mergeAllOfDefinitions(model[key][0]), model)
                delete model.allOf
            } else {
                const mergedModel: ApiModelDoc = Object.assign({}, model, { type: ModelType.Object, required: [], properties: {} })
                delete mergedModel.allOf

                for (const i in model[key]) {
                    const childModel = mergeAllOfDefinitions(model[key][i], path + '/[' + i + ']')
                    if (!mergedModel.title && childModel.title) {
                        mergedModel.title = childModel.title
                    }
                    if ('properties' in childModel) {
                        Object.assign(mergedModel.properties, childModel.properties)
                    }
                    if ('required' in childModel) {
                        mergedModel.required = mergedModel.required.concat(childModel.required)
                    }
                    if ('additionalProperties' in childModel && typeof childModel.additionalProperties === 'object') {
                        Object.assign(mergedModel.additionalProperties, childModel.additionalProperties)
                    }
                    if ('minProperties' in childModel) {
                        if ('minProperties' in mergedModel) {
                            mergedModel.minProperties += childModel.minProperties
                        } else {
                            mergedModel.minProperties = childModel.minProperties
                        }
                    }
                    if ('maxProperties' in childModel) {
                        console.warn('WARNING: maxProperties not supported while merging allOf definitions')
                    }
                }
                if (mergedModel.required.length === 0) {
                    delete mergedModel.required
                } else {
                    mergedModel.required = [...new Set([...mergedModel.required])]
                }
                if (Object.keys(mergedModel.properties).length === 0) {
                    delete mergedModel.properties
                }
                model = mergedModel
            }
            // console.log(path, 'mergeAllOfDefinitions->merged', model)
            break
        }
    }

    // continue in deep
    if ('properties' in model) {
        for (const propertyName in model.properties) {
            model.properties[propertyName] = mergeAllOfDefinitions(model.properties[propertyName], path + '/' + propertyName)
        }
    } else if ('items' in model) {
        model.items = mergeAllOfDefinitions(model.items, path + '[]')
    } else if ('additionalProperties' in model && typeof model.additionalProperties === 'object') {
        model.additionalProperties = mergeAllOfDefinitions(model.additionalProperties)
    }
    return model
}