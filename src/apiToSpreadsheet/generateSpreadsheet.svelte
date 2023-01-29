<script lang="ts">
    import { convertToTable, generateSpreadsheet } from './utils/filesUtils';
    import { ApiVersion, type ApiService } from './utils/interfaces';
    import { generateServiceWorkbook } from './utils/swaggerParsing';

    export let version: ApiVersion = ApiVersion.Invalid;
    export let service: ApiService = null;

    function downloadSpreadsheet() {
        const itemMap = generateServiceWorkbook(service, version);
        const workbook = convertToTable(itemMap);
        generateSpreadsheet(workbook, service['x-name']);
        console.log('completed')
    }
</script>

<div class="box">
    <button class="button is-primary" on:click={downloadSpreadsheet}>Download</button>
</div>

<style>
</style>
