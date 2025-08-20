<script>
	import Pbox from '../routes/Pbox.svelte'
	export let src
</script>

<div class="img-container">
	<Pbox --d="0" --w="200px" --h="200px" --i="auto auto 0 0" color="var(--teal)"/>
	<Pbox --d="0.666s" --w="140px" --h="140px" --i="0 0 auto auto" color="var(--blue)"/>
	<Pbox --d="0.333s" --w="80px"  --h="80px"  --i="auto 0 25% auto" color="var(--dark-blue)"/>
	<img {src} alt="Dentista">
</div>

<style>
.img-container {
	position: relative;
	flex: 1;
	padding: 2em;
	display: flex;
	align-items: center;
	justify-content: center;
}

.img-container img{
	border-radius: 16px;
	display: block;
	width: 100%;
	object-fit: cover;
	filter: grayscale(1);
	transform: scale(0.95);
	transition: all 0.3s ease;
}

.img-container img:hover{
	filter: grayscale(0);
	transform: scale(1);
}

@media (max-width: 980px) {
	.img-container img{
		filter: grayscale(0);
		transform: scale(1);
	}
}

@media (max-width: 767px) {
	.img-container {
		padding: 24px;
	}
}
</style>