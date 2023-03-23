<script lang="ts">
  import Navbar from '../../components/navbar.svelte';
  import InputApi from '../../components/inputApi.svelte';
  import Errors from 'components/errors.svelte';
  import type { Api, ApiService } from 'common/api/api';
  import { apiFactory } from 'common/api/apiFactory';
  import Footer from 'components/footer.svelte';

  let api: Api = null;
  let services: ApiService[] = [];
  let selectedService: ApiService = null;
  let errors: string[] = [];

  async function onApiChange(event: CustomEvent<{ apiObject: any }>) {
    try {
      api = null;
      services = [];
      selectedService = null;
      errors = [];
      const apiObject = event.detail.apiObject;
      if (apiObject) {
        api = apiFactory(apiObject);
        api.setModelsTitle();
        await api.resolveReferences();
        services = api.getServices();
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
    <div class="box" />
  {/if}
  <Errors messages={errors} />
</div>
<Footer />

<style>
  .hero.is-small .hero-body {
    padding-left: 0;
    padding-right: 0;
  }
</style>
