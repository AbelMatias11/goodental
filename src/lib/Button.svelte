<script>
	export let href, target = '_self'
</script>

<a class="button" {href} {target}>
	<slot />
	<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
		<g fill-rule="evenodd">
			<path class="HoverArrow__linePath" d="M0 5h7"></path>
			<path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path>
		</g>
	</svg>
</a>

<style>
	a.button {
		font-size: 16px;
		background-color: var(--bkg);
		color: var(--color);
		border-radius: 24px;
	}

	a.button:hover, a.button:focus, a.button:active {
		background-color: var(--h_bkg);
		color: var(--h_color);
		outline: none;
	}

	.HoverArrow {
		stroke-width: 2px;
		fill: none;
		stroke: currentColor;
		margin-left: 5px;
	}

	.HoverArrow__linePath, .HoverArrow__tipPath  {
		transition: all 0.25s ease;
	}

	.HoverArrow__linePath {
		opacity: 0;
	}

	a:focus .HoverArrow__linePath,
	a:hover .HoverArrow__linePath,
	a:hover .HoverArrow__linePath {
		opacity: 1;
	}

	a:focus .HoverArrow__tipPath,
	a:hover .HoverArrow__tipPath,
	a:hover .HoverArrow__tipPath {
		transform: translateX(3px);
	}
</style>