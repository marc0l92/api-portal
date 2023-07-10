import { setupHotReload } from './common/globals'
import Home from './home/index.svelte'

new Home({ target: document.body })

setupHotReload()