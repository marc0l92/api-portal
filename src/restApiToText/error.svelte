<script lang="ts">
    export let messages: string[] = [];
</script>

<div class="box">
    <p class="subtitle"><strong>Errors:</strong></p>
    <ul>
        {#each messages as message}
            <li>{message}</li>
        {/each}
    </ul>
</div>

<style>
    .box {
        background-color: var(--color-background-accent);
    }
</style>
