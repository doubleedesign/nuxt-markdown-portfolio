// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	modules: [
		'@nuxt/content',
	],
	content: {
		documentDriven: true,
	},
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					// Make functions and mixins available to all components in this layer without explicit imports
					additionalData: `
                        @use "./layers/base/assets/functions.scss" as *;
                        @use "./layers/base/assets/mixins.scss" as *;
                    `
				}
			}
		}
	}
});
