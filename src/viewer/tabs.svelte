<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { getValidationBadgeCss, type ApiValidation } from './validation';

    export let selectedTab = 'api';
    export let hasReleaseNotes = true;
    export let validationData: ApiValidation[] = [];
    let validationErrorsCount = 0;
    let validationErrorsCss = '';

    const dispatch = createEventDispatcher();
    async function changeTab(newTab: string) {
        selectedTab = newTab;
        dispatch('tabChange', { selectedTab });
    }
    $: if (validationData) {
        validationErrorsCount = validationData.length;
        validationErrorsCss = getValidationBadgeCss(validationData);
    }
</script>

<div class="tabs-with-options">
    <div class="tabs is-boxed is-floating is-right">
        <ul>
            {#if hasReleaseNotes}
                <li class={selectedTab === 'release-notes' ? 'is-active' : ''}>
                    <a href={''} on:click|preventDefault={() => changeTab('release-notes')}>
                        <span class="icon is-small"><i class="far fa-file-lines" /></span>
                        <span>Release Notes</span>
                    </a>
                </li>
            {/if}
            <li class={selectedTab === 'api' ? 'is-active' : ''}>
                <a href={''} on:click|preventDefault={() => changeTab('api')}>
                    <span class="icon is-small"><i class="fas fa-circle-nodes" /></span>
                    <span>Api</span>
                </a>
            </li>
            <li class={selectedTab === 'diagrams' ? 'is-active' : ''}>
                <a href={''} on:click|preventDefault={() => changeTab('diagrams')}>
                    <span class="icon is-small"><i class="fas fa-diagram-project" /></span>
                    <span>Diagrams</span>
                </a>
            </li>
            <li class={selectedTab === 'tables' ? 'is-active' : ''}>
                <a href={''} on:click|preventDefault={() => changeTab('tables')}>
                    <span class="icon is-small"><i class="fas fa-table" /></span>
                    <span>Tables</span>
                </a>
            </li>
            {#if validationErrorsCount > 0}
                <li class={selectedTab === 'validation' ? 'is-active' : ''}>
                    <a href={''} on:click|preventDefault={() => changeTab('validation')}>
                        <span class="icon is-small"><i class="fas fa-list-check" /></span>
                        <span>Validation</span>
                        <span class="tag is-small {validationErrorsCss}">{validationErrorsCount}</span>
                    </a>
                </li>
            {/if}
            <li class={selectedTab === 'raw' ? 'is-active' : ''}>
                <a href={''} on:click|preventDefault={() => changeTab('raw')}>
                    <span class="icon is-small"><i class="fas fa-paragraph" /></span>
                    <span>Raw</span>
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
    .tag.is-small {
        margin-left: 0.5em;
        padding: 0 0.5em;
        border-radius: 100em;
    }
</style>
