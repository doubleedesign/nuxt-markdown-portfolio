<script setup lang="ts">
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
