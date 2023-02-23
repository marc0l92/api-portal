<script lang="ts">
    import type { ApiValidation } from 'common/api';
    import { onMount } from 'svelte';
    interface ValidationSummary {
        [code: string]: {
            [code: string]: { count: number };
        };
    }

    const severityNames: { [severity: string]: string } = { '0': 'Errors', '1': 'Warnings', '2': 'Infos', '3': 'Hints' };

    export let validationData: ApiValidation[] = [];
    let summary: ValidationSummary = { 0: {}, 1: {}, 2: {}, 3: {} };
    let selectedErrorCode: string = '';

    function selectErrorCode(errorCode: string) {
        if (selectedErrorCode === errorCode) {
            selectedErrorCode = '';
        } else {
            selectedErrorCode = errorCode;
        }
    }

    onMount(() => {
        for (const validationItem of validationData) {
            if (validationItem.code in summary[validationItem.severity]) {
                summary[validationItem.severity][validationItem.code].count++;
            } else {
                summary[validationItem.severity][validationItem.code] = { count: 1 };
            }
        }
        console.log(summary);
    });
</script>

<div>
    <div class="columns">
        <div class="column is-one-quarter">
            <aside class="menu">
                {#each Object.entries(summary) as [severityCode, errorItems]}
                    {#if Object.keys(errorItems).length}
                        <p class="menu-label">{severityNames[severityCode]}</p>
                        <ul class="menu-list">
                            {#each Object.entries(errorItems) as [errorCode, errorInfo]}
                                <li>
                                    <a href={'#'} class={selectedErrorCode === errorCode ? 'is-active' : ''} on:click={() => selectErrorCode(errorCode)}>
                                        <span class="tag is-info">{errorInfo.count}</span>
                                        {errorCode}
                                    </a>
                                </li>
                            {/each}
                        </ul>
                    {/if}
                {/each}
            </aside>
        </div>
        <div class="column" />
    </div>
</div>

<style>
</style>
