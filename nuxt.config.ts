import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	modules: ['@nuxt/content'],
	content: {
		documentDriven: true,
	},
	css: ['./scss/global.scss'],
	plugins: [
		{ src: './plugins/tippy.ts' }
	],
	vite: {
		plugins: [svgLoader()],
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
                        @use "@/scss/functions.scss" as *;
                        @use "@/scss/mixins.scss" as *;
                        @use "@/scss/theme.scss" as *; 
                        @use 'node_modules/@doubleedesign/hover.scss/hover' as hoverEffects;
                        @use 'node_modules/@doubleedesign/animate-into-view/src/animate-into-view' as animate;
                    `
				}
			}
		}
	},
	app: {
		head: {
			title: 'Double-E Design | Werribee web design, web development, graphic design',
			meta: [
				// eslint-disable-next-line max-len
				{ name: 'description', content: 'Est. 2009, Double-E Design provides custom website design and development and print graphic design for the performing arts, schools, community organisations, allied health professionals, domestic animal businesses, and more.' },
			],
			link: [
				{
					rel: 'stylesheet',
					href: 'https://use.typekit.net/daf8wql.css'
				}
			],
			style: [{
				// Prevent flash of unstyled content, part 1
				children: 'body { opacity: 0; transition: opacity 0.3s; }'
			}],
			script: [
				{
					type: 'text/javascript',
					// Prevent flash of unstyled content, part 2
					children: 'window.addEventListener(\'load\', () => document.body.style.opacity = \'1\');'
				},
				{
					src: '/gtag.js',
					type: 'text/javascript',
					async: true,
				},
			],
		}
	},
	nitro: {
		prerender: {
			failOnError: false, // Allows the build to complete even with 404s
		}
	}
});