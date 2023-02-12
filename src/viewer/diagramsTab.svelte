<script lang="ts">
    import { diagramBuilderOptions } from 'apiToPlantuml/diagramBuilderOptions';
    import DiagramsOption from 'apiToPlantuml/diagramsOption.svelte';
    import { parseServiceDiagrams, type DiagramData } from 'apiToPlantuml/serivceDiagrams';
    import type { Api, ApiService } from 'common/api';
    import SelectServices from 'components/selectServices.svelte';

    export let api: Api = null;
    let services: ApiService[] = [];
    let diagrams: DiagramData[] = [];

    function onServiceSelect(event: CustomEvent<{ selectedServiceIndex: number }>) {
        const selectedService = services[event.detail.selectedServiceIndex];
        if (selectedService && $diagramBuilderOptions) {
            diagrams = parseServiceDiagrams(selectedService, $diagramBuilderOptions);
            console.log(diagrams);
        }
    }

    $: if (api) {
        services = api.getServices();
    }
</script>

<SelectServices servicesSelectSize={1} {services} on:serviceSelect={onServiceSelect} />
{#each diagrams as diagram}
    <p><strong>{diagram.name}</strong></p>
    <figure>
        <a href={diagram.image} target="_blank" rel="noreferrer">
            <img src={diagram.image} alt={diagram.name} />
        </a>
    </figure>
    <hr />
{/each}
<DiagramsOption />

<style>
</style>
