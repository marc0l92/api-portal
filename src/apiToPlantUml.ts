import { setupHotReload } from "./common/globals"
import ApiToPlantUml from "./tools/apiToPlantUml/index.svelte"

new ApiToPlantUml({ target: document.body })

setupHotReload()