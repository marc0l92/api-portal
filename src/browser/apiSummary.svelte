<script lang="ts">
    interface ApiSummary {
        name: string;
        version: string;
        hash: string;
    }

    export let apiSummary: ApiSummary = null;
</script>

<div class="box">
    <a href="./viewer.html?api={apiSummary.hash}">
        <strong>{apiSummary.name}</strong>
    </a>
</div>

<style>
</style>
