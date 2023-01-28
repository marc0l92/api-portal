<script lang="ts">
  import Navbar from '../components/navbar.svelte';
  import InputUri from './inputUri.svelte';
  import Result from './result.svelte';
  import { apiToTokens, type RestApiToTextResults } from './restApiToText';
  import type { ApiMethods } from './restApiToText';
  import Error from './error.svelte';

  let results: RestApiToTextResults = { errors: [], results: [] };

  async function onUriChange(event: CustomEvent<{ method: ApiMethods; uri: string; version: boolean; capability: boolean }>) {
    console.log(event.detail);
    results = await apiToTokens(event.detail.method, event.detail.uri, {
      version: event.detail.version,
      capability: event.detail.capability,
    });
  }
</script>

<Navbar />
<div class="container">
  <section class="hero is-small">
    <div class="hero-body">
      <h1 class="title">REST Api to Text</h1>
      <p class="subtitle">
        Input your api <i>method</i> and <i>URI</i> and check what is the meaning of it according to the REST API guidelines
      </p>
    </div>
  </section>
  <InputUri on:uriChange={onUriChange} />
  {#each results.errors as error}
    <Error message={error} />
  {/each}
  {#each results.results as result}
    <Result {...result} />
  {/each}
</div>

<style>
  .hero.is-small .hero-body {
    padding-left: 0;
    padding-right: 0;
  }
</style>
