<script lang="ts">
    import JSZip from 'jszip';
    import type { ApiService } from 'common/api';
    import { diagramBuilderOptions } from './diagramBuilderOptions';
    import { parseServiceDiagrams, type DiagramData } from './serivceDiagrams';
    import { generateAndDownloadZip, sanitizeFilename } from 'common/filesUtils';

    export let apiName: string = '';
    export let services: ApiService[] = [];
    export let selectedService: ApiService = null;
    let processing = false;

    async function addDiagramsDataToZip(zip: JSZip, diagramsData: DiagramData[], format: string) {
        for (const diagramData of diagramsData) {
            zip.file(sanitizeFilename(`${diagramData.name}.plantuml`), diagramData.uml);
            const response = await fetch(diagramData.image);
            if (response.ok) {
                zip.file(sanitizeFilename(`${diagramData.name}.${format}`), await response.blob());
            }
        }
    }

    async function downloadSelectedService() {
        processing = true;
        if (selectedService) {
            const diagramsData = parseServiceDiagrams(selectedService, $diagramBuilderOptions);
            const zip = new JSZip();
            await addDiagramsDataToZip(zip, diagramsData, $diagramBuilderOptions.format);
            await generateAndDownloadZip(apiName, zip);
        }
        processing = false;
    }

    async function downloadAllServices() {
        processing = true;
        if (services.length > 0) {
            const zip = new JSZip();
            for (const service of services) {
                const diagramsData = parseServiceDiagrams(service, $diagramBuilderOptions);
                await addDiagramsDataToZip(zip, diagramsData, $diagramBuilderOptions.format);
            }
            await generateAndDownloadZip(apiName, zip);
        }
        processing = false;
    }
</script>

<div class="box">
    <button class="button is-primary {processing ? 'is-loading' : ''}" disabled={processing} on:click={downloadSelectedService}>Download selected service</button>
    <button class="button is-primary {processing ? 'is-loading' : ''}" disabled={processing} on:click={downloadAllServices}>Download all services</button>
</div>

<style>
</style>
