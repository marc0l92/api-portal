import { apiFactory } from "common/api/apiFactory"
import type { ApiOpenApiDoc } from "common/api/apiOpenApi"
import { compareApis, DiffType, type ApiDiff } from "./compare"


const kBaseApiOpenApiDoc: ApiOpenApiDoc = {
    openapi: '3.0',
    info: {
        title: 'Base api',
        license: 'MIT',
    },
    basePath: '/v1',
    paths: {},
    components: {},
}

const kEmptyDiff: ApiDiff = {
    isBackwardCompatible: true,
    metadata: [],
    services: {},
}

function copy<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj))
}


describe('Compare', () => {
    test('Equal api', () => {
        const kApiRight = copy(kBaseApiOpenApiDoc)
        expect(compareApis(apiFactory(kBaseApiOpenApiDoc), apiFactory(kApiRight))).toEqual(kEmptyDiff)
    })
    describe('Metadata', () => {
        describe('root', () => {
            test('Removing metadata', () => {
                const kApiRight = copy(kBaseApiOpenApiDoc)
                delete kApiRight.basePath
                const kDifferences = copy(kEmptyDiff)
                kDifferences.metadata.push({
                    type: DiffType.REMOVED,
                    path: '/basePath',
                    leftValue: kBaseApiOpenApiDoc.basePath,
                    isBackwardCompatible: true,
                })
                expect(compareApis(apiFactory(kBaseApiOpenApiDoc), apiFactory(kApiRight))).toEqual(kDifferences)
            })
            test('Adding metadata', () => {
                const kApiRight = copy(kBaseApiOpenApiDoc)
                kApiRight.host = "www.domain.com"
                const kDifferences = copy(kEmptyDiff)
                kDifferences.metadata.push({
                    type: DiffType.ADDED,
                    path: '/host',
                    rightValue: kApiRight.host,
                    isBackwardCompatible: true,
                })
                expect(compareApis(apiFactory(kBaseApiOpenApiDoc), apiFactory(kApiRight))).toEqual(kDifferences)
            })
            test('Modify metadata', () => {
                const kApiRight = copy(kBaseApiOpenApiDoc)
                kApiRight.basePath = '/v2'
                const kDifferences = copy(kEmptyDiff)
                kDifferences.metadata.push({
                    type: DiffType.MODIFIED,
                    path: '/basePath',
                    leftValue: kBaseApiOpenApiDoc.basePath,
                    rightValue: kApiRight.basePath,
                    isBackwardCompatible: true,
                })
                expect(compareApis(apiFactory(kBaseApiOpenApiDoc), apiFactory(kApiRight))).toEqual(kDifferences)
            })
        })
        describe('info', () => {
            test('Removing metadata', () => {
                const kApiRight = copy(kBaseApiOpenApiDoc)
                delete kApiRight.info.license
                const kDifferences = copy(kEmptyDiff)
                kDifferences.metadata.push({
                    type: DiffType.REMOVED,
                    path: '/info/license',
                    leftValue: kBaseApiOpenApiDoc.info.license,
                    isBackwardCompatible: true,
                })
                expect(compareApis(apiFactory(kBaseApiOpenApiDoc), apiFactory(kApiRight))).toEqual(kDifferences)
            })
            test('Adding metadata', () => {
                const kApiRight = copy(kBaseApiOpenApiDoc)
                kApiRight.info.email = "email@domain.com"
                const kDifferences = copy(kEmptyDiff)
                kDifferences.metadata.push({
                    type: DiffType.ADDED,
                    path: '/info/email',
                    rightValue: kApiRight.info.email,
                    isBackwardCompatible: true,
                })
                expect(compareApis(apiFactory(kBaseApiOpenApiDoc), apiFactory(kApiRight))).toEqual(kDifferences)
            })
            test('Modify metadata', () => {
                const kApiRight = copy(kBaseApiOpenApiDoc)
                kApiRight.info.title = 'Different title'
                const kDifferences = copy(kEmptyDiff)
                kDifferences.metadata.push({
                    type: DiffType.MODIFIED,
                    path: '/info/title',
                    leftValue: kBaseApiOpenApiDoc.info.title,
                    rightValue: kApiRight.info.title,
                    isBackwardCompatible: true,
                })
                expect(compareApis(apiFactory(kBaseApiOpenApiDoc), apiFactory(kApiRight))).toEqual(kDifferences)
            })
        })
        describe('services', () => {
            // test('Removing service', () => {
            //     const kApiRight = copy(kBaseApiOpenApiDoc)
            //     delete kApiRight.info.license
            //     const kDifferences = copy(kEmptyDiff)
            //     kDifferences.metadata.push({
            //         type: DiffType.REMOVED,
            //         path: '/info/license',
            //         leftValue: kBaseApiOpenApiDoc.info.license,
            //     })
            //     expect(compareApis(apiFactory(kBaseApiOpenApiDoc), apiFactory(kApiRight))).toEqual(kDifferences)
            // })
            // test('Adding service', () => {
            //     const kApiRight = copy(kBaseApiOpenApiDoc)
            //     kApiRight.info.email = "email@domain.com"
            //     const kDifferences = copy(kEmptyDiff)
            //     kDifferences.metadata.push({
            //         type: DiffType.ADDED,
            //         path: '/info/email',
            //         rightValue: kApiRight.info.email,
            //     })
            //     expect(compareApis(apiFactory(kBaseApiOpenApiDoc), apiFactory(kApiRight))).toEqual(kDifferences)
            // })
            // test('Modify service', () => {
            //     const kApiRight = copy(kBaseApiOpenApiDoc)
            //     kApiRight.info.title = 'Different title'
            //     const kDifferences = copy(kEmptyDiff)
            //     kDifferences.metadata.push({
            //         type: DiffType.MODIFIED,
            //         path: '/info/title',
            //         leftValue: kBaseApiOpenApiDoc.info.title,
            //         rightValue: kApiRight.info.title,
            //     })
            //     expect(compareApis(apiFactory(kBaseApiOpenApiDoc), apiFactory(kApiRight))).toEqual(kDifferences)
            // })
        })
    })
})

export { }