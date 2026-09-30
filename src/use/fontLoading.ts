import { ref, readonly } from 'vue'

const REQUIRED_FONT_WEIGHTS = ['500', '600']
const fontsReady = ref(false)

const waitForFonts = async () => {
	const fontFaceSet = await document.fonts.ready
	// // some fonts may still be unloaded if they aren't used on the current page
	fontFaceSet.forEach(async fontFace => {
		if (!REQUIRED_FONT_WEIGHTS.includes(fontFace.weight)) return
		await fontFace.loaded
		fontsReady.value = true
	})
}

export const useFontLoading = () => ({
	fontsReady: readonly(fontsReady),
	waitForFonts,
})
