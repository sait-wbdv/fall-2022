<script>
  export let data;
</script>

<h1>{data.meta.title}</h1>
<p>Weight: {data.meta.points}%</p>
{#if data.meta.due}
  <p>Due: <time datetime="{data.meta.due}">{data.meta.due}</time></p>
{:else}
  <p>Due: TBA</p>
{/if}

{@html data.content}