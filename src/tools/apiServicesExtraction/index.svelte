<script lang="ts">
  import Navbar from '../../components/navbar.svelte';
  import InputApi from '../../components/inputApi.svelte';
  import Errors from 'components/errors.svelte';
  import type { Api, ApiService } from 'common/api/api';
  import { apiFactory } from 'common/api/apiFactory';
  import Footer from 'components/footer.svelte';

  let api: Api = null;
  let services: { data: ApiService; keep: boolean }[] = [];
  let errors: string[] = [];

  async function onApiChange(event: CustomEvent<{ apiObject: any }>) {
    try {
      api = null;
      services = [];
      errors = [];
      const apiObject = event.detail.apiObject;
      if (apiObject) {
        api = apiFactory(apiObject);
        api.setModelsTitle();
        await api.resolveReferences();
        services = api.getServices().map((s) => ({ data: s, keep: true }));
        if (services.length === 0) {
          errors = [...errors, 'Warning: No services found'];
        }
      }
    } catch (e) {
      errors = [...errors, 'Error: ' + e.message];
    }
  }

  // function onServiceSelect(event: CustomEvent<{ selectedServiceIndex: number }>) {
  //   selectedService = services[event.detail.selectedServiceIndex];
  // }
</script>

<Navbar activePage="apiServicesExtraction" />
<div class="container">
  <section class="hero is-small">
    <div class="hero-body">
      <h1 class="title">Api Services Extraction</h1>
      <p class="subtitle">Remove some of the services from an OpenApi file</p>
    </div>
  </section>
  <InputApi on:apiChange={onApiChange} />
  {#if services.length > 0}
    <div class="box">
      <ul class="menu-list">
        {#each services as service}
          <li>
            <label class="checkbox">
              <input type="checkbox" bind:checked={service.keep} />
              {service.data.getName()}
            </label>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
  <Errors messages={errors} />
</div>
<Footer />

<style>
  .menu-list label:hover {
    background-color: #f5f5f5;
    color: #363636;
  }
  .menu-list label {
    border-radius: 2px;
    color: #4a4a4a;
    display: block;
    padding: 0.5em 0.75em;
  }
</style>
