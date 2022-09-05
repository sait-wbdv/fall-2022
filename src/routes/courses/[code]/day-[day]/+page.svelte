<script>
  export let data;
</script>
<h1>{data.meta.title}</h1>
<time datetime={data.meta.date}>{data.meta.date}</time>
{#if data.meta.status === 'draft'}
<p>This lesson has not been released.</p>
{:else}
{@html data.lessonContent}
{/if}