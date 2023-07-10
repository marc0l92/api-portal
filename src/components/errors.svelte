<script lang="ts">
    export let errors: string[];
    export let level: string = 'danger';
</script>

{#if errors.length > 0}
    <div class="box">
        <ul>
            {#each errors as message}
                <li class="notification is-{level} is-small">
                    <pre>{message}</pre>
                </li>
            {/each}
        </ul>
    </div>
{/if}

<style>
</style>
