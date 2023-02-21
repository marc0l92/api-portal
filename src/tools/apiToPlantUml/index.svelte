<script lang="ts">
  import Navbar from '../../components/navbar.svelte';
  import InputApi from '../../components/inputApi.svelte';
  import Errors from 'components/errors.svelte';
  import type { Api, ApiService } from 'common/api';
  import { apiFactory } from 'common/apiFactory';
  import SelectServices from 'components/selectServices.svelte';
  import Footer from 'components/footer.svelte';
  import Diagrams from './diagrams.svelte';
  import DiagramsOption from './diagramsOption.svelte';
  import { onDestroy, onMount } from 'svelte';
  import { diagramBuilderOptionsDestroy, diagramBuilderOptionsMount } from './diagramBuilderOptions';
  import DownloadDiagrams from './downloadDiagrams.svelte';

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

  function onServiceSelect(event: CustomEvent<{ selectedServiceIndex: number }>) {
    selectedService = services[event.detail.selectedServiceIndex];
  }

  onMount(() => {
    diagramBuilderOptionsMount();
  });
  onDestroy(() => {
    diagramBuilderOptionsDestroy();
  });
</script>

<Navbar activePage="apiToPlantUml" />
<div class="container">
  <section class="hero is-small">
    <div class="hero-body">
      <h1 class="title">Api to PlantUML</h1>
      <p class="subtitle">Generate PlantUML diagram of REST API</p>
    </div>
  </section>
  <InputApi on:apiChange={onApiChange} />
  {#if services.length > 0}
    <div class="box">
      <SelectServices {services} servicesSelectSize={1} on:serviceSelect={onServiceSelect} />
    </div>
  {/if}
  <Errors messages={errors} />
  {#if selectedService}
    <Diagrams service={selectedService} />
    <div class="box">
      <details>
        <summary>Diagrams generation options</summary>
        <DiagramsOption />
      </details>
    </div>
    <DownloadDiagrams apiName={api.getName()} {selectedService} {services} />
  {/if}
</div>
<Footer />

<style>
  .hero.is-small .hero-body {
    padding-left: 0;
    padding-right: 0;
  }
</style>
