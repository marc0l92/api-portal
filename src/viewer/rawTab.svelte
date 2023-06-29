<script lang="ts">
    import { API_TO_VALIDATE_INDENTATION } from 'cli/cliConstants';
    import { minimalSetup } from 'codemirror';
    import { lineNumbers } from '@codemirror/view';
    import { foldGutter } from '@codemirror/language';
    import CodeMirror from 'svelte-codemirror-editor';
    import { githubLight } from '@uiw/codemirror-theme-github';
    import { json } from '@codemirror/lang-json';

    export let apiDoc: any = null;
    let apiText = '';

    const codeMirrorExtensions = [minimalSetup, lineNumbers(), foldGutter()];

    $: apiText = JSON.stringify(apiDoc, null, API_TO_VALIDATE_INDENTATION);
</script>

<div class="block">
    <div class="field">
        <div class="control">
            <CodeMirror theme={githubLight} editable={true} readonly={true} value={apiText} lang={json()} basic={false} extensions={codeMirrorExtensions} />
        </div>
    </div>
</div>

<style>
</style>
