<script>
  import { courses } from '$lib/courses'
</script>


<svelte:head>
	<title>Courses</title>
</svelte:head>

<h1>Courses</h1>
<section class="course-list">
	{#each courses as course}
	{#if course.type === 'technical'}
	<a href="courses/{course.code}">
		<article class="course">
			<h2>{course.code.toUpperCase().replace('-', ' ')}</h2>
			<h3>{course.title}</h3>
			<p>Days: {course.days}</p>
		</article>
	</a>
	{/if}
	{/each}
</section>