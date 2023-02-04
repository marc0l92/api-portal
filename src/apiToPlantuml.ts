import { setupHotReload } from "common/hotReload"
import ApiToPlantuml from "./apiToPlantuml/index.svelte"

new ApiToPlantuml({ target: document.body })

setupHotReload()