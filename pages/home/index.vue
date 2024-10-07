<script setup>
import AppHeader from '@/components/common/AppHeader';
import CustomFooter from '@/components/common/Footer';
</script>

<template>
	<div class="app">
		<div class="">
			<AppHeader />
		</div>
		<div class="lg:mt-[150px] mt-[80px]">
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
.app {
  background-image: url("~/assets/images/hero-bg.png");
  background-repeat: no-repeat;
  padding-top: 37px;
  background-size: 100% auto;
}

@media (max-width: 768px) {
  .app {
    background-image: url("~/assets/images/hero-bg-small.png");
    background-size: cover;
  }
}
</style>
