const createFilename = (headline: string) =>
	`${headline
		.replace(/[^a-z0-9\-\s]/gi, '')
		.slice(0, 16)
		.trim()}.png`

const blurOnEnter = ({ target }: KeyboardEvent) => (target as HTMLInputElement).blur()

// taken from https://github.com/LeaVerou/stretchy
const resize = (element: HTMLInputElement | null) => {
	if (!element) return

	element.style.width = '0'
	let width = Math.max(element.offsetWidth, element.scrollWidth - element.clientWidth)
	element.style.width = `${width}px`

	// To bulletproof, we will set scrollLeft to a huge number,
	// and read that back to see what it was clipped to
	// and increment width by that much, iteratively
	for (let i = 0; i < 10; i++) {
		// max iterations
		element.scrollLeft = 1e10
		if (element.scrollLeft === 0) break

		width += element.scrollLeft
		element.style.width = `${width}px`
	}
}

export { createFilename, blurOnEnter, resize }
