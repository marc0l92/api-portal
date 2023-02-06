<script lang="ts">
  import yaml from 'js-yaml';
  import type { Api } from 'common/api';
  import Footer from 'components/footer.svelte';
  import { onMount } from 'svelte';
  import Navbar from '../components/navbar.svelte';
  import { apiFactory } from 'common/apiFactory';
  import Tabs from './tabs.svelte';
  import ApiTab from './apiTab.svelte';

  let apiDoc: any = {};
  let api: Api = null;
  let selectedTab: string = 'api';

  function onTabChange(event: CustomEvent<{ selectedTab: string }>) {
    selectedTab = event.detail.selectedTab;
  }

  onMount(async () => {
    const apiLink = 'https://petstore3.swagger.io/api/v3/openapi.json';
    const response = await fetch(apiLink);
    if (response.ok) {
      const apiObject = yaml.load(await response.text());
      api = apiFactory(apiObject);
      await api.resolveReferences()
    }
  });
</script>

<Navbar activePage="viewer" />
<div class="container">
  {#if api}
    <section class="hero is-small">
      <div class="hero-body">
        <h1 class="title">{api.getName()}</h1>
        <div class="control">
          <div class="tags has-addons">
            <span class="tag is-dark">Version</span>
            <span class="tag is-success">{api.getVersion()}</span>
          </div>
        </div>
      </div>
    </section>
    <Tabs on:tabChange={onTabChange} />
    <div class="box flat-top">
      {#if selectedTab === 'release-notes'}
        Release notes
      {:else if selectedTab === 'api'}
        <ApiTab {apiDoc} />
      {:else if selectedTab === 'diagrams'}
        diagrams
      {:else if selectedTab === 'validation'}
        validation
      {:else if selectedTab === 'raw'}
        raw
      {/if}
    </div>
  {:else}
    <section class="hero is-small">
      <div class="hero-body">
        <h1 class="title">Loading...</h1>
      </div>
    </section>
  {/if}
</div>
<Footer />

<style>
</style>
