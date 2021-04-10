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
let navbar

const generate = async () => {
	if (!isPainting) {
		isPainting = true
		window.scroll(0, 0);

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
}

const resetPage = () => {
	imageGenerated = false
	isPainting = false
	src = ''

	window.scroll(0, 0)
	navbar.focus()
}
</script>

<TailwindCSS />

<Router url="{url}">
	<div id="navbar" bind:this={navbar} class="fixed top-0 left-0 w-full z-40" class:opacity-30={isPainting}>
		<nav class="flex justify-center py-4 pb-5 font-medium text-gray-900 bg-white border-t-4 border-pink-600" class:pointer-events-none={isPainting}>
			<Link to="/" on:click={resetPage}>Bauchbinde</Link>
			<Link to="center-qr" on:click={resetPage}>Bauchbinde mit QR-Code</Link>
			<Link to="left" on:click={resetPage}>Bauchbinde, links</Link>
			<Link to="block" on:click={resetPage}>Textblock</Link>
			<Link to="block-right" on:click={resetPage}>Textblock, rechts</Link>
		</nav>

		<button id="camera-button" class="absolute top-20 left-1/2 -translate-x-2/4 p-2 flex justify-center items-center cursor-pointer bg-gray-900 hover:bg-gray-800 text-white border-4 border-current rounded-full focus:outline-none" class:hidden={imageGenerated} on:click={generate}>
			<svg class="fill-current w-8" fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<circle cx="12" cy="12" r="3.2"/>
				<path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
				<path d="M0 0h24v24H0z" fill="none"/>
			</svg>
		</button>
	</div>

	<main class="mt-16">
		<Route path="/"><CenterOrLeft {src} {imageGenerated} /></Route>
		<Route path="center-qr" component="{CenterQR}" {src} {imageGenerated} />
		<Route path="left" component="{CenterOrLeft}" isLeft {src} {imageGenerated} />
		<Route path="block" component="{GoldenRatio}" {src} {imageGenerated} />
		<Route path="block-right" component="{GoldenRatio}" isFlipped {src} {imageGenerated} />
	</main>
</Router>

<style global>
:root {
	--btn-box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
}

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

.h2c-font-offset--3 {
	transform: translateY(-3px);
}

.h2c-font-offset-3 {
	transform: translateY(3px);
}

.h2c-font-offset-4 {
	transform: translateY(4px);
}

nav a {
	margin: 0 .625rem;
}

nav a[aria-current=page] {
	@apply text-pink-600;
}

#navbar {
	transition: opacity 300ms ease-in-out;
}

#camera-button {
	box-shadow: var(--btn-box-shadow);
	transform: translateX(var(--tw-translate-x));
	transition: background-color 200ms cubic-bezier(0.4,0,0.6,1), transform 144ms ease-out;
}

#camera-button:hover,
#camera-button:focus {
	transform: translateX(var(--tw-translate-x)) scale(1.1);
}

#download-link {
	width: 1920px;
}

#download-link::after {
	@apply absolute top-4 left-1/2 py-2.5 px-4 font-medium text-lg tracking-wide bg-gray-800 text-white border-4 border-current rounded-full;
	content: 'Bild speichern';
	transform: translateX(-50%);
	box-shadow: var(--btn-box-shadow);
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
	padding: 1.1em 0;
}

.lower-third.items-center .headline {
	padding-left: 5em;
	padding-right: 5em;
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

.headline:hover input,
.headline input:focus,
.subtitle:hover input,
.subtitle input:focus,
.copy:hover .text,
.copy textarea {
	outline: 2px dashed currentColor;
	outline-offset: 1px;
}

.headline input:not(:focus),
.subtitle input:not(:focus) {
	cursor: pointer;
}

.lower-third .headline input {
	font-size: 5em;
	height: 1.28em; /* 64px */
}

.lower-third .subtitle {
	margin: -.3em 0 6.5em;
	padding: .9em 0;
}

.lower-third.items-center .subtitle {
	padding-left: 5.2em;
	padding-right: 5.2em;
}

.lower-third .subtitle::before {
	@apply bg-peach;
}

.lower-third .subtitle input {
	font-size: 3.5em;
	height: 1.3428571em; /* 47px */
}
</style>
