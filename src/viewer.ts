import { setupHotReload } from "common/hotReload"
import Viewer from "./viewer/index.svelte"

new Viewer({ target: document.body })

setupHotReload()