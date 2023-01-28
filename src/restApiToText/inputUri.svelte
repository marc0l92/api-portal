<script lang="ts">
    import { createEventDispatcher, onMount } from 'svelte';
    import { ApiMethods } from './restApiToText';
    const supportedMethodsStr = Object.keys(ApiMethods);

    let method = supportedMethodsStr[0];
    let uri = '/v1/reservation/chains/AAA/links/1234567890';
    let version = true;
    let capability = true;

    const dispatch = createEventDispatcher();
    function onUriChange() {
        // Rewrite query parameters
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('method', method);
        urlParams.set('uri', uri);
        urlParams.set('version', version ? '1' : '0');
        urlParams.set('capability', capability ? '1' : '0');
        window.history.pushState(null, null, '?' + urlParams.toString());

        dispatch('uriChange', { method, uri, version, capability });
    }

    onMount(() => {
        // Check query parameter
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has('method') && supportedMethodsStr.indexOf(urlParams.get('method')) >= 0) {
            method = urlParams.get('method');
        }
        if (urlParams.has('uri')) {
            uri = urlParams.get('uri');
        }
        if (urlParams.has('version')) {
            version = !!urlParams.get('version');
        }
        if (urlParams.has('capability')) {
            capability = !!urlParams.get('capability');
        }

        dispatch('uriChange', { method, uri, version, capability });
    });
</script>

<section class="box">
    <form>
        <div class="field has-addons">
            <div class="control">
                <div class="select">
                    <select bind:value={method} on:change={onUriChange}>
                        {#each supportedMethodsStr as supportedMethod}
                            <option value={supportedMethod}>{supportedMethod}</option>
                        {/each}
                    </select>
                </div>
            </div>
            <div class="control is-expanded">
                <input type="text" class="input" bind:value={uri} on:input={onUriChange} placeholder="Example: /v1/reservation/chains/AAA/links/1234567890" />
            </div>
        </div>
        <div class="level">
            <div class="level-left">
                <div class="level-item control">
                    <label class="checkbox">
                        <input type="checkbox" bind:checked={version} on:change={onUriChange} />
                        Version
                    </label>
                </div>
                <div class="level-item control">
                    <label class="checkbox">
                        <input type="checkbox" bind:checked={capability} on:change={onUriChange} />
                        Capability
                    </label>
                </div>
            </div>
        </div>
    </form>
</section>

<style>
    .box {
        background-color: var(--color-background-accent);
    }
</style>
