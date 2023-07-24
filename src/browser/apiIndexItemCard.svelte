<script lang="ts">
    import { getBasePath } from '../common/globals';
    import { browserOptions } from './browserOptions';
    import type { SearchMatch } from '../common/search';
    import SearchMatchLine from '../components/searchMatchLine.svelte';
    import type { ApiIndex, ApiIndexItem } from '../common/api/apiIndex';

    const VERSION_LIMIT = 8;
    const SEARCH_MATCHES_LIMIT = 3;
    const basePath = getBasePath();

    export let apiIndex: ApiIndex;
    export let apiIndexItem: ApiIndexItem;
    export let searchMatches: readonly SearchMatch[] = [];
    let isExpanded = false;
    let searchMatchApiName: SearchMatch = null;

    function onFavoriteToggle() {
        if (!$browserOptions.favorites[apiIndexItem.packageName]) {
            $browserOptions.favorites[apiIndexItem.packageName] = {};
        }
        $browserOptions.favorites[apiIndexItem.packageName][apiIndexItem.apiName] = !$browserOptions.favorites[apiIndexItem.packageName][apiIndexItem.apiName];
    }

    $: searchMatchApiName = searchMatches.find((m) => m.key === 'apiName') || null;

    function getWorstStateForVersion(apiHash: string): string {
        const apiIndexItemOfVersion = apiIndex.getApi(apiHash);
        const maxStatus = Object.values(apiIndexItemOfVersion.otherFiles)
            .map((otherFileApiHash) => apiIndex.getApi(otherFileApiHash).status)
            .reduce((prev, curr) => Math.max(prev, curr));
        return `status-${maxStatus}`;
    }
</script>

{#if apiIndexItem}
    <div class="card">
        <header class="card-header">
            <a class="card-header-body" href="{basePath}/viewer.html?packageName={apiIndexItem.packageName}&apiName={apiIndexItem.apiName}">
                <p class="card-header-title">
                    {#if searchMatchApiName}
                        <SearchMatchLine searchMatch={searchMatchApiName} />
                    {:else}
                        {apiIndexItem.apiName}
                    {/if}
                </p>
            </a>
            <button class="card-header-icon" on:click={onFavoriteToggle}>
                <span class="icon">
                    <i class="{$browserOptions.favorites[apiIndexItem.packageName] && $browserOptions.favorites[apiIndexItem.packageName][apiIndexItem.apiName] ? 'fas' : 'far'} fa-star" />
                </span>
            </button>
        </header>
        <div class="card-content">
            <div class="content">
                <div class="columns is-multiline">
                    <div class="column">
                        {#each Object.entries(apiIndexItem.otherVersions).slice(0, isExpanded ? undefined : 5) as [versionName, apiHash]}
                            <a
                                class="tag ml-1 mb-1 {getWorstStateForVersion(apiHash)}"
                                href="{basePath}/viewer.html?packageName={apiIndexItem.packageName}&apiName={apiIndexItem.apiName}&versionName={versionName}"
                            >
                                {versionName}
                            </a>
                        {/each}
                        {#if Object.keys(apiIndexItem.otherVersions).length > VERSION_LIMIT}
                            <button class="button is-white is-small is-tag-size" on:click={() => (isExpanded = !isExpanded)}>
                                <i class="fas fa-angle-{isExpanded ? 'left' : 'right'}" />
                            </button>
                        {/if}
                    </div>
                </div>
                {#if searchMatches.length > 0}
                    {#each searchMatches.slice(0, SEARCH_MATCHES_LIMIT + 1) as searchMatch}
                        {#if searchMatch.key !== 'apiName'}
                            <p class="searchMatchLine">
                                <span class="key">{searchMatch.key}:</span>
                                <SearchMatchLine {searchMatch} />
                            </p>
                        {/if}
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
        display: inline-block;
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
    .searchMatchLine:not(:last-child) {
        margin-bottom: 0.5em;
    }
    .searchMatchLine {
        font-size: small;
        word-break: break-all;
    }
    .searchMatchLine .key {
        font-weight: bold;
    }
</style>
