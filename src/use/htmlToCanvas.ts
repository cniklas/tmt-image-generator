import { reactive, readonly, nextTick } from 'vue'
import html2canvas from 'html2canvas'

const isDevMode = import.meta.env.DEV
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
		const el = document.querySelector('#canvas') as HTMLElement
		const canvas = await html2canvas(el, {
			backgroundColor: null,
			useCORS: true, // wird für die QR-Code-API benötigt
			logging: isDevMode,
		})

		// Ausgabe-Canvas in der ursprünglichen CSS-Größe
		const outputCanvas = document.createElement('canvas')
		outputCanvas.width = el.clientWidth
		outputCanvas.height = el.clientHeight
		const context = outputCanvas.getContext('2d')!
		context.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, outputCanvas.width, outputCanvas.height)

		state.isGenerated = true
		state.imageSrc = outputCanvas.toDataURL('image/png')
	} catch (error) {
		console.error(error)
	} finally {
		state.isPainting = false
	}
}

const resetState = () => {
	state.isPainting = false
	state.isGenerated = false
	state.imageSrc = ''
}

// Singleton State Pattern, see https://markus.oberlehner.net/blog/vue-composition-api-composables/#the-singleton-state-pattern
export const useHtmlToCanvas = () => ({
	state: readonly(state),
	generateImage,
	resetState,
})
