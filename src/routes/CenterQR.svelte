<script>
// export let location
export let imageGenerated = false
export let src = ''

let headline = 'Bauchbinde mit QR-Code'
let headlineInput
let isHeadlineInputVisible = false
let subtitle = 'Untertitel'
let subtitleInput
let isSubtitleInputVisible = false

$: filename = headline.trim().replace(/[^a-z0-9\-\s]/gi, '').substr(0, 16).trim() + '.png'

let qrCode = ''
let qrCodeValue = ''
let qrCodeInput
let isQrCodeInputVisible = false

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

const editQrCode = () => {
	isQrCodeInputVisible = true

	setTimeout(() => {
		qrCodeInput.focus()
	}, 60)
}

const hideAllInputs = () => {
	isHeadlineInputVisible = false
	isSubtitleInputVisible = false
	isQrCodeInputVisible = false
	qrCode = qrCodeValue
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

<section id="canvas" class="lower-third has-qr-code mx-auto flex flex-col justify-end items-center relative" class:hidden={imageGenerated} on:click={hideAllInputs}>
	<div class="headline text-peach font-semibold relative z-10 is-editable" class:editing={isHeadlineInputVisible} on:dblclick|stopPropagation={editHeadline}>
		<input type="text" class="h2c-font-offset-6 bg-transparent font-semibold text-center focus:outline-none" class:hidden={!isHeadlineInputVisible} on:click|stopPropagation on:keypress={onKeyPress} bind:this={headlineInput} bind:value={headline}>
		<div class="h2c-font-offset-6 text" class:hidden={isHeadlineInputVisible}>{headline}</div>
	</div>

	<div class="subtitle text-chocolate font-medium relative z-20 is-editable" class:editing={isSubtitleInputVisible} on:dblclick|stopPropagation={editSubtitle}>
		<input type="text" class="h2c-font-offset-3 bg-transparent font-medium text-center focus:outline-none" class:hidden={!isSubtitleInputVisible} on:click|stopPropagation on:keypress={onKeyPress} bind:this={subtitleInput} bind:value={subtitle}>
		<div class="h2c-font-offset-3 text" class:hidden={isSubtitleInputVisible}>{subtitle}</div>
	</div>

	<div class="qr-code-wrapper absolute bg-chocolate text-peach is-editable" class:editing={isQrCodeInputVisible} on:dblclick|stopPropagation={editQrCode}>
		{#if qrCode}
			<picture>
				<img src="https://api.qrserver.com/v1/create-qr-code/?size=144x144&color=f2caa7&bgcolor=733816&margin=0&format=svg&data={qrCode}" class="align-middle w-full max-w-full" alt="">
			</picture>
		{:else}
			<div class="qr-placeholder absolute left-1/2 top-1/2 text-4xl">QR-Code</div>
		{/if}
	</div>

	<div class="qr-input-wrapper absolute left-1/2 bottom-60 text-xl" data-html2canvas-ignore>
		<input type="text" placeholder="URL eingeben" class="w-96 px-2 py-1 border-b-2 border-gray-800 focus:outline-none placeholder-gray-300" class:hidden={!isQrCodeInputVisible} on:click|stopPropagation on:keypress={onKeyPress} bind:this={qrCodeInput} bind:value={qrCodeValue}>
	</div>
</section>

<style>
.lower-third.has-qr-code .headline {
	max-width: 111.5em;
}

.lower-third.has-qr-code .headline input {
	width: calc(100vw - 8.5rem); /* → `.lower-third.items-center .headline input` */
	max-width: 62.9375rem;
}

.lower-third.has-qr-code .subtitle {
	max-width: 104.0em;
}

.lower-third.has-qr-code .subtitle input {
	width: calc(100vw - 8.5rem); /* → `.lower-third.items-center .subtitle input` */
	max-width: 58rem;
}

.qr-code-wrapper {
	width: 17.4em;
	height: 17.4em;
	right: 6.5em;
	bottom: 6.5em;
	padding: 1.5em;
}

.qr-code-wrapper:hover {
	outline: 2px dashed currentColor;
	outline-offset: -1.3em;
}

.qr-placeholder {
	transform: translate(-50%, -50%);
}

.qr-code-wrapper img {
	height: auto;
}

.qr-input-wrapper {
	transform: translateX(-50%);
}
</style>
