<script>
export let location
export let imageGenerated = false
export let src = ''
</script>

<img class="block mx-auto max-w-full" class:hidden={!imageGenerated} {src} alt="" data-html2canvas-ignore>

<section id="canvas" class="canvas lower-third mx-auto flex flex-col items-center relative" class:hidden={imageGenerated}>
	<div class="headline text-peach font-semibold relative z-10">
		<div class="text">Bauchbinde mit QR-Code</div>
	</div>

	<div class="subtitle text-chocolate font-medium relative z-20">
		<div class="text">Untertitel mit QR-Code</div>
	</div>

	<div class="qr-code-wrapper absolute bg-chocolate">
		<picture>
			<img src="https://api.qrserver.com/v1/create-qr-code/?size=144x144&color=f2caa7&bgcolor=733816&margin=0&format=svg&data=Example" class="align-middle w-full max-w-full" alt="">
		</picture>
	</div>
</section>

<style>
.qr-code-wrapper {
	width: 17.4em;
	height: 17.4em;
	right: 6.5em;
	bottom: 6.5em;
	padding: 1.5em;
}

.qr-code-wrapper img {
	height: auto;
}
</style>