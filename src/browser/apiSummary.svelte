<script lang="ts">
    import { getBasePath } from 'common/globals';
    import type { ApiIndexItem, ApiSummary } from '../common/api/apiIndex';
    import { browserOptions } from './browserOptions';
    import type { SearchMatch } from 'common/search';
    import SearchMatchLine from './searchMatchLine.svelte';

    const VERSION_LIMIT = 8;
    const basePath = getBasePath();

    export let packageName: string = null;
    export let name: string = null;
    export let apiSummary: ApiSummary = null;
    export let searchMatches: readonly SearchMatch[] = [];
    let lastApiHash = '';
    let isExpanded = false;

    function onFavoriteToggle() {
        console.log(JSON.stringify($browserOptions));
        if (!$browserOptions.favorites[packageName]) {
            $browserOptions.favorites[packageName] = {};
        }
        $browserOptions.favorites[packageName][name] = !$browserOptions.favorites[packageName][name];
    }

    $: if (apiSummary) {
        const lastApiVersion = Object.keys(apiSummary)[0];
        lastApiHash = Object.values(apiSummary[lastApiVersion])[0].hash;
    }

    function getWorstState(versionSummary: { [fileName: string]: ApiIndexItem }) {
        const maxStatus = Object.values(versionSummary)
            .map((x) => x.status)
            .reduce((prev, curr) => Math.max(prev, curr));
        return `status-${maxStatus}`;
    }
</script>

{#if apiSummary}
    <div class="card">
        <header class="card-header">
            <a class="card-header-body" href="{basePath}/viewer.html?api={lastApiHash}">
                <p class="card-header-title">{name}</p>
            </a>
            <button class="card-header-icon" on:click={onFavoriteToggle}>
                <span class="icon">
                    <i class="{$browserOptions.favorites[packageName] && $browserOptions.favorites[packageName][name] ? 'fas' : 'far'} fa-star" />
                </span>
            </button>
        </header>
        <div class="card-content">
            <div class="content">
                <div class="columns is-multiline">
                    <div class="column">
                        {#each Object.entries(apiSummary).slice(0, isExpanded ? undefined : 5) as [versionName, versionSummary]}
                            <a class="tag ml-1 mb-1 {getWorstState(versionSummary)}" href="{basePath}/viewer.html?api={Object.values(versionSummary)[0].hash}">
                                {versionName}
                            </a>
                        {/each}
                        {#if Object.keys(apiSummary).length > VERSION_LIMIT}
                            <button class="button is-white is-small is-tag-size" on:click={() => (isExpanded = !isExpanded)}>
                                <i class="fas fa-angle-{isExpanded ? 'left' : 'right'}" />
                            </button>
                        {/if}
                    </div>
                </div>
                {#if searchMatches.length > 0}
                    {#each searchMatches as searchMatch}
                        <SearchMatchLine {searchMatch} />
                    {/each}
                {/if}
            </div>
        </div>
    </div>
{/if}

<style>
    .card-header-body {
        flex-grow: 1;
    }
    .card-header-title {
        word-break: break-all;
    }
    .card-header-icon {
        color: var(--color-accent);
    }
    .is-tag-size {
        height: 2em;
        vertical-align: baseline;
        padding-left: 0.75em;
        padding-right: 0.75em;
    }
    .tag.status-1 {
        background-color: #ffe08a;
        color: white;
    }
    .tag.status-2 {
        background-color: #f14668;
        color: white;
    }
</style>
