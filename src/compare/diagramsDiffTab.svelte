<script lang="ts">
    import type { Api } from 'common/api/api';

    export let leftApi: Api;
    export let rightApi: Api;
</script>

<div>
    {#if leftApi && rightApi}
        Work in progress
    {/if}
</div>

<style>
</style>
