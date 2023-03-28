<script lang="ts">
    import type { Api } from 'common/api/api';

    export let leftApi: Api;
    export let rightApi: Api;
</script>

<div>
    {#if leftApi && rightApi}
        Ok
    {/if}
</div>

<style>
</style>
