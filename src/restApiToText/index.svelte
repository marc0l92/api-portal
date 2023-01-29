<script lang="ts">
  import Navbar from '../components/navbar.svelte';
  import InputUri from './inputUri.svelte';
  import Result from './result.svelte';
  import { ApiMethods, apiTokensToString, apiToTokens, refreshApiTokens, type RestApiToTextResults } from './restApiToText';
  import Error from './error.svelte';

  let apiTokens: RestApiToTextResults = { errors: [], tokens: [] };
  let apiText: string = '';
  let method: ApiMethods;

  async function onUriChange(event: CustomEvent<{ method: ApiMethods; uri: string; version: boolean; capability: boolean }>) {
    method = event.detail.method;
    apiTokens = await apiToTokens(method, event.detail.uri, {
      version: event.detail.version,
      capability: event.detail.capability,
    });
    if (apiTokens.tokens.length > 0) {
      apiText = apiTokensToString(method, apiTokens.tokens);
    }
  }

  async function onChangeTokenType(event: CustomEvent<{ index: number }>) {
    const updatedIndex = event.detail.index;
    if (updatedIndex < apiTokens.tokens.length) {
      const itemToChange = apiTokens.tokens[updatedIndex];
      itemToChange.alternativeTypes.push(itemToChange.type);
      itemToChange.type = itemToChange.alternativeTypes.shift();
      apiTokens.tokens = await refreshApiTokens(method, apiTokens.tokens, updatedIndex);
      // apiTokens=apiTokens
    }
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
  {#if apiTokens.errors.length > 0}
    <Error messages={apiTokens.errors} />
  {/if}
  {#if apiTokens.tokens.length > 0}
    <Result tokens={apiTokens.tokens} text={apiText} on:changeTokenType={onChangeTokenType} />
  {/if}
</div>

<style>
  .hero.is-small .hero-body {
    padding-left: 0;
    padding-right: 0;
  }
</style>
