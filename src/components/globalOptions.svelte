<script lang="ts">
    import { onDestroy, onMount } from 'svelte';
    import { diagramBuilderOptionsDestroy, diagramBuilderOptionsMount } from '../tools/apiToPlantUml/diagramBuilderOptions';
    import DiagramsOption from '../tools/apiToPlantUml/diagramsOption.svelte';
    import { globalOptions, globalOptionsDestroy, globalOptionsMount } from '../common/globalOptions';
    import { getReleaseId } from '../common/globals';
    import { cleanAllOptions } from 'common/localStorage';

    let showMenu = false;
    let showDiagramsOptionsModal = false;

    function resetLocalSettings() {
        if (confirm('Do you really want to delete all the local settings?')) {
            cleanAllOptions();
        }
    }

    onMount(async () => {
        diagramBuilderOptionsMount();
        globalOptionsMount();
        document.addEventListener('click', () => {
            showMenu = false;
        });
    });
    onDestroy(() => {
        diagramBuilderOptionsDestroy();
        globalOptionsDestroy();
    });
</script>

<div class="dropdown is-right {showMenu ? 'is-active' : ''}" on:click|stopPropagation={() => (showMenu = !showMenu)} on:keypress={() => (showMenu = !showMenu)}>
    <div class="dropdown-trigger">
        <button class="button is-white"><i class="fa-solid fa-gear" /></button>
    </div>
    <div class="dropdown-menu">
        <div class="dropdown-content">
            <a href={''} class="dropdown-item" on:click|preventDefault={() => ($globalOptions.fluidLayout = !$globalOptions.fluidLayout)}>
                <span>{$globalOptions.fluidLayout ? 'Compress container' : 'Expand container'}</span>
                <i class="fas {$globalOptions.fluidLayout ? 'fa-compress' : 'fa-expand'}" />
            </a>
            <a href={''} class="dropdown-item" on:click|preventDefault={() => (showDiagramsOptionsModal = true)}>
                <span>Diagrams options</span><i class="fa-solid fa-diagram-project" />
            </a>
            <a href="https://github.com/marc0l92/api-portal/issues/new/choose" class="dropdown-item" target="_blank" rel="noreferrer">
                <span>Report issue</span><i class="fa-solid fa-bug" />
            </a>
            <a href={''} class="dropdown-item" on:click|preventDefault={resetLocalSettings}>
                <span>Reset local settings</span><i class="fa-solid fa-eraser" />
            </a>
            <hr class="dropdown-divider" />
            <div class="dropdown-item">
                <span>Release id: {getReleaseId()}</span>
            </div>
        </div>
    </div>
</div>

<div class="modal {showDiagramsOptionsModal ? 'is-active' : ''}">
    <div class="modal-background" on:click={() => (showDiagramsOptionsModal = false)} on:keypress={() => (showDiagramsOptionsModal = false)} />
    <div class="modal-card">
        <header class="modal-card-head">
            <p class="modal-card-title">Diagrams Options</p>
            <button class="delete" aria-label="close" on:click={() => (showDiagramsOptionsModal = false)} />
        </header>
        <section class="modal-card-body">
            <DiagramsOption />
        </section>
    </div>
</div>

<style>
    a.dropdown-item {
        display: flex;
        align-items: center;
        padding-right: 1rem;
    }
    a.dropdown-item span {
        flex-grow: 1;
    }
</style>
