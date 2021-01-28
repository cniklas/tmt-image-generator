<script>
import TailwindCSS from './components/TailwindCSS.svelte'

import { Router, Link, Route } from 'svelte-routing'
export let url = ''
import CenterOrLeft from './routes/CenterOrLeft.svelte'
import CenterQR from './routes/CenterQR.svelte'
import GoldenRatio from './routes/GoldenRatio.svelte'


import html2canvas from 'html2canvas'

let imageGenerated = false
let isPainting = false
let src = ''

const generate = async () => {
	window.scroll(0, 0);
	isPainting = true

	try {
		// `useCORS: true` wird für die QR-Code-API benötigt
		const canvas = await html2canvas(document.querySelector('#canvas'), {backgroundColor: null, useCORS: true, logging: true})
		imageGenerated = true
		src = canvas.toDataURL('image/png')
	} catch(error) {
		console.error(error)
	} finally {
		isPainting = false
	}
}

const resetImage = () => {
	imageGenerated = false
	isPainting = false
	src = ''
}
</script>

<TailwindCSS />

<Router url="{url}">
	<div id="navbar" class="fixed top-0 left-0 w-full z-50" data-html2canvas-ignore>
		<nav class="flex justify-center py-4 pb-5 font-medium text-gray-900 bg-white border-t-4 border-pink-600" class:pointer-events-none={isPainting} class:opacity-30={isPainting}>
			<Link to="/" on:click={resetImage}>Bauchbinde</Link>
			<Link to="center-qr" on:click={resetImage}>Bauchbinde mit QR-Code</Link>
			<Link to="left" on:click={resetImage}>Sprecher</Link>
			<Link to="golden-ratio" on:click={resetImage}>Bibelvers</Link>
		</nav>
	</div>

	<button id="camera-button" class="fixed top-2.5 left-2.5 w-12 h-12 z-50 flex justify-center items-center cursor-pointer bg-gray-900 hover:bg-gray-800 rounded-full focus:outline-none" class:pointer-events-none={isPainting} class:animate-pulse={isPainting} class:hidden={imageGenerated} on:click={generate} data-html2canvas-ignore>
		<img class="max-w-full h-8 cursor-pointer" src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZmZmZmZmIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjMuMiIvPgogICAgPHBhdGggZD0iTTkgMkw3LjE3IDRINGMtMS4xIDAtMiAuOS0yIDJ2MTJjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0yaC0zLjE3TDE1IDJIOXptMyAxNWMtMi43NiAwLTUtMi4yNC01LTVzMi4yNC01IDUtNSA1IDIuMjQgNSA1LTIuMjQgNS01IDV6Ii8+CiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+Cjwvc3ZnPgo=" alt="">
	</button>

	<main class="mt-16">
		<Route path="/"><CenterOrLeft {src} {imageGenerated} /></Route>
		<Route path="center-qr" component="{CenterQR}" {src} {imageGenerated} />
		<Route path="left" component="{CenterOrLeft}" isLeft {src} {imageGenerated} />
		<Route path="golden-ratio" component="{GoldenRatio}" {src} {imageGenerated} />
	</main>
</Router>

<style global>
@media (min-width: 1920px) {
	body {
		overflow-x: hidden;
	}
}

button {
	cursor: pointer;
}

.is-editable {
	cursor: pointer;
}

.is-editable.editing {
	cursor: initial;
}

.h2c-font-offset-3 {
	transform: translateY(-3px);
}

.h2c-font-offset-6 {
	transform: translateY(-6px);
}

nav a {
	margin: 0 .625rem;
}

nav a[aria-current=page] {
	@apply text-pink-600;
	pointer-events: none;
}

#camera-button {
	box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
	transition: background-color 200ms cubic-bezier(.4, 0, .6, 1);
}

#image-generated {
	cursor: grab;
}

#canvas {
	font-family: 'Poppins', sans-serif;
	/* 10px als font-base */
	font-size: .625rem;
	line-height: 1;

	height: 1080px;
	width: 1920px;
}

.lower-third .headline {
	padding: 1.8em 0;
}

.lower-third.items-center .headline {
	/* margin-left: 5.4em; */
	/* margin-right: 5.4em; */
	padding-left: 5.4em;
	padding-right: 5.4em;
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

.headline:hover .text,
.subtitle:hover .text,
.copy:hover .text,
.copy textarea {
	outline: 2px dashed currentColor;
	outline-offset: 2px;
}

.lower-third .headline .text {
	/* font-size: calc(6.66667em / 1.342); */
	/* font-size: 4.966667em; */
	font-size: 5em;
}

.lower-third .headline input {
	/* font-size: 4.966667em; */
	font-size: 5em;
	height: 1em;
}

.lower-third .subtitle {
	margin: -.3em 0 6.5em;
	padding: 1.5em 0;
}

.lower-third.items-center .subtitle {
	/* margin-left: 11.1em; */
	/* margin-right: 11.1em; */
	padding-left: 5.6em;
	padding-right: 5.6em;
}

.lower-third .subtitle::before {
	@apply bg-peach;
}

.lower-third .subtitle .text {
	/* font-size: calc(4.66667em / 1.342); */
	font-size: 3.5em;
}

.lower-third .subtitle input {
	font-size: 3.5em;
	height: 1em;
}
</style>