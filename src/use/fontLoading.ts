import { ref, readonly } from 'vue'

const fontsReady = ref(false)

const waitForFonts = async () => {
	const fontFaceSet = await document.fonts.ready
	const fontFaces = [...fontFaceSet].filter(fontFace => ['500', '600'].includes(fontFace.weight))
	// // some fonts may still be unloaded if they aren't used on the site
	// console.log(fontFaces.map(f => f.status))
	fontFaces.forEach(async fontFace => {
		await fontFace.loaded
		// console.log('%s %s loaded', fontFace.family, fontFace.weight)
		fontsReady.value = true
	})
}

export const useFontLoading = () => ({
	fontsReady: readonly(fontsReady),
	waitForFonts,
})
