import { setupHotReload } from "common/hotReload"
import Browser from "./browser/index.svelte"

new Browser({ target: document.body })

setupHotReload()