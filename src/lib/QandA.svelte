<script>
	export let question = '';
	export let answer = '';
</script>

<div class="container">
	<div class="emoji">❓</div>
	<div>
		<h4>{question}</h4>
		<p>{answer}</p>
	</div>
</div>

<style>
	div.container {
		border-radius: 4px;
		background: rgba(235, 236, 237, 0.3) none repeat scroll 0% 0%;
		padding: 12px 16px;
		display: flex;
	}

	div.emoji {
		min-width: 60px;
		font-size: 40px;
		text-align: center;
	}

	h4 {
		font-weight: 600;
	}

	p {
		margin-bottom: 0;
	}
</style>
