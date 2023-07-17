<script lang="ts">
    import type { ApiReleaseNotes } from '../common/api/api';

    export let releaseNotes: ApiReleaseNotes = null;
</script>

<div>
    {#each Object.entries(releaseNotes) as [versionName, versionNotes], index}
        {#if index !== 0}
            <hr />
        {/if}
        <details open>
            <summary class="title is-4">{versionName}</summary>
            {#each Object.values(versionNotes) as note}
                {#if note.startsWith('#') && note.endsWith('#')}
                    <p class="is-5"><strong>{note.replace(/#/g, '')}</strong></p>
                {:else}
                    <li>{note}</li>
                {/if}
            {/each}
        </details>
    {/each}
</div>

<style>
</style>
