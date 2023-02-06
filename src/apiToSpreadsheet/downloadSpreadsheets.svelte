<script lang="ts">
    import JSZip from 'jszip';
    import type { ApiService } from 'common/api';
    import { downloadFile, generateAndDownloadZip, sanitizeFilename, toBlob } from 'common/filesUtils';
    import { generateServiceWorkbook } from './swaggerParsing';
    import { modelPropertiesToTable, tablesMapToXLSX } from './xlsxUtils';

    export let apiName: string = '';
    export let services: ApiService[] = [];
    export let selectedService: ApiService = null;
    let processing = false;

    function serviceToSpreadsheet(service: ApiService): Buffer {
        const itemMap = generateServiceWorkbook(service);
        const workbook = modelPropertiesToTable(itemMap);
        return tablesMapToXLSX(workbook);
    }

    async function downloadSelectedServiceSpreadsheet() {
        processing = true;
        if (selectedService) {
            const fileContent = serviceToSpreadsheet(selectedService);
            downloadFile(`${selectedService.getName()}.ods`, toBlob(fileContent));
        }
        processing = false;
    }

    async function downloadAllServicesSpreadsheets() {
        processing = true;
        if (services.length > 0) {
            const zip = new JSZip();
            for (const service of services) {
                const spreadsheetContent = serviceToSpreadsheet(service);
                if (spreadsheetContent) {
                    zip.file(sanitizeFilename(`${service.getName()}.ods`), spreadsheetContent);
                }
            }
            await generateAndDownloadZip(apiName, zip);
        }
        processing = false;
    }
</script>

<div class="box">
    <button class="button is-primary {processing ? 'is-loading' : ''}" disabled={processing} on:click={downloadSelectedServiceSpreadsheet}>Download selected service</button>
    <button class="button is-primary {processing ? 'is-loading' : ''}" disabled={processing} on:click={downloadAllServicesSpreadsheets}>Download all services</button>
</div>

<style>
</style>
