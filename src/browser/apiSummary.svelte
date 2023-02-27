<script lang="ts">
    import { getBasePath } from 'common/globals';
    import type { ApiSummary } from '../common/apiIndex';
    import { browserOptions } from './browserOptions';

    const VERSION_LIMIT = 5;
    const basePath = getBasePath();

    export let packageName: string = null;
    export let name: string = null;
    export let apiSummary: ApiSummary = null;
    let lastApiVersion = '';
    let lastApiHash = '';
    let isExpanded = false;

    function onFavoriteToggle() {
        console.log(JSON.stringify($browserOptions));
        if (!$browserOptions.favorites[packageName]) {
            $browserOptions.favorites[packageName] = {};
        }
        $browserOptions.favorites[packageName][name] = !$browserOptions.favorites[packageName][name];
    }

    $: if (apiSummary) {
        lastApiVersion = Object.keys(apiSummary)[0];
        lastApiHash = Object.values(apiSummary[lastApiVersion])[0].hash;
    }
</script>

{#if apiSummary}
    <div class="card">
        <header class="card-header">
            <a href="{basePath}/viewer.html?api={lastApiHash}">
                <p class="card-header-title">{name} - {lastApiVersion}</p>
            </a>
            <button class="card-header-icon" on:click={onFavoriteToggle}>
                <span class="icon">
                    <i class="{$browserOptions.favorites[packageName] && $browserOptions.favorites[packageName][name] ? 'fas' : 'far'} fa-star" />
                </span>
            </button>
        </header>
        <div class="card-content">
            <div class="content">
                <!-- <p class="subtitle is-6">{lastVersion.fileName}</p> -->
                <div class="columns is-multiline">
                    <div class="column">
                        {#each Object.entries(apiSummary).slice(0, isExpanded ? undefined : 5) as [versionName, versionSummary]}
                            <a class="tag ml-1 mb-1" href="{basePath}/viewer.html?api={Object.values(versionSummary)[0].hash}">
                                {versionName}
                            </a>
                        {/each}
                        {#if Object.keys(apiSummary).length > VERSION_LIMIT}
                            <button class="button is-white is-small is-tag-size" on:click={() => (isExpanded = !isExpanded)}>
                                <i class="fas fa-angle-{isExpanded ? 'left' : 'right'}" />
                            </button>
                        {/if}
                    </div>
                </div>
            </div>
        </div>
    </div>
{/if}

<style>
    .card-header-title {
        word-break: break-all;
    }
    .card-header-icon {
        color: var(--color-accent);
    }
    .is-tag-size {
        height: 2em;
        vertical-align: baseline;
        padding-left: 0.75em;
        padding-right: 0.75em;
    }
</style>
