<script>
export let location
export let imageGenerated = false
export let src = ''
</script>

<img class="block mx-auto max-w-full" class:hidden={!imageGenerated} {src} alt="" data-html2canvas-ignore>

<section id="canvas" class="canvas golden-ratio mx-auto flex" class:hidden={imageGenerated}>
	<div class="layers relative">
		<div class="headline relative z-20 text-peach font-bold">
			<div class="text">Lukas 15:25</div>
		</div>

		<div class="copy relative z-20 text-peach font-medium">
			<div class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum accusamus iure voluptatibus minus sunt temporibus itaque necessitatibus aspernatur, repellendus, autem similique suscipit! Deleniti harum velit dolor, qui nihil numquam voluptate.</div>
		</div>
	</div>
</section>

<style>
.golden-ratio {
	height: 1080px;
}

.golden-ratio .layers {
	width: 60.6em;
	padding: 18.3em 0 11.3em 11.3em;
}

.golden-ratio .layers::before,
.golden-ratio .layers::after {
	content: '';
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
}

.golden-ratio .layers::before {
	@apply bg-peach;
	transform: skew(-2.015131deg);
	transform-origin: right top;
	width: 75em;
	z-index: 10;
}

.golden-ratio .layers::after {
	@apply bg-chocolate;
	transform: skew(7.281669deg);
	transform-origin: right bottom;
	width: 80em;
	z-index: 11;
}

.golden-ratio .headline .text {
	/* font-size: 5.676194em; */
	font-size: 5.6em;
}

.golden-ratio .copy {
	margin-top: 3.6em;
}

.golden-ratio .copy .text {
	font-size: 3.5em;
	line-height: 1.314285;
}
</style>