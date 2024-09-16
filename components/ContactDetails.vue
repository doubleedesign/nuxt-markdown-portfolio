<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faMailbox } from '@awesome.me/kit-0d952598a1/icons/sharp-duotone/solid';
import { faEnvelope } from '@awesome.me/kit-0d952598a1/icons/sharp/solid';
import { faMapMarkerAlt } from '@awesome.me/kit-0d952598a1/icons/sharp/solid';
import { faCameraWeb } from '@awesome.me/kit-0d952598a1/icons/sharp-duotone/solid';
import { faMobileAlt } from '@awesome.me/kit-0d952598a1/icons/sharp/solid';
</script>

<template>
	<div class="contact-details">
		<ul>
			<li>
				<Tooltip id="tooltip-email" text="Email">
					<FontAwesomeIcon :icon="faEnvelope"/>
				</Tooltip>
				<a href="mailto:contact@doubleedesign.com.au">contact@doubleedesign.com.au</a>
			</li>
			<li>
				<Tooltip id="tooltip-mail" text="Snail mail">
					<FontAwesomeIcon :icon="faMailbox"  />
				</Tooltip>
				<span>PO Box 5030, Hoppers Crossing VIC 3029</span>
			</li>
			<li>
				<Tooltip id="tooltip-call" text="In-person, video call, phone call">
					<FontAwesomeIcon :icon="faMapMarkerAlt" />
					<FontAwesomeIcon :icon="faCameraWeb" />
					<FontAwesomeIcon :icon="faMobileAlt" />
				</Tooltip>
				<span>By appointment</span>
			</li>
		</ul>
	</div>
</template>

<style scoped lang="scss">
@import '../assets/theme';
@import '../assets/functions';
@import '../assets/mixins';

.contact-details {

}
</style>
