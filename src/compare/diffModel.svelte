<script lang="ts">
    import type { ApiModelDoc } from 'common/api/apiModel';
    import { ApiModelDocMetadata, type ApiModelDocDiff, DiffTypeColor, DiffType } from './compareInterfaces';

    export let diffModel: ApiModelDocDiff;

    function modelDiffToModel(modelDiff: ApiModelDocDiff): ApiModelDoc {
        return Object.fromEntries(Object.entries(modelDiff).filter(([key, _]) => ['diffType', 'isBackwardCompatible'].indexOf(key) === -1));
    }
</script>

{#if diffModel}
    <div class="diff-model-container">
        <table class="table is-narrow is-ghost">
            <tbody>
                {#each ApiModelDocMetadata as metadataKey}
                    {#if metadataKey in diffModel}
                        <tr>
                            <td>
                                <span class="tag {DiffTypeColor[diffModel[metadataKey].diffType]}">
                                    {#if !diffModel[metadataKey].isBackwardCompatible}
                                        <i class="fa-solid fa-triangle-exclamation mr-1" title="Not backward compatible change" />
                                    {/if}
                                    {diffModel[metadataKey].diffType}
                                </span>
                            </td>
                            <th>{metadataKey}:</th>
                            <td>
                                {#if diffModel[metadataKey].leftValue}
                                    <span>{diffModel[metadataKey].leftValue}</span>
                                {/if}
                                {#if diffModel[metadataKey].diffType === DiffType.MODIFIED}
                                    <i class="fa-solid fa-right-long" />
                                {/if}
                                {#if diffModel[metadataKey].rightValue}
                                    <span>{diffModel[metadataKey].rightValue}</span>
                                {/if}
                            </td>
                        </tr>
                    {/if}
                {/each}
            </tbody>
        </table>
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
                            <span class="tag {DiffTypeColor[diffModel.items.diffType]}">
                                {#if !diffModel.items.isBackwardCompatible}
                                    <i class="fa-solid fa-triangle-exclamation mr-1" title="Not backward compatible change" />
                                {/if}
                                {diffModel.items.diffType}
                            </span>
                        </td>
                        <td>
                            {#if !diffModel.items.isBackwardCompatible}
                                <i class="fa-solid fa-triangle-exclamation mr-1" title="Not backward compatible change" />
                            {/if}
                            Items
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
</style>
