
<script>
	import white_logo from '$lib/images/white_logo.png'
	import Button from '$lib/Button.svelte'
</script>

<div class="test">
	<svg class="spacer" id="visual" width="900" height="100" viewBox="0 0 900 100" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M0 60L25 64C50 68 100 76 150 75.2C200 74.3 250 64.7 300 57C350 49.3 400 43.7 450 48.3C500 53 550 68 600 74.3C650 80.7 700 78.3 750 80C800 81.7 850 87.3 875 90.2L900 93V12L875 11.5C850 11 800 10 750 15.5C700 21 650 33 600 32.3C550 31.7 500 18.3 450 18.3C400 18.3 350 31.7 300 37.2C250 42.7 200 40.3 150 32.8C100 25.3 50 12.7 25 6.3L0 0V60Z" fill="#A1D9D8"/>
		<path d="M0 100C300 100 600 100 900 100V92.0001L875 89.2001C850 86.3001 800 80.7001 750 79.0001C700 77.3001 650 79.7001 600 73.3001C550 67.0001 500 52.0001 450 47.3001C400 42.7001 350 48.3001 300 56.0001C250 63.7001 200 73.3001 150 74.2001C100 75.0001 50 67.0001 25 63.0001L0 59.0001V100Z" fill="#0FB3B2"/>
	</svg>
</div>
<footer>
	<div class="horizontal">
		<div class="img-div">
			<img src={white_logo} alt="Logo Denta Vitalis" width="270">
			<Button
				href="https://wa.me/+51986218962?text=Buenas,%20quisiera%20reservar%20una%20cita%20para%20el%20..."
				target="_blank"
				--bkg="var(--white)" --color="var(--teal)" --h_bkg="var(--blue)" --h_color="var(--white)"
			>
				Reserva tu cita ahora
			</Button>
		</div>
		<address>
			<h3>
				Información de contacto:
			</h3>
			<div>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g clip-path="url(#clip0_57_47)">
					<path d="M12 2.00049C8.13 2.00049 5 5.13049 5 9.00049C5 14.2505 12 22.0005 12 22.0005C12 22.0005 19 14.2505 19 9.00049C19 5.13049 15.87 2.00049 12 2.00049ZM12 11.5005C10.62 11.5005 9.5 10.3805 9.5 9.00049C9.5 7.62049 10.62 6.50049 12 6.50049C13.38 6.50049 14.5 7.62049 14.5 9.00049C14.5 10.3805 13.38 11.5005 12 11.5005Z" fill="white"/>
					</g>
					<defs>
					<clipPath id="clip0_57_47">
					<rect width="24" height="24" fill="white" transform="translate(0 0.000488281)"/>
					</clipPath>
					</defs>
				</svg>
				Urb. José Olaya F-11 - Las Malvinas
			</div>
			<a href="https://maps.app.goo.gl/tZZEoRz8zyQBxJZx5" title="Abrir en Google Maps">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g clip-path="url(#clip0_57_47)">
					<path d="M12 2.00049C8.13 2.00049 5 5.13049 5 9.00049C5 14.2505 12 22.0005 12 22.0005C12 22.0005 19 14.2505 19 9.00049C19 5.13049 15.87 2.00049 12 2.00049ZM12 11.5005C10.62 11.5005 9.5 10.3805 9.5 9.00049C9.5 7.62049 10.62 6.50049 12 6.50049C13.38 6.50049 14.5 7.62049 14.5 9.00049C14.5 10.3805 13.38 11.5005 12 11.5005Z" fill="white"/>
					</g>
					<defs>
					<clipPath id="clip0_57_47">
					<rect width="24" height="24" fill="white" transform="translate(0 0.000488281)"/>
					</clipPath>
					</defs>
				</svg>
				Calle Tronchadero 203 - C.M. Cayma
			</a>
			<a href="tel:+51986218962" title="Llamar">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g clip-path="url(#clip0_57_41)">
					<path d="M20.01 15.3805C18.78 15.3805 17.59 15.1805 16.48 14.8205C16.13 14.7005 15.74 14.7905 15.47 15.0605L13.9 17.0305C11.07 15.6805 8.42 13.1305 7.01 10.2005L8.96 8.54049C9.23 8.26049 9.31 7.87049 9.2 7.52049C8.83 6.41049 8.64 5.22049 8.64 3.99049C8.64 3.45049 8.19 3.00049 7.65 3.00049H4.19C3.65 3.00049 3 3.24049 3 3.99049C3 13.2805 10.73 21.0005 20.01 21.0005C20.72 21.0005 21 20.3705 21 19.8205V16.3705C21 15.8305 20.55 15.3805 20.01 15.3805Z" fill="white"/>
					</g>
					<defs>
					<clipPath id="clip0_57_41">
					<rect width="24" height="24" fill="white" transform="translate(0 0.000488281)"/>
					</clipPath>
					</defs>
				</svg>
				(+51) 986-218-962
			</a>
			<a href="mailto:dentavitalisclinica@gmail.com" title="Escribir correo">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g clip-path="url(#clip0_57_37)">
					<path d="M20 4.00049H4C2.9 4.00049 2.01 4.90049 2.01 6.00049L2 18.0005C2 19.1005 2.9 20.0005 4 20.0005H20C21.1 20.0005 22 19.1005 22 18.0005V6.00049C22 4.90049 21.1 4.00049 20 4.00049ZM20 18.0005H4V8.00049L12 13.0005L20 8.00049V18.0005ZM12 11.0005L4 6.00049H20L12 11.0005Z" fill="white"/>
					</g>
					<defs>
					<clipPath id="clip0_57_37">
					<rect width="24" height="24" fill="white" transform="translate(0 0.000488281)"/>
					</clipPath>
					</defs>
				</svg>                
				dentavitalisclinica@gmail.com
			</a>
		</address>
		<div class="media">
			<h3>Síguenos en:</h3>
			<a href="https://www.facebook.com/dentavitalisaqp" target="_blank" title="Facebook">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M12 2C6.477 2 2 6.50018 2 12.0518C2 17.0907 5.693 21.2521 10.505 21.9789V14.7155H8.031V12.0729H10.505V10.3148C10.505 7.40383 11.916 6.12625 14.323 6.12625C15.476 6.12625 16.085 6.21169 16.374 6.25089V8.55677H14.732C13.71 8.55677 13.353 9.53078 13.353 10.6284V12.0729H16.348L15.942 14.7155H13.354V22C18.235 21.3356 22 17.14 22 12.0518C22 6.50018 17.523 2 12 2Z" fill="white"/>
				</svg>
				<div>Denta Vitalis</div>
			</a>
			<a href="https://www.instagram.com/dentavitalisclinica/" target="_blank" title="Instagram">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M7.55556 2C4.48778 2 2 4.48778 2 7.55556V16.4444C2 19.5122 4.48778 22 7.55556 22H16.4444C19.5122 22 22 19.5122 22 16.4444V7.55556C22 4.48778 19.5122 2 16.4444 2H7.55556ZM18.6667 4.22222C19.28 4.22222 19.7778 4.72 19.7778 5.33333C19.7778 5.94667 19.28 6.44444 18.6667 6.44444C18.0533 6.44444 17.5556 5.94667 17.5556 5.33333C17.5556 4.72 18.0533 4.22222 18.6667 4.22222ZM12 6.44444C15.0678 6.44444 17.5556 8.93222 17.5556 12C17.5556 15.0678 15.0678 17.5556 12 17.5556C8.93222 17.5556 6.44444 15.0678 6.44444 12C6.44444 8.93222 8.93222 6.44444 12 6.44444ZM12 8.66667C11.1159 8.66667 10.2681 9.01786 9.64298 9.64298C9.01786 10.2681 8.66667 11.1159 8.66667 12C8.66667 12.8841 9.01786 13.7319 9.64298 14.357C10.2681 14.9821 11.1159 15.3333 12 15.3333C12.8841 15.3333 13.7319 14.9821 14.357 14.357C14.9821 13.7319 15.3333 12.8841 15.3333 12C15.3333 11.1159 14.9821 10.2681 14.357 9.64298C13.7319 9.01786 12.8841 8.66667 12 8.66667Z" fill="white"/>
				</svg>
				<div>@dentavitalisclinica</div>
			</a>
			<a href="https://www.tiktok.com/@dentavitalis_clinica" target="_blank" title="Tiktok">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M19 2H5C3.68714 2 2 3.68714 2 5V19C2 20.3129 3.68714 22 5 22H19C20.3129 22 22 20.3129 22 19V5C22 3.68714 20.3129 2 19 2ZM17.7171 10.7252C17.609 10.7352 17.4995 10.7419 17.3886 10.7419C16.1395 10.7419 15.0419 10.0995 14.4033 9.12857C14.4033 11.6757 14.4033 14.5738 14.4033 14.6224C14.4033 16.8648 12.5852 18.6829 10.3429 18.6829C8.10048 18.6829 6.28238 16.8648 6.28238 14.6224C6.28238 12.38 8.10048 10.5619 10.3429 10.5619C10.4276 10.5619 10.5105 10.5695 10.5938 10.5748V12.5757C10.5105 12.5657 10.4286 12.5505 10.3429 12.5505C9.1981 12.5505 8.27048 13.4781 8.27048 14.6229C8.27048 15.7676 9.1981 16.6952 10.3429 16.6952C11.4876 16.6952 12.4986 15.7933 12.4986 14.6486C12.4986 14.6033 12.5186 5.3181 12.5186 5.3181H14.431C14.611 7.0281 15.9914 8.37762 17.7171 8.50143V10.7252Z" fill="white"/>
				</svg>					
				<div>dentavitalis_clinica</div>
			</a>
			<a href="https://api.whatsapp.com/send/?phone=%2B51986218962&text=Buenas%20quisiera%20más%20información%20sobre..." target="_blank" title="What's App">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M12 2C6.4775 2 2 6.4775 2 12C2 13.876 2.52695 15.6251 3.42578 17.1253L2.08952 22L7.06836 20.693C8.52446 21.5209 10.2054 22 12 22C17.5225 22 22 17.5225 22 12C22 6.4775 17.5225 2 12 2ZM8.57715 7.33529C8.73965 7.33529 8.90661 7.3343 9.05078 7.3418C9.22912 7.34596 9.42322 7.35902 9.60905 7.76986C9.82988 8.25819 10.3107 9.48326 10.3724 9.60742C10.4341 9.73159 10.4778 9.87786 10.3919 10.0404C10.3103 10.207 10.2678 10.3079 10.1478 10.4554C10.0236 10.5987 9.88756 10.7768 9.77506 10.8851C9.6509 11.0093 9.52268 11.1454 9.66602 11.3929C9.80935 11.6404 10.3071 12.4518 11.043 13.1068C11.9888 13.9518 12.7868 14.2114 13.0352 14.3356C13.2835 14.4598 13.4273 14.4404 13.5706 14.2738C13.7181 14.1113 14.1901 13.5537 14.3568 13.3053C14.5193 13.057 14.6852 13.1 14.9102 13.1816C15.1385 13.2633 16.3562 13.8631 16.6045 13.9873C16.8528 14.1115 17.0156 14.1729 17.0781 14.2738C17.1423 14.3779 17.1424 14.8738 16.9365 15.4521C16.7307 16.0296 15.7199 16.5881 15.2666 16.6273C14.8091 16.6698 14.3821 16.8329 12.293 16.0104C9.77297 15.0179 8.18374 12.4368 8.05957 12.2702C7.9354 12.1077 7.05046 10.9283 7.05046 9.71159C7.05046 8.49076 7.69055 7.89286 7.91471 7.64453C8.14305 7.3962 8.41048 7.33529 8.57715 7.33529Z" fill="white"/>
				</svg>
				<div>Denta Vitalis</div>
			</a>    
		</div>
	</div>
	<p class="mobile-privacidad">
		<a href="/privacidad">Privacidad</a>  |
		<a href="/terminos">Términos y Condiciones</a>
	</p>
	<div class="line"/>
	<div class="bottom-container">
		<p>&copy; Denta Vitalis 2023 <span class="hide">- Todos los derechos reservados</span></p>
		<p class="hide">
			<a href="/privacidad">Política de Privacidad</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="/terminos">Términos y Condiciones</a>
		</p>
	</div>
</footer>

<style>
	.bottom-container {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	.test {
		position: relative;
	}
	.spacer {
		position: relative;
		z-index: 5;
		display: block;
		width: 100%;
		height: auto;
		top: 1px;
	}
	.media {
		display: flex;
		gap: 24px;
		font-weight: 500;
	}
	img {
		display: block;
		width: 100%;
		max-width: 270px;
	}
	footer {
		padding: 24px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 16px;

		background-color: var(--teal);
		color: white;
		position: relative;
		z-index: 5;
	}
	p a {
		text-decoration: none;
		color: white;
	}
	p {
		font-size: 14px;
	}
	.line {
		height: 2px;
		width: 100%;
		background-color: white;
	}
	address {
		display: flex;
		flex-direction: column;
		gap: 8px;
		font-weight: 500;
	}
	address>div, address>a {
		color: white;
    	text-decoration: none;
		display: flex;
		flex-direction: row;
		font-size: 14px;
		font-style: normal;
		align-items: center;
		gap: 8px;
	}
	address>a:hover {
		color: var(--blue);
	}
	svg {
		transition: transform 1s ease;
	}
	.media>a:hover svg{
		transform: rotate(360deg);
	}

	a:focus, a:active {
		outline: none;
		color: var(--blue) !important;
	}

	.img-div {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 16px;
	}
	.mobile-privacidad {
		display: none;
	}
	.bottom-container {
		justify-content: space-between;
	}

	.bottom-container>p:first-child {
		display: block;
	}
	.horizontal {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.horizontal {
		max-width: 1080px;
		width: 100%;
		padding: 0 16px 36px 16px;
	}
	.img-div {
		display: flex;
		align-items: center;
	}

	address h3 {
		font-size: 18px;
		font-style: normal;
	}

	.media {
		flex-direction: column;
		gap: 8px;
	}
	.media svg {
		width: 24px;
		height: 24px;
	}
	.media > a{
		display: flex;
		gap: 12px;
		align-items: center;
		color: white;
		text-decoration: none;
		font-size: 14px;
	}
	.media a div {
		display: block;
	}
	h3 {
		display: block;
	}

	@media (max-width: 767px) {
		.horizontal {
			flex-direction: column;
			gap: 16px;
			align-items: center;
			padding: 0;
		}
		.hide {
			display: none;
		}
		.bottom-container {
			justify-content: center;
		}
		.mobile-privacidad {
			display: block;
		}
		.media {
			flex-direction: row;
		}
		.media a div {
			display: none;
		}
		.media svg {
			width: 48px;
			height: 48px;
		}
		h3 {
			display: none;
		}
		address {
			padding: 0 16px;
		}
	}
</style>		