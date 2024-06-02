<script setup lang="ts">
useSeoMeta({
	title: 'GDG Ibadan',
	description: 'Google Developers Group Ibadan',
});
</script>

<template>
	<div class="app">
		<NuxtLayout>
			<CommonHeader />
			<NuxtPage />
			<CommonFooter />
		</NuxtLayout>
	</div>
</template>

<style>
	.app{
		background-image: url('~/assets/images/hero-bg-1.png');
		background-repeat: no-repeat;
		padding-top: 37px;
		background-size: 100% auto;
	}
</style>
