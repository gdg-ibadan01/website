<template>
	<div
		class="rounded-[16px] flex w-[154px] lg:w-[219px] h-[152px] lg:h-[216px] bg-black-500 items-center justify-center"
	>
		<div>
			<img
				:src="image"
				alt=""
				class="block mx-auto mb-[32px]"
			>
			<p class="text-[16px] lg:text-[22px] text-white-primary text-center">
				{{ name }}
			</p>
		</div>
	</div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
	name: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
});
</script>
