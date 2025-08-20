<script>
	import Carousel from 'svelte-carousel'
	import { browser } from '$app/environment'
  
	let carousel // for calling methods of the carousel instance
	
	let width
	$: cards = width > 600 ? (width > 900 ? 3 : 2) : 1

	const handleNextClick = () => {
	  carousel.goToNext()
	}
	const handlePrevClick = () => {
	  carousel.goToPrev()
	}
</script>

<svelte:window bind:innerWidth={width} />
  
{#if browser}
	<div class="arrows">
		<button type="button" title="Anterior" on:click={handlePrevClick}>
			<svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
				<mask id="mask0_60_104" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="33" height="34">
				<path d="M0 33.644L33 33.644L33 0.644043L2.88495e-06 0.64404L0 33.644Z" fill="white"/>
				</mask>
				<g mask="url(#mask0_60_104)">
				<path d="M1.51802 18.7941L11.187 28.4631C12.078 29.3541 13.563 29.3541 14.454 28.4631C15.345 27.5721 15.345 26.0871 14.454 25.1961L8.74502 19.4541L29.8651 19.4541C31.1521 19.4541 32.175 18.4311 32.175 17.1441C32.175 15.8571 31.1521 14.8341 29.8651 14.8341L8.74502 14.8341L14.454 9.1251C15.345 8.2341 15.345 6.7491 14.454 5.8581C13.992 5.3961 13.398 5.1651 12.804 5.1651C12.21 5.1651 11.616 5.3961 11.154 5.8581L1.51802 15.4941C1.08902 15.9231 0.825021 16.5171 0.825021 17.1441C0.825021 17.7711 1.05602 18.3651 1.51802 18.7941Z" fill="#1C77A2"/>
				</g>
			</svg>
		</button>
		<button type="button" title="Siguiente" on:click={handleNextClick}>
			<svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
				<mask id="mask0_60_102" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="33" height="34">
				<path d="M33 0.644043H0V33.644H33V0.644043Z" fill="white"/>
				</mask>
				<g mask="url(#mask0_60_102)">
				<path d="M31.482 15.494L21.813 5.82499C20.922 4.93399 19.437 4.93399 18.546 5.82499C17.655 6.71599 17.655 8.20099 18.546 9.09199L24.255 14.834H3.13495C1.84795 14.834 0.824951 15.857 0.824951 17.144C0.824951 18.431 1.84795 19.454 3.13495 19.454H24.255L18.546 25.163C17.655 26.054 17.655 27.539 18.546 28.43C19.008 28.892 19.602 29.123 20.196 29.123C20.79 29.123 21.384 28.892 21.846 28.43L31.482 18.794C31.911 18.365 32.175 17.771 32.175 17.144C32.175 16.517 31.944 15.923 31.482 15.494Z" fill="#1C77A2"/>
				</g>
			</svg>
		</button>
	</div>
	<Carousel bind:this={carousel}
		particlesToShow={cards}
		initialPageIndex=1
		arrows={false}
		dots={false}
	>
		<div class="card-container"><div class="card">
			<svg width="80" height="56" viewBox="0 0 80 56" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M0 37.3333C0 47.6429 8.13999 56 18.1818 56C28.2235 56 36.3635 47.6429 36.3635 37.3333C36.3635 27.1506 28.4183 18.8774 18.547 18.6765C23.1374 14.0547 29.4244 11.1997 36.3635 11.1997V0C16.2808 0 0 16.7151 0 37.3333ZM80 0C59.9175 0 43.6365 16.7151 43.6365 37.3333C43.6365 47.6429 51.7775 56 61.8183 56C71.8601 56 80 47.6429 80 37.3333C80 27.1506 72.0548 18.8774 62.1835 18.6765C66.774 14.0547 73.0618 11.1997 80 11.1997V0Z" fill="#FFFCF9"/>
			</svg>
			<div class="comentario">
				Muy profesionales y atentos, un buen lugar para la atención dental que es muy importante. Además que el equipamiento es el mejor!
			</div>
			<div class="autor">
				Mauricio Gamboa
			</div>
		</div></div>
		<div class="card-container"><div class="card">
			<svg width="80" height="56" viewBox="0 0 80 56" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M0 37.3333C0 47.6429 8.13999 56 18.1818 56C28.2235 56 36.3635 47.6429 36.3635 37.3333C36.3635 27.1506 28.4183 18.8774 18.547 18.6765C23.1374 14.0547 29.4244 11.1997 36.3635 11.1997V0C16.2808 0 0 16.7151 0 37.3333ZM80 0C59.9175 0 43.6365 16.7151 43.6365 37.3333C43.6365 47.6429 51.7775 56 61.8183 56C71.8601 56 80 47.6429 80 37.3333C80 27.1506 72.0548 18.8774 62.1835 18.6765C66.774 14.0547 73.0618 11.1997 80 11.1997V0Z" fill="#FFFCF9"/>
			</svg>
			<div class="comentario">
				Fuí hace unos meses para la extracción de muelas de mi hija. Excelente servicio a niños y público en general. Totalmente recomendado!
			</div>
			<div class="autor">
				Vanessa Huillca
			</div>
		</div></div>
		<div class="card-container"><div class="card">
			<svg width="80" height="56" viewBox="0 0 80 56" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M0 37.3333C0 47.6429 8.13999 56 18.1818 56C28.2235 56 36.3635 47.6429 36.3635 37.3333C36.3635 27.1506 28.4183 18.8774 18.547 18.6765C23.1374 14.0547 29.4244 11.1997 36.3635 11.1997V0C16.2808 0 0 16.7151 0 37.3333ZM80 0C59.9175 0 43.6365 16.7151 43.6365 37.3333C43.6365 47.6429 51.7775 56 61.8183 56C71.8601 56 80 47.6429 80 37.3333C80 27.1506 72.0548 18.8774 62.1835 18.6765C66.774 14.0547 73.0618 11.1997 80 11.1997V0Z" fill="#FFFCF9"/>
			</svg>
			<div class="comentario">
				Un consultorio con grandes profesionales, y sobretodo con muy buena atención y amabilidad. Mis dientes derechitos en poco tiempo
			</div>
			<div class="autor">
				Ana Belén Cuba
			</div>
		</div></div>
	</Carousel>
{/if}

<style>
	.arrows {
		display: flex;
		justify-content: space-between;
		width: 100%;
		padding: 0 var(--margin);
	}

	.arrows * {
		display: block;
		padding: 0;
		margin: 0;
		border: none;
	}

	button {
		background-color: transparent;
	}

	button:active path{
		fill: var(--teal);
	}

	.card-container {
		padding: 0 calc(var(--margin));
	}

	.card {
		-webkit-user-select: none;
		user-select: none;
		height: 342px;
		list-style: none;
		cursor: pointer;
		display: grid;
		grid-template-rows: 1fr 1.5fr 1fr;
		gap: 16px;
		border-radius: 48px;
		padding: 24px;
		background-color: var(--teal);
		color: var(--white);
	}

	.card > * {
		text-align: center;
		font-weight: bold;
		line-height: 20px;
		align-self: center;
	}
</style>