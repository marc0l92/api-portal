<script lang="ts">
  import Navbar from '../../components/navbar.svelte';
  import InputApi from '../../components/inputApi.svelte';
  import SelectServices from '../../components/selectServices.svelte';
  import DownloadBar from './downloadBar.svelte';
  import Errors from 'components/errors.svelte';
  import { apiFactory } from '../../common/api/apiFactory';
  import type { Api, ApiService } from '../../common/api/api';
  import Footer from 'components/footer.svelte';
  import { globalOptions } from '../../common/globalOptions';

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
</script>

<Navbar activePage="apiToSpreadsheet" />
<div class="container {$globalOptions.fluidLayout ? 'is-fluid' : ''}">
  <section class="hero is-small">
    <div class="hero-body">
      <h1 class="title">Api to Spreadsheet</h1>
      <p class="subtitle">Convert OpenAPI/Swagger file to flat Spreadsheets</p>
    </div>
  </section>
  <InputApi on:apiChange={onApiChange} />
  {#if services.length > 0}
    <div class="box">
      <SelectServices {services} servicesSelectSize={8} bind:selectedService />
    </div>
  {/if}
  <Errors messages={errors} />
  {#if selectedService}
    <DownloadBar {selectedService} {services} apiName={api.getName()} />
  {/if}
</div>
<Footer />

<style>
</style>
