<script lang="ts">
    import type { OptionItem } from './export';

    export let option: OptionItem;
    export let value: any;
</script>

<div class="columns">
    <div class="column is-flex is-align-items-center">
        <span>{option.name}</span>
    </div>
    <div class="column is-narrow">
        <div class="buttons has-addons">
            {#each option.values as optionValue}
                <button class="button is-small {value === optionValue.value ? 'is-selected ' + (optionValue?.selectedCssClass || 'is-info') : ''}" on:click={() => (value = optionValue.value)}>
                    {optionValue.name}
                </button>
            {/each}
        </div>
    </div>
</div>

<style>
</style>
