<script>
	import { page } from '$app/stores';
	import Profile from '$lib/Profile/Profile.svelte';

	export let title;
	export let seoTitle;
	export let description;
</script>

<svelte:head>
	<title>{seoTitle}</title>
	<meta name="twitter:title" content={title} />
	<meta property="og:title" content={title} />

	<meta name="description" content={description} />
	<meta name="twitter:description" content={description} />
	<meta property="og:description" content={description} />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content="@r_bt_" />
	<meta name="twitter:creator" content="@r_bt_" />
	<meta name="twitter:image" content="https://r-bt.com/profile.jpg" />

	<meta property="og:type" content="article" />
	<meta property="og:url" content="{$page.host}{$page.path}" />
	<meta property="og:image" content="https://r-bt.com/profile.jpg" />
	<meta property="og:site_name" content="R-BT Blog" />
</svelte:head>

<Profile {title} />

<div class="article">
	<slot />
</div>

<style>
	div.article {
		max-width: 700px;
	}

	:global(img) {
		max-width: 100%;
	}
</style>
