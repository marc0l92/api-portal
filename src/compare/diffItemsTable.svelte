<script lang="ts">
    import LongText from 'components/longText.svelte';
    import { DiffTypeColor, type DiffItem } from './compareInterfaces';

    const PATH_MAX_LENGTH = 30;
    const VALUE_MAX_LENGTH = 120;

    export let diffItems: DiffItem[];
</script>

{#if diffItems && diffItems.length > 0}
    <div class="diff-table-container">
        <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Location</th>
                    <th>Left Value</th>
                    <th>Right Value</th>
                </tr>
            </thead>
            <tbody>
                {#each diffItems as diffItem}
                    <tr>
                        <td>
                            <span class="tag {DiffTypeColor[diffItem.diffType]}">
                                {#if !diffItem.isBackwardCompatible}
                                    <i class="fa-solid fa-triangle-exclamation mr-1" title="Not backward compatible change" />
                                {/if}
                                {diffItem.diffType}
                            </span>
                        </td>
                        <td><LongText text={diffItem.path} maxLength={PATH_MAX_LENGTH} keepEnd={true} /></td>
                        <td><LongText text={diffItem.leftValue ? JSON.stringify(diffItem.leftValue) : ''} maxLength={VALUE_MAX_LENGTH} /></td>
                        <td><LongText text={diffItem.rightValue ? JSON.stringify(diffItem.rightValue) : ''} maxLength={VALUE_MAX_LENGTH} /></td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
{/if}

<style>
    .diff-table-container {
        overflow-x: auto;
        max-width: 100%;
    }
    .diff-table-container .is-fullwidth {
        width: calc(100% - 1px);
    }
</style>
