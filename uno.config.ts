import { defineConfig, presetWind } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
	theme: {
		colors: {
			chocolate: '#733816',
			peach: '#f2caa7',
		},
	},
	// https://unocss.dev/presets/wind
	presets: [presetWind()],
	// https://unocss.dev/transformers/directives
	transformers: [transformerDirectives()],
})
