import { defineConfig, presetMini } from 'unocss'

export default defineConfig({
	// custom CSS
	// missing in presetMini
	rules: [
		[
			'sr-only',
			{
				position: 'absolute',
				width: '1px',
				height: '1px',
				padding: '0',
				margin: '-1px',
				overflow: 'hidden',
				clip: 'rect(0, 0, 0, 0)',
				'white-space': 'nowrap',
				'border-width': '0',
			},
		],
	],

	// https://unocss.dev/presets/wind
	presets: [presetMini()],
})
