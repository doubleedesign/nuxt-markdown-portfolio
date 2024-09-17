<script setup lang="ts">
const { page, layout } = useContent();
</script>

<template>
	<NuxtLayout :name="layout">
		<ContentRenderer :value="page" />
	</NuxtLayout>
</template>
