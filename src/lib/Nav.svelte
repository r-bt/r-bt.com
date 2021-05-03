<script>
	import { page } from '$app/stores';
</script>

<nav>
	<ul>
		<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Home</a></li>
		<li class:active={$page.path.match('/about((/.*$)|$)')}>
			<a sveltekit:prefetch href="/about">About</a>
		</li>
		<li class:active={$page.path.match('/blog((/.*$)|$)')}>
			<a sveltekit:prefetch href="/blog">Blog</a>
		</li>
		<li class:active={$page.path.match('/learning((/.*$)|$)')}>
			<a sveltekit:prefetch href="/learning">Learning</a>
		</li>
		<li class:active={$page.path.match('/mit((/.*$)|$)')}>
			<a sveltekit:prefetch href="/mit">MIT</a>
		</li>
		<li class:active={$page.path.includes('/links((/.*$)|$)')}>
			<a sveltekit:prefetch href="/links">Links</a>
		</li>
	</ul>
</nav>

<style>
	nav {
		font-weight: 300;
		padding: 0 2em;
		margin: auto;
	}

	ul {
		list-style: none;
	}

	li {
		padding: 1rem 0;
	}

	a {
		text-decoration: none;
		position: relative;
		padding: 0.2rem;
	}

	li.active {
		font-weight: 500;
	}

	a:after {
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

	a:hover:after {
		width: 150%;
	}

	@media (max-width: 600px) {
		ul {
			padding: 0;
		}
		li {
			display: inline-block;
			padding: 0 1rem 1rem 0;
			margin-top: 0.3rem;
		}

		a:hover:after {
			width: 120%;
		}
	}
</style>
