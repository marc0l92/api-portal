<script lang="ts">
    import type { ApiParameterDoc, ApiService } from 'common/api';
    import DiagramBuilder, { type DiagramBuilderOptions } from './diagramBuilder';

    interface DiagramData {
        name: string;
        uml: string;
        image: string;
    }

    export let service: ApiService = null;
    export let options: DiagramBuilderOptions = {};
    let diagrams: DiagramData[] = [];
    let selectedDiagram: DiagramData = null;

    $: parseService(service);

    function addDiagram(parameter: ApiParameterDoc, subName: string) {
        if (parameter.schema) {
            const title = `${service.getName()} - ${subName}`;
            const diagramBuilder = new DiagramBuilder(options);
            diagramBuilder.buildTitle(title);
            diagramBuilder.buildModel(parameter.schema);
            diagrams.push({
                name: title,
                uml: diagramBuilder.getDiagramText(),
                image: diagramBuilder.getDiagramImageUri(),
            });
        }
    }

    function parseService(serviceToProcess: ApiService) {
        diagrams = [];
        if (serviceToProcess) {
            const request = serviceToProcess.getRequest();
            if (request) {
                addDiagram(request, 'Request');
            }
            const responses = serviceToProcess.getResponses();
            for (const statusCode in responses) {
                addDiagram(responses[statusCode], `Response [${statusCode}]`);
            }
        }
        if (diagrams.length > 0) {
            selectedDiagram = diagrams[0];
        }
    }
</script>

<div class="box">
    <div class="columns">
        <div class="column is-one-third">
            <aside class="menu">
                <ul class="menu-list">
                    {#each diagrams as diagram}
                        <li>
                            <a
                                href={'#' + diagram.name}
                                on:click={() => {
                                    selectedDiagram = diagram;
                                }}>{diagram.name}</a>
                        </li>
                    {/each}
                </ul>
            </aside>
        </div>
        <div class="column">
            {#if diagrams.length > 0}
                {#if selectedDiagram}
                    <div class="block">
                        <div class="field">
                            <div class="control">
                                <textarea class="textarea" readonly={true}>{selectedDiagram.uml}</textarea>
                            </div>
                        </div>
                    </div>
                    <div class="block">
                        <a href={selectedDiagram.image} target="_blank" rel="noreferrer">
                            <figure class="image">
                                <img class="diagram-image" src={selectedDiagram.image} alt={selectedDiagram.name} />
                            </figure>
                        </a>
                    </div>
                {:else}
                    <p>No diagram selected</p>
                {/if}
            {:else}
                <p>The selected service has no request and no responses models</p>
            {/if}
        </div>
    </div>
</div>

<style>
    .diagram-image {
        width: auto;
        max-width: 100%;
    }
</style>
