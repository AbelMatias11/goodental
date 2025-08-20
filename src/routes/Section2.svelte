<script>
	import tools from '$lib/svg/tools.svg'
	import dentist from "$lib/images/sedes/doc_av_todos.webp";
    import Button from '$lib/Button.svelte';
    import Pbox from './Pbox.svelte';
</script>

<article class="a1080">
	<div class="text-container column">
        <img src={tools} alt="Icono con herramientas de dentista" />
		<h1>Odontología para todos!</h1>
		<p>
			Más de 9 años a tu lado. Contamos con un equipo altamente
            calificado para asegurarnos de brindarte el mejor tratamiento.
		</p>
		<Button href="/nosotros" --bkg="var(--teal)" --color="white" --h_bkg="#d5f0f3" --h_color="var(--teal)">
			Más sobre nosotros
		</Button>
	</div>
	<div class="img-container">
		<Pbox --d="0" --w="200px" --h="200px" --i="auto auto 0 0" color="var(--teal)"/>
		<Pbox --d="0.666s" --w="140px" --h="140px" --i="0 0 auto auto" color="var(--blue)"/>
		<Pbox --d="0.333s" --w="80px"  --h="80px"  --i="auto 0 0 auto" color="var(--dark-blue)"/>
		<img src={dentist} alt="Dentista">
	</div>
</article>

<style>

	article {
		display: flex;
		padding: 96px 16px;
		gap: 32px;
		align-items: center;
	}

	.text-container {
		flex: 1;
		gap: 18px;
		align-items: center;
	}

	.img-container {
		position: relative;
		flex: 1;
		height: 503px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.img-container img{
		border-radius: 16px;
		display: block;
		width: 90%;
		object-fit: cover;
        filter: grayscale(1);
        transform: scale(0.95);
        transition: all 0.3s ease;
	}

    .img-container img:hover{
        filter: grayscale(0);
        transform: scale(1);
	}

    h1 {
        color: var(--teal);
    }

    h1::first-line {
		color: black;
	}

	@media (max-width: 980px) {
		.img-container img{
			filter: grayscale(0);
        	transform: scale(1);
		}
	}

	@media (max-width: 767px) {
		article {
			flex-direction: column;
		}
		.img-container {
			padding: 24px 0;
		}
	}
</style>