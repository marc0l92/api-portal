import { setupHotReload } from "common/hotReload"
import RestApiToText from "./restApiToText/index.svelte"

new RestApiToText({ target: document.body })

setupHotReload()