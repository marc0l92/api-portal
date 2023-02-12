import { setupHotReload } from "common/hotReload"
import ApiToSpreadsheet from "./tools/apiToSpreadsheet/index.svelte"

new ApiToSpreadsheet({ target: document.body })

setupHotReload()