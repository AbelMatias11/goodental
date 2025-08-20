<script>
	import mapboxgl from 'mapbox-gl'
	import '../../mapbox.css'
	import { onMount, onDestroy } from "svelte"
    import SocialMedia from './SocialMedia.svelte';
    import { PUBLIC_MAPBOX } from '$env/static/public';

	let mapContainer, map, width;
	let center = [-71.54454633162405, -16.36971528627511];
	let zoom = 11;

	onMount(() => {
        if (width > 900) {
            center = [-71.50166123466381, -16.375960464307852]
            zoom = 12
        }
        
		mapboxgl.accessToken = PUBLIC_MAPBOX;
		map = new mapboxgl.Map({
			container: mapContainer, // container ID
			 style: 'mapbox://styles/mapbox/streets-v11',
			center: center, // starting position [lng, lat]
			zoom: zoom, // starting zoom
		});
		const geojson = {
			type: 'FeatureCollection',
			features: [
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [-71.54635865124519,-16.38957861592958]
					},
					properties: {
						title: 'Sede',
						description: 'Av. Ejército'
					}
				},
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [-71.54408580256991,-16.34362737225257]
					},
					properties: {
						title: 'Sede',
						description: 'Las Malvinas'
					}
				}
			]
		};
		// add markers to map
		for (const feature of geojson.features) {
			// create a HTML element for each feature
			const el = document.createElement('div');
			el.className = 'marker';

			// make a marker for each feature and add to the map
			new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates)
			.setPopup(
				new mapboxgl.Popup({ offset: 25 }) // add popups
				.setHTML(
					`<a href='https://goo.gl/maps/qC2jfY87K8N4ELgbA' target='_blank'>
						<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>
						</a>
					`
				)
			)
			.addTo(map);
		}
	});

	onDestroy(() => {
		if (typeof map !== 'undefined') {
			map.remove();
		}
	});

	function resizeMap() {
		map.resize();
	}
</script>

<svelte:head>
	<title>Contáctanos - Denta Vitalis Consultorio Dental en Arequipa</title>
	<meta name="description" content="Escríbenos a dentavitalisclinica@gmail.com o llámanos al (+51) 986 218 962. Estamos aquí para atender tus necesidades dentales. Atención de Lunes a Viernes de 9:30 a 20:00 y Sábados de 9:30 a 13:00">
	<meta name="keywords" content="Contacto, Denta Vitalis, Dentistas en Cayma, Implantes dentales 3D, Arequipa, Consultorio dental, Estética dental, Enmanuel Pacheco Chirinos">
</svelte:head>

<svelte:window on:resize={resizeMap}></svelte:window>

<article>
	<div class="form-wrapper">
		<form method="post">
			<h1>Contáctanos</h1>
			<p>Estamos aquí para ayudarte. Escríbenos y nos pondremos en contacto contigo lo más pronto posible.</p>
			<label for="nombre">
				<p>Nombre completo:</p>
				<input name="nombre" id="nombre" type="text" placeholder="ej: José Pérez" required>
			</label>
			<div class="labels">
				<label for="correo">
					<p>Correo electrónico:</p>
					<input name="correo" id="correo" type="email" placeholder="ej: ejemplo@123.com" required>
				</label>
				<label for="telefono">
					<p>Número de teléfono:</p>
					<input name="telefono" id="telefono" type="text" placeholder="ej: 987-654-321">
				</label>
			</div>
			<label for="razon">
				<p>Razón o motivo:</p>
				<textarea name="razon" id="razon" cols="40" rows="6" placeholder="Buenas, me gustaría preguntar sobre..." required></textarea>
			</label>
			<button type="submit">
				Enviar
				<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
					<g fill-rule="evenodd">
						<path class="HoverArrow__linePath" d="M0 5h7"></path>
						<path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path>
					</g>
				</svg>
			</button>
		</form>
	</div>
	<div class="map-wrapper">
		<div class="map" bind:this={mapContainer} bind:clientWidth={width}/>
	</div>
</article>

<style>
	article {
		display: flex;
		align-items: stretch;
	}
	.form-wrapper, .map-wrapper {
		flex: 1;
		position: relative;
	}
	.map {
		height: calc(854px + 11vw);
		position: absolute;
		z-index: 1;
		inset: 0;
	}
	form {
		display: flex;
		flex-direction: column;
		gap: 16px;
		padding: 128px 0;
		max-width: 474px;
		margin-left: auto;
		margin-right: 48px;
	}
	h1 {
		color: var(--teal);
	}

	.labels {
		display: flex;
    	gap: 16px;
	}
	.labels>* {
		flex: 1;
	}
	label {
		display: block;
	}
	label>p {
		color: var(--teal);
		font-weight: bold;
		font-size: 14px;
	}
	input, textarea, button {
		width: 100%;
		padding: 8px;
		border-radius: 8px;
		border: 1px solid #bdbdbd;
		font-size: 16px;
	}
	button {
		background-color: var(--teal);
		color: var(--white);
		border: 1px solid var(--teal);
		font-weight: bold;
	}

	input:focus, textarea:focus {
		outline: none;
		background-color: #a9fffe;
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

	button:focus .HoverArrow__linePath,
	button:hover .HoverArrow__linePath,
	button:hover .HoverArrow__linePath {
		opacity: 1;
	}

	button:focus .HoverArrow__tipPath,
	button:hover .HoverArrow__tipPath,
	button:hover .HoverArrow__tipPath {
		transform: translateX(3px);
	}

	@media (max-width: 1080px) {
		p {
			font-size: 16px;
		}
		.form-wrapper, .map-wrapper {
			display: flex;
			padding: 16px;
		}
		form {
			max-width: unset;
			margin-left: auto;
			margin-right: auto;
		}
		.map-wrapper {
			align-items: center;
		}
		.map {
			position: relative !important;
    		width: 100%;
			height: 60vh;
			border-radius: 24px;
		}
	}

	@media (max-width: 768px) {
		article {
			flex-direction: column;
		}
		form {
			padding: 0;
		}
		.labels {
			flex-direction: column;
		}
		.map {
			height: 40vh;
		}
	}
</style>