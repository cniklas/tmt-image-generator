<script setup lang="ts">
import { ref, computed } from 'vue'
import { useHtmlToCanvas } from '@/use/htmlToCanvas'
import { createFilename, blurOnEnter } from '@/use/helper'

const { state } = useHtmlToCanvas()

const headline = ref('Überschrift')
const copy = ref('Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen.')

const filename = computed(() => createFilename(headline.value))
</script>

<template>
	<a
		:href="state.imageSrc"
		:download="filename"
		id="download-link"
		class="relative mx-auto block max-w-full"
		:class="{ '!hidden': !state.isGenerated }"
	>
		<img class="mx-auto block max-w-full" :src="state.imageSrc" alt="" />
	</a>

	<section id="canvas" class="golden-ratio mx-auto flex overflow-x-hidden" :class="{ '!hidden': state.isGenerated }">
		<div class="layers relative flex flex-col">
			<div class="headline text-peach relative z-20 font-bold">
				<input
					v-model.trim="headline"
					type="text"
					class="input w-full bg-transparent px-1 font-bold"
					:class="{ '!hidden': state.isPainting }"
					@keyup.enter="blurOnEnter"
				/>
				<div class="text h2c-offset px-1" :class="{ '!hidden': !state.isPainting }" style="--h2c-offset: -25px">
					{{ headline }}
				</div>
			</div>

			<div class="copy text-peach relative z-20 flex-1 font-medium">
				<textarea
					v-model="copy"
					class="textarea h-full w-full resize-none bg-transparent px-1 font-medium"
					:class="{ '!hidden': state.isPainting }"
				/>
				<div
					class="text h2c-offset h-full overflow-y-hidden whitespace-pre-line px-1"
					:class="{ '!hidden': !state.isPainting }"
					style="--h2c-offset: -16px"
				>
					{{ copy }}
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="postcss">
.golden-ratio .layers {
	width: 61em;
	padding: 17.4em 0 11.3em 10.9em;
}

.golden-ratio .layers::before,
.golden-ratio .layers::after {
	@apply absolute bottom-0 left-0 top-0 content-[''];
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

.golden-ratio .headline :is(.input, .text) {
	font-size: 5.6em;
	line-height: 1.3214285; /* 74px */
}

.golden-ratio .headline .input {
	height: 1.32142857em; /* 74px */
}

.golden-ratio .copy {
	margin-top: 2.7em;
	max-height: calc(100% - 10.09844em); /* '.headline .input' height + margin-top */
}

.golden-ratio .copy :is(.textarea, .text) {
	font-size: 3.5em;
	line-height: 1.314285;
}

.route-block-right .golden-ratio {
	justify-content: flex-end;
}

.route-block-right .golden-ratio .layers {
	padding-left: 0;
	padding-right: 11.3em;
}

.route-block-right .golden-ratio .layers::before,
.route-block-right .golden-ratio .layers::after {
	@apply left-auto right-0;
}

.route-block-right .golden-ratio .layers::before {
	transform: skew(2.015131deg);
}

.route-block-right .golden-ratio .layers::after {
	transform: skew(-7.281669deg);
}
</style>
