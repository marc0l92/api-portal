<script lang="ts">
  import yaml from 'js-yaml';
  import type { Api, ApiReleaseNotes } from '../common/api/api';
  import Footer from '../components/footer.svelte';
  import Navbar from '../components/navbar.svelte';
  import { apiFactory } from '../common/api/apiFactory';
  import Tabs from './tabs.svelte';
  import ApiTab from './tabs/apiTab.svelte';
  import RawTab from './tabs/rawTab.svelte';
  import ReleaseNotesTab from './tabs/releaseNotesTab.svelte';
  import DiagramsTab from './tabs/diagramsTab.svelte';
  import ValidationTab from './tabs/validationTab.svelte';
  import TablesTab from './tabs/tablesTab.svelte';
  import { globalOptions } from '../common/globalOptions';
  import { onMount } from 'svelte';
  import Errors from '../components/errors.svelte';
  import { getOptions, storeOptions } from '../common/localStorage';
  import LazyLoad from '../components/lazyLoad.svelte';
  import { getBasePath } from '../common/globals';
  import type { ApiValidation } from './tabs/validation';
  import Metadata from './metadata.svelte';
  import { getApiStatusName } from '../common/api/apiStatus';
  import InputApi from '../components/inputApi.svelte';
  import { decompressFromArray } from '../common/compress';
  import { ApiIndex, ApiIndexItem } from '../common/api/apiIndex';

  const LOCAL_STORAGE_SELECTED_TAB_KEY = 'viewer.selectedTab';
  const basePath = getBasePath();

  let apiIndex: ApiIndex = new ApiIndex();
  let apiIndexItem: ApiIndexItem = null;
  let selectedTab: string = 'api';
  let apiHash: string = null;
  let apiDoc: any = null;
  let api: Api = null;
  let validationData: ApiValidation[] = null;
  let releaseNotes: ApiReleaseNotes = null;
  let errors: string[] = [];
  let isVersionDropdownExpanded = false;
  let isFileNameDropdownExpanded = false;
  let showApiInput = false;

  $: storeOptions(LOCAL_STORAGE_SELECTED_TAB_KEY, selectedTab);

  async function fetchApi(apiDir: string = 'apis') {
    try {
      const response = await fetch(`./${apiDir}/${apiHash}.api.json.gzip`);
      if (response.ok) {
        apiDoc = yaml.load(decompressFromArray(await response.arrayBuffer()));
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

  async function fetchValidation(apiDir: string = 'apis') {
    try {
      const response = await fetch(`./${apiDir}/${apiHash}.validation.json.gzip`);
      if (response.ok) {
        validationData = yaml.load(decompressFromArray(await response.arrayBuffer())) as ApiValidation[];
      } else if (selectedTab === 'validation') {
        selectedTab = 'api';
      }
    } catch (e) {
      console.error(e);
      api = null;
      errors = [...errors, 'Error while fetching the api validation'];
    }
  }

  async function fetchApiIndex() {
    try {
      apiIndex = await ApiIndex.fetch();
      apiIndexItem = apiIndex.getApi(apiHash);
    } catch (e) {
      errors = [...errors, e];
    }
  }

  async function onInputApiChange(event: CustomEvent<{ apiObject: any }>) {
    try {
      api = null;
      apiIndexItem = null;
      errors = [];
      apiDoc = event.detail.apiObject;
      if (apiDoc) {
        api = apiFactory(apiDoc);
        api.setModelsTitle();
        releaseNotes = api.getReleaseNotes();
        apiIndexItem = ApiIndexItem.fromApi(api);
      }
    } catch (e) {
      errors = [...errors, 'Error: ' + e.message];
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

  onMount(async () => {
    selectedTab = getOptions(LOCAL_STORAGE_SELECTED_TAB_KEY) || 'api';
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('api')) {
      apiHash = urlParams.get('api');
      fetchApi();
      fetchValidation();
      fetchApiIndex();
    } else if (urlParams.has('tmpApi')) {
      apiHash = urlParams.get('tmpApi');
      await fetchApi('tmp-apis');
      apiIndexItem = ApiIndexItem.fromApi(api);
      fetchValidation('tmp-apis');
    } else if (urlParams.has('packageName') && urlParams.has('apiName')) {
      try {
        apiIndex = await ApiIndex.fetch();
        const packageName = urlParams.get('packageName');
        const apiName = urlParams.get('apiName');
        const versionName = urlParams.has('versionName') ? urlParams.get('versionName') : null;
        apiIndexItem = apiIndex.getApiByName(packageName, apiName, versionName);
        if (!apiIndexItem) {
          throw new Error(`Api not found: packageName=${packageName} apiName=${apiName}`);
        }
        apiHash = apiIndexItem.hash;
        fetchApi();
        fetchValidation();
      } catch (e) {
        errors = [...errors, e];
      }
    } else {
      showApiInput = true;
      if (selectedTab === 'validation') {
        selectedTab = 'api';
      }
    }
    document.addEventListener('click', () => {
      isVersionDropdownExpanded = false;
      isFileNameDropdownExpanded = false;
    });
  });
</script>

<Navbar activePage="viewer" />
<div class="container {$globalOptions.fluidLayout ? 'is-fluid' : ''}">
  {#if showApiInput}
    <section class="hero is-small">
      <div class="hero-body">
        <h1 class="title">Api Viewer</h1>
        <p class="subtitle">Test the rendering of api inside this server</p>
      </div>
    </section>
    <InputApi on:apiChange={onInputApiChange} />
  {/if}
  {#if apiIndexItem}
    <section class="hero is-small">
      <div class="hero-body">
        <div class="columns">
          <div class="column">
            <h1 class="title">{apiIndexItem.apiName}</h1>
            <h3 class="subtitle">{apiIndexItem.packageName}</h3>
          </div>
          <div class="column is-narrow">
            <div class="dropdown is-right {isVersionDropdownExpanded ? 'is-active' : ''}">
              <div class="dropdown-trigger">
                <button class="button" on:click|stopPropagation={() => (isVersionDropdownExpanded = !isVersionDropdownExpanded)}>
                  <span>{apiIndexItem.versionName}</span>
                  <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true" />
                  </span>
                </button>
              </div>
              <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                  {#each Object.entries(apiIndexItem.otherVersions) as [versionName, versionApiHash]}
                    <a href="{basePath}/viewer.html?packageName={apiIndexItem.packageName}&apiName={apiIndexItem.apiName}&versionName={versionName}" class="dropdown-item">
                      {#if versionName === apiIndexItem.versionName}
                        <strong>{versionName}</strong>
                      {:else}
                        {versionName}
                      {/if}
                    </a>
                  {/each}
                </div>
              </div>
            </div>
            {#if Object.keys(apiIndexItem.otherFiles).length > 1}
              <div class="dropdown is-right {isFileNameDropdownExpanded ? 'is-active' : ''}">
                <div class="dropdown-trigger">
                  <button class="button" on:click|stopPropagation={() => (isFileNameDropdownExpanded = !isFileNameDropdownExpanded)}>
                    <span class="short-text">{apiIndexItem.fileName}</span>
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
                          {#each Object.entries(apiIndexItem.otherFiles) as [fileName, fileNameApiHash]}
                            {#if apiIndex.getApi(fileNameApiHash).status === status}
                              <li>
                                <a href="{basePath}/viewer.html?api={fileNameApiHash}" class="dropdown-item status-{apiIndex.getApi(fileNameApiHash).status}">
                                  {#if fileName === apiIndexItem.fileName}
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
            <!-- <a class="button" href="{basePath}/compare.html?leftApi={apiHash}&rightApi={apiHash}" title="Compare">
              <i class="fa-solid fa-code-compare" />
            </a> -->
          </div>
        </div>
        <Metadata metadata={apiIndexItem.metadata} updateTime={apiIndexItem.updateTime} />
      </div>
    </section>
  {:else if !showApiInput}
    <section class="hero is-small">
      <div class="hero-body">
        <h1 class="title">Loading...</h1>
      </div>
    </section>
  {/if}
  <Errors {errors} />
  {#if api}
    <Tabs bind:selectedTab hasReleaseNotes={!!releaseNotes} {validationData} />
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
        <RawTab {apiDoc} />
      </LazyLoad>
    </div>
  {:else if errors.length === 0 && !showApiInput}
    <progress class="progress is-info" max="100">30%</progress>
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
