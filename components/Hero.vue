<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
	id: {
		type: String,
		required: true
	},
});
</script>

<template>
	<section :id="id" class="hero">
		<div class="hero__image">
			<slot name="image"/>
		</div>
		<div class="hero__copy">
			<div class="hero__copy__inner">
				<slot name="text"/>
			</div>
		</div>
	</section>
</template>

<style scoped lang="scss">
.hero {
	position: relative;
	margin-top: -4rem;

	@media (min-width: 768px) {
		display: flex;
		gap: 1rem;
	}

	 &__image {
	  	:deep(img) {
			width: 100%;
		}

		@include media-breakpoint-up(md) {
			width: 50%;
			flex-basis: 50%;
		}

		@include media-breakpoint-up(lg) {
			transform: translateY(2rem);
		}

		@include media-breakpoint-up(xl) {
			width: 65%;
			flex-basis: 65%;
			transform: translateX(-3rem);
		}
	}

	&__copy {
		display: flex;
		flex-direction: column;
		justify-content: center;

		@include media-breakpoint-up(md) {
			width: 50%;
			flex-basis: 50%;
		}

		@include media-breakpoint-up(lg) {
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			width: 60%;
			flex-basis: 60%;
		}

		&__inner {

			:deep(h1) {
				margin: 0;
				line-height: 1.1;

				span {
					font-family: solitaire-mvb-pro, sans-serif;
					font-weight: 500;
					margin: 0.5rem 0;

					@media (min-width: 1100px) {
						margin: 1rem 0;
					}
				}
			}

			:deep(p) {
				margin-top: 0;
				line-height: 1.4;
			}

			@include media-breakpoint-up(lg) {
				transform: translateY(-3rem);
			}

			@include media-breakpoint-up(xl) {
				transform: translateY(-4rem);
			}
		}
	}
}
</style>
