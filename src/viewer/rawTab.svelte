<script lang="ts">
    export let apiDoc: any = null;
</script>

<div class="block">
    <div class="field">
        <div class="control">
            <textarea class="textarea" readonly rows="20">{JSON.stringify(apiDoc, null, 2)}</textarea>
        </div>
    </div>
</div>

<style>
</style>
