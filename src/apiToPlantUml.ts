import { setupHotReload } from "./common/hotReload"
import ApiToPlantUml from "./tools/apiToPlantUml/index.svelte"

new ApiToPlantUml({ target: document.body })

setupHotReload()