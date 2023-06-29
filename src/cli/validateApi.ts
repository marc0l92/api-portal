import { compressToArray } from "common/compress"
import type { BuildConfig } from "./buildConfig"
import { exec } from 'child_process'
import fs from 'fs-extra'
import { API_TO_VALIDATE_INDENTATION, API_TO_VALIDATE_SUFFIX, OUTPUT_FOLDER, VALIDATION_SUFFIX, VALIDATION_TIMEOUT } from "./cliConstants"


async function minifyAndCompressJsonFile(filename: string): Promise<void> {
    await fs.outputFile(filename, compressToArray(JSON.stringify(fs.readJSONSync(filename))))
}

export async function validateApiDoc(apiDoc: any, apiHash: string, appConfig: BuildConfig) {
    const fileName = apiHash + API_TO_VALIDATE_SUFFIX
    fs.outputFileSync(fileName, JSON.stringify(apiDoc, null, API_TO_VALIDATE_INDENTATION))
    await validateApiFile(fileName, apiHash, appConfig)
    fs.remove(fileName).catch(() => { })
}

export async function validateApiFile(fileName: string, apiHash: string, appConfig: BuildConfig): Promise<any> {
    return new Promise((resolve, reject) => {
        if (appConfig && appConfig.validation && appConfig.validation.spectralRulesFile && appConfig.validation.enable) {
            const outputFile = `${OUTPUT_FOLDER}/${apiHash}${VALIDATION_SUFFIX}`
            const executable = 'node --max_old_space_size=8192 ./node_modules/@stoplight/spectral-cli/dist/index.js'
            const options = `lint --quiet --ruleset "${appConfig.validation.spectralRulesFile}" --format json "${fileName}" --output "${outputFile}"`
            console.log('Run:', `${executable} ${options}`)
            exec(`${executable} ${options}`, { timeout: VALIDATION_TIMEOUT }, async (error, stdout, stderr) => {
                if (stderr) {
                    return reject(stderr)
                } if (error && error.killed && error.signal === 'SIGTERM') {
                    return reject('Execution timeout reached while validating: ' + apiHash)
                } else {
                    await minifyAndCompressJsonFile(outputFile)
                    return resolve(null)
                }
            })
        } else {
            return resolve(null)
        }
    })
}