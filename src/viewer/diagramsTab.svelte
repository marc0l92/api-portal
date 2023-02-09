<script lang="ts">
    import type { Api, ApiService } from 'common/api';
    import SelectServices from 'components/selectServices.svelte';

    export let api: Api = null;
    let services: ApiService[] = [];

    function onServiceSelect(event: CustomEvent<{ selectedServiceIndex: number }>) {
        const selectedService = services[event.detail.selectedServiceIndex];
    }

    $: if (api) {
        services = api.getServices();
    }
</script>

<SelectServices servicesSelectSize={1} {services} on:serviceSelect={onServiceSelect} />
<div />

<style>
</style>
