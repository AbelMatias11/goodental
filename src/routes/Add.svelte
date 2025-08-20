<script>
	import mobile from '$lib/images/sillar.avif'
	import desktop from '$lib/images/arequipa-ciudad-1x.avif'
	import desktop2x from '$lib/images/arequipa-ciudad-2x.avif'

	import bandera from '$lib/images/bandera-1x.avif'
	import bandera2x from '$lib/images/bandera-2x.avif'

	import escarapela from '$lib/images/escarapela-1x.avif'
	import escarapela2x from '$lib/images/escarapela-2x.avif'
    import { onMount } from 'svelte';

	let initial = true

	onMount(() => {
		setTimeout(()=>{
			initial = false
		}, 500)
	})
</script>

<div class="container">
	<picture>
		<source media="(max-width: 767px)" srcset={mobile}>
		<source media="(min-width: 768px)" srcset={`${desktop}, ${desktop2x} 2x`}>
		<img src={desktop} alt="Ciudad de Arequipa">
	</picture>
	<img
		class="bandera"
		src={bandera}
		srcset={`${bandera} 1x, ${bandera2x} 2x`}
		alt="Bandera de Arequipa"
	>
	<img
		class="escarapela"
		src={escarapela}
		srcset={`${escarapela} 1x, ${escarapela2x} 2x`}
		alt="Escarapela de Arequipa"
	>
	<div class="text" class:initial>
		<p>Sonreímos por</p>
		<p class="big">AREQUIPA</p>
	</div>
</div>

<style>
	.container {
		position: relative;
	}
	.bandera {
		position: absolute;
		top: 0;
		width: 630px;
		height: 408px;
		left: 0;
	}
	.escarapela {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 10%;
		width: 228px;
	}
	.text {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		width: 100%;
		transition: all 1s ease-out;
	}
	.text.initial {
		transform: translate(-150%, -50%)
	}
	.text>p {
		font-size: 64px;
		font-weight: 600;
		line-height: 64px;
		color: #8D0031;
	}
	.text>p.big {
		font-size: 90px;
		font-style: italic;
		font-weight: 900;
		line-height: 98px;
		color: #0087C9;
	}
	picture, picture>img {
		width: 100%;
		display: block;
		height: 550px;
		object-fit: cover;
	}
	@media (max-width: 1000px) {
		.bandera {
			left: -25%;
		}
	}
	@media (max-width: 767px) {
		picture, picture>img {
			height: 600px;
		}
		.bandera {
			top: -3%;
			left: 0;
			width: 100%;
    		height: auto;
		}
		.escarapela {
			right: 50%;
			transform: translateY(-50%) translateX(50%);
			width: 180px;
		}
		.text {
			top: 85%;
		}
		.text>p {
			font-size: 32px;
			line-height: 36px;
		}
		.text>p.big {
			font-size: 45px;
			line-height: 52px;
		}
	}
</style>