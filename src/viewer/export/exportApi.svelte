<script lang="ts">
    import { ApiFormat, exportOptions } from './exportOptions';
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
        bind:value={$exportOptions.api.enable}
    />
    <ExportOptionLine
        option={{
            name: 'Format',
            values: [
                { name: ApiFormat.JSON, value: ApiFormat.JSON },
                { name: ApiFormat.YAML, value: ApiFormat.YAML },
            ],
        }}
        bind:value={$exportOptions.api.format}
    />
</section>

<style>
</style>
