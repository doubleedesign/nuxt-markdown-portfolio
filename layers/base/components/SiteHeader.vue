<script setup lang="ts">
</script>

<template>
	<header class="site-header">
		<div class="site-header__logo">
			<NuxtLink to="/">
				<slot name="logo"/>
			</NuxtLink>
		</div>
		<nav class="site-header__menu">
			<ContentNavigation v-slot="{ navigation }">
				<ul>
					<li v-for="link of navigation" :key="link._path">
						<NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
					</li>
				</ul>
			</ContentNavigation>
		</nav>
	</header>
</template>

<style scoped lang="scss">
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
