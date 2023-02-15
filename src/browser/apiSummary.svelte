<script lang="ts">
    import type { ApiSummary } from './apiIndex';

    export let name: string = null;
    export let apiSummary: ApiSummary = null;
</script>

<div class="box">
    <h3><a href="./viewer.html?api={apiSummary.hash}"><strong>{name} - {apiSummary.version}</strong></a></h3>
    <div class="control">
        {#each apiSummary.otherVersions as version}
            <a href="./viewer.html?api={version.hash}">
                <button class="button is-small">{version.version}</button>
            </a>
        {/each}
    </div>
</div>

<style>
</style>
