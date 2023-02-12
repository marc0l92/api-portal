import { setupHotReload } from "common/hotReload"
import RestApiToText from "./tools/restApiToText/index.svelte"

new RestApiToText({ target: document.body })

setupHotReload()