<script lang="ts">
  import { globalOptions } from 'common/globalOptions';
  import Footer from 'components/footer.svelte';
  import InputApi from 'components/inputApi.svelte';
  import Navbar from 'components/navbar.svelte';
</script>

<Navbar activePage="compare" />
<div class="container {$globalOptions.fluidLayout ? 'is-fluid' : ''}">
  <section class="hero is-small">
    <div class="hero-body">
      <h1 class="title">Api Compare</h1>
      <p class="subtitle">List changes between two Apis</p>
    </div>
  </section>
  <div>
    <div class="columns">
      <div class="column"><InputApi /></div>
      <div class="column is-center is-narrow"><button class="button"><i class="fa-solid fa-right-left" /></button></div>
      <div class="column"><InputApi /></div>
    </div>
  </div>
</div>
<Footer />

<style>
  .is-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
