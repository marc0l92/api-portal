<script lang="ts">
    import type { ApiService } from '../common/api/api';

    export let services: ApiService[] = [];
    export let servicesSelectSize: number = 8;
    export let selectedService: ApiService = null;
    let selectedServiceIndex = 0;

    $: selectedService = services[selectedServiceIndex];
</script>

<p class="subtitle"><strong>Services</strong></p>
<div class="field">
    <div class="control">
        <div class="select is-expanded {servicesSelectSize > 1 ? 'is-multiple' : ''}">
            <select size={servicesSelectSize} bind:value={selectedServiceIndex}>
                {#each services as service, index}
                    <option value={index}>{service.getName()}</option>
                {/each}
            </select>
        </div>
    </div>
</div>

<style>
    .select.is-expanded {
        width: 100%;
    }
    .select.is-expanded > select {
        width: 100%;
    }
    .select.is-multiple > select {
        height: auto;
        padding: 0;
    }
    .select.is-multiple option {
        padding: 0.3em 1em;
    }
</style>
