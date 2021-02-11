<script>
// export let location
export let isFlipped = false
export let imageGenerated = false
export let src = ''

let headline = 'Headline'
let headlineInput
// let isHeadlineInputVisible = false
let copy = 'Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen.'
let copyInput
let isCopyInputVisible = false

$: filename = headline.trim().replace(/[^a-z0-9\-\s]/gi, '').substr(0, 16).trim() + '.png'

// const editHeadline = () => {
// 	isHeadlineInputVisible = true

// 	setTimeout(() => {
// 		headlineInput.focus()
// 	}, 60)
// }

const editCopy = () => {
	isCopyInputVisible = true

	setTimeout(() => {
		copyInput.focus()
	}, 60)
}

const leaveCopy = () => {
	if (isCopyInputVisible) {
		isCopyInputVisible = false
	}
}

const hideAllInputs = () => {
	// isHeadlineInputVisible = false
	headlineInput.blur()
	// isCopyInputVisible = false
	leaveCopy()
}

const onKeyPress = e => {
	if (e.charCode === 13) {
		hideAllInputs()
	}
}
</script>

<a href={src} download={filename} id="download-link" class="relative block mx-auto max-w-full" class:hidden={!imageGenerated}>
	<img class="block max-w-full" {src} alt="">
</a>

<section id="canvas" class="golden-ratio mx-auto flex __overflow-auto overflow-x-hidden" class:is-flipped={isFlipped} class:hidden={imageGenerated} on:click={hideAllInputs}>
	<div class="layers flex flex-col relative">
		<!-- <div class="headline relative z-20 text-peach font-bold is-editable" class:editing={isHeadlineInputVisible} on:dblclick|stopPropagation={editHeadline}>
			<input type="text" class="h2c-font-offset--6 bg-transparent font-bold focus:outline-none" class:hidden={!isHeadlineInputVisible} on:click|stopPropagation on:keypress={onKeyPress} bind:this={headlineInput} bind:value={headline}>
			<div class="h2c-font-offset--6 text" class:hidden={isHeadlineInputVisible}>{headline}</div>
		</div> -->
		<div class="headline relative z-20 text-peach font-bold">
			<input type="text" class="h2c-font-offset-4 px-1 bg-transparent font-bold" on:click|stopPropagation on:focus={leaveCopy} on:keypress={onKeyPress} bind:this={headlineInput} bind:value={headline}>
		</div>

		<div class="copy flex-1 relative z-20 text-peach font-medium is-editable" class:editing={isCopyInputVisible} on:click|stopPropagation={editCopy}>
			<textarea class="h2c-font-offset--3 px-1 bg-transparent font-medium" class:hidden={!isCopyInputVisible} on:click|stopPropagation bind:this={copyInput} bind:value={copy}></textarea>
			<div class="h2c-font-offset--3 px-1 text whitespace-pre-line" class:hidden={isCopyInputVisible}>{copy}</div>
		</div>
	</div>
</section>

<style>
.golden-ratio .layers {
	/* width: 60.6em; */
	width: 61em;
	/* padding: 18.3em 0 11.3em 11.3em; */
	padding: 17.4em 0 11.3em 10.9em;
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

/*
.golden-ratio .headline .text {
	font-size: 5.6em;
} */

.golden-ratio .headline input {
	/* font-size: 5.676194em; */
	font-size: 5.6em;
	width: 100%;
	max-width: 100%;
	/* height: 1em; */
	height: 1.3214285em; /* 74px */
}

.golden-ratio .copy {
	/* margin-top: 3.6em; */
	margin-top: 2.7em;
}

.golden-ratio .copy .text {
	font-size: 3.5em;
	line-height: 1.314285;
	height: 100%;
}

.golden-ratio .copy textarea {
	font-size: 3.5em;
	line-height: 1.314285;
	width: 100%;
	height: 100%;
	resize: none;
}

.golden-ratio.is-flipped {
	justify-content: flex-end;
}

.golden-ratio.is-flipped .layers {
	padding-left: 0;
	padding-right: 11.3em;
}

.golden-ratio.is-flipped .layers::before,
.golden-ratio.is-flipped .layers::after {
	left: auto;
	right: 0;
}

.golden-ratio.is-flipped .layers::before {
	transform: skew(2.015131deg);
	/* transform-origin: left top; */
}

.golden-ratio.is-flipped .layers::after {
	transform: skew(-7.281669deg);
	/* transform-origin: left bottom; */
}
</style>
