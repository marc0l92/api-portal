<script lang="ts">
    export let messages: string[] = [];
    export let level: string = 'danger';
</script>

{#if messages.length > 0}
    <div class="box">
        <ul>
            {#each messages as message}
                <li class="notification is-{level} is-small">
                    <pre>{message}</pre>
                </li>
            {/each}
        </ul>
    </div>
{/if}

<style>
</style>
