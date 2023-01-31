<script lang="ts">
  import Navbar from '../components/navbar.svelte';
  import InputUri from './inputUri.svelte';
  import Result from './result.svelte';
  import Errors from '../components/errors.svelte';
  import Help from './help.svelte';
  import { ApiMethods, apiTokensToString, apiToTokens, refreshApiTokens, rotateTokenType, type RestApiToTextResults } from './restApiToText';

  let apiTokens: RestApiToTextResults = { errors: [], tokens: [] };
  let apiText: string = '';
  let method: ApiMethods;
  let showHelp = false;

  // $: console.log(JSON.stringify(apiTokens.tokens));

  async function onUriChange(event: CustomEvent<{ method: ApiMethods; uri: string; version: boolean; capability: boolean }>) {
    method = event.detail.method;
    apiTokens = await apiToTokens(method, event.detail.uri, {
      version: event.detail.version,
      capability: event.detail.capability,
    });
    apiText = apiTokensToString(method, apiTokens.tokens);
  }

  async function onChangeTokenType(event: CustomEvent<{ index: number }>) {
    const updatedIndex = event.detail.index;
    if (updatedIndex < apiTokens.tokens.length) {
      apiTokens.tokens = rotateTokenType(apiTokens.tokens, updatedIndex);
      apiTokens.tokens = await refreshApiTokens(method, apiTokens.tokens, updatedIndex);
      apiText = apiTokensToString(method, apiTokens.tokens);
    }
  }
</script>

<Navbar activePage="restApiToText" />
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
    <Errors messages={apiTokens.errors} />
  {/if}
  {#if apiTokens.tokens.length > 0}
    <Result tokens={apiTokens.tokens} text={apiText} on:changeTokenType={onChangeTokenType} />
  {/if}
  <button class="button box {showHelp ? 'is-active' : ''}" on:click={() => (showHelp = !showHelp)}>
    <span class="icon is-small">
      <i class="far fa-circle-question" />
    </span>
    <span>Help</span>
  </button>
  {#if showHelp}
    <Help />
  {/if}
</div>

<style>
  .hero.is-small .hero-body {
    padding-left: 0;
    padding-right: 0;
  }
  button.box.button.is-active {
    background-color: var(--color-accent);
    color: #fff;
  }
</style>
