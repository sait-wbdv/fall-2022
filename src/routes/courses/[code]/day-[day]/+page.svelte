<script>
  export let data;
</script>
<h1>{data.meta.title}</h1>
<time datetime={data.meta.date}>{data.meta.date}</time>
{@html data.lessonContent}