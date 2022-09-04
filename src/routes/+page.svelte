<script>
import { siteTitle } from '$lib/config'
import { schedule } from '$lib/schedule'
export let data

</script>


<svelte:head>
	<title>{siteTitle}</title>
</svelte:head>
<h1>Program Schedule</h1>
<div class="container">
	{#each schedule as week, index}
	<section class="week">
		<h2>Week {index + 1}</h2>
		{#each week as day}
		<article>
			{#if day.type == 'lesson'}
			<a href="courses/{day.code}/day-{day.day}">
				<h3 class="{day.code}">{day.code} - Day {day.day}</h3>
				<time>{day.date}</time>
			</a>
			{:else}
			<h3 class="holiday">{day.label}</h3>
			<time>{day.date}</time>
			{/if}
		</article>
		{/each}
	</section>
	{/each}
</div>


{@html data.ReadMe}
<!-- This is the README.md file in the root of the repo. It serves double duty as the homepage's content. If you'd rather use your own HTML and/or Svelte, you can delete/modify everything in this file. -->