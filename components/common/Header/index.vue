<script setup>
const links = [
	{ name: 'About', path: '/about' },
	{ name: 'Events', path: '/events' },
	{ name: 'JobBoard', path: '/jobboard' },
	{ name: 'Blog', path: '/blog' },
];
</script>

<template>
	<div class="fixed z-[1000] w-full">
	<div	
		class="bg-white-primary nav-container flex justify-between items-center w-[90%] lg:w-[75%] mx-auto rounded-[100px] px-[26px] py-[21px]"
	>
		<div>
			<NuxtLink to="/">
				<img
					src="~/assets/images/gdg-logo.png"
					alt="GDG LGOGO"
				>
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
			<button
				class="bg-black-600 text-white-primary py-[13px] w-[112px] text-center rounded-[21px] text-[12px]"
			>
				Contact
				Us
			</button>
		</div>
		<div class="lg:hidden block">
			<button
				class="p-0"
			>
				<img
					src="~/assets/images/menu.png"
					alt=""
				>
			</button>
		</div>
	</div>
</div>
</template>

<style>
    /*.nav-container{
        position: absolute;
        left: 50%;
        top: 5rem;
        transform: translate(-50%, -50%);
        z-index: 2;
    }*/
</style>
