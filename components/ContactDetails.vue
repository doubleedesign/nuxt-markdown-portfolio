<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebook, faGithub, faNpm, faLinkedin } from '@awesome.me/kit-0d952598a1/icons/classic/brands';
import { faEnvelope } from '@awesome.me/kit-0d952598a1/icons/duotone/solid';
</script>

<template>
	<div class="contact-details">
		<ul class="contact-details__list">
			<li>
				<ul>
					<li>
						<span aria-label="Mailing address"><FontAwesomeIcon :icon="faEnvelope"/></span>
						PO Box 5030, Hoppers Crossing VIC 3029
					</li>
				</ul>
			</li>
			<li>
				<a v-tippy="{content: 'Double-E Design on Facebook', placement: 'top'}" href="https://www.facebook.com/doubleedesign" target="_blank">
					<FontAwesomeIcon :icon="faFacebook"/>
				</a>
			</li>
			<li>
				<a v-tippy="{content: 'Leesa Ward on GitHub', placement: 'top'}" href="https://github.com/doubleedesign" target="_blank">
					<FontAwesomeIcon :icon="faGithub"/>
				</a>
			</li>
			<li>
				<a v-tippy="{content: 'Leesa Ward on NPM', placement: 'top'}" href="https://www.npmjs.com/~doubleedesign" target="_blank">
					<FontAwesomeIcon :icon="faNpm"/>
				</a>
			</li>
			<li>
				<a v-tippy="{content: 'Leesa Ward on LinkedIn', placement: 'top'}" href="https://www.linkedin.com/in/doubleedesign" target="_blank">
					<FontAwesomeIcon :icon="faLinkedin"/>
				</a>
			</li>
		</ul>
	</div>
</template>

<style scoped lang="scss">
.contact-details {
	&__list {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0;
		margin: 0;

		li {
			display: block;
			text-align: center;

			&:has(ul) {
				width: 100%;
				flex-basis: 100%;

				ul {
					padding: 0 1rem;
					display: inline-block;
					border-bottom: 1px solid map-get($colours, light);

					li {
						padding-bottom: 0.75rem;

						&:first-of-type {
							font-family: solitaire-mvb-pro, sans-serif;
							font-weight: 400;
						}

						svg {
							display: inline-block;
							margin-inline-end: 0.25rem;
							font-size: 1.125rem;
						}

						small {
							font-size: 0.8rem;

							svg {
								font-size: 1em;
							}
						}
					}
				}

			}

			a {
				display: block;
				font-size: 1.44rem;
				padding: 0.25rem;
				color: map-get($colours, primary);

				&:hover, &:focus, &:active {
					color: map-get($colours, secondary);
				}
			}

		}
	}
}
</style>
