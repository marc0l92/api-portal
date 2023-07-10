<script lang="ts">
  import Errors from '../components/errors.svelte';
  import Footer from '../components/footer.svelte';
  import { onDestroy, onMount } from 'svelte';
  import Navbar from '../components/navbar.svelte';
  import { browserOptions, browserOptionsDestroy, browserOptionsMount } from './browserOptions';
  import SearchBar from './searchBar.svelte';
  import { globalOptions } from '../common/globalOptions';
  import { getApiIndexPath } from '../common/globals';
  import type { ServiceTags } from '../cli/buildConfig';
  import { apiIndexItemMatchFilters, initializeSearch, searchInApiIndexFlat, type SearchResult } from '../common/search';
  import type { ApiIndex } from '../common/api/apiIndex';
  import ApiIndexItemCard from './apiIndexItemCard.svelte';

  let apiIndex: ApiIndex = null;
  let searchResults: SearchResult[] = [];
  let errors: string[] = [];
  let favoriteCount = 0;
  let searchText = '';
  let filters: ServiceTags = {};
  $: {
    favoriteCount = Object.values($browserOptions.favorites).filter((pi) => Object.values(pi).filter((fi) => fi).length).length;
  }

  $: if (searchText.length > 1) {
    searchResults = searchInApiIndexFlat(searchText);
  }

  function cleanFavorite() {
    for (const packageName in $browserOptions.favorites) {
      for (const apiName in $browserOptions.favorites[packageName]) {
        if (!$browserOptions.favorites[packageName][apiName] || !apiIndex.packages[packageName] || !apiIndex.packages[packageName][apiName]) {
          delete $browserOptions.favorites[packageName][apiName];
        }
      }
      if (Object.keys($browserOptions.favorites[packageName]).length === 0) {
        delete $browserOptions.favorites[packageName];
      }
    }
    $browserOptions.favorites = $browserOptions.favorites;
  }

  onMount(async () => {
    browserOptionsMount();
    const response = await fetch(getApiIndexPath());
    if (response.ok) {
      apiIndex = (await response.json()) as ApiIndex;
      initializeSearch(apiIndex);
      cleanFavorite();
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

  <SearchBar bind:searchText bind:filters />
  <Errors messages={errors} />
  {#if apiIndex}
    {#if !searchText || searchText.length < 2}
      {#if favoriteCount > 0}
        <!-- Favorite items -->
        <h4 class="subtitle is-4"><i class="fas fa-star" /> Favorites</h4>
        <div class="columns is-multiline">
          {#each Object.entries($browserOptions.favorites) as [packageName, packageItem]}
            {#each Object.entries(packageItem) as [favoriteName, favoriteItem]}
              {#if favoriteItem}
                <div class="column is-full-mobile is-full-tablet is-half-desktop is-one-third-widescreen">
                  <ApiIndexItemCard {apiIndex} apiIndexItem={apiIndex.apis[apiIndex.packages[packageName][favoriteName]]} />
                </div>
              {/if}
            {/each}
          {/each}
        </div>
      {/if}
      <!-- All items -->
      {#each Object.entries(apiIndex.packages) as [packageName, packageItem]}
        <h4 class="subtitle is-4">{packageName}</h4>
        <div class="columns is-multiline">
          {#each Object.entries(packageItem) as [apiName, apiHash]}
            {#if apiIndexItemMatchFilters(apiIndex.apis[apiHash], filters)}
              <div class="column is-full-mobile is-full-tablet is-half-desktop is-one-third-widescreen">
                <ApiIndexItemCard {apiIndex} apiIndexItem={apiIndex.apis[apiHash]} />
              </div>
            {/if}
          {/each}
        </div>
      {/each}
    {:else}
      <!-- Search results items -->
      <div class="columns is-multiline">
        {#each searchResults as searchResult}
          <div class="column is-full-mobile is-full-tablet is-half-desktop is-one-third-widescreen">
            <ApiIndexItemCard {apiIndex} apiIndexItem={searchResult.item} searchMatches={searchResult.matches} />
          </div>
        {/each}
      </div>
    {/if}
  {:else}
    <div class="box">Fetching api index...</div>
  {/if}
</div>
<Footer />

<style>
</style>
