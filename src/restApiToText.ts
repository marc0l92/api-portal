import { setupHotReload } from './common/globals'
import RestApiToText from './tools/restApiToText/index.svelte'

new RestApiToText({ target: document.body })

setupHotReload()