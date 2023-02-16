<script lang="ts">
  import Errors from 'components/errors.svelte';
  import Footer from 'components/footer.svelte';
  import { onMount } from 'svelte';
  import Navbar from '../components/navbar.svelte';
  import type { ApiIndex } from './apiIndex';
  import ApiSummary from './apiSummary.svelte';
  import SearchBar from './searchBar.svelte';

  const API_INDEX_PATH = './apis/apiIndex.json';

  let apiIndex: ApiIndex = null;
  let errors: string[] = [];

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
    {#each Object.entries(apiIndex) as packageItem}
      <h4 class="subtitle is-4">{packageItem[0]}</h4>
      {#each Object.entries(packageItem[1]) as apiItem}
        <ApiSummary name={apiItem[0]} apiSummary={apiItem[1]} />
      {/each}
    {/each}
  {:else}
    <div class="box">Fetching api index...</div>
  {/if}
</div>
<Footer />

<style>
</style>
