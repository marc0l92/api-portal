<script lang="ts">
    import type { Api } from 'common/api/api';
    import { compareApis, DiffType, diffTypeColor, type ApiDiff } from './compare';
    import DiffItemsTable from './diffItemsTable.svelte';

    export let leftApi: Api;
    export let rightApi: Api;
    let apiDiff: ApiDiff;

    $: if (leftApi && rightApi) {
        apiDiff = compareApis(leftApi, rightApi);
    }
</script>

<div>
    {#if apiDiff}
        {#if !apiDiff.isBackwardCompatible}
            <div class="notification is-small is-danger">
                <i class="fa-solid fa-triangle-exclamation mx-1" title="Not backward compatible change" />
                Not backward compatible changes detected
            </div>
        {/if}
        {#if apiDiff.metadata.length > 0}
            <details open>
                <summary class="title is-5">Apis Metadata</summary>
                <DiffItemsTable diffItems={apiDiff.metadata} />
            </details>
        {/if}
        {#each Object.entries(apiDiff.services) as [serviceName, serviceDiff]}
            <details open>
                <summary class="title is-5">{serviceName}</summary>
                <p class="mb-2">
                    Status:
                    <span class="tag {diffTypeColor[serviceDiff.type]}">
                        {#if !serviceDiff.isBackwardCompatible}
                            <i class="fa-solid fa-triangle-exclamation mr-1" title="Not backward compatible change" />
                        {/if}
                        {serviceDiff.type}
                    </span>
                </p>
                {#if serviceDiff.metadata && serviceDiff.metadata.items.length}
                    <p class="table-title">
                        {#if !serviceDiff.metadata.isBackwardCompatible}
                            <i class="fa-solid fa-triangle-exclamation mr-1" title="Not backward compatible change" />
                        {/if}
                        Metadata
                    </p>
                    <DiffItemsTable diffItems={serviceDiff.metadata.items} />
                {/if}
                {#if serviceDiff.parameters && serviceDiff.parameters.items.length}
                    <p class="table-title">
                        {#if !serviceDiff.parameters.isBackwardCompatible}
                            <i class="fa-solid fa-triangle-exclamation mr-1" title="Not backward compatible change" />
                        {/if}
                        Request Parameters
                    </p>
                    <DiffItemsTable diffItems={serviceDiff.parameters.items} />
                {/if}
                {#if serviceDiff.request && serviceDiff.request.items.length}
                    <p class="table-title">
                        {#if !serviceDiff.request.isBackwardCompatible}
                            <i class="fa-solid fa-triangle-exclamation mr-1" title="Not backward compatible change" />
                        {/if}
                        Request Body
                    </p>
                    <DiffItemsTable diffItems={serviceDiff.request.items} />
                {/if}
                {#if serviceDiff.responses && Object.keys(serviceDiff.responses).length}
                    <p class="table-title">
                        <!-- {#if !serviceDiff.responses.isBackwardCompatible}
                            <i class="fa-solid fa-triangle-exclamation mr-1" title="Not backward compatible change" />
                        {/if} -->
                        Responses Body
                    </p>
                {/if}
            </details>
        {/each}
        {#if !apiDiff.metadata.length && !Object.keys(apiDiff.services).length}
            <p>No differences detected</p>
        {/if}
    {/if}
</div>

<style>
    details:not(:last-child) {
        margin-bottom: 1.5em;
    }
    .table-title {
        font-weight: bold;
    }
</style>
