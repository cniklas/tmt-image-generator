<script setup lang="ts">
import { ref, useTemplateRef, computed, watch, onMounted } from 'vue'
import DownloadLink from '@/components/DownloadLink.vue'
import { useHtmlToCanvas } from '@/use/htmlToCanvas'
import { createFilename, blurOnEnter, resize } from '@/use/helper'
import { useFontLoading } from '@/use/fontLoading'

const { isLeft } = defineProps<{
	isLeft?: boolean
}>()

const { state } = useHtmlToCanvas()
const { fontsReady } = useFontLoading()

const headline = ref(isLeft ? 'Bauchbinde links' : 'Bauchbinde zentriert')
const subtitle = ref(isLeft ? 'www.website.tld' : 'Untertitel')

const filename = computed(() => createFilename(headline.value))

const headlineEl = useTemplateRef('headlineEl')
const subtitleEl = useTemplateRef('subtitleEl')
onMounted(() => {
	resize(headlineEl.value)
	resize(subtitleEl.value)
})
watch(fontsReady, () => {
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
	<DownloadLink :class="{ '!hidden': !state.isGenerated }" :image-src="state.imageSrc" :filename />

	<div
		id="canvas"
		class="lower-third mx-auto flex flex-col justify-end"
		:class="[isLeft ? 'items-baseline' : 'items-center', { '!hidden': state.isGenerated }]"
	>
		<div class="headline relative z-10 font-semibold text-[--peach]">
			<input
				ref="headlineEl"
				v-model.trim="headline"
				type="text"
				class="input bg-transparent px-1 font-semibold"
				:class="{ '!hidden': state.isPainting }"
				enterkeyhint="done"
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
		<div class="subtitle relative z-20 font-medium text-[--chocolate]">
			<input
				ref="subtitleEl"
				v-model.trim="subtitle"
				type="text"
				class="input bg-transparent px-1 font-medium"
				:class="{ '!hidden': state.isPainting }"
				enterkeyhint="done"
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
	</div>
</template>

<style>
.route-center {
	& .headline {
		max-width: 181.2em;

		& .input {
			max-width: 106.5rem;
		}
	}

	& .subtitle {
		max-width: 169.8em;

		& .input {
			max-width: 99.125rem;
		}
	}
}

.route-left {
	& .headline {
		margin-inline: 7.8em;
		padding-inline: 3.6em;

		& .input {
			max-width: 105.25rem;
		}
	}

	& .subtitle {
		margin-inline: 9em;
		padding-inline: 2.2em;

		& .input {
			max-width: 105.5rem;
		}
	}
}
</style>
