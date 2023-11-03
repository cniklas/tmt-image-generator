import { createRouter, createWebHistory } from 'vue-router'
import * as Stretchy from 'stretchy'
import CenterView from './views/CenterView.vue'
import { useHtmlToCanvas } from './use/htmlToCanvas'

Stretchy.selectors.filter = '.is-stretchy'
const { resetState } = useHtmlToCanvas()

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'center',
			component: CenterView,
		},
		{
			path: '/left',
			name: 'left',
			component: () => import('./views/LeftView.vue'),
		},
		{
			path: '/center-qr',
			name: 'center-qr',
			component: () => import('./views/CenterQRView.vue'),
		},
		{
			path: '/block-left',
			name: 'block-left',
			component: () => import('./views/BlockLeftView.vue'),
		},
		{
			path: '/block-right',
			name: 'block-right',
			component: () => import('./views/BlockRightView.vue'),
		},
	],
})

router.afterEach(async () => {
	resetState()
	window.scroll(0, 0)
	await new Promise(resolve => setTimeout(resolve, 40))
	Stretchy.init()
})

export default router
