<script lang="ts">
    import type { Api } from '../../common/api/api';
    import { downloadFile, objToBlob } from '../../common/filesUtils';
    import { filterApiServices, type ApiServiceFilterItem } from './apiFilter';

    export let api: Api = null;
    export let servicesFilter: ApiServiceFilterItem[] = [];
    let isProcessing = false;

    async function downloadApi() {
        isProcessing = true;
        const filteredApi = filterApiServices(api, servicesFilter);
        downloadFile(`${api.getName()}.json`, objToBlob(filteredApi));
        isProcessing = false;
    }
</script>

<div class="box">
    <div class="block">
        <button class="button is-primary {isProcessing ? 'is-loading' : ''}" disabled={isProcessing} on:click={downloadApi}>Download Api</button>
    </div>
</div>

<style>
</style>
