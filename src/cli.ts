
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import process from 'process'
import { exit } from 'process'
import type { BuildConfig } from 'cli/buildConfig'
import type { ServicesTags } from 'cli/servicesTags'
import fs from 'fs-extra'
import yaml from 'js-yaml'
import { generateApiFiles } from 'cli/generateApiFiles'
import { validateApiFile } from 'cli/validateApiFile'

enum Commands {
    GENERATE = 'generate',
    VALIDATE = 'validate',
}

function exitWithError(error: any) {
    console.error(error)
    exit(1)
}

const argv = yargs(hideBin(process.argv)).argv

const command: Commands = 'command' in argv ? argv.command as Commands : Commands.GENERATE
console.log('Executing command:', command)

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

const fileName: string = 'fileName' in argv ? argv.fileName as string : ''
const apiHash: string = 'apiHash' in argv ? argv.apiHash as string : ''

switch (command) {
    case Commands.GENERATE:
        generateApiFiles(appConfig).catch(exitWithError)
        break
    case Commands.VALIDATE:
        if (!fileName || !apiHash || !appConfig.validation) {
            exitWithError(`Required parameters not respected for the command "${Commands.VALIDATE}". Please provide: "fileName", "apiHash" and "appConfig"`)
        }
        validateApiFile(fileName, apiHash, appConfig)
        break
    default:
        exitWithError(`Command ${command} not found`)
        break
}
