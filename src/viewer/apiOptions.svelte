<script lang="ts">
    import { onDestroy, onMount } from 'svelte';
    import ExportModal from './export/exportModal.svelte';
    import { exportApi } from './export/export';
    import { exportOptionsDestroy, exportOptionsMount } from './export/exportOptions';
    import type { ApiIndexItem } from 'common/api/apiIndex';

    export let api: ApiIndexItem;
    let showMenu = false;
    let showExportModal = true;
    let isDownloadInProgress = false;

    async function downloadApi() {
        if (!isDownloadInProgress) {
            isDownloadInProgress = true;
            try {
                console.log('start');
                await exportApi();
            } catch (e) {}
            isDownloadInProgress = false;
            showMenu = false;
        }
    }
    onMount(() => {
        exportOptionsMount();
        document.addEventListener('click', () => {
            showMenu = false;
        });
    });
    onDestroy(() => {
        exportOptionsDestroy();
    });
</script>

<div class="dropdown is-right {showMenu ? 'is-active' : ''}" on:click|stopPropagation={() => (showMenu = !showMenu)} on:keypress={() => (showMenu = !showMenu)}>
    <div class="dropdown-trigger">
        <button class="button"><i class="fa-solid fa-ellipsis-vertical" /></button>
    </div>
    <div class="dropdown-menu">
        <div class="dropdown-content">
            <a href={''} class="dropdown-item control {isDownloadInProgress ? 'is-loading is-disabled' : ''}" on:click|preventDefault|stopPropagation={downloadApi}>
                <span>Download</span>
                {#if !isDownloadInProgress}
                    <i class="fa-solid fa-download" />
                {/if}
            </a>
            <a href={''} class="dropdown-item {isDownloadInProgress ? 'is-disabled' : ''}" on:click|preventDefault={() => (showExportModal = !isDownloadInProgress)}>
                <span>Download options...</span><i class="fa-solid fa-gear" />
            </a>
            <!-- <a class="dropdown-item" href="{basePath}/compare.html?leftApi={apiHash}&rightApi={apiHash}">
              <span>Compare</span><i class="fa-solid fa-code-compare" />
            </a> -->
        </div>
    </div>
</div>

<ExportModal bind:showExportModal {api} />

<style>
    a.dropdown-item {
        display: flex;
        align-items: center;
        padding-right: 1rem;
    }
    a.dropdown-item span {
        flex-grow: 1;
    }
    .dropdown-item.control.is-loading::after {
        right: 1rem;
    }
    .dropdown-item.is-disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
</style>
