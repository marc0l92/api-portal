<script lang="ts">
    import type { RestApiToTextUriTokens } from './restApiToText';
    import { RestApiPartType } from './restApiToText';
    const restApiPartTypeStrings = Object.values(RestApiPartType);

    export let parts: RestApiToTextUriTokens[] = [];
    export let text = '';
    $: hasError = parts.filter((p) => p.warnings.length > 0).length > 0;
</script>

<div class="box">
    <p class="subtitle"><strong>Result:</strong></p>
    <div class="tags has-addons">
        {#each parts as part}
            <span class="tag is-separator">/</span>
            <span class="tag is-{part.type} {part.warnings.length > 0 ? 'has-warning' : ''}">{part.text}</span>
        {/each}
    </div>
    <div class="block">
        <p>{text}</p>
    </div>
    {#if hasError}
        <div class="warnings">
            <p><strong>Warnings:</strong></p>
            {#each parts as part}
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
