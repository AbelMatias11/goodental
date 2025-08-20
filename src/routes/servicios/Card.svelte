<script>
	export let servicio
</script>

<article class="servicio">
	<div class="img"></div>
	<div class="text">
		<h1>{servicio.name}</h1>
		<p>{servicio.content}</p>
	</div>
</article>

<style>
	.servicio {
		background-color: #d2ffff;
		margin-bottom: 16px;
		break-inside: avoid;
		border-radius: 24px;
	}

	h1 {
		font-size: 24px;
		line-height: 28px;
		width: 100%;
	}

	.servicio a {
		padding: 4px 16px;
		background-color: var(--teal);
		color: var(--white);
		text-decoration: none;
		border-radius: 18px;
	}

	.text {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 12px;
		padding: 24px;
	}
</style>
