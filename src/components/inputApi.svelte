<script lang="ts">
    import { getApiSummaryFlatByHash, getApiSummaryToFlat, modifyApiSummaryFlat, type ApiIndex, type ApiSummaryFlat } from 'common/api/apiIndex';
    import { getApiStatusName } from 'common/api/apiStatus';
    import { API_INDEX_PATH } from 'common/globals';
    import { getOptions, storeOptions } from 'common/localStorage';
    import { searchInApiIndex, type LimitedSearchResults } from 'common/search';
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
    let browserSelectedApi: ApiSummaryFlat = null;
    let browserHash = '';
    let browserSearchResults: LimitedSearchResults = { list: [], isLast: true };
    let isSearchDropdownExpanded = false;
    let isVersionDropdownExpanded = false;
    let isFileNameDropdownExpanded = false;
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
                    if (apiIndex && browserHash) {
                        browserSelectedApi = getApiSummaryFlatByHash(browserHash, apiIndex);
                        browserSearch = browserSelectedApi.packageName + ' ' + browserSelectedApi.apiName;
                    }
                }
                if (browserSelectedApi) {
                    apiObject = await fetchApi(browserSelectedApi.hash);
                    storeOptions(LOCAL_STORAGE_BROWSE_KEY, browserSelectedApi.hash);
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
        dispatch('apiChange', { apiObject, hash: browserHash });
    }

    async function fetchApiIndex() {
        const response = await fetch(API_INDEX_PATH);
        if (response.ok) {
            apiIndex = (await response.json()) as ApiIndex;
        } else {
            inputError = 'Error while fetching api index: ' + response.status;
        }
    }

    async function fetchApi(apiHash: string): Promise<any> {
        try {
            const response = await fetch(`./apis/${apiHash}.api.json`);
            if (response.ok) {
                return yaml.load(await response.text());
            } else {
                inputError = 'Error: ' + response.status;
            }
        } catch (e) {
            console.error(e);
            inputError = 'Error while fetching the api';
        }
        return null;
    }

    function changeTab(newTab: string) {
        selectedTab = newTab;
        storeOptions(LOCAL_STORAGE_SELECTED_TAB_KEY, newTab);
        onApiChange();
    }

    function onBrowserSearchResultsSelect(apiSummary: ApiSummaryFlat) {
        browserSelectedApi = apiSummary;
        browserSearch = `${apiSummary.packageName} ${apiSummary.apiName}`;
        isSearchDropdownExpanded = false;
        isFileNameDropdownExpanded = false;
        isVersionDropdownExpanded = false;
        onApiChange();
    }

    function onBrowserSearchChange() {
        isSearchDropdownExpanded = true;
        browserSearchResults = searchInApiIndex(apiIndex, browserSearch, BROWSER_SEARCH_RESULTS_LIMIT);
        browserSelectedApi = null;
    }

    onMount(() => {
        selectedTab = getOptions(LOCAL_STORAGE_SELECTED_TAB_KEY) || 'link';
        browserHash = getOptions(LOCAL_STORAGE_BROWSE_KEY) || '';
        link = getOptions(LOCAL_STORAGE_LINK_KEY) || EXAMPLE_API_LINK;
        text = getOptions(LOCAL_STORAGE_TEXT_KEY) || '';
        onApiChange();
        document.addEventListener('click', () => {
            isSearchDropdownExpanded = false;
        });
    });
</script>

<div>
    <div class="tabs is-boxed is-floating">
        <ul>
            <li class={selectedTab === 'browser' ? 'is-active' : ''}>
                <a href={'#'} on:click|preventDefault={() => changeTab('browser')}>
                    <span class="icon is-small"><i class="fas fa-database" /></span>
                    <span>Browser</span>
                </a>
            </li>
            <li class={selectedTab === 'link' ? 'is-active' : ''}>
                <a href={'#'} on:click|preventDefault={() => changeTab('link')}>
                    <span class="icon is-small"><i class="fas fa-link" /></span>
                    <span>Link</span>
                </a>
            </li>
            <li class={selectedTab === 'file' ? 'is-active' : ''}>
                <a href={'#'} on:click|preventDefault={() => changeTab('file')}>
                    <span class="icon is-small"><i class="fas fa-file-alt" /></span>
                    <span>File</span>
                </a>
            </li>
            <li class={selectedTab === 'text' ? 'is-active' : ''}>
                <a href={'#'} on:click|preventDefault={() => changeTab('text')}>
                    <span class="icon is-small"><i class="fas fa-paragraph" /></span>
                    <span>Text</span>
                </a>
            </li>
        </ul>
    </div>
</div>
<div class="box flat-top">
    <div class={selectedTab === 'browser' ? '' : 'is-hidden'}>
        <div class="field">
            <div class="dropdown {isSearchDropdownExpanded ? 'is-active' : ''}">
                <div class="dropdown-trigger">
                    <div class="control is-expanded {isLoading ? 'is-loading' : ''}">
                        <input
                            type="text"
                            class="input"
                            bind:value={browserSearch}
                            on:input={onBrowserSearchChange}
                            on:focus={onBrowserSearchChange}
                            on:click|stopPropagation
                            placeholder="Search api" />
                    </div>
                </div>
                <div class="dropdown-menu">
                    <div class="dropdown-content">
                        {#each browserSearchResults.list as apiSummary}
                            <a href={'#'} class="dropdown-item" on:click|preventDefault={() => onBrowserSearchResultsSelect(apiSummary)}>
                                <p>{apiSummary.apiName}</p>
                                <p class="subtext">{apiSummary.packageName}</p>
                            </a>
                        {/each}
                        {#if !browserSearchResults.isLast}
                            <p class="dropdown-item">...</p>
                        {/if}
                        {#if browserSearchResults.list.length === 0}
                            <p class="dropdown-item">No API found</p>
                        {/if}
                    </div>
                </div>
            </div>
        </div>
        {#if browserSelectedApi}
            <div class="columns">
                <div class="column">
                    <div class="field">
                        <div class="dropdown is-right {isVersionDropdownExpanded ? 'is-active' : ''}">
                            <div class="dropdown-trigger">
                                <div class="control is-expanded">
                                    <button class="button" on:click|stopPropagation={() => (isVersionDropdownExpanded = !isVersionDropdownExpanded)}>
                                        <span>{browserSelectedApi.versionName}</span>
                                        <span class="icon is-small">
                                            <i class="fas fa-angle-down" aria-hidden="true" />
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div class="dropdown-menu" id="dropdown-menu" role="menu">
                                <div class="dropdown-content">
                                    {#each Object.entries(browserSelectedApi.apiSummary) as [versionName, versionItem]}
                                        <a href={'#'} class="dropdown-item" on:click|preventDefault={() => onBrowserSearchResultsSelect(modifyApiSummaryFlat(browserSelectedApi, { versionName }))}>
                                            {#if versionName === browserSelectedApi.versionName}
                                                <strong>{versionName}</strong>
                                            {:else}
                                                {versionName}
                                            {/if}
                                        </a>
                                    {/each}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {#if Object.keys(browserSelectedApi.apiSummary[browserSelectedApi.versionName]).length !== 1}
                    <div class="column">
                        <div class="field">
                            <div class="dropdown is-right {isFileNameDropdownExpanded ? 'is-active' : ''}">
                                <div class="dropdown-trigger">
                                    <div class="control is-expanded">
                                        <button class="button" on:click|stopPropagation={() => (isFileNameDropdownExpanded = !isFileNameDropdownExpanded)}>
                                            <span><span class="short-text">{browserSelectedApi.fileName}</span></span>
                                            <span class="icon is-small">
                                                <i class="fas fa-angle-down" aria-hidden="true" />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div class="dropdown-menu" id="dropdown-menu" role="menu">
                                    <div class="dropdown-content">
                                        {#each [0, 1, 2] as status}
                                            <div class="api-status-section status-{status}">
                                                <p class="menu-label dropdown-item">{getApiStatusName(status)}</p>
                                                <ul class="menu-list">
                                                    {#each Object.entries(browserSelectedApi.apiSummary[browserSelectedApi.versionName]) as [fileName, apiItem]}
                                                        {#if apiItem.status === status}
                                                            <li>
                                                                <a
                                                                    href={'#'}
                                                                    class="dropdown-item status-{apiItem.status}"
                                                                    on:click|preventDefault={() => onBrowserSearchResultsSelect(modifyApiSummaryFlat(browserSelectedApi, { fileName }))}>
                                                                    {#if fileName === browserSelectedApi.fileName}
                                                                        <strong>{fileName}</strong>
                                                                    {:else}
                                                                        {fileName}
                                                                    {/if}
                                                                </a>
                                                            </li>
                                                        {/if}
                                                    {/each}
                                                </ul>
                                            </div>
                                            <hr class="dropdown-divider" />
                                        {/each}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/if}
            </div>
        {/if}
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
    .control.is-expanded .button {
        width: 100%;
    }
    .control.is-expanded .button > span:first-child {
        width: 100%;
    }
    .short-text {
        text-overflow: ellipsis;
        overflow: hidden;
        max-width: 15em;
    }
    .api-status-section {
        border-left-width: 3px;
        border-left-style: solid;
    }
    .api-status-section.status-0 {
        border-left-color: #48c78e;
    }
    .api-status-section.status-1 {
        border-left-color: #ffe08a;
    }
    .api-status-section.status-2 {
        border-left-color: #f14668;
    }
    .api-status-section:not(:has(ul > li)) + .dropdown-divider {
        display: none;
    }
    .api-status-section:not(:has(ul > li)) {
        display: none;
    }
</style>
