<script setup>
// import Ticker from 'framer-motion-ticker'
</script>

<template>
	<div class="hero-container">
		<div class="max-w-[339px] lg:max-w-[885px] mx-auto mb-2">
			<h1
				class="text-black-600 text-[36px] lg:text-[57px] text-center font-custom font-semibold leading-[43px] lg:leading-[59px] mb-5"
			>
				Join GDG Ibadans Vibrant Tech Community.
			</h1>
			<p class="text-black-400 text-[16px] lg:text-[22px] font-custom text-center font-normal mb-[23px]">
				Welcome to GDG Ibadan, where tech enthusiasts of all levels come together to share knowledge, explore
				innovations, and build meaningful connections.
			</p>
			<div class="w-[241px] mx-auto">
				<button
					class="bg-black-600 text-white-primary py-[22px] px-[32px] font-semibold text-center rounded-[60px] text-[18px]"
				>
					Join Our Community
				</button>
			</div>
		</div>
		<div class="relative w-[83%] mx-auto lg:h-[420px] h-[130px]">
			<marquee
				behavior="scroll"
				direction="left"
				class="flex"
			>
				<img
					src="~/assets/images/students-bg.png"
					alt="background carousel image"
					class="w-[100%] h-[100%]"
				>
			</marquee>
			<img
				src="~/assets/images/students.png"
				alt=""
				class="block w-auto mx-auto absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] pt-[100px]"
			>
		</div>
	</div>
</template>
