import { setupHotReload } from "common/hotReload"
import ApiToSpreadsheet from "./apiToSpreadsheet/index.svelte"

new ApiToSpreadsheet({ target: document.body })

setupHotReload()