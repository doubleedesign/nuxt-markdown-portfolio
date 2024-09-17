import svgLoader from 'vite-svg-loader';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	extends: [
		'./layers/base',
	],
	css: ['./assets/global.scss'],
	vite: {
		plugins: [svgLoader()],
		css: {
			preprocessorOptions: {
				scss: {
					// This makes the theme available to the base components
					additionalData: '@use "@/layers/doubleedesign/assets/theme.scss" as *;'
				}
			}
		}
	},
	app: {
		head: {
			link: [
				{
					rel: 'stylesheet',
					href: 'https://use.typekit.net/daf8wql.css'
				}
			]
		}
	}
});
