<script lang="ts">
    import { exportOptions } from './exportOptions';
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
        bind:value={$exportOptions.spreadSheet.enable}
    />
</section>

<style>
</style>
