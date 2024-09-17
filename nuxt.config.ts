const currentLayer = process.env.NUXT_CURRENT_LAYER;

export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	modules: [
		'@nuxt/content',
	],
	content: {
		documentDriven: true,
		dir: `${process.cwd()}/layers/${currentLayer}/content/`,
	},
});