<script lang="ts">
    import { onMount } from 'svelte';
    import type { ApiSummary, ApiVersion } from './apiIndex';

    export let name: string = null;
    export let apiSummary: ApiSummary = null;
    let lastVersion: ApiVersion = null;

    onMount(() => {
        lastVersion = apiSummary.versions[apiSummary.lastVersion];
    });
</script>

{#if lastVersion}
    <div class="box">
        <div class="columns">
            <div class="column">
                <a href="./viewer.html?api={lastVersion.hash}">
                    <h3 class="title">
                        {name} - {apiSummary.lastVersion}
                    </h3>
                    <p class="subtitle">{lastVersion.fileName}</p>
                </a>
            </div>
            <div class="column is-narrow">
                <button class="button is-small">
                    <span class="icon is-small">
                        <i class="fa-regular fa-star" />
                    </span>
                </button>
            </div>
        </div>
        <div class="control">
            {#each Object.entries(apiSummary.versions) as version}
                <a href="./viewer.html?api={version[1].hash}">
                    <button class="button is-small">{version[0]}</button>
                </a>
            {/each}
        </div>
    </div>
{/if}

<style>
</style>
