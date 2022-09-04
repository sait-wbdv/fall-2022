<script>	
	export let data;
	const courseLabel = data.code.toUpperCase().replace('-', ' ')
</script>


<svelte:head>
	<title>{courseLabel} Assessments</title>
</svelte:head>

<h1>{courseLabel} Assessments</h1>
{#each data.assessments as assessment}
	{#if assessment.status === 'published'}
		<a href="assessments/{assessment.slug}">
			<article>
				<h2>{assessment.title}</h2>
				<p>Weight: {assessment.points}%</p>
				{#if assessment.due}
					<p>Due: {assessment.due}</p>
				{:else}
					<p>Due: TBA</p>
				{/if}
			</article>
		</a>
	{:else}
		<article>
			<h2>{assessment.title}</h2>
			<p>Weight: {assessment.points}%</p>
			{#if assessment.due}
				<p>Due: {assessment.due}</p>
			{:else}
				<p>Due: TBA</p>
			{/if}
		</article>
	{/if}
{/each}