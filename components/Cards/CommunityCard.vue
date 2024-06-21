<template>
	<div :class="[backgroundColor, 'p-[20px] h-[230px] rounded-[24px] shadow-md w-[404px]']">
		<div class="flex items-center mb-[15px] gap-[12px]">
			<img
				:src="image"
				alt="Card Image"
				class="w-auto h-auto rounded-lg"
			>
			<h3 :class="[color, 'text-[21px] lead-[33px] font-semibold']">
				{{ heading }}
			</h3>
		</div>
		<p :class="[color, 'text-[19px] lead-[33px] font-normal']">
			{{ description }}
		</p>
	</div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
	backgroundColor: {
		type: String,
		default: 'bg-white',
	},
	color: {
		type: String,
		default: 'text-black',
	},
	image: {
		type: String,
		required: true,
	},
	heading: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
});
</script>
