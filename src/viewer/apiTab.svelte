<script lang="ts">
    import { onMount } from 'svelte';
    import SwaggerUI from 'swagger-ui';

    export let apiDoc: any = null;

    onMount(() => {
        if (apiDoc) {
            SwaggerUI({
                dom_id: '#swaggerUiRoot',
                spec: apiDoc,
            });
        }
    });
</script>

<div id="swaggerUiRoot" />

<style>
</style>
