<script lang="ts">
    import yaml from 'js-yaml';
    import { createEventDispatcher, onMount } from 'svelte';
    import { readInputFile } from '../apiToSpreadsheet/filesUtils';

    let selectedTab = 'link';
    let link = 'https://petstore3.swagger.io/api/v3/openapi.json';
    let inputError = '';
    let files: any = null;
    let text = '';

    const dispatch = createEventDispatcher();
    async function onApiChange() {
        inputError = '';
        let apiObject: any = null;
        try {
            if (selectedTab === 'link') {
                const linkResponse = await fetch(link);
                if (linkResponse.ok) {
                    apiObject = yaml.load(await linkResponse.text());
                } else {
                    inputError = 'Error: ' + linkResponse.status;
                }
            } else if (selectedTab === 'file' && files && files.length > 0) {
                apiObject = yaml.load(await readInputFile(files[0]));
            } else if (selectedTab === 'text') {
                apiObject = yaml.load(text);
            }
        } catch (e: any) {
            console.error(e);
            inputError = 'Error: ' + e.message;
        }
        dispatch('apiChange', { apiObject });
    }

    function changeTab(newTab: string) {
        selectedTab = newTab;
        onApiChange();
    }

    onMount(() => {
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
<div class="box">
    <div>
        <div class="field {selectedTab === 'link' ? '' : 'is-hidden'}">
            <div class="control is-expanded">
                <input type="text" class="input" bind:value={link} on:input={onApiChange} placeholder="Example: https://petstore3.swagger.io/api/v3/openapi.json" />
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
        <div class="margin-top">
            <div class="notification is-danger is-small">{inputError}</div>
        </div>
    {/if}
</div>

<style>
    .tabs.is-boxed.is-floating li.is-active {
        box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%);
    }
    .tabs.is-boxed.is-floating li.is-active > a {
        border: 0;
    }
    .tabs.is-boxed.is-floating ul {
        border-bottom-width: 0;
    }
    .box {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
    div.notification.is-small {
        padding: 0.5em;
    }
    div.margin-top {
        margin-top: 0.75rem;
    }
</style>
