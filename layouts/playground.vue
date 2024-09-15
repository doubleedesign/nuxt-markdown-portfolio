<script setup lang="ts">
const { page } = useContent();
</script>

<template>
	<main class="page-content page-content--playground">
		<slot/>
	</main>
</template>

<style scoped lang="scss">
@import '../assets/theme';
@import '../assets/functions';
@import '../assets/mixins';

.page-content--playground {

}
</style>
