<script lang="ts">
    import { afterUpdate } from 'svelte';
    import SwaggerUI from 'swagger-ui';

    export let apiDoc: any = null;
    function updateSwaggerUi() {
        SwaggerUI({
            dom_id: '#swaggerUiRoot',
            spec: apiDoc,
        });
    }

    afterUpdate(() => {
        if (apiDoc) {
            updateSwaggerUi();
        }
    });
</script>

<div id="swaggerUiRoot" />

<style>
</style>
