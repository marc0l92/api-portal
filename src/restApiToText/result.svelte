<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import type { ApiUriToken } from './restApiToText';
    import { ApiTokenType } from './restApiToText';
    const restApiPartTypeStrings = Object.values(ApiTokenType);

    export let tokens: ApiUriToken[] = [];
    export let text = '';
    $: hasError = tokens.filter((p) => p.warnings.length > 0).length > 0;

    const dispatch = createEventDispatcher();
    function changeTokenType(index: number) {
        dispatch('changeTokenType', { index });
    }
</script>

<div class="box">
    <p class="subtitle"><strong>Result:</strong></p>
    <div class="tags has-addons">
        {#each tokens as part, index}
            <span class="tag is-separator">/</span>
            {#if part.alternativeTypes.length > 0}
                <button class="tag is-{part.type} {part.warnings.length > 0 ? 'has-warning' : ''}" on:click={() => changeTokenType(index)}>
                    {part.text}
                    <span class="margin-left"><span class="icon"><i class="fa-solid fa-arrows-rotate" /></span></span>
                </button>
            {:else}
                <span class="tag is-{part.type} {part.warnings.length > 0 ? 'has-warning' : ''}">
                    {part.text}
                </span>
            {/if}
        {/each}
    </div>
    <div class="block">
        <p>{text}</p>
    </div>
    {#if hasError}
        <div class="warnings">
            <p><strong>Warnings:</strong></p>
            {#each tokens as part}
                {#each part.warnings as warning}
                    <p>
                        <span class="icon is-warning"><i class="fa-solid fa-triangle-exclamation" /></span>
                        {warning}
                    </p>
                {/each}
            {/each}
            <p />
        </div>
    {/if}
    <div class="level">
        <div class="level-left" />
        <div class="level-right">
            <div class="tags has-addons no-margin">
                {#each restApiPartTypeStrings as partType}
                    <span class="tag no-margin is-{partType}">{partType}</span>
                {/each}
            </div>
            <div class="level-item" />
        </div>
    </div>
</div>

<style lang="scss">
    .box {
        background-color: var(--color-background-accent);
    }

    .icon.is-warning {
        color: #ffe86e;
    }
    span.margin-left {
        margin-left: 0.5em;
    }

    button.tag {
        border: none;
        cursor: pointer;
    }

    .tags.no-margin {
        margin: 0;
    }

    .tag {
        &.is-separator {
            padding-left: 0.25em;
            padding-right: 0.25em;
            background-color: #eee;
        }
        &.has-warning {
            text-decoration: wavy;
            text-decoration-line: underline;
            text-decoration-color: red;
        }
        &.no-margin {
            margin: 0;
        }
        // Palette: https://colorkit.co/color-palette-generator/ff889a-ffc2a9-fff2b3-b8fbb5-81d5ff-e18af1/
        &.is-version {
            background-color: #b8fbb5;
        }
        &.is-capability {
            background-color: #fff2b3;
        }
        &.is-collection {
            background-color: #81d5ff;
        }
        &.is-resource {
            background-color: #ff889a;
        }
        &.is-sub-resource {
            background-color: #ffc2a9;
        }
        &.is-controller {
            background-color: #e18af1;
        }
    }
</style>
