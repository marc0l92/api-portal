<script lang="ts">
  import Navbar from '../components/navbar.svelte';
  import InputOpenApi from './inputOpenApi.svelte';
  import SelectServices from './selectServices.svelte';
  import GenerateSpreadsheet from './generateSpreadsheet.svelte';
  import { resolveReferences } from './utils/refParser';
  import { ApiVersion, type Api, type ApiService } from './utils/interfaces';
  import { extractServices, getApiDocumentationVersion } from './utils/swaggerParsing';

  let api: Api = null;
  let version = ApiVersion.Invalid;
  let services: ApiService[] = [];
  let selectedService: ApiService = null;

  async function onApiChange(event: CustomEvent<{ apiObject: any }>) {
    const apiObject = event.detail.apiObject;
    if (apiObject) {
      api = await resolveReferences(apiObject);
      version = getApiDocumentationVersion(api);
      services = extractServices(api);
    } else {
      api = null;
      version = ApiVersion.Invalid;
      services = [];
    }
    selectedService = null;
  }

  function onServiceSelect(event: CustomEvent<{ selectedServiceIndex: number }>) {
    selectedService = services[event.detail.selectedServiceIndex];
  }
  function onGenerateSpreadsheet(event: CustomEvent<{}>) {}
</script>

<Navbar activePage="apiToSpreadsheet" />
<div class="container">
  <section class="hero is-small">
    <div class="hero-body">
      <h1 class="title">Api to Spreadsheet</h1>
      <p class="subtitle">Convert OpenAPI/Swagger file to flat Spreadsheets</p>
    </div>
  </section>
  <InputOpenApi on:apiChange={onApiChange} />
  {#if services.length > 0}
    <SelectServices {services} on:serviceSelect={onServiceSelect} />
  {/if}
  {#if selectedService}
    <GenerateSpreadsheet service={selectedService} {version} on:generateSpreadsheet={onGenerateSpreadsheet} />
  {/if}
</div>

<style>
  .hero.is-small .hero-body {
    padding-left: 0;
    padding-right: 0;
  }
</style>
