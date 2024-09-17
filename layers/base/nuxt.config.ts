const currentLayer = process.env.NUXT_CURRENT_LAYER;

export default defineNuxtConfig({
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
                        @use "@/layers/base/assets/functions.scss" as *;
                        @use "@/layers/base/assets/mixins.scss" as *;
                        @use "@/layers/${currentLayer}/assets/theme.scss" as *;
                    `
				}
			}
		}
	},
});