<script lang="ts">
    import type { ApiMetadata } from 'common/api/api';
    import { getApiStatusName } from 'common/api/apiStatus';

    export let metadata: ApiMetadata = {};
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
        return 'is-info is-light';
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

<div class="columns">
    <div class="column metadata-row">
        {#each Object.entries(metadata) as [name, value]}
            <span class="tags has-addons">
                <span class="tag is-dark tag-name">{name}</span>
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
        {/each}
    </div>
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
    .tag.tag-name {
        text-transform: capitalize;
    }
</style>
