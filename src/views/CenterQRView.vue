<script setup lang="ts">
import { ref, useTemplateRef, computed, watch, onMounted } from 'vue'
import DownloadLink from '@/components/DownloadLink.vue'
import { useHtmlToCanvas } from '@/use/htmlToCanvas'
import { createFilename, blurOnEnter, resize } from '@/use/helper'
import { useFontLoading } from '@/use/fontLoading'

const { state } = useHtmlToCanvas()
const { fontsReady } = useFontLoading()

const headline = ref('Bauchbinde mit QR-Code')
const subtitle = ref('Untertitel')

const filename = computed(() => createFilename(headline.value))

const qrCode = ref('')
const qrCodeEl = useTemplateRef<HTMLInputElement | null>('qrCodeEl')
const isQrCodeInputVisible = ref(false)

const editQrCode = async () => {
	isQrCodeInputVisible.value = true

	// wait before focussing the input element because otherwise the input keyup event is triggered
	await new Promise(resolve => setTimeout(resolve, 100))
	qrCodeEl.value?.focus()
}

const headlineEl = useTemplateRef<HTMLInputElement | null>('headlineEl')
const subtitleEl = useTemplateRef<HTMLInputElement | null>('subtitleEl')
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
		class="lower-third relative mx-auto flex flex-col items-center justify-end"
		:class="{ '!hidden': state.isGenerated }"
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
			<div class="text h2c-offset px-1" :class="{ '!hidden': !state.isPainting }" style="--h2c-offset: -22px">
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
			<div class="text h2c-offset px-1" :class="{ '!hidden': !state.isPainting }" style="--h2c-offset: -15px">
				{{ subtitle }}
			</div>
		</div>

		<button
			type="button"
			class="qr-code-button absolute bg-[--chocolate] text-left text-[--peach]"
			aria-label="URL für QR-Code eingeben"
			@click="editQrCode"
		>
			<img
				v-if="qrCode"
				:src="`https://api.qrserver.com/v1/create-qr-code/?size=144x144&color=f2caa7&bgcolor=733816&margin=0&format=svg&data=${qrCode}`"
				class="w-full"
				alt=""
				width="144"
				height="144"
			/>
			<span
				v-else
				class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl after:content-['QR-Code']"
				aria-hidden="true"
			/>
		</button>

		<div
			class="absolute bottom-60 left-1/2 -translate-x-1/2 text-xl"
			:class="{ '!hidden': !isQrCodeInputVisible }"
			data-html2canvas-ignore
		>
			<input
				ref="qrCodeEl"
				v-model.lazy.trim="qrCode"
				type="text"
				placeholder="URL oder Rufnummer"
				class="w-96 border-b-2 border-[--gray-800] px-2 py-1 placeholder-[--gray-500] focus-visible:outline-none"
				enterkeyhint="done"
				@keyup.enter="blurOnEnter"
				@blur="isQrCodeInputVisible = false"
			/>
		</div>
	</div>
</template>

<style>
.route-center-qr {
	& .headline {
		max-width: 111.5em;

		& .input {
			max-width: 62.9375rem;
		}
	}

	& .subtitle {
		max-width: 104em;

		& .input {
			max-width: 58rem;
		}
	}
}

.qr-code-button {
	width: 17.4em;
	height: 17.4em;
	right: 6.5em;
	bottom: 6.5em;
	padding: 1.5em;

	&:is(:focus-visible, :active) {
		outline: 2px dashed currentColor;
		outline-offset: -1.3em;
	}
}

@media (hover: hover) and (pointer: fine) {
	.qr-code-button:hover {
		outline: 2px dashed currentColor;
		outline-offset: -1.3em;
	}
}
</style>
