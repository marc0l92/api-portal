<script lang="ts">
    import type { TablesMap } from '../../tools/apiToSpreadsheet/interfaces';
    import { generateServiceWorkbook } from '../../tools/apiToSpreadsheet/swaggerParsing';
    import { modelPropertiesToTables } from '../../tools/apiToSpreadsheet/xlsxUtils';
    import type { Api, ApiService } from '../../common/api/api';
    import SelectServices from '../../components/selectServices.svelte';

    export let api: Api = null;
    let services: ApiService[] = [];
    let workbook: TablesMap = null;
    let selectedSheet: string = null;
    let selectedService: ApiService = null;

    $: if (selectedService) {
        const itemMap = generateServiceWorkbook(selectedService);
        workbook = modelPropertiesToTables(itemMap);
        selectedSheet = Object.keys(workbook)[0];
    } else {
        workbook = null;
        selectedSheet = null;
    }

    $: if (api) {
        services = api.getServices();
    }
</script>

<SelectServices servicesSelectSize={1} {services} bind:selectedService />
{#if workbook && selectedSheet && workbook[selectedSheet]}
    <div class="tabs is-toggle">
        <ul>
            {#each Object.keys(workbook) as sheet}
                <li class={selectedSheet === sheet ? 'is-active' : ''}>
                    <a href={''} on:click|preventDefault={() => (selectedSheet = sheet)}>
                        <span>{sheet}</span>
                    </a>
                </li>
            {/each}
        </ul>
    </div>
    <div class="table-container">
        <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            {#if workbook[selectedSheet].length > 0}
                <thead>
                    <tr>
                        {#each workbook[selectedSheet][0] as field}
                            <th>{field}</th>
                        {/each}
                    </tr>
                </thead>
            {/if}
            <tbody>
                {#each workbook[selectedSheet] as fields, index}
                    {#if index !== 0}
                        <tr>
                            {#each fields as field}
                                <td>{field}</td>
                            {/each}
                        </tr>
                    {/if}
                {/each}
            </tbody>
        </table>
    </div>
{/if}

<style>
    .table-container {
        overflow-x: auto;
    }
</style>
