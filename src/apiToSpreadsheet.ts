import ApiToSpreadsheet from "./apiToSpreadsheet/index.svelte"

new ApiToSpreadsheet({ target: document.body })

new EventSource('/esbuild').addEventListener('change', () => location.reload())