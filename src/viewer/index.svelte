<script lang="ts">
  import type { Api } from 'common/api';
  import Footer from 'components/footer.svelte';
  import Navbar from '../components/navbar.svelte';
  import { apiFactory } from 'common/apiFactory';
  import Tabs from './tabs.svelte';
  import ApiTab from './apiTab.svelte';
  import RawTab from './rawTab.svelte';
  import ReleaseNotesTab from './releaseNotesTab.svelte';
  import DiagramsTab from './diagramsTab.svelte';
  import ValidationTab from './validationTab.svelte';
  import TableTab from './tableTab.svelte';
  import InputApi from 'components/inputApi.svelte';

  let apiDoc: any = {};
  let api: Api = null;
  let selectedTab: string = 'table';

  async function onApiChange(event: CustomEvent<{ apiObject: any }>) {
    try {
      apiDoc = event.detail.apiObject;
      api = apiFactory(apiDoc);
      await api.resolveReferences();
    } catch (e) {
      api = null;
    }
  }

  function onTabChange(event: CustomEvent<{ selectedTab: string }>) {
    selectedTab = event.detail.selectedTab;
  }
</script>

<Navbar activePage="viewer" />
<div class="container">
  <InputApi on:apiChange={onApiChange} />
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
    <Tabs on:tabChange={onTabChange} {selectedTab} />
    <div class="box flat-top">
      {#if selectedTab === 'release-notes'}
        <ReleaseNotesTab />
      {:else if selectedTab === 'api'}
        <ApiTab {apiDoc} />
      {:else if selectedTab === 'diagrams'}
        <DiagramsTab {api} />
      {:else if selectedTab === 'table'}
        <TableTab {api} />
      {:else if selectedTab === 'validation'}
        <ValidationTab />
      {:else if selectedTab === 'raw'}
        <RawTab {apiDoc} />
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
