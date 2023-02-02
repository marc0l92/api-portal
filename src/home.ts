import { setupHotReload } from "common/hotReload"
import Home from "./home/index.svelte"

new Home({ target: document.body })

setupHotReload()