import path from 'path'
import glob from 'glob'
import yaml from 'js-yaml'
import hash from 'object-hash'
import { exit } from 'process'
import fs from 'fs-extra'
import apiTools from './dist/api-tools.js'
import SpectralCore from "@stoplight/spectral-core"
import { truthy } from "@stoplight/spectral-functions"

const INPUT_FOLDER = './inputApi/'
const OUTPUT_FOLDER = './public/apis'
const INDEX_FILE_PATH = `${OUTPUT_FOLDER}/apiIndex.json`
const API_SUFFIX = '.api.json'
const VALIDATION_SUFFIX = '.validation.json'
const MAX_VERSION_DIGITS = 5;

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
    function versionToNumber(v) {
        let total = 0;
        let i = 0;
        for (const split of v.split('.').reverse()) {
            total += parseInt(split) * Math.pow(10, i * MAX_VERSION_DIGITS);
            i++;
        }
        return total;
    }
    return versionToNumber(v1) < versionToNumber(v2)
}

fs.removeSync(OUTPUT_FOLDER)
glob(`${INPUT_FOLDER}**/*.+(json|yaml|yml)`, async (error, fileNames) => {
    if (error) {
        console.error(error)
        exit(1)
    }

    const apiIndex = {}
    for (const fileName of fileNames) {
        try {
            console.log('+', fileName)
            const apiDoc = yaml.load(await fs.readFile(fileName))
            const apiHash = hash(apiDoc)
            const relativeFileName = fileName.replace(INPUT_FOLDER, '')
            const packageName = path.dirname(relativeFileName)

            await generateApi(apiDoc, apiHash)
            await generateValidation(apiDoc, apiHash)

            const api = await apiTools.parseApi(apiDoc, { ignoreReferenceErrors: true })

            if (!apiIndex[packageName]) {
                apiIndex[packageName] = {}
            }
            if (!apiIndex[packageName][api.getName()]) {
                apiIndex[packageName][api.getName()] = { lastVersion: null, versions: {} }
            }
            if (!apiIndex[packageName][api.getName()].lastVersion || isSmallerVersion(apiIndex[packageName][api.getName()].lastVersion, api.getVersion())) {
                apiIndex[packageName][api.getName()].lastVersion = api.getVersion()
            }
            apiIndex[packageName][api.getName()].versions[api.getVersion()] = {
                hash: apiHash,
                fileName: relativeFileName,
            }
        } catch (e) {
            console.error('Error:', e.message)
        }
    }
    fs.outputJson(INDEX_FILE_PATH, apiIndex)
})