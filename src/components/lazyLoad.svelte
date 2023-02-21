<script lang="ts">
    export let isVisible: boolean = true;
    let isLoaded = false;
    $: if (isVisible) {
        isLoaded = true;
    }
</script>

<div class={isVisible ? '' : 'is-hidden'}>
    {#if isLoaded}
        <slot />
    {/if}
</div>

<style>
</style>
