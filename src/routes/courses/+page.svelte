<script>
  import { courses } from '$lib/courses'
</script>


<svelte:head>
	<title>Courses</title>
</svelte:head>

<h1>Courses</h1>
{#each courses as course}
<a href="courses/{course.code}">
	<article>
		<h2>{course.title}</h2>
		<p>Days: {course.days}</p>
	</article>
</a>
{/each}