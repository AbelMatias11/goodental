<section>
	<video loop autoplay muted>
		<track kind="captions">
		<source src="/gray.webm" type="video/mp4" />
		<source src="/gray.mp4" type="video/mp4">
	</video>
	<div class="flex">
		<h1>Cuidamos tu sonrisa con la mejor tecnología</h1>
		<p>
			En <strong class="white">DENTA VITALIS</strong> te
			brindamos la atención y el seguimiento que te mereces.
		</p>
		<a class="button" href="https://wa.me/+51986218962?text=Buenas,%20quisiera%20reservar%20una%20cita%20para%20el%20..." target="_blank">
			Contáctanos
			<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
				<g fill-rule="evenodd">
					<path class="HoverArrow__linePath" d="M0 5h7"></path>
					<path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path>
				</g>
			</svg>
		</a>
	</div>
</section>

<style>
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

	section {
		position: relative;
		height: 600px;
		background: #007b7a54;
		border-radius: 48px;
		max-width: 1080px;
		margin: 64px auto 0;
	}
	.flex {
		padding: 16px;
		display: flex;
		flex-direction: column;
		gap: 18px;
		align-items: center;
		justify-content: center;
		text-align: center;
		color: #fff;
		height: inherit;
	}
	.flex>* {
		max-width: 980px;
	}
	video {
		position: absolute;
		z-index: -1;
		inset: 0;
		width: 100%;
		min-width: 100%;
		height: inherit;
		object-fit: cover;
		border-radius: 48px;
	}

	a.button {
		border: 1px solid white;
		color: white;
		-webkit-backdrop-filter: blur(10px);
		backdrop-filter: blur(10px);
		border-radius: 24px;
	}
	a.button:hover, a.button:focus, a.button:active {
		background: white;
		color: var(--teal);
		outline: none;
	}
	
	@media (max-width: 980px) {
		section, video {
			border-radius: 0;
		}
	}
</style>