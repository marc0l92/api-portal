<script lang="ts">
    import { DEFAULT_DIAGRAM_BUILDER_OPTIONS, diagramBuilderOptions } from './diagramBuilderOptions';
</script>

<details>
    <summary>Diagrams generation options</summary>
    <div class="mt-4">
        <div class="field">
            <label class="label" for="serverUrl">PlantUML server</label>
            <div class="control">
                <input class="input" type="text" placeholder={`Default: ${DEFAULT_DIAGRAM_BUILDER_OPTIONS.serverUrl}`} bind:value={$diagramBuilderOptions.serverUrl} />
            </div>
        </div>
        <div class="field">
            <label class="label" for="format">Format</label>
            <div class="control">
                <div class="select">
                    <select bind:value={$diagramBuilderOptions.format}>
                        <option value="svg">svg</option>
                        <option value="png">png</option>
                        <!-- <option value="txt">txt</option> -->
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
</details>

<style>
</style>
