import { reactive, readonly, nextTick } from 'vue'
import html2canvas from 'html2canvas'

const state = reactive({
	isPainting: false,
	isGenerated: false,
	imageSrc: '',
})

const generateImage = async () => {
	if (state.isPainting) return

	state.isPainting = true
	window.scroll(0, 0)
	await nextTick()

	try {
		// `useCORS: true` wird für die QR-Code-API benötigt
		const canvas = await html2canvas(document.querySelector('#canvas') as HTMLElement, {
			backgroundColor: null,
			useCORS: true,
			logging: true,
		})
		state.isGenerated = true
		state.imageSrc = canvas.toDataURL('image/png')
	} catch (error) {
		console.error(error)
	} finally {
		state.isPainting = false
	}
}

const createFilename = (headline: string) =>
	`${headline
		.trim()
		.replace(/[^a-z0-9\-\s]/gi, '')
		.slice(0, 16)
		.trim()}.png`

const resetState = () => {
	state.isPainting = false
	state.isGenerated = false
	state.imageSrc = ''
}

// Singleton State Pattern, see https://markus.oberlehner.net/blog/vue-composition-api-composables/#the-singleton-state-pattern
export const useHtmlToCanvas = () => ({
	state: readonly(state),
	generateImage,
	createFilename,
	resetState,
})
