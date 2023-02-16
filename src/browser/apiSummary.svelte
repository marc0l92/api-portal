<script lang="ts">
    import { onDestroy, onMount } from 'svelte';
    import type { ApiSummary, ApiVersion } from './apiIndex';
    import { browserOptions, browserOptionsDestroy, browserOptionsMount } from './browserOptions';

    export let name: string = null;
    export let apiSummary: ApiSummary = null;
    let lastVersion: ApiVersion = null;

    function onFavoriteToggle() {
        $browserOptions.favorites[lastVersion.hash] = !$browserOptions.favorites[lastVersion.hash];
    }

    onMount(() => {
        browserOptionsMount();
        lastVersion = apiSummary.versions[apiSummary.lastVersion];
    });
    onDestroy(() => {
        browserOptionsDestroy();
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
                <button class="button is-small" on:click={onFavoriteToggle}>
                    <span class="icon is-small">
                        <i class="{$browserOptions.favorites[lastVersion.hash] ? 'fas' : 'far'} fa-star" />
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
