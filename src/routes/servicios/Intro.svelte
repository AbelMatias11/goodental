<script>
	import src from '$lib/images/servicios/notas.avif'
	import Button from '$lib/Button.svelte'
</script>


<section>
	<div class="text-container">
		<svg width="96" height="32" viewBox="0 0 96 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M15.0344 3.58633C15.3 2.59965 16.6999 2.59964 16.9656 3.58633L19.2444 12.0499C19.3371 12.3941 19.6059 12.6629 19.95 12.7556L28.4137 15.0344C29.4004 15.3 29.4004 16.6999 28.4137 16.9656L19.9501 19.2444C19.6059 19.3371 19.3371 19.6059 19.2444 19.95L16.9656 28.4137C16.7 29.4004 15.3001 29.4004 15.0344 28.4137L12.7556 19.9501C12.6629 19.6059 12.3941 19.3371 12.0499 19.2444L3.58633 16.9656C2.59965 16.7 2.59964 15.3001 3.58633 15.0344L12.0499 12.7556C12.3941 12.6629 12.6629 12.3941 12.7556 12.05L15.0344 3.58633Z" fill="#009bb3"/>
			<path d="M47.0344 3.58633C47.3 2.59965 48.6999 2.59964 48.9656 3.58633L51.2444 12.0499C51.3371 12.3941 51.6059 12.6629 51.95 12.7556L60.4137 15.0344C61.4004 15.3 61.4004 16.6999 60.4137 16.9656L51.9501 19.2444C51.6059 19.3371 51.3371 19.6059 51.2444 19.95L48.9656 28.4137C48.7 29.4004 47.3001 29.4004 47.0344 28.4137L44.7556 19.9501C44.6629 19.6059 44.3941 19.3371 44.0499 19.2444L35.5863 16.9656C34.5996 16.7 34.5996 15.3001 35.5863 15.0344L44.0499 12.7556C44.3941 12.6629 44.6629 12.3941 44.7556 12.05L47.0344 3.58633Z" fill="#009bb3"/>
			<path d="M79.0344 3.58633C79.3 2.59965 80.6999 2.59964 80.9656 3.58633L83.2444 12.0499C83.3371 12.3941 83.6059 12.6629 83.95 12.7556L92.4137 15.0344C93.4004 15.3 93.4004 16.6999 92.4137 16.9656L83.9501 19.2444C83.6059 19.3371 83.3371 19.6059 83.2444 19.95L80.9656 28.4137C80.7 29.4004 79.3001 29.4004 79.0344 28.4137L76.7556 19.9501C76.6629 19.6059 76.3941 19.3371 76.0499 19.2444L67.5863 16.9656C66.5996 16.7 66.5996 15.3001 67.5863 15.0344L76.0499 12.7556C76.3941 12.6629 76.6629 12.3941 76.7556 12.05L79.0344 3.58633Z" fill="#009bb3"/>
		</svg>
		<h1>Nuestros Servicios</h1>
		<p>
			Desde el bienestar de la odontología general, hasta la corrección de
			imperfecciones cosméticas, restauración de implantes y hasta esas dolorosas
			emergencias orales, DENTA VITALIS lo tiene cubierto.
		</p>
		<Button
			href="https://wa.me/+51986218962?text=Buenas,%20quisiera%20reservar%20una%20cita%20para%20el%20..."
			target="_blank"
			--bkg="#009bb3" --color="var(--white)" --h_bkg="var(--blue)" --h_color="var(--white)"
		>Reserva tu cita ahora</Button>
	</div>
	<div class="image-container">
		<img {src} alt="Aquí viene el texto alternativo de los servicios" height="419">
	</div>
</section>

<style>
	section, .text-container {
		display: flex;
	}
	section {
		flex-direction: column-reverse;
	}
	.text-container {
		align-items: flex-start;
		flex-direction: column;
		padding: 0 16px;
		gap: 16px;
	}
	.image-container {
		padding: 16px;
	}
	img {
		width: 100%;
		height: 400px;
		object-fit: cover;
		border-radius: 48px;
		box-shadow: #0000003d 0px 4px 4px 0px;
	}

	@media (min-width: 768px) {
		section {
			flex-direction: row;
			align-items: center;
			max-width: 1080px;
			margin: 96px auto;
		}
		section > * {
			flex: 1;
		}
	}
</style>