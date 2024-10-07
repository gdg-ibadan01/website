<script setup>
import { ref } from 'vue';
import GdgIcon from '~/components/icons/GdgIcon.vue';

const links = [
	{ name: 'About', path: '/about' },
	{ name: 'Events', path: '/events' },
	{ name: 'Job Board', path: '/jobboard' },
	{ name: 'Blog', path: '/blog' },
];

const isMenuOpen = ref(false);

const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
	<div class="bg-white-primary nav-container flex justify-between items-center w-[90%] lg:w-[75%] mx-auto rounded-[100px] px-[26px] py-[21px]">
		<div>
			<NuxtLink to="/home">
				<GdgIcon />
			</NuxtLink>
		</div>
		<div class="lg:block hidden">
			<ul class="list-none flex gap-x-[30px]">
				<li
					v-for="link in links"
					:key="link.path"
					class="text-black-300 p-[10px] font-medium"
				>
					<NuxtLink :to="link.path">
						{{ link.name }}
					</NuxtLink>
				</li>
			</ul>
		</div>
		<div class="lg:block hidden">
			<button class="bg-black-600 text-white-primary py-[13px] w-[112px] text-center rounded-[21px] text-[12px]">
				Contact Us
			</button>
		</div>
		<div class="lg:hidden block">
			<button
				class="p-0"
				@click="toggleMenu"
			>
				<template v-if="isMenuOpen">
					<!-- Close Icon (X) -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-8 w-8 text-black"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</template>
				<template v-else>
					<!-- Hamburger Icon -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-8 w-8 text-black"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
					>
						<line
							x1="5"
							y1="7"
							x2="19"
							y2="7"
							stroke-linecap="round"
						/>
						<line
							x1="5"
							y1="12"
							x2="19"
							y2="12"
							stroke-linecap="round"
						/>
						<line
							x1="5"
							y1="17"
							x2="19"
							y2="17"
							stroke-linecap="round"
						/>
					</svg>
				</template>
			</button>
		</div>
	</div>

	<!-- Mobile Menu -->
	<div
		v-if="isMenuOpen"
		class="lg:hidden block bg-white-primary pl-6 py-6 mx-8 "
	>
		<ul class="list-none flex flex-col gap-y-[15px] mt-[10px]">
			<li
				v-for="link in links"
				:key="link.path"
				class="text-black-300 p-[10px] font-semibold text-[16px] leading-[19px]"
			>
				<NuxtLink
					:to="link.path"
					@click="toggleMenu"
				>
					{{ link.name }}
				</NuxtLink>
			</li>
			<li>
				<button class="bg-black-600 text-white-primary py-[13px] w-[112px] text-center rounded-[21px] text-[12px]">
					Contact Us
				</button>
			</li>
		</ul>
	</div>
</template>

<style scoped>
button svg {
	transition: transform 0.3s ease;
}
</style>
