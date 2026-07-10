<script setup lang="ts">
import { useHtmlToCanvas } from '@/use/htmlToCanvas'

const { state, generateImage } = useHtmlToCanvas()
</script>

<template>
	<header id="navbar" class="fixed top-0 left-0 z-40 w-full" :class="{ 'opacity-30': state.isPainting }">
		<nav
			class="flex justify-center gap-x-5 border-t-4 border-[--pink] bg-white py-4 pb-5 font-medium text-[--gray-900]"
			:class="{ 'pointer-events-none': state.isPainting }"
		>
			<RouterLink to="/">Bauchbinde</RouterLink>
			<RouterLink to="/left">Bauchbinde links</RouterLink>
			<RouterLink to="/center-qr">Bauchbinde mit QR-Code</RouterLink>
			<RouterLink to="/block-left">Textblock links</RouterLink>
			<RouterLink to="/block-right">Textblock rechts</RouterLink>
		</nav>
		<a
			href="https://github.com/cniklas/tmt-image-generator"
			class="github-corner absolute top-0 right-0 size-15"
			style="clip-path: polygon(0 0, 100% 0, 100% 100%)"
			rel="noopener"
		>
			<span class="sr-only">View source on GitHub</span>
			<svg aria-hidden="true" viewBox="0 0 250 250" width="60" height="60" style="fill: var(--gray-900); color: #fff">
				<path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" />
				<path
					d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
					fill="currentColor"
					class="octo-arm"
					style="transform-origin: 130px 106px"
				/>
				<path
					d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
					fill="currentColor"
				/>
			</svg>
		</a>

		<button
			type="button"
			aria-label="Bild generieren"
			id="camera-button"
			:class="{ '!hidden': state.isGenerated }"
			@click="generateImage"
		>
			<svg
				aria-hidden="true"
				viewBox="0 0 24 24"
				width="54"
				height="54"
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.125"
			>
				<circle cx="12" cy="12" r="10" />
				<path d="m14.31 8 5.74 9.94" />
				<path d="M9.69 8h11.48" />
				<path d="m7.38 12 5.74-9.94" />
				<path d="M9.69 16 3.95 6.06" />
				<path d="M14.31 16H2.83" />
				<path d="m16.62 12-5.74 9.94" />
			</svg>
		</button>
	</header>

	<main class="mt-16" :class="`route-${String($route.name)}`">
		<RouterView />
	</main>
</template>
