<script lang="ts">
    export let maxLength = 30;
    export let text: string;
    export let keepEnd: boolean = false;
    let isExpanded: boolean = false;
    let shortText: string = '';

    $: if (text) {
        if (text.length > maxLength) {
            if (keepEnd) {
                shortText = '...' + text.substring(text.length - maxLength);
            } else {
                shortText = text.substring(0, maxLength) + '...';
            }
        } else {
            shortText = text;
        }
    }

    function toggleExpanded() {
        isExpanded = !isExpanded;
    }
</script>

{#if text.length > maxLength}
    <div class="longText" on:dblclick={toggleExpanded} title="Double click to expand">{isExpanded ? text : shortText}</div>
{:else}
    <div>{text}</div>
{/if}

<style>
    .longText {
        cursor: pointer;
        word-break: break-all;
    }
</style>
