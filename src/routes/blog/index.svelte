<script lang="ts">
	import posts from '$lib/utils/blog';

	import Profile from '$lib/Profile/Profile.svelte';
</script>

<svelte:head>
	<title>R-BT - About</title>
	<meta name="description" content="All the posts I've written" />
</svelte:head>

<Profile title="Blog" />

<div class="content">
	{#each posts as post}
		<article class="post">
			<a href={post.permalink} sveltekit:prefetch>
				<h3>{post.metadata.title}</h3>
				<p>{post.metadata.abstract}</p>
				<span class="read-more">
					<span>Read more</span>
					<span class="arrow"> →</span>
				</span>
			</a>
		</article>
	{/each}
</div>

<style>
	div.content {
		padding-top: 3rem;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(min(350px, 100%), 1fr));
		gap: 3rem;
	}

	@media (max-width: 900px) {
		div.content {
			flex-direction: column;
		}

		article {
			padding-right: 0;
		}
	}

	article.post {
		box-sizing: border-box;
		padding-right: 2rem;
		min-width: 50%;
	}

	article.post h3 {
		font-size: 22px;
		font-weight: 500;
	}

	article.post > a {
		text-decoration: none;
		display: block;
	}

	article.post span {
		position: relative;
	}

	article.post span:after {
		bottom: -4px;
		content: '';
		display: block;
		height: 2px;
		left: 0;
		position: absolute;
		background: black;
		transition: width 0.3s ease 0s, left 0.3s ease 0s;
		width: 0;
	}

	article.post span:hover:after {
		width: 125%;
	}

	article span.arrow {
		visibility: hidden;
	}

	article:hover span.arrow {
		visibility: visible;
	}

	article span.read-more {
		font-weight: bold;
	}
</style>
