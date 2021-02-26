<script>
// export let location
export let isLeft = false
export let imageGenerated = false
export let src = ''

let headline = isLeft ? 'Bauchbinde links' : 'Bauchbinde zentriert'
let headlineInput
let subtitle = isLeft ? 'www.website.tld' : 'Untertitel'
let subtitleInput

$: filename = headline.trim().replace(/[^a-z0-9\-\s]/gi, '').substr(0, 16).trim() + '.png'

const hideAllInputs = () => {
	headlineInput.blur()
	subtitleInput.blur()
}

const onKeyPress = e => {
	if (e.charCode === 13) {
		hideAllInputs()
	}
}
</script>

<a href={src} download={filename} id="download-link" class="relative block mx-auto max-w-full" class:hidden={!imageGenerated}>
	<img class="block mx-auto max-w-full" {src} alt="">
</a>

<section id="canvas" class="lower-third mx-auto flex flex-col justify-end" class:items-center={!isLeft} class:items-baseline={isLeft} class:hidden={imageGenerated} on:click={hideAllInputs}>
	<div class="headline text-peach font-semibold relative z-10">
		<input type="text" class="stretchy h2c-font-offset-3 px-1 bg-transparent font-semibold" class:text-center={!isLeft} on:click|stopPropagation on:keypress={onKeyPress} bind:this={headlineInput} bind:value={headline}>
	</div>

	<div class="subtitle text-chocolate font-medium relative z-20">
		<input type="text" class="stretchy h2c-font-offset-3 px-1 bg-transparent font-medium" class:text-center={!isLeft} on:click|stopPropagation on:keypress={onKeyPress} bind:this={subtitleInput} bind:value={subtitle}>
	</div>
</section>

<style>
.lower-third.items-center .headline {
	max-width: 181.2em;
}

.lower-third.items-center .headline input {
	width: calc(100vw - 8.5rem);
	max-width: 106.5rem;
}

.lower-third.items-baseline .headline {
	margin-left: 7.8em;
	margin-right: 7.8em;
	padding-left: 3.6em;
	padding-right: 3.6em;
}

.lower-third.items-baseline .headline input {
	width: calc(100vw - 14.75rem);
	max-width: 105.25rem;
}

.lower-third.items-center .subtitle {
	max-width: 169.8em;
}

.lower-third.items-center .subtitle input {
	width: calc(100vw - 8.5rem);
	max-width: 99.125rem;
}

.lower-third.items-baseline .subtitle {
	margin-left: 9em;
	margin-right: 9em;
	padding-left: 2.2em;
	padding-right: 2.2em;
}

.lower-third.items-baseline .subtitle input {
	width: calc(100vw - 14.5rem);
	max-width: 105.5rem;
}
</style>
