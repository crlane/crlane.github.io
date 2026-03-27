<script lang="ts">
	let { children } = $props();
</script>

<svelte:head>
	<title>Cameron Lane</title>
</svelte:head>

<main>
	{@render children()}
</main>

<style>
	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(body) {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		color: #1a1a1a;
		background: #ffffff;
		line-height: 1.6;
	}

	:global(a) {
		color: #4a6fa5;
		text-decoration: none;
	}

	:global(a:hover) {
		text-decoration: underline;
	}

	main {
		max-width: 700px;
		margin: 0 auto;
		padding: 4rem 1.5rem;
	}
</style>
