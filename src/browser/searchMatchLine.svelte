<script lang="ts">
    import type { SearchMatch } from 'common/search';

    interface MatchToken {
        value: string;
        highlight: boolean;
    }

    export let searchMatch: SearchMatch = null;
    let matchTokens: MatchToken[] = [];

    $: updateMatchTokens(searchMatch);

    function updateMatchTokens(searchMatch: SearchMatch): void {
        matchTokens = [];
        let i = 0;
        for (const [start, end] of searchMatch.indices) {
            if (i < start) {
                matchTokens.push({ value: searchMatch.value.slice(i, start), highlight: false });
            }
            matchTokens.push({ value: searchMatch.value.slice(start, end + 1), highlight: true });
            i = end + 1;
        }
        if (i < searchMatch.value.length) {
            matchTokens.push({ value: searchMatch.value.slice(i), highlight: false });
        }
    }
</script>

<p class="searchMatchLine">
    <span class="key">{searchMatch.key}:</span>
    <span class="value">
        {#each matchTokens as matchToken}
            <span class={matchToken.highlight ? 'highlight' : ''}>{matchToken.value}</span>
        {/each}
    </span>
</p>

<style>
    .searchMatchLine:not(:last-child) {
        margin-bottom: 0.5em;
    }
    .searchMatchLine {
        font-size: small;
    }
    .searchMatchLine .key {
        font-weight: bold;
    }
    .searchMatchLine .value .highlight {
        background-color: yellow;
    }
</style>
