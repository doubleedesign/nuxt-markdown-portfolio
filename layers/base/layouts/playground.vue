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
	<div class="page-content colours colours--inverse">
		<div v-for="colour in colours" :key="colour" :class="`theme-${colour} theme-${colour}--inverse`">
			{{ colour }}
		</div>
	</div>
	<main class="page-content page-content--playground">
		<slot/>
	</main>
</template>

<style scoped lang="scss">;

.colours {
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
	margin-bottom: 2rem;

	> div {
		padding: 1rem;
		font-family: $font-family-sans;
		flex-grow: 1;
		@include font(accent);
		font-size: 1rem;
	}

	.theme-primary {
		width: calc(50% - 1rem);
		flex-basis: calc(50% - 1rem);
	}

	.theme-secondary {
		width: 35%;
		flex-basis: 35%;
	}

	.theme-accent {
		width: 15%;
		flex-basis: 15%;
	}

	@each $colour, $value in $colours {
		.theme-#{$colour} {
			border:  1px solid $value;
		}
	}
}
</style>
