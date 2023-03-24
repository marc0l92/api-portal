import { setupHotReload } from "common/globals"
import Compare from "./compare/index.svelte"

new Compare({ target: document.body })

setupHotReload()