<script setup lang="ts">
import { useHtmlToCanvas } from '@/use/htmlToCanvas'

const { state, generateImage } = useHtmlToCanvas()
</script>

<template>
	<header id="navbar" class="fixed left-0 top-0 z-40 w-full" :class="{ 'opacity-30': state.isPainting }">
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
			class="absolute right-4 top-5 size-6 rounded-xl"
			aria-label="GitHub repo"
			rel="noopener"
		>
			<svg aria-hidden="true" class="size-6 fill-current" viewBox="0 0 16 16" width="24" height="24">
				<path
					fill-rule="evenodd"
					d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
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
				class="size-8 fill-current"
				fill="#ffffff"
				viewBox="0 0 24 24"
				width="32"
				height="32"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle cx="12" cy="12" r="3.2"></circle>
				<path
					d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
				/>
				<path d="M0 0h24v24H0z" fill="none" />
			</svg>
		</button>
	</header>

	<main class="mt-16" :class="`route-${String($route.name)}`">
		<RouterView />
	</main>
</template>
