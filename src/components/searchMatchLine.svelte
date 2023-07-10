<script lang="ts">
    import type { SearchMatch } from '../common/search';

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

{#each matchTokens as matchToken}
    {#if matchToken.highlight}
        <span class="search-match-highlight">{matchToken.value}</span>
    {:else}
        {matchToken.value}
    {/if}
{/each}

<style>
    .search-match-highlight {
        background-color: yellow;
    }
</style>
