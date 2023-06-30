<script lang="ts">
    import { getValidationSummary, severityNames, type ApiValidation, type ValidationSummary } from './validation';

    const INITIAL_LIMIT = 30;
    const LIMIT_INCREMENT = 15;

    export let validationData: ApiValidation[] = [];
    export let validationSummary: ValidationSummary = {};
    let selectedErrorCode: string = '';
    let validationItemsLimit = INITIAL_LIMIT;
    let validationDataFiltered: ApiValidation[] = [];

    function selectErrorCode(errorCode: string) {
        validationItemsLimit = INITIAL_LIMIT;
        if (selectedErrorCode === errorCode) {
            selectedErrorCode = '';
        } else {
            selectedErrorCode = errorCode;
        }
    }
    function loadMoreItems() {
        validationItemsLimit += LIMIT_INCREMENT;
    }

    $: if (validationData) {
        validationSummary = getValidationSummary(validationData);
    }

    $: validationDataFiltered = validationData ? validationData.filter((item) => !selectedErrorCode || selectedErrorCode === item.code) : [];
</script>

{#if validationData}
    <div class="columns">
        <div class="column is-one-quarter">
            <aside class="menu">
                {#each Object.entries(validationSummary) as [severityCode, errorItems]}
                    {#if Object.keys(errorItems).length}
                        <p class="menu-label">{severityNames[severityCode].title}</p>
                        <ul class="menu-list">
                            {#each Object.entries(errorItems) as [errorCode, errorInfo]}
                                <li>
                                    <a href={''} class={selectedErrorCode === errorCode ? 'is-active' : ''} on:click|preventDefault={() => selectErrorCode(errorCode)}>
                                        <span class="tag {severityNames[severityCode].css}">{errorInfo.count}</span>
                                        {errorCode}
                                    </a>
                                </li>
                            {/each}
                        </ul>
                    {/if}
                {/each}
            </aside>
        </div>
        <div class="column">
            {#each validationDataFiltered.slice(0, validationItemsLimit) as validationItem}
                <div class="notification is-word-break {severityNames[validationItem.severity].css}">
                    <p><strong>Code</strong>: {validationItem.code}</p>
                    <p><strong>Message</strong>: {validationItem.message}</p>
                    <p><strong>Path</strong>: /{validationItem.path.join('/')}</p>
                </div>
            {/each}
            {#if validationItemsLimit < validationDataFiltered.length}
                <button class="button" on:click={loadMoreItems}>Load more items</button>
            {/if}
        </div>
    </div>
{/if}

<style>
</style>
