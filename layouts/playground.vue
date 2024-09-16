<script setup lang="ts">
const { page } = useContent();
const colours = ['secondary', 'primary', 'accent', 'success', 'warning', 'alert', 'light', 'dark'];
</script>

<template>
	<div class="page-content colours">
		<div v-for="colour in colours" :key="colour" :class="`theme-${colour}`">
			{{ colour }}
		</div>
	</div>
	<main class="page-content page-content--playground">
		<slot/>
	</main>
</template>

<style scoped lang="scss">
@import '../assets/theme';
@import '../assets/functions';
@import '../assets/mixins';

.colours {
	display: flex;
	flex-wrap: wrap;

	> div {
		padding: 1rem;
		font-family: $font-family-sans;

	}

	.theme-primary {
		width: 50%;
		flex-basis: 50%;
	}

	.theme-secondary {
		width: 35%;
		flex-basis: 35%;
	}

	.theme-accent {
		width: 15%;
		flex-basis: 15%;
	}
}
</style>
