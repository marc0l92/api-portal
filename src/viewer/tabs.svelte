<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    export let selectedTab = 'api';

    const dispatch = createEventDispatcher();
    async function changeTab(newTab: string) {
        selectedTab = newTab;
        dispatch('tabChange', { selectedTab });
    }
</script>

<div>
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
            <li>
                <a href={'#'} class="small-item">
                    <span class="icon is-small"><i class="fas fa-ellipsis-vertical" /></span>
                </a>
            </li>
        </ul>
    </div>
</div>

<style>
    .small-item {
        padding-left: 0;
        padding-right: 0;
    }
    .tabs.is-boxed a.small-item:hover{
        border-bottom-color: transparent;
    }
</style>
