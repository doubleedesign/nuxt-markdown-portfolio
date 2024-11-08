<script setup lang="ts">
</script>

<template>
	<header class="site-header">
		<div class="site-header__inner">
			<NuxtLink to="/" class="site-header__inner__logo">
				<slot name="logo"/>
			</NuxtLink>
			<nav class="site-header__inner__menu">
				<ContentNavigation v-slot="{ navigation }">
					<ul>
						<li v-for="link of navigation" :key="link._path">
							<NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
						</li>
					</ul>
				</ContentNavigation>
			</nav>
		</div>
	</header>
</template>

<style scoped lang="scss">
.site-header {
	transition: all 0.2s ease-in-out;
	background: rgba(255,255,255,0.95);
	position: relative;
	z-index: 500;
	width: 100%;
	max-width: 76rem;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	padding: 0;

	@include media-breakpoint-up(md) {
		justify-content: space-between;
	}

	&__inner {
		display: flex;
		flex-direction: column;
		padding: 0.5rem 1rem;
		align-items: center;
		width: 100%;

		@include media-breakpoint-up(sm) {
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		}

		&__logo {
			display: block;

			:deep(svg) {
				display: block;
				width: 10rem;
				transition: all 0.2s ease;

				@include media-breakpoint-up(lg) {
					width: 14rem;
				}
			}
		}

		&__menu {

			ul {
				display: flex;
				padding: 0;
				margin: 0;

				li {
					display: block;
					padding: 0.5rem;
					font-size: 1.2rem;

					@media (min-width: 992px) {
						padding: 0.5rem 1rem;
					}

					&:last-of-type {
						padding-inline-end: 0;
					}

					a {
						font-family: solitaire-mvb-pro, sans-serif;
						font-weight: 600;
						color: var(--color-primary);
						transition: all 0.3s ease-in-out;
						text-decoration: none;
						@include hoverEffects.underline-from-center(var(--color-secondary));

						&:before {
							height: 2px;
						}

						&:after {
							content: '';
							position: absolute;
							bottom: 0;
							left: 0;
							right: 0;
							height: 2px;
							background: transparent;
							transition: all 0.3s ease-in-out;
						}

						&:hover, &:focus, &:active, &.active {
							color: var(--color-secondary);
						}

						&.active {
							&:after {
								background: var(--color-secondary);
							}
						}
					}
				}
			}
		}
	}

	&--sticky {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		width: 100%;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

		.site-header__inner__logo {
			img {
				width: 10rem;
			}
		}
	}
}
</style>
