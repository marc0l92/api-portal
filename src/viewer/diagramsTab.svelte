<script lang="ts">
    import { diagramBuilderOptions } from 'tools/apiToPlantUml/diagramBuilderOptions';
    import { parseServiceDiagrams, type DiagramData } from 'tools/apiToPlantUml/serviceDiagrams';
    import type { Api, ApiService } from 'common/api//api';
    import SelectServices from 'components/selectServices.svelte';

    export let api: Api = null;
    let services: ApiService[] = [];
    let selectedService: ApiService = null;
    let diagrams: DiagramData[] = [];

    function onServiceSelect(event: CustomEvent<{ selectedServiceIndex: number }>) {
        selectedService = services[event.detail.selectedServiceIndex];
    }

    $: if (api) {
        services = api.getServices();
    }
    $: if (selectedService && $diagramBuilderOptions) {
        diagrams = parseServiceDiagrams(selectedService, $diagramBuilderOptions);
    }
</script>

<SelectServices servicesSelectSize={1} {services} on:serviceSelect={onServiceSelect} />
{#each diagrams as diagram}
    <p>
        <strong>{diagram.name}</strong>
        <a href={diagram.umlEditor} target="_blank" rel="noreferrer" title="Open UML editor">
            <span class="icon is-small">
                <i class="fas fa-pen-to-square" />
            </span>
        </a>
    </p>
    <figure>
        <a href={diagram.image} target="_blank" rel="noreferrer">
            <img src={diagram.image} alt={diagram.name} />
        </a>
    </figure>
    <hr />
{/each}

<style>
</style>
