<script lang="ts">
    import { createEventDispatcher, onMount } from 'svelte';

    export let selectedTab = 'api-diff';

    const dispatch = createEventDispatcher();
    async function changeTab(newTab: string) {
        selectedTab = newTab;
        dispatch('tabChange', { selectedTab });
    }
</script>

<div class="tabs-with-options">
    <div class="tabs is-boxed is-floating">
        <ul>
            <li class={selectedTab === 'api-diff' ? 'is-active' : ''}>
                <a href={'#'} on:click={() => changeTab('api-diff')}>
                    <span class="icon is-small"><i class="fas fa-circle-nodes" /></span>
                    <span>Api Diff</span>
                </a>
            </li>
            <li class={selectedTab === 'diagrams-diff' ? 'is-active' : ''}>
                <a href={'#'} on:click={() => changeTab('diagrams-diff')}>
                    <span class="icon is-small"><i class="fas fa-diagram-project" /></span>
                    <span>Diagrams Diff</span>
                </a>
            </li>
        </ul>
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
</style>
