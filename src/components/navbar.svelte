<script lang="ts">
  import { getAppName, getBasePath } from '../common/globals';
  import GlobalOptions from './globalOptions.svelte';

  export let activePage = 'restApiToText';
  const basePath = getBasePath();
  let showMenu = false;
</script>

<nav class="navbar">
  <div class="navbar-brand">
    <a class="navbar-item" href={basePath}><strong>{getAppName()}</strong></a>

    <button
      class="navbar-burger {showMenu ? 'is-active' : ''}"
      data-target="my-navbar"
      on:click={() => {
        showMenu = !showMenu;
      }}>
      <span />
      <span />
      <span />
    </button>
  </div>

  <div id="my-navbar" class="navbar-menu {showMenu ? 'is-active' : ''}">
    <div class="navbar-start">
      <a class="navbar-item {activePage === 'home' ? 'is-active' : ''}" href="{basePath}/index.html">Home</a>
      <a class="navbar-item {activePage === 'browser' ? 'is-active' : ''}" href="{basePath}/browser.html">Browser</a>
      <a class="navbar-item {activePage === 'viewer' ? 'is-active' : ''}" href="{basePath}/viewer.html">Viewer</a>
      <!-- <a class="navbar-item {activePage === 'compare' ? 'is-active' : ''}" href="{basePath}/compare.html">Compare</a> -->

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" href={'#tools'}>Tools</a>
        <div class="navbar-dropdown">
          <a class="navbar-item {activePage === 'restApiToText' ? 'is-active' : ''}" href="{basePath}/tools/restApiToText.html">REST Api to Text</a>
          <a class="navbar-item {activePage === 'apiToSpreadsheet' ? 'is-active' : ''}" href="{basePath}/tools/apiToSpreadsheet.html">API to Spreadsheet</a>
          <a class="navbar-item {activePage === 'apiToPlantUml' ? 'is-active' : ''}" href="{basePath}/tools/apiToPlantUml.html">API to PlantUml</a>
          <a class="navbar-item {activePage === 'apiServicesExtraction' ? 'is-active' : ''}" href="{basePath}/tools/apiServicesExtraction.html">API Services Extraction</a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <GlobalOptions />
        </div>
      </div>
    </div>
  </div>
</nav>

<style>
  .navbar {
    border-bottom: 1px solid var(--color-border);
    position: sticky;
    top: 0;
  }
  .navbar .navbar-item.is-active {
    color: var(--color-primary);
  }
</style>
