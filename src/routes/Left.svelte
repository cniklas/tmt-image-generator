<script>
export let location
export let imageGenerated = false
export let src = ''

let headline = 'Sprecher'
let headlineInput
let isHeadlineInputVisible = false
let subtitle = 'www.tos.info'
let subtitleInput
let isSubtitleInputVisible = false

const showHeadlineInput = () => {
	isHeadlineInputVisible = true

	setTimeout(() => {
		headlineInput.focus()
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

<img class="block mx-auto max-w-full" class:hidden={!imageGenerated} {src} alt="" data-html2canvas-ignore>

<section id="canvas" class="canvas lower-third mx-auto flex flex-col items-baseline" class:hidden={imageGenerated} on:click={hideAllInputs}>
	<div class="headline text-peach font-semibold relative z-10 is-editable" class:editing={isHeadlineInputVisible}>
		<input type="text" class="w-full bg-transparent font-semibold __text-center focus:outline-none" class:hidden={!isHeadlineInputVisible} on:click|stopPropagation on:keypress={onKeyPress} bind:this={headlineInput} bind:value={headline}>
		<div class="text" class:hidden={isHeadlineInputVisible} on:dblclick|stopPropagation={showHeadlineInput}>{headline}</div>
</div>

	<div class="subtitle text-chocolate font-medium relative z-20 is-editable" class:editing={isSubtitleInputVisible}>
		<div class="text">{subtitle}</div>
	</div>
</section>
