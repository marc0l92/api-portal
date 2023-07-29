<script lang="ts">
    import { getBasePath } from '../common/globals';
    import { browserOptions } from './browserOptions';
    import type { SearchMatch } from '../common/search';
    import SearchMatchLine from '../components/searchMatchLine.svelte';
    import type { ApiIndex, ApiIndexItem } from '../common/api/apiIndex';
    import type { ServiceTags } from '../cli/buildConfig';
    import { buildCardData, type ApiIndexItemCardData } from './filterApiIndexItemCard';

    const VERSION_LIMIT = 6;
    const SEARCH_MATCHES_LIMIT = 3;

    export let apiIndex: ApiIndex;
    export let apiIndexItem: ApiIndexItem;
    export let searchMatches: readonly SearchMatch[] = [];
    export let filters: ServiceTags = null;
    let cardData: ApiIndexItemCardData = null;
    let isExpanded = false;
    let searchMatchApiName: SearchMatch = null;

    function onFavoriteToggle() {
        if (!$browserOptions.favorites[apiIndexItem.packageName]) {
            $browserOptions.favorites[apiIndexItem.packageName] = {};
        }
        $browserOptions.favorites[apiIndexItem.packageName][apiIndexItem.apiName] = !$browserOptions.favorites[apiIndexItem.packageName][apiIndexItem.apiName];
    }

    $: searchMatchApiName = searchMatches.find((m) => m.key === 'apiName') || null;
    $: if (apiIndexItem) {
        cardData = buildCardData(apiIndex, apiIndexItem, filters);
    }
</script>

{#if apiIndexItem && cardData}
    <div class="card">
        <header class="card-header">
            <a class="card-header-body" href={cardData.headerHref}>
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
                        {#each cardData.versions.slice(0, isExpanded ? undefined : VERSION_LIMIT) as cardDataVersion}
                            <a class="tag ml-1 mb-1 {cardDataVersion.cssClass}" href={cardDataVersion.href}>
                                {cardDataVersion.name}
                            </a>
                        {/each}
                        {#if cardData.versions.length > VERSION_LIMIT}
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
