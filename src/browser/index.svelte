<script lang="ts">
  import Footer from 'components/footer.svelte';
  import Navbar from '../components/navbar.svelte';
  import ApiSummary from './apiSummary.svelte';

  const apiIndex = require('../apiIndex.json');
</script>

<Navbar activePage="browser" />
<div class="container">
  <section class="hero is-small">
    <div class="hero-body">
      <h1 class="title">Api Browser</h1>
    </div>
  </section>

  {#each apiIndex as apiSummary}
    <ApiSummary {apiSummary} />
  {/each}
</div>
<Footer />

<style>
</style>
