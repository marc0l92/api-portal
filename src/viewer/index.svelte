<script lang="ts">
  import yaml from 'js-yaml';
  import type { Api, ApiReleaseNotes } from 'common/api';
  import Footer from 'components/footer.svelte';
  import Navbar from '../components/navbar.svelte';
  import { apiFactory } from 'common/apiFactory';
  import Tabs from './tabs.svelte';
  import ApiTab from './apiTab.svelte';
  import RawTab from './rawTab.svelte';
  import ReleaseNotesTab from './releaseNotesTab.svelte';
  import DiagramsTab from './diagramsTab.svelte';
  import ValidationTab from './validationTab.svelte';
  import TablesTab from './tablesTab.svelte';
  import { viewerOptions, viewerOptionsDestroy, viewerOptionsMount } from './viewerOptions';
  import { onDestroy, onMount } from 'svelte';
  import Errors from 'components/errors.svelte';
  import { getOptions, storeOptions } from 'common/localStorage';

  const LOCAL_STORAGE_SELECTED_TAB_KEY = 'viewer.selectedTab';

  let selectedTab: string = 'api';
  let apiHash: string = null;
  let apiDoc: any = null;
  let api: Api = null;
  let releaseNotes: ApiReleaseNotes = null;
  let errors: string[] = [];

  function onTabChange(event: CustomEvent<{ selectedTab: string }>) {
    selectedTab = event.detail.selectedTab;
    storeOptions(LOCAL_STORAGE_SELECTED_TAB_KEY, selectedTab);
  }

  onMount(async () => {
    viewerOptionsMount();
    selectedTab = getOptions(LOCAL_STORAGE_SELECTED_TAB_KEY) || 'api';
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('api')) {
      apiHash = urlParams.get('api');
      try {
        const apiResponse = await fetch(`./apis/${apiHash}.api.json`);
        if (apiResponse.ok) {
          apiDoc = yaml.load(await apiResponse.text());
          api = apiFactory(apiDoc);
          await api.resolveReferences();
          releaseNotes = api.getReleaseNotes();
        } else {
          errors = [...errors, 'Error: ' + apiResponse.status];
        }
      } catch (e) {
        api = null;
        errors = [...errors, 'Error while fetching the api'];
      }
    } else {
      errors = [...errors, 'No api selected'];
    }
  });
  onDestroy(() => {
    viewerOptionsDestroy();
  });
</script>

<Navbar activePage="viewer" />
<div class="container {$viewerOptions.fluidLayout ? 'is-fluid' : ''}">
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
    <Tabs on:tabChange={onTabChange} {selectedTab} hasReleaseNotes={!!releaseNotes} />
    <div class="box flat-top">
      {#if selectedTab === 'release-notes'}
        <ReleaseNotesTab {releaseNotes} />
      {:else if selectedTab === 'api'}
        <ApiTab {apiDoc} />
      {:else if selectedTab === 'diagrams'}
        <DiagramsTab {api} />
      {:else if selectedTab === 'tables'}
        <TablesTab {api} />
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
    <Errors messages={errors} />
  {/if}
</div>
<Footer />

<style>
</style>
