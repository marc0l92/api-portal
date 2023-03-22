<script lang="ts">
  import Footer from 'components/footer.svelte';
  import Navbar from '../components/navbar.svelte';
  import { getAppName, getHomeLinks } from '../common/globals';
</script>

<Navbar activePage="home" />
<div class="container">
  <section class="hero is-small">
    <div class="hero-body">
      <h1 class="title">{getAppName()}</h1>
    </div>
  </section>
  <div class="columns is-multiline">
    {#each getHomeLinks() as homeLink}
      <div class="column is-full-mobile is-full-tablet is-half-desktop is-one-third-widescreen">
        <a href={homeLink.link} target="_blank" rel="noreferrer">
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">
                    {#if homeLink.icon}
                      <span class="icon"><i class={homeLink.icon} /></span>
                    {/if}
                    {homeLink.title}
                  </p>
                  {#if homeLink.subtitle}
                    <p class="subtitle is-6">{homeLink.subtitle}</p>
                  {/if}
                </div>
              </div>
              {#if homeLink.description}
                <div class="content">{homeLink.description}</div>
              {/if}
            </div>
          </div>
        </a>
      </div>
    {/each}
  </div>
</div>
<Footer />

<style>
</style>
