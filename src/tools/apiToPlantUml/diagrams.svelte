<script lang="ts">
    import type { ApiService } from 'common/api';
    import { diagramBuilderOptions, type DiagramBuilderOptions } from './diagramBuilderOptions';
    import { parseServiceDiagrams, type DiagramData } from './serivceDiagrams';

    export let service: ApiService = null;
    let diagrams: DiagramData[] = [];
    let selectedDiagram: DiagramData = null;

    $: parseService(service, $diagramBuilderOptions);

    function parseService(serviceToProcess: ApiService, options: DiagramBuilderOptions) {
        if (serviceToProcess && options) {
            diagrams = parseServiceDiagrams(serviceToProcess, options);
            if (diagrams.length > 0) {
                selectedDiagram = diagrams[0];
            }
        }
    }
</script>

<div class="box">
    <p class="subtitle"><strong>Diagrams</strong></p>
    {#if diagrams.length > 0}
        <div class="columns">
            <div class="column is-one-third">
                <aside class="menu">
                    <ul class="menu-list">
                        {#each diagrams as diagram}
                            <li>
                                <a
                                    class="break-text {selectedDiagram === diagram ? 'is-active' : ''}"
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
                    <p class="notification is-warning">No diagram selected</p>
                {/if}
            </div>
        </div>
    {:else}
        <p class="notification is-warning">The selected service has no request and no responses models</p>
    {/if}
</div>

<style>
    .diagram-image {
        width: auto;
        max-width: 100%;
    }
    .break-text {
        word-break: break-all;
    }
</style>
