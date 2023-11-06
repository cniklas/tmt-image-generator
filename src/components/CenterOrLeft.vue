<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { useHtmlToCanvas } from '@/use/htmlToCanvas'
import { createFilename, blurOnEnter, resize } from '@/use/helper'

const props = defineProps<{
	isLeft?: boolean
}>()

const { state } = useHtmlToCanvas()

const headline = ref(props.isLeft ? 'Bauchbinde links' : 'Bauchbinde zentriert')
const subtitle = ref(props.isLeft ? 'www.website.tld' : 'Untertitel')

const filename = computed(() => createFilename(headline.value))

const headlineEl = ref(null)
const subtitleEl = ref(null)
onMounted(() => {
	resize(headlineEl.value)
	resize(subtitleEl.value)
})
watch(headline, () => {
	resize(headlineEl.value)
})
watch(subtitle, () => {
	resize(subtitleEl.value)
})
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

	<section
		id="canvas"
		class="lower-third mx-auto flex flex-col justify-end"
		:class="[isLeft ? 'items-baseline' : 'items-center', { '!hidden': state.isGenerated }]"
	>
		<div class="headline text-peach relative z-10 font-semibold">
			<input
				ref="headlineEl"
				v-model.trim="headline"
				type="text"
				class="input bg-transparent px-1 font-semibold"
				:class="{ '!hidden': state.isPainting }"
				@keyup.enter="blurOnEnter"
			/>
			<div
				class="text h2c-offset px-1"
				:class="{ 'text-center': !isLeft, '!hidden': !state.isPainting }"
				style="--h2c-offset: -22px"
			>
				{{ headline }}
			</div>
		</div>
		<div class="subtitle text-chocolate relative z-20 font-medium">
			<input
				ref="subtitleEl"
				v-model.trim="subtitle"
				type="text"
				class="input bg-transparent px-1 font-medium"
				:class="{ '!hidden': state.isPainting }"
				@keyup.enter="blurOnEnter"
			/>
			<div
				class="text h2c-offset px-1"
				:class="{ 'text-center': !isLeft, '!hidden': !state.isPainting }"
				style="--h2c-offset: -15px"
			>
				{{ subtitle }}
			</div>
		</div>
	</section>
</template>

<style>
.route-center .headline {
	max-width: 181.2em;
}

.route-center .headline .input {
	/* width: calc(100vw - 8.5rem); */
	max-width: 106.5rem;
}

.route-left .headline {
	margin-inline: 7.8em;
	padding-inline: 3.6em;
}

.route-left .headline .input {
	/* width: calc(100vw - 14.75rem); */
	max-width: 105.25rem;
}

.route-center .subtitle {
	max-width: 169.8em;
}

.route-center .subtitle .input {
	/* width: calc(100vw - 8.5rem); */
	max-width: 99.125rem;
}

.route-left .subtitle {
	margin-inline: 9em;
	padding-inline: 2.2em;
}

.route-left .subtitle .input {
	/* width: calc(100vw - 14.5rem); */
	max-width: 105.5rem;
}
</style>
