<script>
    import nosotros from "$lib/images/sedes/doc_av_todos.webp";
    import smile from "$lib/svg/smile.svg";
    import Tech from "./Tech.svelte";
    import Funciona from "./Funciona.svelte";
</script>

<svelte:head>
	<title>Conoce a Denta Vitalis - Nuestra Historia y Equipo</title>
	<meta name="description" content="Descubre quiénes somos y conoce al Dr. Enmanuel Pacheco Chirinos, experto en implantes dentales 3D. Odontología para todos en Arequipa.">
</svelte:head>

<div class="container">
	<section class="header">
		<div class="frame p24 fcol flex16">
			<div class="gradient"/>
			<img src={nosotros} alt="Dentista" />
			<div class="flex16 fcol">
				<h1>
					Nuestro lema:
					<strong>Odontología</strong>
					para todos!
				</h1>
				<p>
					Más de 9 años a tu lado. Contamos con un equipo altamente calificado
					para asegurarnos de brindarte el mejor tratamiento.
				</p>
			</div>
		</div>
		<div class="spacer" />
	</section>
	
	<section class="mision-vision fcol">
		<article class="flex16 fcol p24">
			<svg width="318" height="120" viewBox="0 0 318 120" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M125.725 113.335H122.531V53.7253H173.642C174.489 53.7253 175.302 53.3948 175.901 52.8063C176.5 52.2179 176.836 51.42 176.836 50.5879V3.52786C176.836 2.6957 176.5 1.89779 175.901 1.30941C175.302 0.721042 174.489 0.390503 173.642 0.390503H119.336C118.489 0.390503 117.676 0.721042 117.078 1.30941C116.478 1.89779 116.142 2.6957 116.142 3.52786V113.335H112.947C112.1 113.335 111.288 113.665 110.689 114.254C110.09 114.842 109.753 115.64 109.753 116.472C109.753 117.304 110.09 118.102 110.689 118.691C111.288 119.279 112.1 119.609 112.947 119.609H125.725C126.573 119.609 127.385 119.279 127.984 118.691C128.583 118.102 128.92 117.304 128.92 116.472C128.92 115.64 128.583 114.842 127.984 114.254C127.385 113.665 126.573 113.335 125.725 113.335Z" fill="#0FB3B2" />
				<path d="M202.392 16.0771H186.42C185.572 16.0771 184.76 16.4077 184.161 16.996C183.562 17.5844 183.225 18.3825 183.225 19.2144V56.8626C183.225 57.6946 182.889 58.4927 182.29 59.081C181.691 59.6693 180.878 59.9999 180.031 59.9999H148.086C147.239 59.9999 146.427 60.3304 145.828 60.9187C145.228 61.5071 144.892 62.3052 144.892 63.1372V66.2746C144.892 67.1066 145.228 67.9047 145.828 68.493C146.427 69.0814 147.239 69.4119 148.086 69.4119H202.392C203.24 69.4119 204.052 69.0814 204.65 68.493C205.25 67.9047 205.585 67.1066 205.585 66.2746V19.2144C205.585 18.3825 205.25 17.5844 204.65 16.996C204.052 16.4077 203.24 16.0771 202.392 16.0771Z" fill="#0FB3B2" />
				<path d="M292.312 67.304L292.303 67.3396L292.291 67.3752L288.592 80.3953L284.92 67.4687L284.908 67.4329L284.899 67.3975C284.235 65.2236 282.499 63.5424 280.348 62.909L280.314 62.8988L280.28 62.8893L267.341 59.3433L280.28 55.7975L280.314 55.7881L280.348 55.7779C282.499 55.1443 284.235 53.4633 284.899 51.2893L284.908 51.2537L284.92 51.2182L288.607 38.2357L292.293 51.1303L292.303 51.1631L292.312 51.1958C292.976 53.3698 294.712 55.0509 296.863 55.6843L296.897 55.6946L296.931 55.704L309.87 59.25L296.931 62.7958L296.897 62.8053L296.863 62.8155C294.712 63.4489 292.976 65.1301 292.312 67.304Z" fill="#155A7E" stroke="#155A7E" stroke-width="4" />
				<path d="M32.9709 67.304L32.9601 67.3396L32.9499 67.3752L29.2502 80.3953L25.5772 67.4687L25.5669 67.4329L25.5561 67.3975C24.8921 65.2236 23.1568 63.5424 21.0067 62.909L20.972 62.8988L20.9374 62.8893L8 59.3433L20.9374 55.7975L20.972 55.7881L21.0067 55.7779C23.1568 55.1443 24.8921 53.4633 25.5561 51.2893L25.5669 51.2537L25.5772 51.2182L29.2661 38.2357L32.9516 51.1303L32.9608 51.1631L32.9709 51.1958C33.6349 53.3698 35.3703 55.0509 37.5203 55.6843L37.5548 55.6946L37.5896 55.704L50.527 59.25L37.5896 62.7958L37.5548 62.8053L37.5203 62.8155C35.3703 63.4489 33.6349 65.1301 32.9709 67.304Z" fill="#155A7E" stroke="#155A7E" stroke-width="4" />
			</svg>
			<div class="flex16 fcol content">
				<h2>Misión</h2>
				<p>
					Proporcionar atención dental integral y de alta calidad para mejorar
					la salud bucal y la calidad de vida de nuestros pacientes. Ofrecer
					tratamientos personalizados, basados en la última tecnología y
					enfoques médicos innovadores, manteniendo un ambiente cálido y
					acogedor para nuestros pacientes.
				</p>
			</div>
		</article>
		<article class="flex16 fcol p24">
			<svg width="318" height="116" viewBox="0 0 318 116" fill="none" xmlns="http://www.w3.org/2000/svg" >
				<path d="M291.971 66.0683L291.961 66.1039L291.95 66.1395L288.251 79.1596L284.578 66.233L284.567 66.1972L284.558 66.1618C283.893 63.9879 282.157 62.3067 280.007 61.6733L279.973 61.6631L279.939 61.6536L267 58.1076L279.939 54.5618L279.973 54.5524L280.007 54.5421C282.157 53.9085 283.893 52.2275 284.558 50.0536L284.567 50.018L284.578 49.9824L288.266 37L291.952 49.8946L291.961 49.9274L291.971 49.9601C292.635 52.134 294.371 53.8152 296.521 54.4486L296.556 54.4588L296.59 54.4683L309.528 58.0143L296.59 61.5601L296.556 61.5695L296.521 61.5798C294.371 62.2132 292.635 63.8944 291.971 66.0683Z" fill="#155A7E" stroke="#155A7E" stroke-width="4" />
				<path d="M32.9709 66.0683L32.9601 66.1039L32.9499 66.1395L29.2502 79.1596L25.5772 66.233L25.5669 66.1972L25.5561 66.1618C24.8921 63.9879 23.1568 62.3067 21.0067 61.6733L20.972 61.6631L20.9374 61.6536L8 58.1076L20.9374 54.5618L20.972 54.5524L21.0067 54.5421C23.1568 53.9085 24.8921 52.2275 25.5561 50.0536L25.5669 50.018L25.5772 49.9824L29.2661 37L32.9516 49.8946L32.9608 49.9274L32.9709 49.9601C33.6349 52.134 35.3703 53.8152 37.5203 54.4486L37.5548 54.4588L37.5896 54.4683L50.527 58.0143L37.5896 61.5601L37.5548 61.5695L37.5203 61.5798C35.3703 62.2132 33.6349 63.8944 32.9709 66.0683Z" fill="#155A7E" stroke="#155A7E" stroke-width="4" />
				<path d="M156.31 5.45096C157.41 3.22123 160.59 3.22122 161.69 5.45096L175.348 33.1242C175.785 34.0096 176.629 34.6233 177.607 34.7653L208.146 39.2029C210.606 39.5605 211.589 42.5844 209.808 44.32L187.71 65.8606C187.003 66.5498 186.68 67.5428 186.847 68.516L192.064 98.9318C192.484 101.383 189.912 103.251 187.711 102.094L160.396 87.7339C159.522 87.2745 158.478 87.2745 157.604 87.7339L130.289 102.094C128.088 103.251 125.516 101.383 125.936 98.9318L131.153 68.516C131.32 67.5428 130.997 66.5498 130.29 65.8606L108.192 44.32C106.411 42.5844 107.394 39.5605 109.854 39.2029L140.393 34.7653C141.371 34.6233 142.215 34.0096 142.652 33.1242L156.31 5.45096Z" fill="#0FB3B2" />
			</svg>
			<div class="flex16 fcol content">
				<h2>Visión</h2>
				<p>
					Convertirnos en líderes reconocidos a nivel nacional en la
					prestación de servicios odontológicos excepcionales. Ser una
					referencia en la industria por nuestra excelencia,
					investigación continua y enfoque en la educación tanto para nuestros
					pacientes como para nuestro equipo de profesionales.
				</p>
			</div>
		</article>
	</section>
	
	<Tech />
	
	<Funciona />
	
	<section class="familia">
		<img src={smile} alt="Icono con sonrisa y estrellas" />
		<h2>Conoce a nuestro <strong>equipo</strong></h2>
		<div class="grinder a1080 p16">
			<div id="first">Dra. Pilar Escobedo Zegarra</div>
			<div id="second">Dr. Enmanuel Pacheco Chirinos</div>
			<div id="third">Asis. Lorena Salazar Loaiza</div>
			<div id="fifth">Dr. Sergio Cárdenas Zenteno</div>
			<div id="sixth">Dra. Ana Belén Alva</div>
		</div>
	</section>
</div>


<style>

	.grinder {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 300px 300px 300px 300px 300px;
		gap: 32px;
		margin: 96px auto;
	}

	.grinder > * {
		border-radius: 32px;
		display: flex;
		align-items: flex-end;
		justify-content: flex-start;
		padding: 16px;
		font-size: 24px;
		font-weight: bold;
		color: white;
		box-shadow: inset rgba(50, 50, 50, 0.25) 0px 0px 10px 5px;
		--colorx: #001a19b3;
		line-height: 28px;
		transition: all 300ms ease;
	}

	.grinder > *:hover {
		--colorx: #001211d3;
		padding-bottom: 32px;
	}

	#first {
		grid-row-start: 2;
		grid-row-end: 3;
		background-image: linear-gradient(0deg, var(--colorx) , transparent 75%), url(/src/lib/images/nosotros/doc_av_1.webp);
	}
	#second {
		grid-row-start: 1;
		grid-row-end: 1;
		background-image: linear-gradient(0deg, var(--colorx) , transparent 75%), url(/src/lib/images/nosotros/doc_av_3.webp);
	}
	#third {
		background-image: linear-gradient(0deg, var(--colorx) , transparent 75%), url(/src/lib/images/nosotros/doc_av_2.webp);
	}
	#fifth {
		background-image: linear-gradient(0deg, var(--colorx) , transparent 75%), url(/src/lib/images/nosotros/doc_cayma_2.webp);
	}
	#sixth {
		background-image: linear-gradient(0deg, var(--colorx) , transparent 75%), url(/src/lib/images/nosotros/doc_cayma_3.webp);
	}

	.container {
		display: flex;
		flex-direction: column;
		gap: 64px;
	}
	.gradient {display: none;}

	.flex16 {
		display: flex;
		gap: 16px;
	}
	.fcol {
		flex-direction: column;
	}
	.header > .frame {
		width: 100%;
		color: var(--white);
	}
	.spacer {
		aspect-ratio: 900/100;
		width: 100%;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		background-image: url('$lib/svg/stacked-waves-bottom.svg');
	}
	.header {
		background-color: var(--teal);
	}
	.frame img {
		border-radius: 32px;
		position: relative;
		z-index: 1;
	}
	.frame strong {
		color: var(--dark-blue);
	}
	/* ==================== */
	.mision-vision{
		display: flex;
		gap: 64px;
	}
	.p24 {
		padding: 24px;
	}
	.mision-vision svg {
		width: 120px;
		height: auto;
		margin: auto;
	}
	/* ==================== */
	.familia {
		align-items: center;
		text-align: center;
	}
	.familia > * {
		padding: 0 var(--margin);
	}

	#first, #third {
		background-size: auto 110%;
		background-position: 28% 14%;
	}
	#first:hover,
	#third:hover { background-size: auto 125%; }


	#second {
		background-position: 25%;
		background-size: auto 100%;
	}
	#second:hover { background-size: auto 110% }


	#sixth {
		background-size: auto 110%;
		background-position: 5% 14%;
	}
	#sixth:hover { background-size: auto 125% }


	#fifth {
		background-position: 90%;
		background-size: auto 100%;
	}
	#fifth:hover { background-size: auto 110% }

	@media (min-width: 768px) {

		.grinder {
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 330px 330px 300px;
		}	

		#second {
			grid-row-start: 1;
			grid-row-end: 3;
		}

		.gradient {
			display: block;
			position: absolute;
			background: linear-gradient(to right, var(--dark-blue), var(--teal));
			right: 0;
			width: calc(50% - 48px);
			top: -10px;
			bottom: -10px;
			border-radius: 32px;
		}

		.frame {
			position: relative;
			flex-direction: row-reverse;
			align-items: center;
			gap: 32px;
			padding: 16px;
			max-width: 1080px;
			margin: 96px auto 48px;
		}
		.frame>img, .frame>.flex16{
			width: calc(50% - 16px);
		}
		.familia>img, .familia>h2 {
			max-width: 540px;
			margin: auto;
		}

		.mision-vision {
			max-width: 1080px;
			margin: auto;
		}
		.mision-vision svg {
			width: auto;
			height: 120px;
		}
		.mision-vision>article:nth-child(1) {
			flex-direction: row;
			gap: 32px;
			padding: 0 16px;
		}
		.mision-vision>article:nth-child(2) {
			flex-direction: row-reverse;
			gap: 32px;
			padding: 16px;
		}
		.mision-vision>article>* {
			flex: 1;
		}
	}

	@media (min-width: 480px) and (max-width: 767px) {
		#first, #third, #second, #sixth, #fifth {
			background-size: 100% auto;
			background-position: 28% 14%;
		}
		#first:hover,
		#second:hover,
		#third:hover,
		#fifth:hover,
		#sixth:hover { background-size: 115% auto; }
	}
</style>