<script lang="ts">
  import yaml from 'js-yaml';
  import type { Api, ApiReleaseNotes, ApiValidation } from 'common/api';
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
  import LazyLoad from 'components/lazyLoad.svelte';

  const LOCAL_STORAGE_SELECTED_TAB_KEY = 'viewer.selectedTab';

  let selectedTab: string = 'api';
  let apiHash: string = null;
  let apiText: string = null;
  let apiDoc: any = null;
  let api: Api = null;
  let validationData: ApiValidation[] = null;
  let releaseNotes: ApiReleaseNotes = null;
  let errors: string[] = [];

  function onTabChange(event: CustomEvent<{ selectedTab: string }>) {
    selectedTab = event.detail.selectedTab;
    storeOptions(LOCAL_STORAGE_SELECTED_TAB_KEY, selectedTab);
  }

  async function fetchApi() {
    try {
      const response = await fetch(`./apis/${apiHash}.api.json`);
      if (response.ok) {
        apiText = await response.text();
        apiDoc = yaml.load(apiText);
        api = apiFactory(apiDoc);
        releaseNotes = api.getReleaseNotes();
      } else {
        errors = [...errors, 'Error: ' + response.status];
      }
    } catch (e) {
      console.error(e);
      api = null;
      errors = [...errors, 'Error while fetching the api'];
    }
    try {
      await api.resolveReferences();
    } catch (e) {
      console.error(e);
      errors = [...errors, 'Error while parsing api: ' + e.message];
    }
  }

  async function fetchValidation() {
    try {
      const response = await fetch(`./apis/${apiHash}.validation.json`);
      if (response.ok) {
        validationData = yaml.load(await response.text()) as ApiValidation[];
      } else {
        errors = [...errors, 'Error: ' + response.status];
      }
    } catch (e) {
      console.error(e);
      api = null;
      errors = [...errors, 'Error while fetching the api validation'];
    }
  }

  onMount(async () => {
    viewerOptionsMount();
    selectedTab = getOptions(LOCAL_STORAGE_SELECTED_TAB_KEY) || 'api';
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('api')) {
      apiHash = urlParams.get('api');
      fetchApi();
      fetchValidation();
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
  {:else}
    <section class="hero is-small">
      <div class="hero-body">
        <h1 class="title">Loading...</h1>
      </div>
    </section>
  {/if}
  <Errors messages={errors} />
  {#if api}
    <Tabs on:tabChange={onTabChange} {selectedTab} hasReleaseNotes={!!releaseNotes} />
    <div class="box flat-top">
      <LazyLoad isVisible={selectedTab === 'release-notes'}>
        <ReleaseNotesTab {releaseNotes} />
      </LazyLoad>
      <LazyLoad isVisible={selectedTab === 'api'}>
        <ApiTab {apiDoc} />
      </LazyLoad>
      <LazyLoad isVisible={selectedTab === 'diagrams'}>
        <DiagramsTab {api} />
      </LazyLoad>
      <LazyLoad isVisible={selectedTab === 'tables'}>
        <TablesTab {api} />
      </LazyLoad>
      <LazyLoad isVisible={selectedTab === 'validation'}>
        <ValidationTab {validationData} />
      </LazyLoad>
      <LazyLoad isVisible={selectedTab === 'raw'}>
        <RawTab {apiText} />
      </LazyLoad>
    </div>
  {/if}
</div>
<Footer />

<style>
</style>
