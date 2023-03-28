<script lang="ts">
    import type { Api } from 'common/api/api';
    import { compareApis, DiffType, type ApiDiff } from './compare';

    export let leftApi: Api;
    export let rightApi: Api;
    let apiDiff: ApiDiff;

    $: if (leftApi && rightApi) {
        apiDiff = compareApis(leftApi, rightApi);
    }
</script>

<div>
    {#if apiDiff}
        <details open>
            <summary class="title is-4">Metadata</summary>
            <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Path</th>
                        <th>Left Value</th>
                        <th>Right Value</th>
                    </tr>
                </thead>
                <tbody>
                    {#each apiDiff.metadata as diffItem}
                        <tr>
                            {#if diffItem.type === DiffType.ADDED}
                                <td class="is-success">Added</td>
                            {:else if diffItem.type === DiffType.MODIFIED}
                                <td class="is-warning">Modified</td>
                            {:else if diffItem.type === DiffType.REMOVED}
                                <td class="is-danger">Removed</td>
                            {/if}
                            <td>{diffItem.path}</td>
                            <td>{diffItem.leftValue ? JSON.stringify(diffItem.leftValue) : ''}</td>
                            <td>{diffItem.rightValue ? JSON.stringify(diffItem.rightValue) : ''}</td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </details>
    {/if}
</div>

<style>
</style>
