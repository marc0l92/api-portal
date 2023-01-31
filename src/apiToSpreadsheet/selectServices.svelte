<script lang="ts">
    import { createEventDispatcher, onMount } from 'svelte';
    import type { ApiService } from './utils/interfaces';

    export let services: ApiService[] = [];
    let selectedServiceIndex = 0;

    const dispatch = createEventDispatcher();
    function onServiceSelect() {
        dispatch('serviceSelect', { selectedServiceIndex });
    }
    // On services update
    $:if(services.length>0){
        onServiceSelect();
    }
    onMount(() => {
        onServiceSelect();
    });
</script>

<div class="box">
    <p class="subtitle"><strong>Services</strong></p>
    <div class="field">
        <div class="control">
            <div class="select is-expanded is-multiple">
                <select size="8" on:change={onServiceSelect} bind:value={selectedServiceIndex}>
                    {#each services as service, index}
                        <option value={index}>{service['x-name']}</option>
                    {/each}
                </select>
            </div>
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
