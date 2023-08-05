<script lang="ts">
    import { exportOptions } from './exportOptions';

    export let apiHash: string;
    export let tagsList: string[];

    function toggle(tagName: string) {
        if (!$exportOptions.apisOptions[apiHash]) {
            $exportOptions.apisOptions[apiHash] = { tags: [], servicesToExclude: [] };
        }
        const tagIndex = $exportOptions.apisOptions[apiHash].tags.indexOf(tagName);
        if (tagIndex === -1) {
            $exportOptions.apisOptions[apiHash].tags = [...$exportOptions.apisOptions[apiHash].tags, tagName];
        } else {
            $exportOptions.apisOptions[apiHash].tags = [...$exportOptions.apisOptions[apiHash].tags.slice(0, tagIndex), ...$exportOptions.apisOptions[apiHash].tags.slice(tagIndex + 1)];
        }
    }
</script>

<section>
    <div class="buttons">
        {#each tagsList as tagName}
            <button
                class="button is-fullwidth {$exportOptions.apisOptions[apiHash] && $exportOptions.apisOptions[apiHash].tags.indexOf(tagName) >= 0 ? 'is-info' : 'is-outlined'}"
                on:click={() => toggle(tagName)}>{tagName}</button
            >
        {/each}
    </div>
</section>

<style>
</style>
