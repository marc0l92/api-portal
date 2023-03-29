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
                        {#if serviceDiff.type === DiffType.REMOVED}
                            <i class="fa-solid fa-triangle-exclamation mr-1" title="Not backward compatible change" />
                        {/if}
                        {serviceDiff.type}
                    </span>
                </p>
                {#if serviceDiff.metadata && serviceDiff.metadata.length}
                    <p class="table-title">Metadata</p>
                    <DiffItemsTable diffItems={serviceDiff.metadata} />
                {/if}
                {#if serviceDiff.parameters && serviceDiff.parameters.length}
                    <p class="table-title">Request Parameters</p>
                    <DiffItemsTable diffItems={serviceDiff.parameters} />
                {/if}
                {#if serviceDiff.request && serviceDiff.request.length}
                    <p class="table-title">Request Body</p>
                    <DiffItemsTable diffItems={serviceDiff.request} />
                {/if}
                {#if serviceDiff.responses && Object.keys(serviceDiff.responses).length}
                    <p class="table-title">Responses Body</p>
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
