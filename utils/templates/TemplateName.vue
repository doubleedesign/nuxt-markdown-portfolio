<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps<{
	// Define your props here
}>();

// Data
const content = ref('TemplateName component');

// Computed properties (if any) can be defined using computed
// import { computed } from 'vue';
// const someComputedProperty = computed(() => {
//   // Computation logic here
// });

// Methods (if any) can be defined as regular functions
// function someMethod() {
//   // Method logic here
// }
</script>

<template>
	<div class="template-name">
		{{ content }}
	</div>
</template>

<style scoped lang="scss">
.template-name {

}
</style>
