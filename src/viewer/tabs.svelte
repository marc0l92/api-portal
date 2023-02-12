<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { viewerOptions } from './viewerOptions';

    export let selectedTab = 'api';
    let showMenu = false;

    const dispatch = createEventDispatcher();
    async function changeTab(newTab: string) {
        selectedTab = newTab;
        dispatch('tabChange', { selectedTab });
    }
</script>

<div class="tabs-with-options">
    <div class="tabs is-boxed is-floating is-right">
        <ul>
            <li class={selectedTab === 'release-notes' ? 'is-active' : ''}>
                <a href={'#'} on:click={() => changeTab('release-notes')}>
                    <span class="icon is-small"><i class="far fa-file-lines" /></span>
                    <span>Release Notes</span>
                </a>
            </li>
            <li class={selectedTab === 'api' ? 'is-active' : ''}>
                <a href={'#'} on:click={() => changeTab('api')}>
                    <span class="icon is-small"><i class="fas fa-circle-nodes" /></span>
                    <span>Api</span>
                </a>
            </li>
            <li class={selectedTab === 'diagrams' ? 'is-active' : ''}>
                <a href={'#'} on:click={() => changeTab('diagrams')}>
                    <span class="icon is-small"><i class="fas fa-diagram-project" /></span>
                    <span>Diagrams</span>
                </a>
            </li>
            <li class={selectedTab === 'tables' ? 'is-active' : ''}>
                <a href={'#'} on:click={() => changeTab('tables')}>
                    <span class="icon is-small"><i class="fas fa-table" /></span>
                    <span>Tables</span>
                </a>
            </li>
            <li class={selectedTab === 'validation' ? 'is-active' : ''}>
                <a href={'#'} on:click={() => changeTab('validation')}>
                    <span class="icon is-small"><i class="fas fa-list-check" /></span>
                    <span>Validation</span>
                </a>
            </li>
            <li class={selectedTab === 'raw' ? 'is-active' : ''}>
                <a href={'#'} on:click={() => changeTab('raw')}>
                    <span class="icon is-small"><i class="fas fa-paragraph" /></span>
                    <span>Raw</span>
                </a>
            </li>
        </ul>
    </div>
    <div class="dropdown is-right {showMenu ? 'is-active' : ''}">
        <div class="dropdown-trigger">
            <a href={'#'} on:click={() => (showMenu = !showMenu)}>
                <i class="fas fa-ellipsis-vertical" />
            </a>
        </div>
        <div class="dropdown-menu">
            <div class="dropdown-content">
                <a href={'#'} class="dropdown-item" on:click={() => ($viewerOptions.fluidLayout = !$viewerOptions.fluidLayout)}>
                    <i class="far {$viewerOptions.fluidLayout ? 'fa-square-check' : 'fa-square'}" />Fluid container
                </a>
            </div>
        </div>
    </div>
</div>

<style>
    .tabs-with-options {
        display: flex;
        flex-wrap: nowrap;
        align-content: center;
        align-items: stretch;
    }
    .tabs-with-options .tabs {
        flex-grow: 1;
        margin-bottom: 0;
    }
    .dropdown-trigger {
        align-items: center;
        display: flex;
        justify-content: center;
        vertical-align: top;
    }
    .dropdown-trigger a {
        padding: 0.5em 1em;
    }
    .dropdown-trigger a:hover,
    .dropdown.is-active .dropdown-trigger a {
        background-color: #f5f5f5;
        border-bottom-color: #dbdbdb;
        border-radius: 4px 4px 0 0;
    }
    .dropdown-menu a i {
        margin-right: 1em;
    }
</style>
