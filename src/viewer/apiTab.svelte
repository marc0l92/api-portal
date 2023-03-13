<script lang="ts">
    import { afterUpdate } from 'svelte';
    import SwaggerUI from 'swagger-ui';
    import { SwaggerUiFlatModelPlugin } from 'swagger-ui-flat-model-plugin';

    export let apiDoc: any = null;

    function updateSwaggerUi(): Promise<void> {
        return new Promise((resolve) => {
            SwaggerUI({
                dom_id: '#swaggerUiRoot',
                spec: apiDoc,
                displayOperationId: false,
                tryItOutEnabled: false,
                defaultModelExpandDepth: 5,
                onComplete: () => {
                    return resolve(null);
                },
                plugins: [SwaggerUiFlatModelPlugin],
            });
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
