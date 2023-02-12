<script lang="ts">
    import type { ApiReleaseNotes } from 'common/api';

    export let releaseNotes: ApiReleaseNotes = null;
</script>

<div>
    {JSON.stringify(releaseNotes)}
</div>

<style>
</style>
