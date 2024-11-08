<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const statusCode = route.query.statusCode || '500';
const message = route.query.message || 'Internal Server Error';
</script>

<template>
	<div class="error-page">
		<h1>{{ statusCode || 'Error' }}</h1>
		<p>{{ message || 'An unexpected error occurred.' }}</p>
		<NuxtLink to="/">Go back to homepage</NuxtLink>
	</div>
</template>

<style>
.error-page {

}
</style>
