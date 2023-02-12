<script lang="ts">
    import type { TablesMap } from 'apiToSpreadsheet/interfaces';
    import { generateServiceWorkbook } from 'apiToSpreadsheet/swaggerParsing';
    import { modelPropertiesToTables } from 'apiToSpreadsheet/xlsxUtils';
    import type { Api, ApiService } from 'common/api';
    import SelectServices from 'components/selectServices.svelte';

    export let api: Api = null;
    let services: ApiService[] = [];
    let workbook: TablesMap = null;
    let selectedSheet: string = null;

    function onServiceSelect(event: CustomEvent<{ selectedServiceIndex: number }>) {
        const selectedService = services[event.detail.selectedServiceIndex];
        if (selectedService) {
            const itemMap = generateServiceWorkbook(selectedService);
            workbook = modelPropertiesToTables(itemMap);
            selectedSheet = Object.keys(workbook)[0];
        } else {
            workbook = null;
            selectedSheet = null;
        }
    }

    $: if (api) {
        services = api.getServices();
    }
</script>

<SelectServices servicesSelectSize={1} {services} on:serviceSelect={onServiceSelect} />
{#if workbook && selectedSheet && workbook[selectedSheet]}
    <div class="tabs is-toggle">
        <ul>
            {#each Object.keys(workbook) as sheet}
                <li class={selectedSheet === sheet ? 'is-active' : ''}>
                    <a href={'#'} on:click={() => (selectedSheet = sheet)}>
                        <span>{sheet}</span>
                    </a>
                </li>
            {/each}
        </ul>
    </div>
    <div class="table-container">
        <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            {#each workbook[selectedSheet] as fields, index}
                {#if index === 0}
                    <thead>
                        <tr>
                            {#each fields as field}
                                <th>{field}</th>
                            {/each}
                        </tr>
                    </thead>
                {:else}
                    <tbody>
                        <tr>
                            {#each fields as field}
                                <td>{field}</td>
                            {/each}
                        </tr>
                    </tbody>
                {/if}
            {/each}
        </table>
    </div>
{/if}

<style>
    .table-container {
        overflow-x: auto;
    }
</style>
