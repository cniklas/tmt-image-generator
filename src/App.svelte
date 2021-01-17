<script>
import html2canvas from 'html2canvas'

let headline = 'Wachstum in schwierigen Zeiten – unerschütterliches Vertrauen'
let inputElement
let isInputVisible = false
let src = ''
let imageGenerated = false

const showInput = () => {
	isInputVisible = true

	setTimeout(() => {
		inputElement.focus()
	}, 60)
}

const hideInput = () => {
	isInputVisible = false
}

const generate = async () => {
	window.scroll(0, 0);

	try {
		const canvas = await html2canvas(document.querySelector('#canvas'), {backgroundColor: null})
		imageGenerated = true
		const base64image = canvas.toDataURL('image/png')
		src = base64image
	} catch(error) {
		alert(error)
	}
}
</script>

<main>
	<!-- data-html2canvas-ignore -->
	<div id="controls" class:hidden={imageGenerated}>
		<button id="camera-button" on:click={generate}>
			<img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZmZmZmZmIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjMuMiIvPgogICAgPHBhdGggZD0iTTkgMkw3LjE3IDRINGMtMS4xIDAtMiAuOS0yIDJ2MTJjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0yaC0zLjE3TDE1IDJIOXptMyAxNWMtMi43NiAwLTUtMi4yNC01LTVzMi4yNC01IDUtNSA1IDIuMjQgNSA1LTIuMjQgNS01IDV6Ii8+CiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+Cjwvc3ZnPgo=" alt="">
		</button>

		<div id="explanations">
			Bauchbinde doppelklicken, um den Text zu bearbeiten.
			<br>
			Kamera-Symbol klicken, um diese Seite in eine Grafik umzuwandeln.
			<br>
			Rechtsklick / Kontextmenu → „Speichern unter“, um die Grafik auf dem Gerät zu speichern.
		</div>
	</div>

	<!-- data-html2canvas-ignore -->
	<img id="image-generated" class:hidden={!imageGenerated} {src} alt="">

	<section id="canvas" class:hidden={imageGenerated} on:click={hideInput}>
		<div id="headline" class:editing={isInputVisible}>
			<div class="container">
				<input type="text" class:hidden={!isInputVisible} on:click|stopPropagation bind:this={inputElement} bind:value={headline}>
				<div class="text" class:hidden={isInputVisible} on:dblclick|stopPropagation={showInput}>{headline}</div>
			</div>
		</div>

		<div id="label">
			<div class="text">Thema heute</div>
		</div>
	</section>
</main>

<style>
	#controls {
		position: fixed;
		top: 2rem;
		left: 50%;
		transform: translateX(-50%);
		z-index: 1;
	}

	button {
		cursor: pointer;
	}

	#camera-button {
		border: none;
		margin: 0 auto;
		padding: 0;
		background-image: none;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 60px;
		height: 60px;
		background-color: #1867c0;
		cursor: pointer;
		border-radius: 50%;
		box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
		transition: background-color 200ms cubic-bezier(.4, 0, .6, 1);
	}

	#camera-button:hover {
		background-color: hsla(212, 78%, 42%, 0.82);
	}

	#camera-button img {
		max-width: 100%;
		height: 32px;
	}

	#explanations {
		width: min(calc(100vw - 10.5rem), 30rem);
		margin-top: 1rem;
	}

	.hidden {
		display: none !important;
	}

	#image-generated {
		display: block;
		margin: 0 auto;
		max-width: 100%;
	}
	/*
	#image-generated[src=''],
	#image-generated:not([src]) {
		display: none;
	} */

	#canvas {
		height: 1080px;
		width: 1920px;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;
	}

	#headline {
		margin-left: 4rem;
		margin-right: 4rem;
	}

	#headline .container {
		background-color: #422217;
		color: #d8b793;
		min-height: 88px;
		padding: 0.9375rem 0 1.5625rem;
		transform: skew(-22deg);
		cursor: pointer;
	}

	#headline.editing .container {
		cursor: initial;
		/* filter: brightness(.9) contrast(1.1); */
		background-color: hsla(15, 48%, 17%, 0.9);
	}

	#headline input {
		background-color: transparent;
		color: inherit;
		border: none;
		border-radius: 0;
		margin-bottom: 0;
		padding: 0 3rem;

		display: block;
		width: 100%;
		width: calc(100vw - 10.5rem);
		height: 3rem;

		font-size: 3rem;
		font-weight: 500;
		line-height: 1;
		text-transform: uppercase;
		letter-spacing: -0.25px;
		text-align: center;
		transform: skew(22deg);
	}

	#headline .text {
		padding: 0 3rem;
		font-size: 3rem;
		font-weight: 500;
		line-height: 1;
		text-transform: uppercase;
		letter-spacing: -0.25px;
		transform: skew(22deg);
		user-select: none;
	}

	#label {
		background-color: #d8b793;
		color: #422217;
		margin-bottom: 60px;
		margin-top: -12px;
		min-height: 64px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		transform: skew(-12deg);
	}

	#label .text {
		font-size: 2.375rem;
		font-weight: 500;
		letter-spacing: -0.25px;
		padding: 0 2.375rem;
		margin-top: -8px;
		transform: skew(12deg);
	}
</style>