import Home from "./home/index.svelte"

new Home({ target: document.body })

new EventSource('/esbuild').addEventListener('change', () => location.reload())