<script lang="ts">
    import { onDestroy, onMount } from 'svelte';
    import { diagramBuilderOptionsDestroy, diagramBuilderOptionsMount } from 'tools/apiToPlantUml/diagramBuilderOptions';
    import DiagramsOption from 'tools/apiToPlantUml/diagramsOption.svelte';
    import { viewerOptions, viewerOptionsDestroy, viewerOptionsMount } from 'viewer/viewerOptions';

    let showMenu = false;
    let showDiagramsOptionsModal = false;

    onMount(async () => {
        diagramBuilderOptionsMount();
        viewerOptionsMount();
        document.addEventListener('click', () => {
            showMenu = false;
        });
    });
    onDestroy(() => {
        diagramBuilderOptionsDestroy();
        viewerOptionsDestroy();
    });
</script>

<div class="dropdown is-right {showMenu ? 'is-active' : ''}" on:click|stopPropagation={() => (showMenu = !showMenu)} on:keypress={() => (showMenu = !showMenu)}>
    <div class="dropdown-trigger">
        <button>
            <i class="fas fa-ellipsis-vertical" />
        </button>
    </div>
    <div class="dropdown-menu">
        <div class="dropdown-content">
            <a href={'#'} class="dropdown-item" on:click={() => ($viewerOptions.fluidLayout = !$viewerOptions.fluidLayout)}>
                <span>Fluid container</span><i class="far {$viewerOptions.fluidLayout ? 'fa-square-check' : 'fa-square'}" />
            </a>
            <a href={'#'} class="dropdown-item" on:click={() => (showDiagramsOptionsModal = true)}>
                <span>Diagrams options</span>
            </a>
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
    .dropdown-trigger button {
        padding: 0em 0.7em;
        height: 100%;
        border: none;
        background-color: transparent;
    }
    .dropdown-trigger button:hover,
    .dropdown.is-active .dropdown-trigger button {
        background-color: #f5f5f5;
        border-bottom-color: #dbdbdb;
        border-radius: 4px 4px 0 0;
    }
    .dropdown-item span {
        flex-grow: 1;
    }
</style>
