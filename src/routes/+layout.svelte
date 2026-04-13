<script>
	import { onMount } from 'svelte'
	import { page } from '$app/stores'
	import logo from '$lib/images/logo.png'
	
    import Footer from './Footer.svelte'

	let isActive = false, width, clientHeight
	let currentY
	let previousY

	let navLinks = [
		{ href: "/", name: "Inicio" },
		{ href: "/nosotros", name: "Nosotros" },
		{ href: "/servicios", name: "Servicios" },
		{ href: "/sedes", name: "Sedes" },
		{ href: "/contacto", name: "Contáctanos" }
	]

	function burgerBtn() {
		if (isActive) {
			document.body.style.overflow = 'auto'
			isActive = false
		} else {
			window.scrollTo(0, 0);
			document.body.style.overflow = 'hidden'
			isActive = true
		}
	}

		function deriveDirection(y) {
		const direction = !previousY || previousY < y ? 'down' : 'up'
		previousY = y

		return direction
	}

		$: if (isActive && width > 767) {
		document.body.style.overflow = 'auto'
		isActive = false
	}
	$: scrollDirection = deriveDirection(currentY)
	$: offscreen = scrollDirection === 'down' && currentY > clientHeight * 2
</script>

<svelte:window
	bind:innerWidth={width}
	bind:scrollY={currentY}
/>

<header class:hidden={offscreen} bind:clientHeight>
	<nav aria-label="Navegación principal" class="a1080 p16 space-between">
		<a class="no-animation" href="/" title="Inicio">
			<img src={logo} alt="Logo de Denta Vitalis" height="64">
		</a>
		<ul class:change={isActive}>
			{#each navLinks as { href, name }}
				<li>
					<a
						aria-current={$page.url.pathname == href ? 'page' : false}
						on:click={burgerBtn}
						{href}
					>
						{name}
					</a>
				</li>
			{/each}

		</ul>
		<button id="burger-btn" class:change={isActive} on:click={burgerBtn} type="button" title="Menú">
			<div class="bb" id="bb1" />
			<div class="bb" id="bb2" />
			<div class="bb" id="bb3" />
		</button>
	</nav>
	<div class="address-container">
		<address>
			<a href="mailto:goodentalodontologia@gmail.com">Escríbenos a goodentalodontologia@gmail.com</a>
			<a href="tel:+51961262613"> llámanos al (+51) 961 262 613</a>
		</address>
	</div>
	<a class="reserva" href="https://wa.me/+5491127784086?text=Buenas,%20quisiera%20reservar%20una%20cita%20para%20el%20..." target="_blank">
		<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M5 22C4.6 22 4.25 21.85 3.95 21.55C3.65 21.25 3.5 20.9 3.5 20.5V5C3.5 4.6 3.65 4.25 3.95 3.95C4.25 3.65 4.6 3.5 5 3.5H6.625V2H8.25V3.5H16.75V2H18.375V3.5H20C20.4 3.5 20.75 3.65 21.05 3.95C21.35 4.25 21.5 4.6 21.5 5V20.5C21.5 20.9 21.35 21.25 21.05 21.55C20.75 21.85 20.4 22 20 22H5ZM5 20.5H20V9.75H5V20.5ZM5 8.25H20V5H5V8.25ZM12.5 14C12.2167 14 11.9792 13.9042 11.7875 13.7125C11.5958 13.5208 11.5 13.2833 11.5 13C11.5 12.7167 11.5958 12.4792 11.7875 12.2875C11.9792 12.0958 12.2167 12 12.5 12C12.7833 12 13.0208 12.0958 13.2125 12.2875C13.4042 12.4792 13.5 12.7167 13.5 13C13.5 13.2833 13.4042 13.5208 13.2125 13.7125C13.0208 13.9042 12.7833 14 12.5 14ZM8.5 14C8.21667 14 7.97917 13.9042 7.7875 13.7125C7.59583 13.5208 7.5 13.2833 7.5 13C7.5 12.7167 7.59583 12.4792 7.7875 12.2875C7.97917 12.0958 8.21667 12 8.5 12C8.78333 12 9.02083 12.0958 9.2125 12.2875C9.40417 12.4792 9.5 12.7167 9.5 13C9.5 13.2833 9.40417 13.5208 9.2125 13.7125C9.02083 13.9042 8.78333 14 8.5 14ZM16.5 14C16.2167 14 15.9792 13.9042 15.7875 13.7125C15.5958 13.5208 15.5 13.2833 15.5 13C15.5 12.7167 15.5958 12.4792 15.7875 12.2875C15.9792 12.0958 16.2167 12 16.5 12C16.7833 12 17.0208 12.0958 17.2125 12.2875C17.4042 12.4792 17.5 12.7167 17.5 13C17.5 13.2833 17.4042 13.5208 17.2125 13.7125C17.0208 13.9042 16.7833 14 16.5 14ZM12.5 18C12.2167 18 11.9792 17.9042 11.7875 17.7125C11.5958 17.5208 11.5 17.2833 11.5 17C11.5 16.7167 11.5958 16.4792 11.7875 16.2875C11.9792 16.0958 12.2167 16 12.5 16C12.7833 16 13.0208 16.0958 13.2125 16.2875C13.4042 16.4792 13.5 16.7167 13.5 17C13.5 17.2833 13.4042 17.5208 13.2125 17.7125C13.0208 17.9042 12.7833 18 12.5 18ZM8.5 18C8.21667 18 7.97917 17.9042 7.7875 17.7125C7.59583 17.5208 7.5 17.2833 7.5 17C7.5 16.7167 7.59583 16.4792 7.7875 16.2875C7.97917 16.0958 8.21667 16 8.5 16C8.78333 16 9.02083 16.0958 9.2125 16.2875C9.40417 16.4792 9.5 16.7167 9.5 17C9.5 17.2833 9.40417 17.5208 9.2125 17.7125C9.02083 17.9042 8.78333 18 8.5 18ZM16.5 18C16.2167 18 15.9792 17.9042 15.7875 17.7125C15.5958 17.5208 15.5 17.2833 15.5 17C15.5 16.7167 15.5958 16.4792 15.7875 16.2875C15.9792 16.0958 16.2167 16 16.5 16C16.7833 16 17.0208 16.0958 17.2125 16.2875C17.4042 16.4792 17.5 16.7167 17.5 17C17.5 17.2833 17.4042 17.5208 17.2125 17.7125C17.0208 17.9042 16.7833 18 16.5 18Z" fill="#0FB3B2"/>
		</svg>
		<span>Reserva una cita</span>
		<span>Atención: Lunes a Viernes 9:00 - 18:00 </span>
	</a>
</header>

<main class:change={isActive}>
	<slot />
</main>

<Footer />

<style>

	header {
		background: white;
		position: sticky;
		top: 0;
		z-index: 3;
		transition: transform 0.3s ease-in;
	}
	header.hidden {
		transform: translateY(-100%);
	}
	@media (prefers-reduced-motion) {
		header.hidden {
			transform: translateY(0);
		}
	}
	nav {
		height: 80px;
	}
	ul {
		display: flex;
		gap: 18px;
		list-style: none;
		align-items: center;
	}

	a {
		position: relative;
		display: block;
		text-decoration: none;
		color: var(--text);
		font-weight: 500;
	}

	li>a::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 3px;
		background-color: black;
		bottom: 0;
		left: 0;
		transform-origin: right;
		transform: scaleX(0);
		transition: transform .3s ease-in-out;
	}
	li>a:focus, li>a:active {
		outline: transparent;
	}
	li>a:hover::before, li>a:focus::before, li>a:active::before {
		transform-origin: left;
		transform: scaleX(1);
	}

	a.no-animation:hover, a.no-animation:focus, a.no-animation:active {
		transform: scale(1.05);
	}	

	li>a[aria-current='page'] {
		color: var(--teal);
	}

	li>a[aria-current='page']::before {
		background-color: var(--teal);
	}

	/* Burger Btn ============================ */
	#burger-btn {
		display: none;
		position: absolute;
		right: 16px;
		padding: 10px 5px;
		border: none;
		background-color: transparent;
		flex-direction: column;
		align-items: flex-end;
		gap: 3px;
		z-index: 4;
	}
	.bb {
		height: 5px;
		border-radius: 3px;
		transition: 0.4s;
	}
	#bb1 {
		width: 36px;
		background-color: var(--teal);
	}
	#bb2 {
		width: 31px;
		background-color: var(--blue);
	}
	#bb3 {
		width: 26px;
		background-color: var(--dark-gray);
	}

	.change #bb1 { transform: translate(0, 7px) rotate(-45deg) }
	.change #bb2 { opacity: 0 }
	.change #bb3 {
		transform: translate(0, -8px) rotate(45deg);
		width: 36px;
		background-color: var(--teal);
	}


	@media (max-width: 767px){
		address {
			display: none;
		}
		nav {
			justify-content: center;
		}
		nav>ul {
			display: none;
			position: absolute;
			height: 100vh;
			height: 100dvh;
			width: 100vw;
			width: 100dvw;
			flex-direction: column;
			justify-content: center;
			top: 0;
			left: 0;
			background: white;
			z-index: 3;
		}
		#burger-btn {
			display: flex;
		}
		ul.change {
			display: flex;
		}
		li>a {
			font-size: 24px;
		}
	
	}

	/* Headers =============================== */

	address, .reserva {
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: 500;
		font-style: normal;
	}
	address {
		background-color: var(--teal);
	}
	address > a {
		color: var(--white);
		text-decoration: none;
	}
	address > a:first-child {
		display: none;
	}
	.address-container {
		background-color: var(--teal);
	}

	.reserva {
		text-decoration: none;
		position: relative;
    	z-index: 2;
		background-color: var(--white);
		color: var(--teal);
		gap: 4px;
		box-shadow: #0000003d 0px 4px 4px 0px;
	}

	.reserva > *:nth-child(3) {
		display: none;
	}

	@media (min-width: 768px) {
		address > a:first-child {
			display: block;
		}
		address {
			gap: 16px;
		}
		.reserva > *:nth-child(2) {
			display: none;
		}
		.reserva > *:nth-child(3) {
			display: block;
		}
	}
	@media (min-width: 924px) {
		address {
			padding: 0 16px;
			max-width: 1080px;
			margin: auto;
			justify-content: space-between;
		}
		address {
			justify-content: flex-end;
		}
	}
</style>