<script lang="ts">
  import yaml from 'js-yaml';
  import type { Api, ApiReleaseNotes } from 'common/api/api';
  import Footer from 'components/footer.svelte';
  import Navbar from '../components/navbar.svelte';
  import { apiFactory } from 'common/api/apiFactory';
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
  import { getApiByHash as getApiSummaryFlatByHash, type ApiIndex, type ApiSummaryFlat } from 'common/api/apiIndex';
  import { getBasePath } from 'common/globals';
  import { diagramBuilderOptionsDestroy, diagramBuilderOptionsMount } from 'tools/apiToPlantUml/diagramBuilderOptions';
  import type { ApiValidation } from './validation';
  import Metadata from './metadata.svelte';
  import { getApiStatusName } from 'common/api/apiStatus';

  const LOCAL_STORAGE_SELECTED_TAB_KEY = 'viewer.selectedTab';
  const API_INDEX_PATH = './apis/apiIndex.json';
  const basePath = getBasePath();

  let apiSummary: ApiSummaryFlat = null;
  let selectedTab: string = 'api';
  let apiHash: string = null;
  let apiText: string = null;
  let apiDoc: any = null;
  let api: Api = null;
  let validationData: ApiValidation[] = null;
  let releaseNotes: ApiReleaseNotes = null;
  let errors: string[] = [];
  let isVersionDropdownExpanded = false;
  let isFileNameDropdownExpanded = false;

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
        api.setModelsTitle();
        releaseNotes = api.getReleaseNotes();
      } else {
        errors = [...errors, 'Error: ' + response.status];
      }
    } catch (e) {
      console.error(e);
      api = null;
      errors = [...errors, 'Error while fetching the api'];
    }
    if (api) {
      try {
        await api.resolveReferences();
      } catch (e) {
        console.error(e);
        errors = [...errors, 'Error while parsing api: ' + e.message];
      }
    }
  }

  async function fetchValidation() {
    try {
      const response = await fetch(`./apis/${apiHash}.validation.json`);
      if (response.ok) {
        validationData = yaml.load(await response.text()) as ApiValidation[];
      } else {
        // errors = [...errors, 'Error: ' + response.status];
      }
    } catch (e) {
      console.error(e);
      api = null;
      errors = [...errors, 'Error while fetching the api validation'];
    }
  }

  async function fetchApiSummary() {
    const response = await fetch(API_INDEX_PATH);
    if (response.ok) {
      const apiIndex = (await response.json()) as ApiIndex;
      apiSummary = getApiSummaryFlatByHash(apiHash, apiIndex);
    } else {
      errors = [...errors, 'Error while fetching api index: ' + response.status];
    }
  }

  onMount(async () => {
    viewerOptionsMount();
    diagramBuilderOptionsMount();
    selectedTab = getOptions(LOCAL_STORAGE_SELECTED_TAB_KEY) || 'api';
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('api')) {
      apiHash = urlParams.get('api');
      fetchApi();
      fetchValidation();
      fetchApiSummary();
    } else {
      errors = [...errors, 'No api selected'];
    }
    document.addEventListener('click', () => {
      isVersionDropdownExpanded = false;
      isFileNameDropdownExpanded = false;
    });
  });
  onDestroy(() => {
    viewerOptionsDestroy();
    diagramBuilderOptionsDestroy();
  });
</script>

<Navbar activePage="viewer" />
<div class="container {$viewerOptions.fluidLayout ? 'is-fluid' : ''}">
  {#if apiSummary}
    <section class="hero is-small">
      <div class="hero-body">
        <div class="columns">
          <div class="column">
            <h1 class="title">{apiSummary.apiName}</h1>
            <h3 class="subtitle">{apiSummary.packageName}</h3>
          </div>
          <div class="column is-narrow">
            <div class="dropdown is-right {isVersionDropdownExpanded ? 'is-active' : ''}">
              <div class="dropdown-trigger">
                <button class="button" on:click|stopPropagation={() => (isVersionDropdownExpanded = !isVersionDropdownExpanded)}>
                  <span>{apiSummary.versionName}</span>
                  <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true" />
                  </span>
                </button>
              </div>
              <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                  {#each Object.entries(apiSummary.apiSummary) as [versionName, versionItem]}
                    <a href="{basePath}/viewer.html?api={Object.values(versionItem)[0].hash}" class="dropdown-item">
                      {#if versionName === apiSummary.versionName}
                        <strong>{versionName}</strong>
                      {:else}
                        {versionName}
                      {/if}
                    </a>
                  {/each}
                </div>
              </div>
            </div>
            {#if Object.keys(apiSummary.apiSummary[apiSummary.versionName]).length !== 1}
              <div class="dropdown is-right {isFileNameDropdownExpanded ? 'is-active' : ''}">
                <div class="dropdown-trigger">
                  <button class="button" on:click|stopPropagation={() => (isFileNameDropdownExpanded = !isFileNameDropdownExpanded)}>
                    <span class="short-text">{apiSummary.fileName}</span>
                    <span class="icon is-small">
                      <i class="fas fa-angle-down" aria-hidden="true" />
                    </span>
                  </button>
                </div>
                <div class="dropdown-menu" id="dropdown-menu" role="menu">
                  <div class="dropdown-content">
                    {#each [0, 1, 2] as status}
                      <div class="api-status-section status-{status}">
                        <p class="menu-label dropdown-item">{getApiStatusName(status)}</p>
                        <ul class="menu-list">
                          {#each Object.entries(apiSummary.apiSummary[apiSummary.versionName]) as [fileName, apiItem]}
                            {#if apiItem.status === status}
                              <li>
                                <a href="{basePath}/viewer.html?api={apiItem.hash}" class="dropdown-item status-{apiItem.status}">
                                  {#if fileName === apiSummary.fileName}
                                    <strong>{fileName}</strong>
                                  {:else}
                                    {fileName}
                                  {/if}
                                </a>
                              </li>
                            {/if}
                          {/each}
                        </ul>
                      </div>
                      <hr class="dropdown-divider" />
                    {/each}
                  </div>
                </div>
              </div>
            {/if}
          </div>
        </div>
        <Metadata metadata={apiSummary.metadata} updateTime={apiSummary.updateTime} />
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
    <Tabs on:tabChange={onTabChange} {selectedTab} hasReleaseNotes={!!releaseNotes} {validationData} />
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
  .short-text {
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 15em;
  }
  .api-status-section {
    border-left-width: 3px;
    border-left-style: solid;
  }
  .api-status-section.status-0 {
    border-left-color: #48c78e;
  }
  .api-status-section.status-1 {
    border-left-color: #ffe08a;
  }
  .api-status-section.status-2 {
    border-left-color: #f14668;
  }
  .api-status-section:not(:has(ul > li)) + .dropdown-divider {
    display: none;
  }
  .api-status-section:not(:has(ul > li)) {
    display: none;
  }
</style>
