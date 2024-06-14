<template>
	<div class="bg-grey-primary pt-[140px] pb-[90px] section-container">
		<div class="w-[90%] mx-auto">
			<div class="flex items-center justify-between w-[90%] mx-auto mb-[100px] flex-wrap gap-y-[29px] lg:gap-y-0">
				<CardsCommunityCard
					background-color="bg-orange-500"
					color="text-white-primary"
					:image="cardImg1"
					heading="Tech Talks & Panel Discussions"
					description="Put your skills to the test and collaborate with peers in hackathons and coding competitions."
				/>
				<CardsCommunityCard
					background-color="bg-green-500"
					color="text-black-600"
					:image="cardImg2"
					heading="Workshops & Webinars"
					description="Join hands-on workshops and insightful webinars conducted by industry professionals."
				/>
			</div>
			<div class="flex items-center justify-between mx-auto mb-[100px] flex-wrap gap-y-[29px] lg:gap-y-0">
				<img
					src="~/assets/images/side-image1.png"
					alt="card image"
				>
				<div class="max-w-[647px]">
					<h2 class="lg:leading-[84px] leading-[40px] text-[28px] lg:text-[80px] lg:font-semibold font-extrabold text-black-600 text-center mb-[5px]">
						What We Offer as a Community
					</h2>
					<div
						class="backend-developer text-center py-[10px] px-[20px] text-white-primary font-semibold rounded-[45px]"
					>
						<p class="lg:text-[36px] text-[16px]">
							Backend Developers
						</p>
					</div>
				</div>
				<img
					src="~/assets/images/side-image2.png"
					alt="card image"
				>
			</div>
			<div class="flex items-center justify-between w-[90%] mx-auto flex-wrap gap-y-[29px] lg:gap-y-0">
				<CardsCommunityCard
					background-color="bg-blue-500"
					color="text-white-primary"
					:image="cardImg3"
					heading="Hackathons & Coding Challenges"
					description="Join hands-on workshops and insightful webinars conducted by industry professionals."
				/>
				<CardsCommunityCard
					background-color="bg-yellow-500"
					color="text-black-600"
					:image="cardImg4"
					heading="Networking Meetups"
					description="Connect with like-minded individuals and expand your professional network."
				/>
			</div>
		</div>
	</div>
</template>

<script setup>
import cardImg1 from '../../../assets/images/icon-1.png';
import cardImg2 from '../../../assets/images/icon-2.png';
import cardImg3 from '../../../assets/images/icon-3.png';
import cardImg4 from '../../../assets/images/icon-4.png';
</script>

<style>
    .section-container{
        background-image: url('../../../assets/images/section-bg.png');
        background-repeat: no-repeat;
        background-size: contain;
        background-position: top 50px center;
    }
    .backend-developer{
        background: linear-gradient(to right, #EA4335, #84261E);
        max-width: 392px;
        margin: auto;
        transform: rotate(-6.45deg);
    }

    @media screen and (max-width: 768px){
        .backend-developer{
            width: 200px;
        }
    }
</style>
