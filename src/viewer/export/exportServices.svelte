<script lang="ts">
    import { exportOptions } from './exportOptions';
    import type { ApiIndexService } from 'common/api/apiIndex';

    export let apiHash: string;
    export let servicesList: ApiIndexService[];

    function toggle(serviceItem: ApiIndexService) {
        if (!$exportOptions.apisOptions[apiHash]) {
            $exportOptions.apisOptions[apiHash] = { tags: [], servicesToExclude: [] };
        }
        const serviceIndex = $exportOptions.apisOptions[apiHash].servicesToExclude.findIndex((s) => s.method === serviceItem.method && s.path === serviceItem.path);
        if (serviceIndex === -1) {
            $exportOptions.apisOptions[apiHash].servicesToExclude = [...$exportOptions.apisOptions[apiHash].servicesToExclude, serviceItem];
        } else {
            $exportOptions.apisOptions[apiHash].servicesToExclude = [
                ...$exportOptions.apisOptions[apiHash].servicesToExclude.slice(0, serviceIndex),
                ...$exportOptions.apisOptions[apiHash].servicesToExclude.slice(serviceIndex + 1),
            ];
        }
    }
</script>

<section>
    <div class="buttons">
        {#each servicesList as serviceItem}
            <button
                class="button is-fullwidth {$exportOptions.apisOptions[apiHash] &&
                $exportOptions.apisOptions[apiHash].servicesToExclude.find((s) => s.method === serviceItem.method && s.path === serviceItem.path)
                    ? 'is-outlined'
                    : 'is-info'}"
                on:click={() => toggle(serviceItem)}
            >
                {serviceItem.method.toUpperCase()}
                {serviceItem.path}
            </button>
        {/each}
    </div>
</section>

<style>
</style>
