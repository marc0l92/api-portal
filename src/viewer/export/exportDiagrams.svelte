<script lang="ts">
    import { DiagramsFormat, exportOptions } from './exportOptions';
    import ExportOptionLine from './exportOptionLine.svelte';
</script>

<section>
    <ExportOptionLine
        option={{
            name: 'Enable',
            values: [
                { name: 'Yes', value: true, selectedCssClass: 'is-success' },
                { name: 'No', value: false, selectedCssClass: 'is-danger' },
            ],
        }}
        bind:value={$exportOptions.diagrams.enable}
    />
    <ExportOptionLine
        option={{
            name: 'Format',
            values: [
                { name: DiagramsFormat.PNG, value: DiagramsFormat.PNG },
                { name: DiagramsFormat.SVG, value: DiagramsFormat.SVG },
            ],
        }}
        bind:value={$exportOptions.diagrams.format}
    />
    <ExportOptionLine
        option={{
            name: 'Include diagram source',
            values: [
                { name: 'Yes', value: true, selectedCssClass: 'is-success' },
                { name: 'No', value: false, selectedCssClass: 'is-danger' },
            ],
        }}
        bind:value={$exportOptions.diagrams.diagramSource}
    />
</section>

<style>
</style>
