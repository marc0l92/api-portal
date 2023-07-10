<script lang="ts">
    import JSZip from 'jszip';
    import type { ApiService } from '../../common/api/api';
    import { DiagramBuilderFormat, diagramBuilderOptions } from './diagramBuilderOptions';
    import { parseServiceDiagrams, type DiagramData } from './serviceDiagrams';
    import { generateAndDownloadZip, sanitizeFilename } from '../../common/filesUtils';

    export let apiName: string = '';
    export let services: ApiService[] = [];
    export let selectedService: ApiService = null;
    let isProcessing = false;
    let processingIndex = -1;

    async function addDiagramsDataToZip(zip: JSZip, diagramsData: DiagramData[], format: DiagramBuilderFormat) {
        for (const diagramData of diagramsData) {
            zip.file(sanitizeFilename(`${diagramData.name}.plantuml`), diagramData.uml);
            const response = await fetch(diagramData.image);
            if (response.ok) {
                zip.file(sanitizeFilename(`${diagramData.name}.${format}`), await response.blob());
            }
        }
    }

    async function downloadSelectedService() {
        isProcessing = true;
        processingIndex = -1;
        if (selectedService) {
            const diagramsData = parseServiceDiagrams(selectedService, $diagramBuilderOptions);
            const zip = new JSZip();
            await addDiagramsDataToZip(zip, diagramsData, $diagramBuilderOptions.format);
            await generateAndDownloadZip(apiName, zip);
        }
        isProcessing = false;
    }

    async function downloadAllServices() {
        isProcessing = true;
        processingIndex = 0;
        if (services.length > 0) {
            const zip = new JSZip();
            for (const service of services) {
                const diagramsData = parseServiceDiagrams(service, $diagramBuilderOptions);
                await addDiagramsDataToZip(zip, diagramsData, $diagramBuilderOptions.format);
                processingIndex++;
            }
            await generateAndDownloadZip(apiName, zip);
        }
        isProcessing = false;
    }
</script>

<div class="box">
    <div class="block">
        <button class="button is-primary {isProcessing ? 'is-loading' : ''}" disabled={isProcessing} on:click={downloadSelectedService}>Download selected service</button>
        <button class="button is-primary {isProcessing ? 'is-loading' : ''}" disabled={isProcessing} on:click={downloadAllServices}>Download all services</button>
    </div>
    {#if isProcessing && processingIndex >= 0}
        <div class="block">
            <progress class="progress is-info is-small" value={processingIndex} max={services.length} />
        </div>
    {/if}
</div>

<style>
</style>
