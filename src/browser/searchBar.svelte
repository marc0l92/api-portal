<script lang="ts">
    import type { ServiceTags } from 'cli/buildConfig';
    import { getBrowserFiltersCopy } from 'common/globals';
    import { createEventDispatcher } from 'svelte';

    let searchText: string = '';
    let showFilters: boolean = false;
    let filters: ServiceTags = getBrowserFiltersCopy();
    let hasFilters = Object.keys(filters).length > 0;

    function resetFilters() {
        filters = getBrowserFiltersCopy();
        onInputChange();
    }
    function toggleFilter(sectionName: string, categoryName: string, propertyName: string) {
        filters[sectionName][categoryName][propertyName] = !filters[sectionName][categoryName][propertyName];
        onInputChange();
    }

    const dispatch = createEventDispatcher();
    function onInputChange() {
        dispatch('searchTextChange', { searchText, filters });
    }
</script>

<div class="block">
    <div class="field has-addons search-bar {showFilters ? 'open' : ''}">
        <div class="control is-expanded">
            <input class="input" type="text" placeholder="Search: package, api title, version, file name" bind:value={searchText} on:input={onInputChange} />
        </div>
        {#if hasFilters}
            <div class="control">
                <button class="button {showFilters ? 'is-active' : ''}" on:click={() => (showFilters = !showFilters)}>
                    <span class="icon is-small">
                        <i class="fas fa-filter" />
                    </span>
                    <span>Filters</span>
                </button>
            </div>
        {/if}
    </div>
    <div class="filters-wrapper {showFilters ? 'open' : ''}">
        <div class="filters">
            {#each Object.entries(filters) as [sectionName, section]}
                <div class="block">
                    <p class="menu-label">{sectionName}</p>
                    {#each Object.entries(section) as [categoryName, category]}
                        <div class="field is-horizontal">
                            <div class="field-label is-normal">
                                <span class="label">{categoryName}</span>
                            </div>
                            <div class="field-body">
                                <div class="buttons has-addons">
                                    {#each Object.entries(category) as [propertyName, isActive]}
                                        <button class="button {isActive ? 'is-active is-info' : ''}" on:click={() => toggleFilter(sectionName, categoryName, propertyName)}>
                                            {propertyName}
                                        </button>
                                    {/each}
                                </div>
                            </div>
                        </div>
                    {/each}
                    <hr />
                </div>
            {/each}
            <button class="button is-ghost is-small" on:click={resetFilters}>Reset filters</button>
        </div>
    </div>
</div>

<style>
    .search-bar {
        margin-bottom: 0;
    }
    .search-bar.open input,
    .search-bar.open button {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }
    .filters-wrapper {
        display: grid;
        grid-template-rows: 0fr;
        overflow: hidden;
        transition: grid-template-rows 200ms;
    }
    .filters-wrapper.open {
        grid-template-rows: 1fr;
    }
    .filters-wrapper .filters {
        color: #4a4a4a;
        background-color: #fff;
        margin-top: 0;
        min-height: 0;
        padding-left: 1em;
        padding-right: 1em;
        transition: padding-top 200ms;
    }
    .filters-wrapper.open .filters {
        border: 1px solid #dbdbdb;
        border-top: 0;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        padding-top: 1em;
        padding-bottom: 1em;
    }
    .label {
        text-transform: capitalize;
    }
</style>
