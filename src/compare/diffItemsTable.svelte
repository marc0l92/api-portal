<script lang="ts">
    import { diffTypeColor, type DiffItem } from './compare';

    export let diffItems: DiffItem[];
</script>

{#if diffItems && diffItems.length > 0}
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
                        <span class="tag {diffTypeColor[diffItem.type]}">
                            {#if !diffItem.isBackwardCompatible}
                                <i class="fa-solid fa-triangle-exclamation mr-1" title="Not backward compatible change" />
                            {/if}
                            {diffItem.type}
                        </span>
                    </td>
                    <td>{diffItem.path}</td>
                    <td>{diffItem.leftValue ? JSON.stringify(diffItem.leftValue) : ''}</td>
                    <td>{diffItem.rightValue ? JSON.stringify(diffItem.rightValue) : ''}</td>
                </tr>
            {/each}
        </tbody>
    </table>
{/if}

<style>
</style>
