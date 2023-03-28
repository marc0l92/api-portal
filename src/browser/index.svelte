<script lang="ts">
  import Errors from 'components/errors.svelte';
  import Footer from 'components/footer.svelte';
  import { onDestroy, onMount } from 'svelte';
  import Navbar from '../components/navbar.svelte';
  import type { ApiIndex } from '../common/api/apiIndex';
  import ApiSummary from './apiSummary.svelte';
  import { browserOptions, browserOptionsDestroy, browserOptionsMount } from './browserOptions';
  import SearchBar from './searchBar.svelte';
  import { filterApiIndex } from 'common/search';
  import { globalOptions } from 'common/globalOptions';
  import { getApiIndexPath } from 'common/globals';

  let apiIndex: ApiIndex = null;
  let errors: string[] = [];
  let favoriteCount = 0;
  let searchText = '';
  $: {
    favoriteCount = Object.values($browserOptions.favorites).filter((pi) => Object.values(pi).filter((fi) => fi).length).length;
  }

  function cleanFavourite() {
    for (const packageName in $browserOptions.favorites) {
      for (const apiName in $browserOptions.favorites[packageName]) {
        if (!$browserOptions.favorites[packageName][apiName] || !apiIndex[packageName] || !apiIndex[packageName][apiName]) {
          delete $browserOptions.favorites[packageName][apiName];
        }
      }
      if (Object.keys($browserOptions.favorites[packageName]).length === 0) {
        delete $browserOptions.favorites[packageName];
      }
    }
    $browserOptions.favorites = $browserOptions.favorites;
  }

  function onSearchTextChange(event: CustomEvent<{ searchText: string }>) {
    searchText = event.detail.searchText;
  }

  onMount(async () => {
    browserOptionsMount();
    const response = await fetch(getApiIndexPath());
    if (response.ok) {
      apiIndex = (await response.json()) as ApiIndex;
      cleanFavourite();
    } else {
      errors = [...errors, 'Error while fetching api index: ' + response.status];
    }
  });
  onDestroy(() => {
    browserOptionsDestroy();
  });
</script>

<Navbar activePage="browser" />
<div class="container {$globalOptions.fluidLayout ? 'is-fluid' : ''}">
  <section class="hero is-small">
    <div class="hero-body">
      <h1 class="title">Api Browser</h1>
    </div>
  </section>

  <SearchBar on:searchTextChange={onSearchTextChange} />
  <Errors messages={errors} />
  {#if apiIndex}
    {#if favoriteCount > 0 && !searchText}
      <h4 class="subtitle is-4"><i class="fas fa-star" /> Favorites</h4>
      <div class="columns is-multiline">
        {#each Object.entries($browserOptions.favorites) as [packageName, packageItem]}
          {#each Object.entries(packageItem) as [favoriteName, favoriteItem]}
            {#if favoriteItem}
              <div class="column is-full-mobile is-full-tablet is-half-desktop is-one-third-widescreen">
                <ApiSummary {packageName} name={favoriteName} apiSummary={apiIndex[packageName][favoriteName]} />
              </div>
            {/if}
          {/each}
        {/each}
      </div>
    {/if}
    {#each Object.entries(filterApiIndex(apiIndex, searchText)) as [packageName, packageItem]}
      <h4 class="subtitle is-4">{packageName}</h4>
      <div class="columns is-multiline">
        {#each Object.entries(packageItem) as [apiName, apiItem]}
          <div class="column is-full-mobile is-full-tablet is-half-desktop is-one-third-widescreen">
            <ApiSummary {packageName} name={apiName} apiSummary={apiItem} />
          </div>
        {/each}
      </div>
    {/each}
  {:else}
    <div class="box">Fetching api index...</div>
  {/if}
</div>
<Footer />

<style>
</style>
