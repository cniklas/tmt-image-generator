import { ref, readonly } from 'vue'

const fontsReady = ref(false)

const waitForFonts = async () => {
	const fontFaceSet = await document.fonts.ready
	// // some fonts may still be unloaded if they aren't used on the site
	fontFaceSet.forEach(async fontFace => {
		if (!['500', '600'].includes(fontFace.weight)) return
		await fontFace.loaded
		// console.log('%s %s loaded', fontFace.family, fontFace.weight)
		fontsReady.value = true
	})
}

export const useFontLoading = () => ({
	fontsReady: readonly(fontsReady),
	waitForFonts,
})
