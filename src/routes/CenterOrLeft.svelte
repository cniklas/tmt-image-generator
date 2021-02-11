<script>
// export let location
export let isLeft = false
export let imageGenerated = false
export let src = ''

let headline = isLeft ? 'Bauchbinde links' : 'Bauchbinde zentriert'
let headlineInput
// let isHeadlineInputVisible = false
let subtitle = isLeft ? 'www.website.tld' : 'Untertitel'
let subtitleInput
// let isSubtitleInputVisible = false

$: filename = headline.trim().replace(/[^a-z0-9\-\s]/gi, '').substr(0, 16).trim() + '.png'

// const editHeadline = () => {
// 	isHeadlineInputVisible = true

// 	setTimeout(() => {
// 		headlineInput.focus()
// 	}, 60)
// }

// const editSubtitle = () => {
// 	isSubtitleInputVisible = true

// 	setTimeout(() => {
// 		subtitleInput.focus()
// 	}, 60)
// }

const hideAllInputs = () => {
	// isHeadlineInputVisible = false
	headlineInput.blur()
	// isSubtitleInputVisible = false
	subtitleInput.blur()
}

const onKeyPress = e => {
	if (e.charCode === 13) {
		hideAllInputs()
	}
}
</script>

<a href="https://tmt-image-generator-v1.netlify.app" id="switch-back" class="fixed top-0 left-0 z-50 bg-gray-900 hover:bg-gray-800 text-white no-underline" class:hidden={isLeft}>zurück zu v1</a>

<a href={src} download={filename} id="download-link" class="relative block mx-auto max-w-full" class:hidden={!imageGenerated}>
	<img class="block mx-auto max-w-full" {src} alt="">
</a>

<section id="canvas" class="lower-third mx-auto flex flex-col justify-end" class:items-center={!isLeft} class:items-baseline={isLeft} class:hidden={imageGenerated} on:click={hideAllInputs}>
	<!-- <div class="headline text-peach font-semibold relative z-10 is-editable" class:editing={isHeadlineInputVisible} on:dblclick|stopPropagation={editHeadline}>
		<input type="text" class="h2c-font-offset--6 bg-transparent font-semibold focus:outline-none" class:text-center={!isLeft} class:hidden={!isHeadlineInputVisible} on:click|stopPropagation on:keypress={onKeyPress} bind:this={headlineInput} bind:value={headline}>
		<div class="h2c-font-offset--6 text" class:hidden={isHeadlineInputVisible}>{headline}</div>
	</div> -->
	<div class="headline text-peach font-semibold relative z-10">
		<input type="text" class="stretchy h2c-font-offset-3 px-1 bg-transparent font-semibold" class:text-center={!isLeft} on:click|stopPropagation on:keypress={onKeyPress} bind:this={headlineInput} bind:value={headline}>
	</div>

	<!-- <div class="subtitle text-chocolate font-medium relative z-20 is-editable" class:editing={isSubtitleInputVisible} on:dblclick|stopPropagation={editSubtitle}>
		<input type="text" class="h2c-font-offset--3 bg-transparent font-medium focus:outline-none" class:text-center={!isLeft} class:hidden={!isSubtitleInputVisible} on:click|stopPropagation on:keypress={onKeyPress} bind:this={subtitleInput} bind:value={subtitle}>
		<div class="h2c-font-offset--3 text" class:hidden={isSubtitleInputVisible}>{subtitle}</div>
	</div> -->

	<div class="subtitle text-chocolate font-medium relative z-20">
		<input type="text" class="stretchy h2c-font-offset-3 px-1 bg-transparent font-medium" class:text-center={!isLeft} on:click|stopPropagation on:keypress={onKeyPress} bind:this={subtitleInput} bind:value={subtitle}>
	</div>
</section>

<style>
#switch-back {
	padding: .4em 3em;
	box-shadow: 0 0.1em 0 0.1em rgba(0,0,0,15%);
	transform: rotate(90deg) translateX(70.71068%) rotate(-90deg) rotate(-45deg) translateY(-100%);
	transform-origin: 0 0;
}

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
	/* padding-left: 4em; */
	padding-left: 3.6em;
	/* padding-right: 4em; */
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
	/* padding-left: 2.6em; */
	padding-left: 2.2em;
	/* padding-right: 2.6em; */
	padding-right: 2.2em;
}

.lower-third.items-baseline .subtitle input {
	width: calc(100vw - 14.5rem);
	max-width: 105.5rem;
}
</style>
