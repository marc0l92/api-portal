
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import process from 'process'
import { exit } from 'process'
import type { BuildConfig } from 'cli/buildConfig'
import fs from 'fs-extra'
import yaml from 'js-yaml'
import { generateApiFiles } from 'cli/generateApiFiles'
import { validateApiFile } from 'cli/validateApi'
import { applyServicesTags } from 'cli/applyServicesTags'
import { DEFAULT_SERVICES_TAGS_FILE_NAME } from 'cli/cliConstants'

enum Commands {
    GENERATE = 'generate',
    VALIDATE = 'validate',
    APPLY_TAGS = 'applyTags',
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

let servicesTagsFileName: string = DEFAULT_SERVICES_TAGS_FILE_NAME
if ('servicesTagsFile' in argv) {
    servicesTagsFileName = argv.servicesTagsFile as string
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
        validateApiFile(fileName, apiHash, appConfig).catch(exitWithError)
        break
    case Commands.APPLY_TAGS:
        applyServicesTags(appConfig, servicesTagsFileName).catch(exitWithError)
        break
    default:
        exitWithError(`Command ${command} not found`)
        break
}
