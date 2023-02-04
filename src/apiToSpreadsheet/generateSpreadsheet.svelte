<script lang="ts">
    import type { ApiService } from 'common/api';
    import { convertToTable, generateSpreadsheet } from './utils/filesUtils';
    import { generateServiceWorkbook } from './utils/swaggerParsing';

    export let service: ApiService = null;

    function downloadSpreadsheet() {
        const itemMap = generateServiceWorkbook(service);
        const workbook = convertToTable(itemMap);
        generateSpreadsheet(workbook, service.getName());
        // console.log('completed')
    }
</script>

<div class="box">
    <button class="button is-primary" on:click={downloadSpreadsheet}>Download</button>
</div>

<style>
</style>
