<script setup>
import AppHeader from '@/components/common/AppHeader';
import CustomFooter from '@/components/common/Footer';
</script>

<template>
	<div class="app">
		<div class="">
			<AppHeader />
		</div>
		<div class="mt-[150px]">
			<HomepageHero />
			<HomepageMission />
			<HomepageWhatWeOffer />
			<HomepageUpcomingEvents />
			<HomepageSponsors />
			<CustomFooter />
		</div>
	</div>
</template>

<style scoped>
.app{
		background-image: url('~/assets/images/hero-bg.png');
		background-repeat: no-repeat;
		padding-top: 37px;
		background-size: 100% auto;
	}
</style>
