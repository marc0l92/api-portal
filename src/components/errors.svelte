<script lang="ts">
    export let messages: string[] = [];
</script>

<div class="box">
    <ul>
        {#each messages as message}
            <li class="notification is-danger is-small">
                <pre>{message}</pre>
            </li>
        {/each}
    </ul>
</div>

<style>
</style>
