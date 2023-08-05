<script lang="ts">
    import ExportApi from './exportApi.svelte';
    import ExportAside from './exportAside.svelte';
    import ExportDiagrams from './exportDiagrams.svelte';
    import { AsideTabsName } from './export';
    import ExportReleaseNotes from './exportReleaseNotes.svelte';
    import ExportServices from './exportServices.svelte';
    import ExportSpreadSheet from './exportSpreadSheet.svelte';
    import ExportTags from './exportTags.svelte';
    import type { ApiIndexItem } from 'common/api/apiIndex';

    export let showExportModal: boolean;
    export let api: ApiIndexItem;
    let tabSelected = AsideTabsName.RELEASE_NOTES;

    $: if (showExportModal) {
        tabSelected = AsideTabsName.RELEASE_NOTES;
    }
</script>

<div class="modal {showExportModal ? 'is-active' : ''}">
    <div class="modal-background" on:click={() => (showExportModal = false)} on:keypress={() => (showExportModal = false)} />
    <div class="modal-card">
        <header class="modal-card-head">
            <p class="modal-card-title">Export Options</p>
            <button class="delete" aria-label="close" on:click={() => (showExportModal = false)} />
        </header>
        <section class="modal-card-body">
            <div class="columns">
                <div class="column is-narrow">
                    <ExportAside apiHash={api.hash} bind:selected={tabSelected} apiServicesCount={api.services.length} />
                </div>
                <div class="column">
                    {#if tabSelected === AsideTabsName.RELEASE_NOTES}
                        <ExportReleaseNotes />
                    {:else if tabSelected === AsideTabsName.API}
                        <ExportApi />
                    {:else if tabSelected === AsideTabsName.DIAGRAMS}
                        <ExportDiagrams />
                    {:else if tabSelected === AsideTabsName.SPREADSHEET}
                        <ExportSpreadSheet />
                    {:else if tabSelected === AsideTabsName.TAGS}
                        <ExportTags apiHash={api.hash} tagsList={api.tags} />
                    {:else if tabSelected === AsideTabsName.SERVICES}
                        <ExportServices apiHash={api.hash} servicesList={api.services} />
                    {/if}
                </div>
            </div>
        </section>
        <footer class="modal-card-foot">
            <button class="button is-success">Download</button>
            <button class="button" on:click={() => (showExportModal = false)}>Cancel</button>
        </footer>
    </div>
</div>

<style>
    .modal-card {
        height: 80%;
        min-height: 300px;
    }
    .modal-card-body {
        padding: 0.75rem;
    }
    .modal-card-body > .columns {
        height: calc(100% + 1.5rem);
    }
    .modal-card-body > .columns > .column:not(:last-child) {
        border-right: 1px solid #dbdbdb;
    }
</style>
