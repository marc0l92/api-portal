import { setupHotReload } from "common/globals"
import ApiServicesExtraction from "./tools/apiServicesExtraction/index.svelte"

new ApiServicesExtraction({ target: document.body })

setupHotReload()