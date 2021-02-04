<script>
// export let location
export let isFlipped = false
export let imageGenerated = false
export let src = ''

let filename = ''
let headline = '2. Kor 2:17'
let headlineInput
let isHeadlineInputVisible = false
let copy = 'Deshalb ist, wer mit dem Messias vereint ist, eine neue Schöpfung – das Alte ist vergangen; sieh, was gekommen ist, ist frisch und neu!'
let copyInput
let isCopyInputVisible = false

const editHeadline = () => {
	isHeadlineInputVisible = true

	setTimeout(() => {
		headlineInput.focus()
	}, 60)
}

const editCopy = () => {
	isCopyInputVisible = true

	setTimeout(() => {
		copyInput.focus()
	}, 60)
}

const hideAllInputs = () => {
	isHeadlineInputVisible = false
	isCopyInputVisible = false
	filename = headline.trim().replace(/[^a-z0-9\-\s]/gi, '').substr(0, 16).trim() + '.png'
}

const onKeyPress = e => {
	if (e.charCode === 13) {
		hideAllInputs()
	}
}
</script>

<a href={src} download={filename} class:hidden={!imageGenerated} data-html2canvas-ignore>
	<img class="block mx-auto max-w-full" {src} alt="">
</a>

<section id="canvas" class="golden-ratio mx-auto flex __overflow-auto overflow-x-hidden" class:is-flipped={isFlipped} class:hidden={imageGenerated} on:click={hideAllInputs}>
	<div class="layers flex flex-col relative">
		<div class="headline relative z-20 text-peach font-bold is-editable" class:editing={isHeadlineInputVisible} on:dblclick|stopPropagation={editHeadline}>
			<input type="text" class="h2c-font-offset-6 bg-transparent font-bold focus:outline-none" class:hidden={!isHeadlineInputVisible} on:click|stopPropagation on:keypress={onKeyPress} bind:this={headlineInput} bind:value={headline}>
			<div class="h2c-font-offset-6 text" class:hidden={isHeadlineInputVisible}>{headline}</div>
		</div>

		<div class="copy flex-1 relative z-20 text-peach font-medium is-editable" class:editing={isCopyInputVisible} on:dblclick|stopPropagation={editCopy}>
			<textarea class="h2c-font-offset-3 bg-transparent font-medium" class:hidden={!isCopyInputVisible} on:click|stopPropagation bind:this={copyInput} bind:value={copy}></textarea>
			<div class="h2c-font-offset-3 text whitespace-pre-line" class:hidden={isCopyInputVisible}>{copy}</div>
		</div>
	</div>
</section>

<style>
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

.golden-ratio .headline input {
	/* font-size: 5.676194em; */
	font-size: 5.6em;
	width: 100%;
	height: 1em;
}

.golden-ratio .copy {
	margin-top: 3.6em;
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