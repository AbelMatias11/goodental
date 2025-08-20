<script>
	import s1_1 from '$lib/images/sedes/consultorio.avif'
	import s1_2 from '$lib/images/sedes/2.webp'
	import s1_4 from '$lib/images/sedes/fachada2.webp'
	import s1_5 from '$lib/images/sedes/fachada3.webp'
	import s1_6 from '$lib/images/sedes/fachada.avif'
	import s1_7 from '$lib/images/sedes/doc_av_todos.webp'
	import neo_1 from '$lib/images/sedes/neo-1.avif'
	import neo_2 from '$lib/images/sedes/neo-2.avif'
	import neo_3 from '$lib/images/sedes/neo-3.avif'
	import neo_4 from '$lib/images/sedes/neo-4.avif'
	import neo_5 from '$lib/images/sedes/neo-5.avif'
	import modelo from '$lib/images/sedes/modelo.avif'
	import modelo2 from '$lib/images/sedes/modelo2.avif'

	const images = [
		neo_1, neo_2, neo_3, neo_5, neo_4,
		s1_1, s1_2, s1_4, s1_5, s1_6, s1_7,
		modelo, modelo2
	]

	let active = 0

	function gotoUnit(index) {
		active = index
	}

	function setActive(target) {
		if (target instanceof HTMLElement) {
			let num_elements = images.length - 1;
			let total = target.scrollWidth - target.clientWidth;
			let ratio = target.scrollLeft / total;
			if (ratio === 0) {
				active = 0;
			} else if (ratio === 1) {
				active = num_elements;
			} else {
				active = Math.round(ratio * num_elements);
			}
		}
	}
</script>

<article>
	<h1>Dale un vistazo a nuestros <strong>consultorios</strong></h1>
	<p>En <strong>DENTA VITALIS</strong> contamos con consultorios modernos equipados con la última tecnología</p>
	<div class="container" on:scroll={(e) => setActive(e.target)}>
		{#each images as image, index}
			<img id="carousel-{index}" src={image} alt="Parte del carrusel">
		{/each}
	</div>
	<div class="links">
		{#each { length: images.length } as _, index}
			<a href="#carousel-{index}" class:active={active == index} on:click={()=>{gotoUnit(index)}}>
				<svg width="10" height="10" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="3" cy="3" r="3" fill="#D9D9D9"/>
				</svg>
			</a>
		{/each}
	</div>
</article>

<style>
	.links {
		margin-top: 32px;
	}
	a {
		display: inline-block;
		padding-inline: 2px;
		margin-inline: 4px;
		text-decoration: none;
	}
	.active circle {
		fill: var(--teal);
	}
	article {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 16px;
	}
	article h1 {
		text-align: center;
    	max-width: 1080px;
		margin-bottom: 32px;
	}
	article p {
		text-align: center;
		margin-bottom: 32px;
	}
	.container {
		display: flex;
		gap: 32px;
	}
	.container {
		width: 100%;
		max-width: 1080px;
		overflow-x: scroll;
		scroll-snap-type: x mandatory;
        -ms-overflow-style: none; 
        scrollbar-width: none;
	}
	.container::-webkit-scrollbar {
        display: none;
    }
	img {
		scroll-snap-align: center;
		aspect-ratio: 1080 / 720;
		height: 720px;
		object-fit: cover;
		display: block;
		border-radius: 64px;
		width: 100%;
		max-width: 1080px;
	}
	@media (max-width: 700px){
		img {
			aspect-ratio: 1 / 1;
			height: 450px;
		}
	}
</style>