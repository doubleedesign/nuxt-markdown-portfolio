<script setup lang="ts">
import Logo from '../assets/doubleedesign-logo.svg';
</script>

<template>
	<header class="site-header">
		<div class="site-header__logo">
			<Logo/>
		</div>
	</header>
</template>

<style scoped lang="scss">
@import '../assets/mixins';
@import '../assets/theme';

.site-header {
	padding-block: 1rem;
	@include container;

	&__logo {
		width: 14rem;
		flex-basis: 14rem;

		svg {
			width: 100%;
			fill: map-get($colours, 'primary');
		}
	}
}
</style>
