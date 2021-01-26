<script>
// export let location
export let imageGenerated = false
export let src = ''
</script>

<img class="block mx-auto max-w-full" class:hidden={!imageGenerated} {src} alt="" data-html2canvas-ignore>

<section id="canvas" class="canvas lower-third mx-auto flex flex-col items-center" class:hidden={imageGenerated}>
	<div class="headline text-peach font-semibold relative z-10">
		<div class="text">Bauchbinde ohne QR-Code</div>
	</div>

	<div class="subtitle text-chocolate font-medium relative z-20">
		<div class="text">Untertitel ohne QR-Code</div>
	</div>
</section>
