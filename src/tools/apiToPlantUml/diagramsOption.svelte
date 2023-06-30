<script lang="ts">
    import { isChangeDiagramServerAllowed } from 'common/globals';
    import { DEFAULT_DIAGRAM_BUILDER_OPTIONS, DiagramBuilderFormat, diagramBuilderOptions } from './diagramBuilderOptions';

    function resetToDefaultValue() {
        $diagramBuilderOptions = Object.assign({}, DEFAULT_DIAGRAM_BUILDER_OPTIONS);
    }
</script>

<div class="mt-4">
    {#if isChangeDiagramServerAllowed()}
        <div class="field">
            <label class="label" for="serverUrl">PlantUML server</label>
            <div class="control">
                <input class="input" type="text" id="serverUrl" placeholder={`Default: ${DEFAULT_DIAGRAM_BUILDER_OPTIONS.serverUrl}`} bind:value={$diagramBuilderOptions.serverUrl} />
            </div>
        </div>
    {/if}
    <div class="field">
        <label class="label" for="format">Format</label>
        <div class="control">
            <div class="select">
                <select bind:value={$diagramBuilderOptions.format} id="format">
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
            <textarea class="textarea" bind:value={$diagramBuilderOptions.diagramHeader} id="header" />
        </div>
    </div>
    <div class="field">
        <div class="control">
            <label class="checkbox"><input type="checkbox" bind:checked={$diagramBuilderOptions.colors} name="useColor" /> Use colors</label>
        </div>
    </div>
    <div class="field">
        <div class="control">
            <label class="checkbox"><input type="checkbox" bind:checked={$diagramBuilderOptions.parameters} name="renderParameters" /> Render parameters</label>
        </div>
    </div>
    <div class="field">
        <div class="control">
            <button class="button is-warning" on:click={resetToDefaultValue}>Reset to default value</button>
        </div>
    </div>
</div>

<style>
</style>
