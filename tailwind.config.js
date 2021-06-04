const { tailwindExtractor } = require('tailwindcss/lib/lib/purgeUnusedStyles')

module.exports = {
	purge: {
		content: ['./src/**/*.{html,js,svelte}'],
		options: {
			defaultExtractor: (content) => [
				// If this stops working, please open an issue at https://github.com/svelte-add/tailwindcss/issues rather than bothering Tailwind Labs about it
				...tailwindExtractor(content),
				// Match Svelte class: directives (https://github.com/tailwindlabs/tailwindcss/discussions/1731)
				...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
			],
			keyframes: true,
		},
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				chocolate: '#733816',
				peach: '#f2caa7'
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
