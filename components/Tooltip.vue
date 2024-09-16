<script setup>
import { computed } from 'vue';

const props = defineProps({
	text: {
		type: String,
		required: true
	},
	position: {
		type: String,
		default: 'bottom'
	},
	id: {
		type: String,
		default: 'tooltip'
	}
});

const tooltipClasses = computed(() => ({
	'tooltip__text': true,
	[`tooltip--${props.position}`]: true
}));

import { ref } from 'vue';

const isHovered = ref(false);
let timeoutId = null;
const handleMouseOver = () => {
	isHovered.value = true;
	if (timeoutId) {
		clearTimeout(timeoutId);
	}
};

const handleMouseOut = () => {
	timeoutId = setTimeout(() => {
		isHovered.value = false;
	}, 200);
};
</script>

<template>
	<div class="tooltip" :aria-labelledby="id"
		 :class="{ 'tooltip--active': isHovered }"
		 @mouseover="handleMouseOver"
		 @focus="handleMouseOver"
		 @mouseout="handleMouseOut"
		 @blur="handleMouseOut"
	>
		<slot />
		<span :id="id" :class="tooltipClasses" role="tooltip" inert>
			{{ text }}
		</span>
	</div>
</template>

<style scoped lang="scss">
@import '../assets/theme';
@import '../assets/functions';

.tooltip {
	position: relative;
	display: inline-block;

	&--active {
		.tooltip__text {
			visibility: visible;
			opacity: 1;
		}
	}

	&__text {
		min-width: 5rem;
		background: map-get($colours, dark);
		color: color-contrast(map-get($colours, dark));
		display: inline-block;
		padding: 0.25rem 0.5rem;
		font-family: $font-family-sans;
		font-weight: 200;
		font-size: typescale-size(-1);
		visibility: hidden;
		opacity: 0;
		transition: opacity 0.2s;
		text-align: center;
		position: absolute;
		z-index: 100;

		&:after {
			content: " ";
			position: absolute;
			border-width: 0.25rem;
			border-style: solid;
			border-color: map-get($colours, dark) transparent transparent transparent;
		}
	}

	&--top {
		inset-block-end: 120%;
		inset-inline-start: 50%;
		margin-inline-start: -60px;

		&:after {
			inset-block-start: 100%;
			inset-inline-start: 50%;
			border-color: map-get($colours, dark) transparent transparent transparent;
		}
	}

	&--bottom {
		inset-block-start: 120%;
		inset-inline-start: 50%;
		margin-inline-start: -60px;

		&:after {
			inset-block-end: 100%;
			inset-inline-start: 50%;
			border-color: transparent transparent map-get($colours, dark) transparent;
		}
	}

	&--left {
		inset-block-end: 0;
		inset-inline-end: 110%;

		&:after {
			inset-block-start: 50%;
			inset-inline-start: 100%;
			border-color: transparent transparent transparent map-get($colours, dark);
		}
	}

	&--right {
		inset-block-end: 0;
		inset-inline-start: 110%;

		&:after {
			inset-block-start: 50%;
			inset-inline-end: 100%;
			border-color: transparent map-get($colours, dark) transparent transparent;
		}
	}
}

</style>