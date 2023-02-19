<script lang="ts">
  import { getBasePath } from 'common/globals';

  export let activePage = 'restApiToText';
  const basePath = getBasePath();
  let showMenu = false;
</script>

<nav class="navbar">
  <div class="navbar-brand">
    <a class="navbar-item" href={basePath}><strong>API Server</strong></a>

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
      <a class="navbar-item {activePage === 'home' ? 'is-active' : ''}" href={basePath + '/index.html'}>Home</a>
      <a class="navbar-item {activePage === 'browser' ? 'is-active' : ''}" href={basePath + '/browser.html'}>Browser</a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" href={'#tools'}>Tools</a>
        <div class="navbar-dropdown">
          <a class="navbar-item {activePage === 'restApiToText' ? 'is-active' : ''}" href={basePath + '/tools/restApiToText.html'}>REST Api to Text</a>
          <a class="navbar-item {activePage === 'apiToSpreadsheet' ? 'is-active' : ''}" href={basePath + '/tools/apiToSpreadsheet.html'}>API to Spreadsheet</a>
          <a class="navbar-item {activePage === 'apiToPlantUml' ? 'is-active' : ''}" href={basePath + '/tools/apiToPlantUml.html'}>API to PlantUml</a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary" href="https://github.com/marc0l92/api-tools/issues/new/choose"><strong>Feedbacks</strong></a>
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
  .button.is-primary {
    background-color: var(--color-primary);
  }
  .button.is-primary:hover {
    background-color: var(--color-primary);
    filter: brightness(85%);
  }
</style>
