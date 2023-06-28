
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import process from 'process'
import { exit } from 'process'
import type { BuildConfig } from 'cli/buildConfig'
import type { ServicesTags } from 'cli/servicesTags'
import fs from 'fs-extra'
import yaml from 'js-yaml'
import { generateApiFiles } from 'cli/generateApiFiles'

function exitWithError(error: any) {
    console.error(error)
    exit(1)
}

const argv = yargs(hideBin(process.argv)).argv

let appConfig: BuildConfig = {}
if ('configFile' in argv) {
    appConfig = yaml.load(fs.readFileSync(argv.configFile as string, { encoding: 'utf-8' }))
    console.log('Config loaded:', JSON.stringify(appConfig))
}

let servicesTags: ServicesTags = {}
if ('tagsFile' in argv) {
    servicesTags = yaml.load(fs.readFileSync(argv.tagsFile as string, { encoding: 'utf-8' }))
    console.log('Tags loaded')
}

generateApiFiles(appConfig, servicesTags).catch(exitWithError)
