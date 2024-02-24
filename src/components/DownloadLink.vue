<script setup lang="ts">
defineProps<{
	imageSrc: string
	filename: string
}>()
</script>

<template>
	<a :href="imageSrc" :download="filename" class="relative mx-auto block w-[--canvas-width] max-w-full">
		<span
			class="absolute left-1/2 top-4 inline-grid h-14 -translate-x-1/2 place-content-center rounded-full border-4 border-current bg-[--gray-800] px-4 text-lg font-medium tracking-wide text-white shadow-[--button-shadow]"
		>
			Bild speichern
		</span>
		<img class="mx-auto" :src="imageSrc" alt="" />
	</a>
</template>
