import path from 'path'
import glob from 'glob'
import yaml from 'js-yaml'
import hash from 'object-hash'
import { exit } from 'process'
import fs from 'fs-extra'
import apiTools from './dist/api-tools.js'
import SpectralCore from "@stoplight/spectral-core"
import { truthy } from "@stoplight/spectral-functions"

const INPUT_FOLDER = './inputApi'
const OUTPUT_FOLDER = './public/apis'
const INDEX_FILE_PATH = `${OUTPUT_FOLDER}/apiIndex.json`
const API_SUFFIX = '.api.json'
const VALIDATION_SUFFIX = '.validation.json'

async function generateApi(apiDoc, apiHash) {
    await fs.outputJson(`${OUTPUT_FOLDER}/${apiHash}${API_SUFFIX}`, apiDoc)
}

async function generateValidation(apiDoc, apiHash) {
    const spectral = new SpectralCore.Spectral()
    spectral.setRuleset({
        rules: {
            "no-empty-description": {
                given: "$..description",
                message: "Description must not be empty",
                then: {
                    function: truthy,
                },
            },
        },
    });
    const spectralResults = await spectral.run(apiDoc)
    await fs.outputJson(`${OUTPUT_FOLDER}/${apiHash}${VALIDATION_SUFFIX}`, spectralResults)
}

function isSmallerVersion(v1, v2) {
    return v1 < v2
}

function sortOtherVersions(apiIndex) {
    for (const apiName in apiIndex) {
        apiIndex[apiName].otherVersions = apiIndex[apiName].otherVersions.sort((a, b) => isSmallerVersion(a.version, b.version))
    }
}

fs.removeSync(OUTPUT_FOLDER)
glob(`${INPUT_FOLDER}/**/*.+(json|yaml|yml)`, async (error, fileNames) => {
    if (error) {
        console.error(error)
        exit(1)
    }

    const apiIndex = {}
    for (const fileName of fileNames) {
        const apiDoc = yaml.load(await fs.readFile(fileName))
        const apiHash = hash(apiDoc)

        await generateApi(apiDoc, apiHash)
        await generateValidation(apiDoc, apiHash)

        const api = await apiTools.parseApi(apiDoc)

        if (!apiIndex[api.getName()]) {
            apiIndex[api.getName()] = { lastVersion: null, versions: {} }
        }
        if (!apiIndex[api.getName()].lastVersion || isSmallerVersion(apiIndex[api.getName()].lastVersion, api.getVersion())) {
            apiIndex[api.getName()].lastVersion = api.getVersion()
        }
        apiIndex[api.getName()].versions[api.getVersion()] = {
            hash: apiHash,
            fileName: fileName.replace(INPUT_FOLDER, ''),
            package: path.dirname(fileName.replace(INPUT_FOLDER, '')),
        }
    }

    sortOtherVersions(apiIndex)
    fs.outputJson(INDEX_FILE_PATH, apiIndex)
})
