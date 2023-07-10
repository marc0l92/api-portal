<script lang="ts">
    import type { ApiMetadata } from '../common/api/api';
    import { getApiStatusName } from '../common/api/apiStatus';

    const DEFAULT_TAG_COLOR = 'is-info is-light';

    export let metadata: ApiMetadata = {};
    export let updateTime: string;

    function getTagColor(metadataName: string, metadataValue: string) {
        if (metadataName === 'status') {
            switch (metadataValue) {
                case '0':
                    return 'is-success';
                case '1':
                    return 'is-warning';
                case '2':
                    return 'is-danger';
            }
        }
        return DEFAULT_TAG_COLOR;
    }
    function isUrl(str: string) {
        try {
            new URL(str);
        } catch (e) {
            return false;
        }
        return true;
    }
</script>

<div class="columns metadata-row is-multiline is-1 is-variable">
    {#each Object.entries(metadata) as [name, value]}
        <div class="column is-narrow">
            <span class="tags has-addons">
                <span class="tag is-dark is-capitalized">{name}</span>
                <span class="tag {getTagColor(name, value)}">
                    {#if isUrl(value)}
                        <a href={value}>{value}</a>
                    {:else if name === 'status'}
                        {getApiStatusName(parseInt(value))}
                    {:else}
                        {value}
                    {/if}
                </span>
            </span>
        </div>
    {/each}
    {#if updateTime}
        <div class="column is-narrow">
            <span class="tags has-addons">
                <span class="tag is-dark is-capitalized">UpdateTime</span>
                <span class="tag {DEFAULT_TAG_COLOR}">{updateTime}</span>
            </span>
        </div>
    {/if}
</div>

<style>
    .metadata-row {
        display: flex;
    }
    .metadata-row .tags .tag {
        margin: 0;
    }
    .metadata-row .tags {
        margin: 0;
    }
    .metadata-row .tags:not(:last-child) {
        margin-right: 0.5em;
    }
    .columns.is-variable > .column {
        padding-top: var(--columnGap);
        padding-bottom: var(--columnGap);
    }
</style>
