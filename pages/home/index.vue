<script setup>
import AppHeader from '@/components/common/AppHeader';
import CustomFooter from '@/components/common/Footer';
</script>

<template>
	<div>
		<div class="py-8">
			<AppHeader />
		</div>
		<div class="mt-[120px]">
			<HomepageHero />
			<HomepageMission />
			<HomepageWhatWeOffer />
			<HomepageUpcomingEvents />
			<HomepageSponsors />
			<CustomFooter />
		</div>
	</div>
</template>
