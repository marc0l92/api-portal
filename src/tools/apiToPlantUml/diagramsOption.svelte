<script lang="ts">
    import { isChangeDiagramServerAllowed } from 'common/globals';
    import { DEFAULT_DIAGRAM_BUILDER_OPTIONS, DiagramBuilderFormat, diagramBuilderOptions } from './diagramBuilderOptions';
</script>

<div class="mt-4">
    {#if isChangeDiagramServerAllowed()}
        <div class="field">
            <label class="label" for="serverUrl">PlantUML server</label>
            <div class="control">
                <input class="input" type="text" placeholder={`Default: ${DEFAULT_DIAGRAM_BUILDER_OPTIONS.serverUrl}`} bind:value={$diagramBuilderOptions.serverUrl} />
            </div>
        </div>
    {/if}
    <div class="field">
        <label class="label" for="format">Format</label>
        <div class="control">
            <div class="select">
                <select bind:value={$diagramBuilderOptions.format}>
                    <option value={DiagramBuilderFormat.SVG}>svg</option>
                    <option value={DiagramBuilderFormat.PNG}>png</option>
                    <!-- <option value={DiagramBuilderFormat.TXT}>txt</option> -->
                </select>
            </div>
        </div>
    </div>
    <div class="field">
        <label class="label" for="header">Header</label>
        <div class="control">
            <textarea class="textarea" bind:value={$diagramBuilderOptions.diagramHeader} />
        </div>
    </div>
    <div class="field">
        <div class="control">
            <label class="checkbox"><input type="checkbox" bind:checked={$diagramBuilderOptions.colors} /> Use colors</label>
        </div>
    </div>
    <div class="field">
        <div class="control">
            <label class="checkbox"><input type="checkbox" bind:checked={$diagramBuilderOptions.parameters} /> Render parameters</label>
        </div>
    </div>
</div>

<style>
</style>
