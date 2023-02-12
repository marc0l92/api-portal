import glob from 'glob'
import yaml from 'js-yaml'
import hash from 'object-hash'
import { exit } from 'process'
import fs from 'fs-extra'
import apiTools from './dist/api-tools.js'

const INPUT_FOLDER = './inputApi'
const OUTPUT_FOLDER = './public/apis'
const INDEX_FILE_NAME = 'index.json'
const API_SUFFIX = '.api.json'
const DIAGRAMS_SUFFIX = '.diagrams.json'
const TABLES_SUFFIX = '.tables.json'
const VALIDATION_SUFFIX = '.validation.json'
const RELEASE_NOTES_SUFFIX = '.release-notes.json'

const DIAGRAM_BUILDER_OPTIONS = {
}


async function generateApi(apiDoc, apiHash) {
    await fs.outputJson(`${OUTPUT_FOLDER}/${apiHash}${API_SUFFIX}`, apiDoc)
}

async function generateDiagrams(apiDoc, apiHash) {
    const diagrams = await apiTools.apiToPlantUmlDiagrams(apiDoc, DIAGRAM_BUILDER_OPTIONS)
    await fs.outputJson(`${OUTPUT_FOLDER}/${apiHash}${DIAGRAMS_SUFFIX}`, diagrams)
}

async function generateTables(apiDoc, apiHash) {
    const tables = await apiTools.apiToTables(apiDoc)
    await fs.outputJson(`${OUTPUT_FOLDER}/${apiHash}${TABLES_SUFFIX}`, tables)
}

async function generateValidation(apiDoc, apiHash) {
    await fs.outputJson(`${OUTPUT_FOLDER}/${apiHash}${VALIDATION_SUFFIX}`, {})
}

async function generateReleaseNotes(apiDoc, apiHash) {
    await fs.outputJson(`${OUTPUT_FOLDER}/${apiHash}${RELEASE_NOTES_SUFFIX}`, {})
}


glob(`${INPUT_FOLDER}/**/*.+(json|yaml|yml)`, async (error, fileNames) => {
    if (error) {
        console.error(error)
        exit(1)
    }

    const indexObject = {}
    for (const fileName of fileNames) {
        const apiDoc = yaml.load(await fs.readFile(fileName))
        const apiHash = hash(apiDoc)

        await generateApi(apiDoc, apiHash)
        await generateDiagrams(apiDoc, apiHash)
        await generateTables(apiDoc, apiHash)
        await generateValidation(apiDoc, apiHash)
        await generateReleaseNotes(apiDoc, apiHash)

        indexObject[apiHash] = {
            api: `${apiHash}${API_SUFFIX}`,
            diagrams: `${apiHash}${DIAGRAMS_SUFFIX}`,
            table: `${apiHash}${TABLES_SUFFIX}`,
            validation: `${apiHash}${VALIDATION_SUFFIX}`,
            releaseNotes: `${apiHash}${RELEASE_NOTES_SUFFIX}`,
        }
    }
    fs.outputJson(`${OUTPUT_FOLDER}/${INDEX_FILE_NAME}`, indexObject)

})

// load files
// generate browse index
// generate diagram
// generate table
// generate spectral
// generate release notes
