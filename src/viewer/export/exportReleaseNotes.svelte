<script lang="ts">
    import { ReleaseNotesFormat, exportOptions } from './exportOptions';
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
        bind:value={$exportOptions.releaseNotes.enable}
    />
    <ExportOptionLine
        option={{
            name: 'Format',
            values: [
                { name: ReleaseNotesFormat.JSON, value: ReleaseNotesFormat.JSON },
                { name: ReleaseNotesFormat.MARKDOWN, value: ReleaseNotesFormat.MARKDOWN },
            ],
        }}
        bind:value={$exportOptions.releaseNotes.format}
    />
</section>

<style>
</style>
