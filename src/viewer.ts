import { setupHotReload } from "common/globals"
import Viewer from "./viewer/index.svelte"

new Viewer({ target: document.body })

setupHotReload()