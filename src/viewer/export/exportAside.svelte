<script lang="ts">
    import { AsideTabsName } from './export';
    import { exportOptions } from './exportOptions';

    export let apiHash: string;
    export let selected: AsideTabsName;
    export let apiServicesCount: number;
</script>

<aside class="menu">
    <p class="menu-label">Export</p>
    <ul class="menu-list">
        <li>
            <a href={''} class={selected === AsideTabsName.RELEASE_NOTES ? 'is-active' : ''} on:click|preventDefault={() => (selected = AsideTabsName.RELEASE_NOTES)}>
                <button
                    class="icon-button fa-regular fa-square{$exportOptions.releaseNotes.enable ? '-check' : ''}"
                    on:click={() => ($exportOptions.releaseNotes.enable = !$exportOptions.releaseNotes.enable)}
                />
                Release notes
            </a>
        </li>
        <li>
            <a href={''} class={selected === AsideTabsName.API ? 'is-active' : ''} on:click|preventDefault={() => (selected = AsideTabsName.API)}>
                <button class="icon-button fa-regular fa-square{$exportOptions.api.enable ? '-check' : ''}" on:click={() => ($exportOptions.api.enable = !$exportOptions.api.enable)} />
                Api
            </a>
        </li>
        <li>
            <a href={''} class={selected === AsideTabsName.DIAGRAMS ? 'is-active' : ''} on:click|preventDefault={() => (selected = AsideTabsName.DIAGRAMS)}>
                <button class="icon-button fa-regular fa-square{$exportOptions.diagrams.enable ? '-check' : ''}" on:click={() => ($exportOptions.diagrams.enable = !$exportOptions.diagrams.enable)} />
                Diagrams
            </a>
        </li>
        <li>
            <a href={''} class={selected === AsideTabsName.SPREADSHEET ? 'is-active' : ''} on:click|preventDefault={() => (selected = AsideTabsName.SPREADSHEET)}>
                <button
                    class="icon-button fa-regular fa-square{$exportOptions.spreadSheet.enable ? '-check' : ''}"
                    on:click={() => ($exportOptions.spreadSheet.enable = !$exportOptions.spreadSheet.enable)}
                />
                SpreadSheet
            </a>
        </li>
    </ul>
    <p class="menu-label">Filters</p>
    <ul class="menu-list">
        <li>
            <a href={''} class={selected === AsideTabsName.TAGS ? 'is-active' : ''} on:click|preventDefault={() => (selected = AsideTabsName.TAGS)}>
                <div class="columns">
                    <div class="column">Tags</div>
                    <div class="column is-narrow">
                        {#if $exportOptions.apisOptions[apiHash] && $exportOptions.apisOptions[apiHash].tags.length > 0}
                            <span class="tag is-small">{$exportOptions.apisOptions[apiHash].tags.length}</span>
                        {/if}
                    </div>
                </div>
            </a>
        </li>
        <li>
            <a href={''} class={selected === AsideTabsName.SERVICES ? 'is-active' : ''} on:click|preventDefault={() => (selected = AsideTabsName.SERVICES)}>
                <div class="columns">
                    <div class="column">Services</div>
                    <div class="column is-narrow">
                        {#if $exportOptions.apisOptions[apiHash] && apiServicesCount - $exportOptions.apisOptions[apiHash].servicesToExclude.length > 0}
                            <span class="tag is-small">{apiServicesCount - $exportOptions.apisOptions[apiHash].servicesToExclude.length}</span>
                        {/if}
                    </div>
                </div>
            </a>
        </li>
    </ul>
</aside>

<style>
    .icon-button {
        background: transparent;
        border: 0;
        padding: 0;
        font-size: 16px;
        color: #4a4a4a;
        cursor: pointer;
    }
    .is-active .icon-button {
        color: #fff;
    }
    .tag.is-small {
        height: 1.5em;
        padding-left: 0.5em;
        padding-right: 0.5em;
    }
</style>
