<script>
import TailwindCSS from './components/TailwindCSS.svelte';
import html2canvas from 'html2canvas'

let src = ''
let imageGenerated = false

const generate = async () => {
	window.scroll(0, 0);

	try {
		const canvas = await html2canvas(document.body, {backgroundColor: null, useCORS: true, logging: true})
		imageGenerated = true
		const base64image = canvas.toDataURL('image/png')
		src = base64image
	} catch(error) {
		console.error(error)
	}
}
</script>

<TailwindCSS />

<main>
	<section class="canvas lower-third mx-auto flex flex-col items-center">
		<div class="headline text-peach font-semibold relative z-10">
			<div class="text">Bauchbinde ohne QR-Code</div>
		</div>

		<div class="subtitle text-chocolate font-medium relative z-20">
			<div class="text">Untertitel ohne QR-Code</div>
		</div>
	</section>


	<section class="canvas lower-third has-qr-code mx-auto flex flex-col items-center relative">
		<div class="headline text-peach font-semibold relative z-10">
			<div class="text">Bauchbinde mit QR-Code</div>
		</div>

		<div class="subtitle text-chocolate font-medium relative z-20">
			<div class="text">Untertitel mit QR-Code</div>
		</div>

		<div class="qr-code-wrapper bg-chocolate">
			<picture>
				<img src="https://api.qrserver.com/v1/create-qr-code/?size=144x144&color=f2caa7&bgcolor=733816&margin=0&format=svg&data=Example" alt="">
			</picture>
		</div>
	</section>


	<section class="canvas lower-third mx-auto flex flex-col items-baseline">
		<div class="headline text-peach font-semibold relative z-10">
			<div class="text">Jobst Bittner</div>
		</div>

		<div class="subtitle text-chocolate font-medium relative z-20">
			<div class="text">www.jobstbittner.com</div>
		</div>
	</section>


	<section class="canvas golden-ratio mx-auto flex">
		<div class="layers relative">
			<div class="headline relative z-20 text-peach font-bold">
				<div class="text">Lukas 15:25</div>
			</div>

			<div class="copy relative z-20 text-peach font-medium">
				<div class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum accusamus iure voluptatibus minus sunt temporibus itaque necessitatibus aspernatur, repellendus, autem similique suscipit! Deleniti harum velit dolor, qui nihil numquam voluptate.</div>
			</div>
		</div>
	</section>
</main>

<style>
.canvas {
	font-family: 'Poppins', sans-serif;
	/* 10px als font-base */
	font-size: .625rem;
	line-height: 1;
}

.lower-third .headline {
	padding: 1.8em 0;
}

.lower-third.items-center .headline {
	/* margin-left: 5.4em; */
	/* margin-right: 5.4em; */
	max-width: 181.2em;
	padding-left: 5.4em;
	padding-right: 5.4em;
}

.lower-third.items-baseline .headline {
	margin-left: 7.8em;
	margin-right: 7.8em;
	padding-left: 4em;
	padding-right: 4em;
}

.lower-third .headline::before,
.lower-third .subtitle::before {
	content: '';
	transform: skew(-18deg);
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: -1;
}

.lower-third .headline::before {
	@apply bg-chocolate;
}

.lower-third .headline .text {
	/* font-size: calc(6.66667em / 1.342); */
	font-size: 4.966667em;
}

.lower-third .subtitle {
	margin: -.3em 0 6.5em;
	padding: 1.5em 0;
}

.lower-third.items-center .subtitle {
	/* margin-left: 11.1em; */
	/* margin-right: 11.1em; */
	max-width: 169.8em;
	padding-left: 5.6em;
	padding-right: 5.6em;
}

.lower-third.items-baseline .subtitle {
	margin-left: 9em;
	margin-right: 9em;
	padding-left: 2.6em;
	padding-right: 2.6em;
}

.lower-third .subtitle::before {
	@apply bg-peach;
}

.lower-third .subtitle .text {
	/* font-size: calc(4.66667em / 1.342); */
	font-size: 3.5em;
}

.qr-code-wrapper {
	position: absolute;
	width: 17.4em;
	height: 17.4em;
	right: 6.5em;
	bottom: 6.5em;
	padding: 1.5em;
}

.qr-code-wrapper img {
	vertical-align: middle;
	width: 100%;
	max-width: 100%;
	height: auto;
}

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

.is-editable {
	cursor: pointer;
}

.is-editable.editing {
	cursor: initial;
}
</style>