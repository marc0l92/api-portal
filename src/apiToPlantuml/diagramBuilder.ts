import { ModelType, type ApiModelDoc } from 'common/apiModel'
import * as PlantumlEncoder from 'plantuml-encoder'
import { DEFAULT_DIAGRAM_BUILDER_OPTIONS, type DiagramBuilderOptions } from './diagramBuilderOptions'


interface ApiModelDocMap {
    [key: string]: ApiModelDoc
}

const COLORS = {
    nativeTypes: '#000000',
    field: '#00568F',
    fieldMandatory: '#00568F',
}

const safeStr = (str: string) => {
    return JSON.stringify(str)
}

const isDefinition = (def: ApiModelDoc): boolean => {
    return 'title' in def
}

export default class DiagramBuilder {
    private options: DiagramBuilderOptions
    private diagramText: string
    private classes: string[] = []

    constructor(options: DiagramBuilderOptions) {
        this.diagramText = '@startuml\n'
        this.options = Object.assign({}, DEFAULT_DIAGRAM_BUILDER_OPTIONS, options)
        if (this.options.diagramHeader) {
            this.diagramText += this.options.diagramHeader + '\n'
        }
    }

    // Getters

    getDiagramText(): string {
        return this.diagramText + '@enduml'
    }

    getDiagramImageUri(): string {
        const encodedDiagram = PlantumlEncoder.encode(this.getDiagramText())
        return this.options.serverUrl + '/' + this.options.format + '/' + encodedDiagram
    }

    // Builder

    buildTitle(title: string): void {
        this.diagramText += `title ${safeStr(title)}\n`
    }

    buildModel(model: ApiModelDoc): void {
        let usedModels: ApiModelDocMap = {}
        let name = 'object'
        if (model.title) {
            name = model.title
        }
        if (!model.type) {
            model.type = ModelType.Object
        }

        switch (model.type) {
            case ModelType.Object:
                usedModels = this.buildObject(name, model)
                break
            case ModelType.Array:
                name += '[]'
                usedModels = this.buildObject(name, model.items, 'abstract')
                break
            case ModelType.Boolean:
            case ModelType.Integer:
            case ModelType.String:
                this.buildBasicType(model.type)
                break
            default:
                throw new Error('Definition type not supported: ' + model.type)
        }
        for (const usedModelName in usedModels) {
            const usedModel = usedModels[usedModelName]
            if (this.classes.indexOf(usedModel.title) === -1) {
                this.buildModel(usedModel)
                this.classes.push(usedModel.title)
            }
            this.buildLink(name, usedModelName)
        }
    }

    private buildProperty(name: string, property: ApiModelDoc, mandatory: boolean = false): ApiModelDocMap {
        let usedDefinitions: ApiModelDocMap = {}
        if (!property.type) {
            property.type = ModelType.Object
        }
        switch (property.type) {
            case ModelType.Array:
                const arrayItems = property.items
                this.buildField(name, `[${this.getDefName(arrayItems)}]`, mandatory)
                if (arrayItems.type === ModelType.Object) {
                    if (isDefinition(arrayItems)) {
                        usedDefinitions[this.getDefName(arrayItems)] = arrayItems
                    }
                }
                break
            case ModelType.Object:
                this.buildField(name, this.getDefName(property), mandatory)
                if (isDefinition(property)) {
                    usedDefinitions[this.getDefName(property)] = property
                }
                break
            case ModelType.Boolean:
            case ModelType.Integer:
            case ModelType.String:
                this.buildField(name, this.color(`<i>${property.type}</i>`, COLORS.nativeTypes), mandatory)
                break
            default:
                throw 'Property type not supported: ' + property.type
        }
        return usedDefinitions
    }

    private buildObject(name: string, objDef: ApiModelDoc, type: string = 'class'): ApiModelDocMap {
        let usedDefinitions: ApiModelDocMap = {}
        this.diagramText += `${type} ${safeStr(name)} {\n`
        for (const propName in objDef.properties || []) {
            const mandatory = 'required' in objDef && objDef.required.indexOf(propName) !== -1
            usedDefinitions = Object.assign(usedDefinitions, this.buildProperty(propName, objDef.properties[propName], mandatory))
        }
        if ('additionalProperties' in objDef) {
            usedDefinitions = Object.assign(usedDefinitions, this.buildProperty('{*}', objDef.additionalProperties))
        }
        this.diagramText += `}\n`
        return usedDefinitions
    }

    private buildBasicType(type: string): void {
        this.diagramText += `entity ${type} {}\n`
    }

    private buildLink(from: string, to: string): void {
        this.diagramText += `${safeStr(from)} --> ${safeStr(to)}\n`
    }

    private buildField(name: string, type: string, mandatory: boolean): void {
        name = `<b>${name}</b>`
        if (mandatory) {
            name = this.color(`<u>${name}</u>`, COLORS.fieldMandatory)
        } else {
            name = this.color(`${name}`, COLORS.field)
        }
        this.diagramText += `  {field} ${name}: ${type}\n`
    }

    private color(str: string, color: string): string {
        if (this.options.colors) {
            return `<color ${color}>${str}</color>`
        }
        return str
    }

    private getDefName(def: ApiModelDoc): string {
        if (def) {
            if (def.title) {
                return def.title
            }
            if (def.type) {
                if (def.type === ModelType.Array && def.items) {
                    return `${this.getDefName(def.items)}[]`
                }
                return this.color(`<i>${def.type}</i>`, COLORS.nativeTypes)
            }
            return this.color(`<i>object</i>`, COLORS.nativeTypes)
        }
        console.warn('No name defined for the definition:', def)
        return 'NoName'
    }
}