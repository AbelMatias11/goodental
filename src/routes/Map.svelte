<script>
    import location from '$lib/svg/location.svg'
    import mapboxgl from 'mapbox-gl'
    import '../mapbox.css'
    import { onMount, onDestroy } from "svelte"
    import { PUBLIC_MAPBOX } from '$env/static/public';

    let mapContainer, map;

    onMount(() => {
        mapboxgl.accessToken = PUBLIC_MAPBOX;
        map = new mapboxgl.Map({
            container: mapContainer, // container ID
             style: 'mapbox://styles/mapbox/streets-v11',
            center: [-71.5460, -16.3653], // starting position [lng, lat]
            zoom: 11, // starting zoom
        });
        const geojson = {
            type: 'FeatureCollection',
            features: [
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
                },
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
                    `<a href='https://www.google.com/maps/place/Av.+Brigadier+Mateo+Pumacahua+312,+Cerro+Colorado+04017/@-16.3791776,-71.5574096,19z/data=!3m1!4b1!4m6!3m5!1s0x91424a13c7debca1:0x17e7f73924fa76e1!8m2!3d-16.3791776!4d-71.5567659!16s%2Fg%2F11h_462nzh?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D' target='_blank'>
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
</script>

<section>
    <aside class="white">
        <div class="container">
            <h1>Estamos cerca de tí</h1>
            <p>Visítanos en Cerro Colorado </p>
            <img src={location} alt="Location icon">
        </div>
    </aside>
    <div class="map" bind:this={mapContainer} />
</section>

<style>
    section {
		padding: 96px 16px;
	}
    aside {
        background-image: url('$lib/images/background.png');
        margin: var(--margin);
        aspect-ratio: 1;
        background-size: cover;
        border-radius: 32px;
        padding: 12px;
    }
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 16px;
        height: 100%;
        border: 1px solid var(--white);
        border-radius: 24px;
    }
    .container > * {
        max-width: 380px;
    }
    .map {
        margin: 0 24px;
        aspect-ratio: 1;
        border-radius: 32px;
    }

    @media (min-width: 768px) {
        section {
            display: flex;
            gap: 32px;
            max-width: 1080px;
            margin: auto;
            width: 80%;
        }
        .white, .map {
            width: 50%;
            margin: 0;
        }
    }
</style>