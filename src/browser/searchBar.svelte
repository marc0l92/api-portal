<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    let searchText = '';

    const dispatch = createEventDispatcher();
    function onInputChange() {
        dispatch('searchTextChange', { searchText });
    }
</script>

<div class="block">
    <div class="field">
        <div class="control is-expanded">
            <input class="input" type="text" placeholder="Search" bind:value={searchText} on:input={onInputChange} />
        </div>
    </div>
</div>

<style>
</style>
