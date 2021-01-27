<script>
// export let location
export let isLeft = false
export let imageGenerated = false
export let src = ''

let headline = isLeft ? 'Sprecher' : 'Bauchbinde ohne QR-Code'
let headlineInput
let isHeadlineInputVisible = false
let subtitle = isLeft ? 'www.maschdeslebens.org' : 'Untertitel ohne QR-Code'
let subtitleInput
let isSubtitleInputVisible = false

const editHeadline = () => {
	isHeadlineInputVisible = true

	setTimeout(() => {
		headlineInput.focus()
	}, 60)
}

const editSubtitle = () => {
	isSubtitleInputVisible = true

	setTimeout(() => {
		subtitleInput.focus()
	}, 60)
}

const hideAllInputs = () => {
	isHeadlineInputVisible = false
	isSubtitleInputVisible = false
}

const onKeyPress = e => {
	if (e.charCode === 13) {
		hideAllInputs()
	}
}
</script>

<img id="image-generated" class="block mx-auto max-w-full" class:hidden={!imageGenerated} {src} alt="" data-html2canvas-ignore>

<section id="canvas" class="lower-third mx-auto flex flex-col justify-end" class:items-center={!isLeft} class:items-baseline={isLeft} class:hidden={imageGenerated} on:click={hideAllInputs}>
	<div class="headline text-peach font-semibold relative z-10 is-editable" class:editing={isHeadlineInputVisible} on:dblclick|stopPropagation={editHeadline}>
		<input type="text" class="h2c-font-offset-6 bg-transparent font-semibold focus:outline-none" class:text-center={!isLeft} class:hidden={!isHeadlineInputVisible} on:click|stopPropagation on:keypress={onKeyPress} bind:this={headlineInput} bind:value={headline}>
		<div class="h2c-font-offset-6 text" class:hidden={isHeadlineInputVisible}>{headline}</div>
	</div>

	<div class="subtitle text-chocolate font-medium relative z-20 is-editable" class:editing={isSubtitleInputVisible} on:dblclick|stopPropagation={editSubtitle}>
		<input type="text" class="h2c-font-offset-3 bg-transparent font-medium focus:outline-none" class:text-center={!isLeft} class:hidden={!isSubtitleInputVisible} on:click|stopPropagation on:keypress={onKeyPress} bind:this={subtitleInput} bind:value={subtitle}>
		<div class="h2c-font-offset-3 text" class:hidden={isSubtitleInputVisible}>{subtitle}</div>
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
	padding-left: 4em;
	padding-right: 4em;
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
	padding-left: 2.6em;
	padding-right: 2.6em;
}

.lower-third.items-baseline .subtitle input {
	width: calc(100vw - 14.5rem);
	max-width: 105.5rem;
}
</style>