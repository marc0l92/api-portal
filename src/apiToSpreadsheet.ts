import { setupHotReload } from "common/globals"
import ApiToSpreadsheet from "./tools/apiToSpreadsheet/index.svelte"

new ApiToSpreadsheet({ target: document.body })

setupHotReload()