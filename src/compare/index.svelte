<script lang="ts">
  import type { Api } from 'common/api/api';
  import { apiFactory } from 'common/api/apiFactory';
  import { globalOptions } from 'common/globalOptions';
  import Errors from 'components/errors.svelte';
  import Footer from 'components/footer.svelte';
  import InputApi from 'components/inputApi.svelte';
  import LazyLoad from 'components/lazyLoad.svelte';
  import Navbar from 'components/navbar.svelte';
  import { onMount } from 'svelte';
  import ApiDiff from './apiDiffTab.svelte';
  import DiagramsDiff from './diagramsDiffTab.svelte';
  import Tabs from './tabs.svelte';

  interface CompareItem {
    hash: string;
    api: Api;
    errors: string[];
  }

  let leftItem: CompareItem = { hash: null, api: null, errors: [] };
  let rightItem: CompareItem = { hash: null, api: null, errors: [] };
  let selectedTab: string = 'api-diff';

  function rewriteQueryParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    if (leftItem.hash) {
      urlParams.set('leftApi', leftItem.hash);
    }
    if (rightItem.hash) {
      urlParams.set('rightApi', rightItem.hash);
    }
    window.history.pushState(null, null, '?' + urlParams.toString());
  }

  function onApiChange(compareItem: CompareItem) {
    return async (event: CustomEvent<{ apiObject: any; hash: string }>) => {
      const apiDoc = event.detail.apiObject;
      compareItem.api = null;
      compareItem.errors = [];
      compareItem.hash = event.detail.hash;
      if (apiDoc) {
        try {
          compareItem.api = apiFactory(apiDoc);
          compareItem.api.setModelsTitle();
        } catch (e) {
          compareItem.errors = [...compareItem.errors, 'Error: ' + e.message];
        }
        if (compareItem.api) {
          try {
            await compareItem.api.resolveReferences();
          } catch (e) {
            console.error(e);
            compareItem.errors = [...compareItem.errors, 'Error while parsing api: ' + e.message];
          }
        }
      }
      leftItem = leftItem;
      rightItem = rightItem;
      rewriteQueryParameters();
    };
  }

  function onTabChange(event: CustomEvent<{ selectedTab: string }>) {
    selectedTab = event.detail.selectedTab;
  }

  onMount(() => {
    const urlParams = new URLSearchParams(window.location.search);
    leftItem.hash = urlParams.get('leftApi');
    rightItem.hash = urlParams.get('rightApi');
  });
</script>

<Navbar activePage="compare" />
<div class="container {$globalOptions.fluidLayout ? 'is-fluid' : ''}">
  <section class="hero is-small">
    <div class="hero-body">
      <h1 class="title">Api Compare</h1>
      <p class="subtitle">List changes between two Apis</p>
    </div>
  </section>
  <div class="columns">
    <div class="column">
      <InputApi on:apiChange={onApiChange(leftItem)} browserHash={leftItem.hash} />
      <Errors messages={leftItem.errors} />
    </div>
    <div class="column is-center is-narrow">
      <p class="title is-2"><i class="fa-solid fa-right-long" /></p>
    </div>
    <div class="column">
      <InputApi on:apiChange={onApiChange(rightItem)} browserHash={rightItem.hash} />
      <Errors messages={rightItem.errors} />
    </div>
  </div>
  {#if leftItem.api && rightItem.api}
    <Tabs on:tabChange={onTabChange} {selectedTab} />
    <div class="box flat-top">
      <LazyLoad isVisible={selectedTab === 'api-diff'}><ApiDiff leftApi={leftItem.api} rightApi={rightItem.api} /></LazyLoad>
      <LazyLoad isVisible={selectedTab === 'diagrams-diff'}><DiagramsDiff leftApi={leftItem.api} rightApi={rightItem.api} /></LazyLoad>
    </div>
  {/if}
</div>
<Footer />

<style>
  .is-center {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
