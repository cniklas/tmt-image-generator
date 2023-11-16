import 'virtual:uno.css'
// https://unocss.dev/guide/style-reset
import '@unocss/reset/tailwind-compat.css'
import './main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { useFontLoading } from './use/fontLoading'
const { waitForFonts } = useFontLoading()
waitForFonts()

const app = createApp(App)
app.use(router)
app.mount('#app')
