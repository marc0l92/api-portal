<script lang="ts">
  import Navbar from '../components/navbar.svelte';
  import InputApi from '../components/inputApi.svelte';
  import SelectServices from '../components/selectServices.svelte';
  import DownloadSpreadsheets from './downloadSpreadsheets.svelte';
  import Errors from 'components/errors.svelte';
  import { apiFactory } from 'common/apiFactory';
  import type { Api, ApiService } from 'common/api';
  import Footer from 'components/footer.svelte';

  let api: Api = null;
  let services: ApiService[] = [];
  let selectedService: ApiService = null;
  let errors: string[] = [];

  async function onApiChange(event: CustomEvent<{ apiObject: any }>) {
    try {
      errors = [];
      api = null;
      services = [];
      selectedService = null;
      const apiObject = event.detail.apiObject;
      if (apiObject) {
        api = apiFactory(apiObject);
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

  function onServiceSelect(event: CustomEvent<{ selectedServiceIndex: number }>) {
    selectedService = services[event.detail.selectedServiceIndex];
  }
</script>

<Navbar activePage="apiToSpreadsheet" />
<div class="container">
  <section class="hero is-small">
    <div class="hero-body">
      <h1 class="title">Api to Spreadsheet</h1>
      <p class="subtitle">Convert OpenAPI/Swagger file to flat Spreadsheets</p>
    </div>
  </section>
  <InputApi on:apiChange={onApiChange} />
  {#if services.length > 0}
    <div class="box">
      <SelectServices {services} servicesSelectSize={8} on:serviceSelect={onServiceSelect} />
    </div>
  {/if}
  {#if errors.length > 0}
    <Errors messages={errors} />
  {/if}
  {#if selectedService}
    <DownloadSpreadsheets {selectedService} {services} apiName={api.getName()} />
  {/if}
</div>
<Footer />

<style>
  .hero.is-small .hero-body {
    padding-left: 0;
    padding-right: 0;
  }
</style>
