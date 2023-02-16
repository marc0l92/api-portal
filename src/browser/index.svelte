<script lang="ts">
  import Errors from 'components/errors.svelte';
  import Footer from 'components/footer.svelte';
  import { onMount } from 'svelte';
  import Navbar from '../components/navbar.svelte';
  import type { ApiIndex } from './apiIndex';
  import ApiSummary from './apiSummary.svelte';
  import { browserOptions } from './browserOptions';
  import SearchBar from './searchBar.svelte';

  const API_INDEX_PATH = './apis/apiIndex.json';

  let apiIndex: ApiIndex = null;
  let errors: string[] = [];
  let favoriteCount = 0;
  $: {
    favoriteCount = Object.values($browserOptions.favorites).filter((pi) => Object.values(pi).filter((fi) => fi).length).length;
  }

  function sortByKey(x: any, y: any) {
    return x[0] < y[0];
  }

  onMount(async () => {
    const response = await fetch(API_INDEX_PATH);
    if (response.ok) {
      apiIndex = (await response.json()) as ApiIndex;
    } else {
      errors = [...errors, 'Error while fetching api index: ' + response.status];
    }
  });
</script>

<Navbar activePage="browser" />
<div class="container">
  <section class="hero is-small">
    <div class="hero-body">
      <h1 class="title">Api Browser</h1>
    </div>
  </section>

  <SearchBar />
  <Errors messages={errors} />
  {#if apiIndex}
    {#if favoriteCount > 0}
      <h4 class="subtitle is-4"><i class="fas fa-star" /> Favorites</h4>
      <div class="columns is-multiline">
        {#each Object.entries($browserOptions.favorites) as packageItem}
          {#each Object.entries(packageItem[1]) as favorite}
            {#if favorite[1]}
              <div class="column is-full-mobile is-full-tablet is-half-desktop is-one-third-widescreen">
                <ApiSummary packageName={packageItem[0]} name={favorite[0]} apiSummary={apiIndex[packageItem[0]][favorite[0]]} />
              </div>
            {/if}
          {/each}
        {/each}
      </div>
    {/if}
    {#each Object.entries(apiIndex).sort(sortByKey) as packageItem}
      <h4 class="subtitle is-4">{packageItem[0]}</h4>
      <div class="columns is-multiline">
        {#each Object.entries(packageItem[1]).sort(sortByKey) as apiItem}
          <div class="column is-full-mobile is-full-tablet is-half-desktop is-one-third-widescreen">
            <ApiSummary packageName={packageItem[0]} name={apiItem[0]} apiSummary={apiItem[1]} />
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
