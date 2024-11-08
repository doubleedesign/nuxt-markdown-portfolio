<script setup lang="ts">
const { page, layout } = useContent();

</script>

<template>
	<section id="page">
		<NuxtLayout :name="layout">
			<ContentRenderer :value="page">
				<template #empty>
					<p>No content found.</p>
				</template>
			</ContentRenderer>
		</NuxtLayout>
	</section>
</template>

<style scoped lang="scss">
#page {
	> div {
		width: 100%;
	}
}
</style>