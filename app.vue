<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue';
import Logo from '../assets/doubleedesign-logo.svg';
</script>

<template>
	<SiteHeader>
		<template #logo>
			<Logo/>
		</template>
	</SiteHeader>
	<NuxtPage/>
	<SiteFooter/>
</template>
