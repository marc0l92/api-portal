<script lang="ts">
    import type { ApiIndex } from 'common/api/apiIndex';
    import { API_INDEX_PATH } from 'common/globals';
    import { getOptions, storeOptions } from 'common/localStorage';
    import { filterApiIndex, type LimitedSearchResults } from 'common/search';
    import yaml from 'js-yaml';
    import { createEventDispatcher, onMount } from 'svelte';
    import { readInputFile } from '../common/filesUtils';

    const LOCAL_STORAGE_SELECTED_TAB_KEY = 'inputApi.selectedTab';
    const LOCAL_STORAGE_BROWSE_KEY = 'inputApi.browse';
    const LOCAL_STORAGE_LINK_KEY = 'inputApi.link';
    const LOCAL_STORAGE_TEXT_KEY = 'inputApi.text';
    const EXAMPLE_API_LINK = 'https://petstore3.swagger.io/api/v3/openapi.json';
    const BROWSER_SEARCH_RESULTS_LIMIT = 8;

    let selectedTab = 'link';
    let browserSearch = '';
    let browserHash = '';
    let browserSearchResults: LimitedSearchResults = { list: [], isLast: true };
    let showBrowserDropdown = false;
    let apiIndex: ApiIndex = null;
    let link = EXAMPLE_API_LINK;
    let inputError = '';
    let files: any = null;
    let text = '';
    let isLoading = false;

    const dispatch = createEventDispatcher();
    async function onApiChange() {
        isLoading = true;
        inputError = '';
        let apiObject: any = null;
        try {
            if (selectedTab === 'browser') {
                if (!apiIndex) {
                    await fetchApiIndex();
                }
            } else if (selectedTab === 'link') {
                const linkResponse = await fetch(link);
                if (linkResponse.ok) {
                    apiObject = yaml.load(await linkResponse.text());
                    storeOptions(LOCAL_STORAGE_LINK_KEY, link);
                } else {
                    inputError = 'Error: ' + linkResponse.status;
                }
            } else if (selectedTab === 'file' && files && files.length > 0) {
                apiObject = yaml.load(await readInputFile(files[0]));
            } else if (selectedTab === 'text') {
                apiObject = yaml.load(text);
                storeOptions(LOCAL_STORAGE_TEXT_KEY, text);
            }
        } catch (e: any) {
            console.error(e);
            inputError = 'Error: ' + e.message;
        }
        isLoading = false;
        dispatch('apiChange', { apiObject });
    }

    async function fetchApiIndex() {
        const response = await fetch(API_INDEX_PATH);
        if (response.ok) {
            apiIndex = (await response.json()) as ApiIndex;
        } else {
            inputError = 'Error while fetching api index: ' + response.status;
        }
    }

    function changeTab(newTab: string) {
        selectedTab = newTab;
        storeOptions(LOCAL_STORAGE_SELECTED_TAB_KEY, newTab);
        onApiChange();
    }

    $: browserSearchResults = filterApiIndex(apiIndex, browserSearch, BROWSER_SEARCH_RESULTS_LIMIT);

    onMount(() => {
        selectedTab = getOptions(LOCAL_STORAGE_SELECTED_TAB_KEY) || 'link';
        browserHash = getOptions(LOCAL_STORAGE_BROWSE_KEY) || '';
        link = getOptions(LOCAL_STORAGE_LINK_KEY) || EXAMPLE_API_LINK;
        text = getOptions(LOCAL_STORAGE_TEXT_KEY) || '';
        onApiChange();
    });
</script>

<div>
    <div class="tabs is-boxed is-floating">
        <ul>
            <li class={selectedTab === 'browser' ? 'is-active' : ''}>
                <a href={'#'} on:click={() => changeTab('browser')}>
                    <span class="icon is-small"><i class="fas fa-database" /></span>
                    <span>Browser</span>
                </a>
            </li>
            <li class={selectedTab === 'link' ? 'is-active' : ''}>
                <a href={'#'} on:click={() => changeTab('link')}>
                    <span class="icon is-small"><i class="fas fa-link" /></span>
                    <span>Link</span>
                </a>
            </li>
            <li class={selectedTab === 'file' ? 'is-active' : ''}>
                <a href={'#'} on:click={() => changeTab('file')}>
                    <span class="icon is-small"><i class="fas fa-file-alt" /></span>
                    <span>File</span>
                </a>
            </li>
            <li class={selectedTab === 'text' ? 'is-active' : ''}>
                <a href={'#'} on:click={() => changeTab('text')}>
                    <span class="icon is-small"><i class="fas fa-paragraph" /></span>
                    <span>Text</span>
                </a>
            </li>
        </ul>
    </div>
</div>
<div class="box flat-top">
    <div>
        <div class="field {selectedTab === 'browser' ? '' : 'is-hidden'}">
            <div class="dropdown {showBrowserDropdown ? 'is-active' : ''}">
                <div class="dropdown-trigger">
                    <div class="control is-expanded {isLoading ? 'is-loading' : ''}">
                        <input
                            type="text"
                            class="input"
                            bind:value={browserSearch}
                            on:input={onApiChange}
                            on:blur={() => (showBrowserDropdown = false)}
                            on:focus={() => (showBrowserDropdown = true)}
                            placeholder="Search api" />
                    </div>
                </div>
                <div class="dropdown-menu">
                    <div class="dropdown-content">
                        {#each browserSearchResults.list as apiSummary}
                            <a href={'#'} class="dropdown-item">
                                <p>{apiSummary.apiName}</p>
                                <p class="subtext">{apiSummary.packageName}</p>
                            </a>
                        {/each}
                        {#if !browserSearchResults.isLast}
                            <p class="dropdown-item">...</p>
                        {/if}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>
        <div class="field {selectedTab === 'link' ? '' : 'is-hidden'}">
            <div class="control is-expanded {isLoading ? 'is-loading' : ''}">
                <input type="text" class="input" bind:value={link} on:input={onApiChange} placeholder="Example: {EXAMPLE_API_LINK}" />
            </div>
        </div>
    </div>
    <div>
        <div class="field {selectedTab === 'file' ? '' : 'is-hidden'}">
            <div class="control">
                <input type="file" bind:files on:change={onApiChange} />
            </div>
        </div>
    </div>
    <div>
        <div class="field {selectedTab === 'text' ? '' : 'is-hidden'}">
            <div class="control">
                <textarea class="textarea" bind:value={text} on:input={onApiChange} placeholder="Paste here your api definition..." />
            </div>
        </div>
    </div>
    {#if inputError}
        <div class="mt-3">
            <div class="notification is-danger is-small">{inputError}</div>
        </div>
    {/if}
</div>

<style>
    .dropdown,
    .dropdown .dropdown-trigger,
    .dropdown .dropdown-menu {
        width: 100%;
    }
    .subtext {
        color: #b1b1b1;
    }
</style>
