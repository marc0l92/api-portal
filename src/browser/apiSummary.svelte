<script lang="ts">
    import { onDestroy, onMount } from 'svelte';
    import type { ApiSummary, ApiVersion } from './apiIndex';
    import { browserOptions, browserOptionsDestroy, browserOptionsMount } from './browserOptions';

    const VERSION_LIMIT = 5;

    export let name: string = null;
    export let apiSummary: ApiSummary = null;
    let lastVersion: ApiVersion = null;
    export let apiPath: string = null;
    let isExpanded = false;

    function onFavoriteToggle() {
        $browserOptions.favorites[apiPath] = !$browserOptions.favorites[apiPath];
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
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">{name} - {apiSummary.lastVersion}</p>
            <button class="card-header-icon" on:click={onFavoriteToggle}>
                <span class="icon">
                    <i class="{$browserOptions.favorites[apiPath] ? 'fas' : 'far'} fa-star" />
                </span>
            </button>
        </header>
        <div class="card-content">
            <div class="content">
                <p class="subtitle is-6">{lastVersion.fileName}</p>
                <div class="columns is-multiline">
                    <div class="column">
                        {#each Object.entries(apiSummary.versions).slice(0, isExpanded ? undefined : 5) as version}
                            <a class="tag ml-1 mb-1" href="./viewer.html?api={version[1].hash}">
                                {version[0]}
                            </a>
                        {/each}
                        {#if Object.entries(apiSummary.versions).length > VERSION_LIMIT}
                            <button class="button is-white is-small is-tag-size" on:click={() => (isExpanded = !isExpanded)}>
                                <i class="fas fa-angle-{isExpanded ? 'left' : 'right'}" />
                            </button>
                        {/if}
                    </div>
                </div>
            </div>
        </div>
    </div>
{/if}

<style>
    .card-header-title {
        word-break: break-all;
    }
    .card-header-icon {
        color: var(--color-accent);
    }
    .is-tag-size {
        height: 2em;
        vertical-align: baseline;
    }
</style>
