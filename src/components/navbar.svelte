<script lang="ts">
  export let activePage = 'restApiToText';
</script>

<nav class="navbar">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://marc0l92.github.io/api-tools/"><strong>API Tools</strong></a>

    <button class="navbar-burger" data-target="my-navbar">
      <span />
      <span />
      <span />
    </button>
  </div>

  <div id="my-navbar" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item {activePage === 'restApiToText' ? 'is-active' : ''}" href="/tools/restApiToText.html">REST Api to Text</a>
      <a class="navbar-item {activePage === 'apiToSpreadsheet' ? 'is-active' : ''}" href="/tools/apiToSpreadsheet.html">API to Spreadsheet</a>
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
