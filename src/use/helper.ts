const createFilename = (headline: string) =>
	`${headline
		.trim()
		.replace(/[^a-z0-9\-\s]/gi, '')
		.slice(0, 16)
		.trim()}.png`

const blurOnEnter = ({ target }: KeyboardEvent) => (target as HTMLInputElement).blur()

export { createFilename, blurOnEnter }
