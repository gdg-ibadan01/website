<script setup>
import DiscordIcon from '~/components/icons/DiscordIcon.vue';
import FooterLinkedinIcon from '~/components/icons/FooterLinkedinIcon.vue';
import SlackIcon from '~/components/icons/SlackIcon.vue';
import TwitterIcon from '~/components/icons/TwitterIcon.vue';
</script>

<template>
	<div class="w-[100%] bg-white-primary pt-[81px] pb-[72px] relative z-20">
		<div
			class="w-[90%] lg:w-[80%] mx-auto bg-black-600 pt-[70px] rounded-[40px] relative mb-[20px] overflow-hidden"
		>
			<div class="flex justify-between flex-wrap px-[20px] lg:px-[70px]">
				<div class="max-w-[487px] mb-[40px]">
					<h2 class="text-[28px] lg:text-[46px] text-white-primary font-medium mb-[11px]">
						Learn. Grow. Together.
					</h2>
					<p class="text-white-primary text-[14px] lg:text-[16px] mb-[23px]">
						We strive to create a space that fosters collaboration and learning among tech enthusiasts of
						all levels. Whether you're a beginner or an expert, our community welcomes you.
					</p>
					<button class="bg-white-primary w-[241px] rounded-[32px] py-[22px] font-semibold">
						Join Our
						Community
					</button>
				</div>
				<div class="max-w-[400px] text-white-primary flex flex-col gap-y-[25px]">
					<h2>Links</h2>
					<NuxtLink to="/">
						<p class="text-[14px] text-black-200">
							About GDG Ibadan
						</p>
					</NuxtLink>
					<NuxtLink to="/">
						<p class="text-[14px] text-black-200">
							Upcoming Events
						</p>
					</NuxtLink>
					<NuxtLink to="/">
						<p class="text-[14px] text-black-200">
							Blog
						</p>
					</NuxtLink>
					<NuxtLink to="/">
						<p class="text-[14px] text-black-200">
							Job Board
						</p>
					</NuxtLink>
				</div>
			</div>
			<div class="mt-[10px] mb-[90px] max-w-[627px] mx-auto">
				<p class="text-center text-white-primary mb-[20px]">
					Give Us a Follow
				</p>
				<div class="flex items-center justify-center lg:gap-[49px] gap-[12px] flex-wrap">
					<NuxtLink to="/">
						<div class="w-[43px] h-[43px] lg:w-[120px] lg:h-[120px] rounded-full bg-amber-500 flex justify-center items-center">
							<SlackIcon />
						</div>
					</NuxtLink>
					<NuxtLink to="/">
						<div class="w-[43px] h-[43px] lg:w-[120px] lg:h-[120px] rounded-full bg-blue-500 flex justify-center items-center">
							<FooterLinkedinIcon />
						</div>
					</NuxtLink>
					<NuxtLink to="/">
						<div class="w-[43px] h-[43px] lg:w-[120px] lg:h-[120px] rounded-full bg-cinnabar-500 flex justify-center items-center">
							<TwitterIcon />
						</div>
					</NuxtLink>
					<NuxtLink to="/">
						<div class="w-[43px] h-[43px] lg:w-[120px] lg:h-[120px] rounded-full bg-green-500 flex justify-center items-center">
							<DiscordIcon />
						</div>
					</NuxtLink>
				</div>
			</div>
			<div class="relative w-full bottom-0 left-0 z-30">
				<img
					src="../../../assets/images/gdg-bottom-text.png"
					alt="GDG Ibadan bottom text"
				>
				<!-- <h1 class="text-[185px] font-normal text-white-primary w-[100%]">
					GDG Ibadan
				</h1> -->
			</div>
		</div>
		<div class="text-black-600 gap-y-[20px] lg:gap-[0px] flex items-center justify-center lg:justify-between flex-wrap w-[90%] lg:w-[80%] mx-auto text-[14px]">
			<p>Designed by Ibadan Community.</p>
			<p> &copy; 2024 Ibadan devwebsite</p>
		</div>
	</div>
</template>
