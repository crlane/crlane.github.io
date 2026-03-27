<script lang="ts">
	import type { Project } from '$lib/data';

	let { project }: { project: Project } = $props();
</script>

<article>
	{#if project.url}
		<h3><a href={project.url} target="_blank" rel="noopener noreferrer">{project.name}</a></h3>
	{:else}
		<h3>{project.name}</h3>
	{/if}
	<p>{project.description}</p>
	{#if project.tags?.length}
		<ul>
			{#each project.tags as tag}
				<li>{tag}</li>
			{/each}
		</ul>
	{/if}
</article>

<style>
	article {
		padding: 1.25rem;
		border: 1px solid #e5e5e5;
		border-radius: 6px;
	}

	h3 {
		font-size: 1.1rem;
		margin-bottom: 0.5rem;
	}

	p {
		font-size: 0.95rem;
		color: #555;
	}

	ul {
		display: flex;
		gap: 0.5rem;
		list-style: none;
		margin-top: 0.75rem;
	}

	li {
		font-size: 0.8rem;
		color: #666;
		background: #f5f5f5;
		padding: 0.15rem 0.5rem;
		border-radius: 3px;
	}
</style>
