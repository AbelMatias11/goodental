<script>
	import { page } from '$app/stores'
    import Card from './Card.svelte'
    import Intro from './Intro.svelte'
	import img1 from '$lib/images/servicios/estetica.webp'
	import img2 from '$lib/images/servicios/rehabilitacion.webp'
	import img3 from '$lib/images/servicios/conducto-dental.webp'
	import img4 from '$lib/images/servicios/cirugia.webp'
	import img5 from '$lib/images/servicios/prevencion.webp'
	import img6 from '$lib/images/servicios/periodoncia.webp'
	import img7 from '$lib/images/servicios/implantes.webp'
	import img8 from '$lib/images/servicios/ortodoncia.webp'
	import img9 from '$lib/images/servicios/odontopediatria.webp'

	export let data
	let selected = 'estetica'
	let images = [img1, img2, img3, img4, img5, img6, img7, img8, img9]

	for (const categoria of data.categorias) {
		if ($page.url.hash === '#' + categoria.slug)
			selected = categoria.slug
	}
</script>

<svelte:head>
	<title>Nuestros Servicios Dentales en Arequipa - Denta Vitalis</title>
	<meta name="description" content="Ofrecemos una amplia gama de servicios dentales en Arequipa, incluyendo estética dental, rehabilitación dental, cirugía oral, implantes dentales 3D y más.">
</svelte:head>

<Intro />

<div class="container">
{#each data.categorias as categoria (categoria.id)}
	<div class="categoria" id={categoria.slug}>
		<button
			type="button"
			on:click={()=>{ selected = (selected == categoria.slug) ? -1 : categoria.slug}}
			aria-expanded={selected == categoria.slug}
			aria-controls={categoria.slug + '-body'}
		>
			<img src={images[categoria.id]} alt={categoria.name} width="48"/>
			<span>{categoria.name}</span>
			{#if selected == categoria.slug}
				<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M22 18L14 10L6 18" stroke="#009bb3" stroke-width="4" stroke-linecap="square"/>
				</svg>
			{:else}
				<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M6 10L14 18L22 10" stroke="#009bb3" stroke-width="4" stroke-linecap="square"/>
				</svg>
			{/if}
		</button>
		<div
			id={categoria.slug + '-body'} class="grid"
			class:open={selected == categoria.slug}
			aria-hidden={selected != categoria.slug}
		>
			<div class="servicios">
				{#each categoria.services as servicio}
					<Card {servicio} />
				{/each}
			</div>
		</div>
	</div>
{/each}
</div>


<style>
    .grid {
        display: grid;
		max-height: 0;
        transition: max-height 300ms ease-in-out;
    }

    .grid.open {
		max-height: 1300px;
    }

	.container {
		padding: 16px;
		max-width: 1080px;
		margin: auto;
		margin-bottom: 64px;
	}

	.categoria {
		overflow: hidden;
	}

	.categoria button {
		position: relative;
        display: flex;
		align-items: center;
		width: 100%;
		gap: 6px;

		padding: 16px 0;
		border: none;

		background-color: transparent;
		color: #009bb3;

		font-weight: bold;
		text-align: left;
		font-size: 24px;
		line-height: 26px;
	}

	button:hover {
		color: var(--blue);
	}
    
    .servicios {
        overflow: hidden;
        columns: 3 240px;
        column-gap: 16px;
    }

	button>span {
		flex: 8;
	}

	button>svg {
		flex: 1;
		width: 18px;
		height: 18px;
	}

	@media (min-width: 900px) {
		.categoria button {
			font-size: 36px;
    		line-height: 48px;
		}
		button>svg {
			width: 28px;
			height: 28px;
		}
	}
</style>