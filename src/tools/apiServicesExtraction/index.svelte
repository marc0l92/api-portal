<script lang="ts">
  import Navbar from '../../components/navbar.svelte';
  import InputApi from '../../components/inputApi.svelte';
  import Errors from 'components/errors.svelte';
  import type { Api } from '../../common/api/api';
  import { apiFactory } from '../../common/api/apiFactory';
  import Footer from 'components/footer.svelte';
  import DownloadBar from './downloadBar.svelte';
  import type { ApiServiceFilterItem } from './apiFilter';
  import { globalOptions } from '../../common/globalOptions';

  let api: Api = null;
  let servicesFilter: ApiServiceFilterItem[] = [];
  let errors: string[] = [];

  async function onApiChange(event: CustomEvent<{ apiObject: any }>) {
    try {
      api = null;
      servicesFilter = [];
      errors = [];
      const apiObject = event.detail.apiObject;
      if (apiObject) {
        api = apiFactory(apiObject);
        servicesFilter = api.getServices().map((s) => ({ data: s, keep: true }));
        if (servicesFilter.length === 0) {
          errors = [...errors, 'Warning: No services found'];
        }
      }
    } catch (e) {
      errors = [...errors, 'Error: ' + e.message];
    }
  }
</script>

<Navbar activePage="apiServicesExtraction" />
<div class="container {$globalOptions.fluidLayout ? 'is-fluid' : ''}">
  <section class="hero is-small">
    <div class="hero-body">
      <h1 class="title">Api Services Extraction</h1>
      <p class="subtitle">Remove some of the services from an api document</p>
    </div>
  </section>
  <InputApi on:apiChange={onApiChange} />
  {#if servicesFilter.length > 0}
    <div class="box">
      <p class="subtitle"><strong>Services to keep</strong></p>
      <ul class="menu-list">
        {#each servicesFilter as service}
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
  {#if api && servicesFilter.length > 0}
    <DownloadBar {api} {servicesFilter} />
  {/if}
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
