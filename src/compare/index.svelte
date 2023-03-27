<script lang="ts">
  import type { Api } from 'common/api/api';
  import { apiFactory } from 'common/api/apiFactory';
  import { globalOptions } from 'common/globalOptions';
  import Errors from 'components/errors.svelte';
  import Footer from 'components/footer.svelte';
  import InputApi from 'components/inputApi.svelte';
  import LazyLoad from 'components/lazyLoad.svelte';
  import Navbar from 'components/navbar.svelte';
  import Tabs from './tabs.svelte';

  interface CompareItem {
    api: Api;
    errors: string[];
  }

  let leftItem: CompareItem = { api: null, errors: [] };
  let rightItem: CompareItem = { api: null, errors: [] };
  let bothValidItems = false;
  let selectedTab: string = 'api-diff';

  function onApiChange(compareItem: CompareItem) {
    return async (event: CustomEvent<{ apiObject: any }>) => {
      const apiDoc = event.detail.apiObject;
      try {
        compareItem.api = null;
        compareItem.errors = [];
        if (apiDoc) {
          compareItem.api = apiFactory(apiDoc);
          compareItem.api.setModelsTitle();
        }
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
      console.log({ leftItem, rightItem });
      bothValidItems = !!leftItem.api && !!rightItem.api;
      console.log({ bothValidItems });
    };
  }

  function onTabChange(event: CustomEvent<{ selectedTab: string }>) {
    selectedTab = event.detail.selectedTab;
  }
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
      <InputApi on:apiChange={onApiChange(leftItem)} />
      <Errors messages={leftItem.errors} />
    </div>
    <div class="column is-center is-narrow">
      <p class="title is-2"><i class="fa-solid fa-right-long" /></p>
    </div>
    <div class="column">
      <InputApi on:apiChange={onApiChange(rightItem)} />
      <Errors messages={rightItem.errors} />
    </div>
  </div>
  {#if bothValidItems}
    <Tabs on:tabChange={onTabChange} {selectedTab} />
    <div class="box flat-top">
      <LazyLoad isVisible={selectedTab === 'api-diff'}>Api diff</LazyLoad>
      <LazyLoad isVisible={selectedTab === 'diagrams-diff'}>Diagrams diff</LazyLoad>
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
