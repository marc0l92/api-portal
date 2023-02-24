<script lang="ts">
    import { getValidationSummary, severityNames, type ApiValidation, type ValidationSummary } from './validation';

    export let validationData: ApiValidation[] = [];
    export let validationSummary: ValidationSummary = {};
    let selectedErrorCode: string = '';

    function selectErrorCode(errorCode: string) {
        if (selectedErrorCode === errorCode) {
            selectedErrorCode = '';
        } else {
            selectedErrorCode = errorCode;
        }
    }

    $: if (validationData) {
        validationSummary = getValidationSummary(validationData);
    }
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
                                    <a href={'#'} class={selectedErrorCode === errorCode ? 'is-active' : ''} on:click={() => selectErrorCode(errorCode)}>
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
            {#each validationData as validationItem}
                {#if !selectedErrorCode || selectedErrorCode === validationItem.code}
                    <div class="notification {severityNames[validationItem.severity].css}">
                        <p>Code: {validationItem.code}</p>
                        <p>Message: {validationItem.message}</p>
                        <p>Path: /{validationItem.path.join('/')}</p>
                    </div>
                {/if}
            {/each}
        </div>
    </div>
{/if}

<style>
</style>
