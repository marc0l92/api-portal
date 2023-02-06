<script lang="ts">
    import { getOptions, storeOptions } from 'common/localStorage';
    import yaml from 'js-yaml';
    import { createEventDispatcher, onMount } from 'svelte';
    import { readInputFile } from '../common/filesUtils';

    const LOCAL_STORAGE_SELECTED_TAB_KEY = 'inputApi.selectedTab';
    const LOCAL_STORAGE_LINK_KEY = 'inputApi.link';
    const LOCAL_STORAGE_TEXT_KEY = 'inputApi.text';
    const EXAMPLE_API_LINK = 'https://petstore3.swagger.io/api/v3/openapi.json';

    let selectedTab = 'link';
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
            if (selectedTab === 'link') {
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

    function changeTab(newTab: string) {
        selectedTab = newTab;
        storeOptions(LOCAL_STORAGE_SELECTED_TAB_KEY, newTab);
        onApiChange();
    }

    onMount(() => {
        selectedTab = getOptions(LOCAL_STORAGE_SELECTED_TAB_KEY) || 'link';
        link = getOptions(LOCAL_STORAGE_LINK_KEY) || EXAMPLE_API_LINK;
        text = getOptions(LOCAL_STORAGE_TEXT_KEY) || '';
        onApiChange();
    });
</script>

<div>
    <div class="tabs is-boxed is-floating">
        <ul>
            <li class={selectedTab === 'link' ? 'is-active' : ''}>
                <a href="#link" on:click={() => changeTab('link')}>
                    <span class="icon is-small"><i class="fas fa-link" /></span>
                    <span>Link</span>
                </a>
            </li>
            <li class={selectedTab === 'file' ? 'is-active' : ''}>
                <a href="#file" on:click={() => changeTab('file')}>
                    <span class="icon is-small"><i class="fas fa-file-alt" /></span>
                    <span>File</span>
                </a>
            </li>
            <li class={selectedTab === 'text' ? 'is-active' : ''}>
                <a href="#text" on:click={() => changeTab('text')}>
                    <span class="icon is-small"><i class="fas fa-paragraph" /></span>
                    <span>Text</span>
                </a>
            </li>
        </ul>
    </div>
</div>
<div class="box flat-top">
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
</style>
