<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebook } from '@awesome.me/kit-0d952598a1/icons/classic/brands';
</script>

<template>
	<ul class="social-links">
		<li>
			<Tooltip id="tooltip-facebook" text="Facebook">
				<a href="https://www.facebook.com/doubleedesign" target="_blank">
					<FontAwesomeIcon :icon="faFacebook" />
				</a>
			</Tooltip>
		</li>
	</ul>
</template>

<style scoped lang="scss">
.social-links {

}
</style>
