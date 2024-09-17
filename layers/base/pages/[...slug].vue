<script setup lang="ts">
const { page, layout } = useContent();
</script>

<template>
	<NuxtLayout :name="layout">
		<ContentRenderer :value="page">
			<template #empty>
				<p>No content found.</p>
			</template>
		</ContentRenderer>
	</NuxtLayout>
</template>