import VueTippy from 'vue-tippy';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-away.css';
import './tippy.custom.css';

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(VueTippy, {
		directive: 'tippy', // => v-tippy
		component: 'tippy', // => <tippy/>
		defaultProps: {
			placement: 'bottom',
			allowHTML: true,
			arrow: false,
			offset: [0, 0],
			animation: 'shift-away',
			animateFill: true,
		},
	});
});