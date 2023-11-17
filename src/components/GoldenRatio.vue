<script setup lang="ts">
import { ref, computed } from 'vue'
import DownloadLink from '@/components/DownloadLink.vue'
import { useHtmlToCanvas } from '@/use/htmlToCanvas'
import { createFilename, blurOnEnter } from '@/use/helper'

const { state } = useHtmlToCanvas()

const headline = ref('Überschrift')
const copy = ref('Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen.')

const filename = computed(() => createFilename(headline.value))
</script>

<template>
	<DownloadLink :class="{ '!hidden': !state.isGenerated }" :image-src="state.imageSrc" :filename="filename" />

	<div id="canvas" class="golden-ratio mx-auto flex overflow-x-hidden" :class="{ '!hidden': state.isGenerated }">
		<div class="layers relative flex flex-col">
			<div class="headline text-peach relative z-20 font-bold">
				<input
					v-model.trim="headline"
					type="text"
					class="input w-full bg-transparent px-1 font-bold"
					:class="{ '!hidden': state.isPainting }"
					enterkeyhint="done"
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
	</div>
</template>

<style>
.golden-ratio {
	& .layers {
		width: 61em;
		padding: 17.4em 0 11.3em 10.9em;

		&::before,
		&::after {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			top: 0;
		}

		&::before {
			background-color: theme('colors.peach');
			transform: skewX(-2.015131deg);
			transform-origin: right top;
			width: 75em;
			z-index: 10;
		}

		&::after {
			background-color: theme('colors.chocolate');
			transform: skewX(7.281669deg);
			transform-origin: right bottom;
			width: 80em;
			z-index: 11;
		}
	}

	& .headline {
		& :is(.input, .text) {
			font-size: 5.6em;
			line-height: 1.3214285; /* 74px */
		}

		& .input {
			height: 1.32142857em; /* 74px */
		}
	}

	& .copy {
		margin-top: 2.7em;
		max-height: calc(100% - 10.09844em); /* '.headline .input' height + margin-top */

		& :is(.textarea, .text) {
			font-size: 3.5em;
			line-height: 1.314285;
		}
	}
}

.route-block-right .golden-ratio {
	justify-content: flex-end;

	& .layers {
		padding-left: 0;
		padding-right: 11.3em;

		&::before,
		&::after {
			left: auto;
			right: 0;
		}

		&::before {
			transform: skew(2.015131deg);
		}

		&::after {
			transform: skew(-7.281669deg);
		}
	}
}
</style>
