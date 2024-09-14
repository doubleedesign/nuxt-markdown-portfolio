import svgLoader from 'vite-svg-loader';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true }, 
	modules: [
		'@nuxt/content',
	],
	vite: {
		plugins: [svgLoader()]
	},
	content: {
		documentDriven: true,
	},
	css: ['~/assets/global.scss']
});
