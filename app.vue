<script setup lang="ts">
</script>

<template>
	<header>
		<SiteHeader/>
	</header>
	<main>
		<NuxtPage/>
	</main>
</template>

<style scoped lang="scss">
@import './assets/mixins';

main {
	@include container;
}
</style>