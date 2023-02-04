<script lang="ts">
  import Navbar from '../components/navbar.svelte';
  import Errors from 'components/errors.svelte';

  let errors: string[] = [];

</script>

<Navbar activePage="apiToPlantuml" />
<div class="container">
  <section class="hero is-small">
    <div class="hero-body">
      <h1 class="title">Api to PlantUML</h1>
      <p class="subtitle">Generate PlantUML diagram of REST API</p>
    </div>
  </section>
  {#if errors.length > 0}
    <Errors messages={errors} />
  {/if}
</div>

<style>
  .hero.is-small .hero-body {
    padding-left: 0;
    padding-right: 0;
  }
</style>
