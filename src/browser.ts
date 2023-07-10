import { setupHotReload } from './common/globals'
import Browser from './browser/index.svelte'

new Browser({ target: document.body })

setupHotReload()