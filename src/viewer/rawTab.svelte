<script lang="ts">
    import { API_TO_VALIDATE_INDENTATION } from 'cli/cliConstants';

    export let apiDoc: any = null;
</script>

<div class="block">
    <div class="field">
        <div class="control">
            <textarea class="textarea" readonly rows="20">{JSON.stringify(apiDoc, null, API_TO_VALIDATE_INDENTATION)}</textarea>
        </div>
    </div>
</div>

<style>
</style>
