export default defineNuxtConfig({
	extends: ['../base/nuxt.config.ts'],
	css: ['./assets/global.scss'],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
                        @use "@/layers/base/assets/functions.scss" as *;
                        @use "@/layers/base/assets/mixins.scss" as *;
                        @use "@/layers/leesaward/assets/theme.scss" as *;
                    `
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
