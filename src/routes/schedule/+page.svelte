<script>
  import { siteTitle } from '$lib/config'
  import Schedule from '$lib/components/Schedule.svelte'
  
</script>
<svelte:head>
	<title>{siteTitle}</title>
</svelte:head>
<h1>Program Schedule</h1>
<div class="container">
	<Schedule />
</div>
