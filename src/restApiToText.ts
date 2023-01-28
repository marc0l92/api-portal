import RestApiToText from "./restApiToText/index.svelte"

new RestApiToText({ target: document.body })

new EventSource('/esbuild').addEventListener('change', () => location.reload())