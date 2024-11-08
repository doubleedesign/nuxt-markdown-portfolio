<script setup lang="ts">
import ContactDetails from '~/components/ContactDetails.vue';
</script>

<template>
	<footer class="site-footer">
		<ContactDetails />
	</footer>
</template>

<style scoped lang="scss">
.site-footer {
	@include container;
}
</style>
