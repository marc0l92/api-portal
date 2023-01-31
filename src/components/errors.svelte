<script lang="ts">
    export let messages: string[] = [];
</script>

<div class="box">
    <ul>
        {#each messages as message}
            <li class="notification is-danger is-small">{message}</li>
        {/each}
    </ul>
</div>

<style>
    .box {
        background-color: var(--color-background-accent);
    }
    .notification.is-small {
        padding: 0.5em;
    }
</style>
