import { resolve } from 'node:path';
const currentLayer = process.env.NUXT_CURRENT_LAYER;

export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	modules: [
		'@nuxt/content',
	],
	content: {
		documentDriven: true,
		// This loads pages from the current layer in addition to the default content directory
		sources: {
			current: {
				driver: 'fs',
				prefix: '/',
				base: resolve(__dirname, `layers/${currentLayer}/content`),
			}
		}
	},
	// This bit ensures app.vue is used from the current layer
	extends: [
		`./layers/${currentLayer}`
	]
});