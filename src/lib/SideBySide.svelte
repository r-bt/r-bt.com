<div class="container">
	<div>
		<slot name="left" />
	</div>
	<div><slot name="right" /></div>
</div>

<style>
	div {
		display: flex;
	}

	div > div {
		flex: 1 0 0;
		min-width: 50%;
		display: flex;
		justify-content: center;
	}
</style>
