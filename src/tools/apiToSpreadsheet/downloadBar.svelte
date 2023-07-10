<script lang="ts">
    import JSZip from 'jszip';
    import type { ApiService } from '../../common/api/api';
    import { downloadFile, generateAndDownloadZip, sanitizeFilename, bufferToBlob } from '../../common/filesUtils';
    import { generateServiceWorkbook } from './swaggerParsing';
    import { modelPropertiesToTables, tablesMapToXLSX } from './xlsxUtils';

    export let apiName: string = '';
    export let services: ApiService[] = [];
    export let selectedService: ApiService = null;
    let isProcessing = false;
    let processingIndex = -1;

    function serviceToSpreadsheet(service: ApiService): Buffer {
        const itemMap = generateServiceWorkbook(service);
        const workbook = modelPropertiesToTables(itemMap);
        return tablesMapToXLSX(workbook);
    }

    async function downloadSelectedServiceSpreadsheet() {
        isProcessing = true;
        processingIndex = -1;
        if (selectedService) {
            const fileContent = serviceToSpreadsheet(selectedService);
            downloadFile(`${selectedService.getName()}.ods`, bufferToBlob(fileContent));
        }
        isProcessing = false;
    }

    async function downloadAllServicesSpreadsheets() {
        isProcessing = true;
        processingIndex = 0;
        if (services.length > 0) {
            const zip = new JSZip();
            for (const service of services) {
                const spreadsheetContent = serviceToSpreadsheet(service);
                if (spreadsheetContent) {
                    zip.file(sanitizeFilename(`${service.getName()}.ods`), spreadsheetContent);
                }
                processingIndex++;
            }
            await generateAndDownloadZip(apiName, zip);
        }
        isProcessing = false;
    }
</script>

<div class="box">
    <div class="block">
        <button class="button is-primary {isProcessing ? 'is-loading' : ''}" disabled={isProcessing} on:click={downloadSelectedServiceSpreadsheet}>Download selected service</button>
        <button class="button is-primary {isProcessing ? 'is-loading' : ''}" disabled={isProcessing} on:click={downloadAllServicesSpreadsheets}>Download all services</button>
    </div>
    {#if isProcessing && processingIndex >= 0}
        <div class="block">
            <progress class="progress is-info is-small" value={processingIndex} max={services.length} />
        </div>
    {/if}
</div>

<style>
</style>
