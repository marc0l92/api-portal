<script lang="ts">
    import type { BrowserFilters } from 'cli/buildConfig';
    import { getBrowserFiltersCopy } from 'common/globals';
    import { createEventDispatcher } from 'svelte';

    let searchText: string = '';
    let showFilters: boolean = false;
    let filters: BrowserFilters = getBrowserFiltersCopy();
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
    <div class="field has-addons {showFilters ? 'has-filter' : ''}">
        <div class="control is-expanded">
            <input class="input" type="text" placeholder="Search" bind:value={searchText} on:input={onInputChange} />
        </div>
        {#if hasFilters}
            <div class="control">
                <button class="button {showFilters ? 'is-active' : ''}" on:click={() => (showFilters = !showFilters)}>
                    <span class="icon is-small">
                        <i class="fas fa-sliders" />
                    </span>
                    <span>Filter</span>
                </button>
            </div>
        {/if}
    </div>
    {#if showFilters}
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
    {/if}
</div>

<style>
    .field.has-filter {
        margin-bottom: 0;
    }
    .field.has-filter input,
    .field.has-filter button {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }
    .filters {
        border: 1px solid #dbdbdb;
        border-top: 0;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        color: #4a4a4a;
        background-color: #fff;
        padding: 1em;
        margin-top: 0;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
    .label {
        text-transform: capitalize;
    }
</style>
