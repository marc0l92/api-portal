<script lang="ts">
    import type { ApiModelDoc } from '../common/api/apiModel';
    import { ApiModelDocMetadata, type ApiModelDocDiff, DiffTypeColor, DiffType } from './compareInterfaces';

    export let diffModel: ApiModelDocDiff;
    let diffModelMetadata: [key: string, value: any][] = [];
    $: if (diffModel) {
        diffModelMetadata = Object.entries(diffModel).filter(([key, _]) => ApiModelDocMetadata.indexOf(key) !== -1);
    }

    function modelDiffToModel(modelDiff: ApiModelDocDiff): ApiModelDoc {
        return Object.fromEntries(Object.entries(modelDiff).filter(([key, _]) => ['diffType', 'isBackwardCompatible'].indexOf(key) === -1));
    }
</script>

{#if diffModel}
    <div class="diff-model-container">
        {#if diffModelMetadata.length > 0}
            <table class="table is-narrow is-ghost">
                <tbody>
                    {#each diffModelMetadata as [metadataName, metadata]}
                        <tr>
                            <td>
                                <span class="tag {DiffTypeColor[metadata.diffType]}">
                                    {#if !metadata.isBackwardCompatible}
                                        <i class="fa-solid fa-triangle-exclamation mr-1" title="Not backward compatible change" />
                                    {/if}
                                    {metadata.diffType}
                                </span>
                            </td>
                            <th>{metadataName}:</th>
                            <td>
                                {#if metadata.leftValue}
                                    <span>{JSON.stringify(metadata.leftValue)}</span>
                                {/if}
                                {#if metadata.diffType === DiffType.MODIFIED}
                                    <i class="fa-solid fa-right-long" />
                                {/if}
                                {#if metadata.rightValue}
                                    <span>{JSON.stringify(metadata.rightValue)}</span>
                                {/if}
                            </td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        {/if}
        {#if diffModel.properties}
            <table class="table is-bordered is-narrow is-fullwidth">
                <tbody>
                    {#each Object.entries(diffModel.properties) as [propertyKey, propertyValue]}
                        <tr>
                            <td>
                                {#if !propertyValue.isBackwardCompatible}
                                    <i class="fa-solid fa-triangle-exclamation mr-1" title="Not backward compatible change" />
                                {/if}
                                {propertyKey}
                                {#if propertyValue.diffType !== DiffType.MODIFIED}
                                    <span class="tag {DiffTypeColor[propertyValue.diffType]}">
                                        {#if !propertyValue.isBackwardCompatible}
                                            <i class="fa-solid fa-triangle-exclamation mr-1" title="Not backward compatible change" />
                                        {/if}
                                        {propertyValue.diffType}
                                    </span>
                                {/if}
                            </td>
                            <td>
                                {#if propertyValue.diffType === DiffType.MODIFIED}
                                    <svelte:self diffModel={propertyValue} />
                                {:else}
                                    {JSON.stringify(modelDiffToModel(propertyValue))}
                                {/if}
                            </td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        {/if}
        {#if diffModel.items}
            <table class="table is-bordered is-narrow is-fullwidth">
                <tbody>
                    <tr>
                        <td>
                            {#if !diffModel.items.isBackwardCompatible}
                                <i class="fa-solid fa-triangle-exclamation mr-1" title="Not backward compatible change" />
                            {/if}
                            []
                            {#if diffModel.items.diffType !== DiffType.MODIFIED}
                                <span class="tag {DiffTypeColor[diffModel.items.diffType]}">
                                    {#if !diffModel.items.isBackwardCompatible}
                                        <i class="fa-solid fa-triangle-exclamation mr-1" title="Not backward compatible change" />
                                    {/if}
                                    {diffModel.items.diffType}
                                </span>
                            {/if}
                        </td>
                        <td>
                            {#if diffModel.items.diffType === DiffType.MODIFIED}
                                <svelte:self diffModel={diffModel.items} />
                            {:else}
                                {JSON.stringify(modelDiffToModel(diffModel.items))}
                            {/if}
                        </td>
                    </tr>
                </tbody>
            </table>
        {/if}
    </div>
{/if}

<style>
    table.table.is-ghost td,
    table.table.is-ghost th {
        border: 0;
    }
    table.table.is-ghost td:first-child,
    table.table.is-ghost th:first-child {
        margin-left: 0;
        padding-left: 0;
    }
    .table:not(:last-child) {
        margin-bottom: 0.5rem;
    }
    .diff-model-container {
        overflow-x: auto;
        max-width: 100%;
    }
    .diff-model-container .is-fullwidth {
        width: calc(100% - 1px);
    }
</style>
