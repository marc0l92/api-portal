<script lang="ts">
    export let apiDoc: any = null;
    function stringify() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(JSON.stringify(apiDoc, null, 2));
            }, 1);
        });
    }
</script>

<div class="block">
    {#await stringify()}
        <p>Loading...</p>
    {:then apiString}
        <div class="field">
            <div class="control">
                <textarea class="textarea" readonly rows="20">{apiString}</textarea>
            </div>
        </div>
    {/await}
</div>

<style>
</style>
