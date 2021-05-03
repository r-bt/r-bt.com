<script>
	export let title = 'R-BT';

	// Images
	import profile from './profile.jpg?w=50;100&format=webp&srcset';
	import email from './email.svg';
	import twitter from './twitter.svg';
	import github from './github.svg';
	import linkedin from './linkedin.svg';
</script>

<div class="profile">
	<div class="image-wrapper">
		<img alt="Richard Beattie" srcset={profile} />
	</div>

	<div>
		<h1>{title}</h1>
		<div class="links">
			<a href="mailto:richard.beattie91@gmail.com"><img src={email} alt="Email Richard" /></a>
			<a href="https://twitter.com/r_bt_"><img src={twitter} alt="Richard's Twitter" /></a>
			<a href="https://github.com/r-bt"><img src={github} alt="Richard's Github" /></a>
			<a href="https://www.linkedin.com/in/richard--beattie/"
				><img src={linkedin} alt="Richard's LinkedIn" /></a
			>
		</div>
	</div>
</div>

<style>
	div.profile {
		display: flex;
		align-items: center;
	}

	div.image-wrapper {
		width: 100px;
		height: 100px;
		flex: 0 0 100px;
	}

	.profile > .image-wrapper > img {
		width: 100px;
		height: 100px;
		display: inline-block;
		padding: 0;
	}

	.profile > div {
		padding-right: 2rem;
	}

	div.links > a {
		margin-right: 0.5rem;
	}

	div.links > a > img {
		width: 25px;
	}
</style>
