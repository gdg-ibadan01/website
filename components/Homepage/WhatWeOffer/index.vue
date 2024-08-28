<template>
	<div class="bg-grey-primary pt-[140px] pb-[90px] section-container">
		<div class="w-[90%] mx-auto">
			<div class="flex items-center justify-between lg:w-[90%] w-[95%] mx-auto mb-[100px] flex-wrap gap-y-[29px] lg:gap-y-0">
				<div class="bg-cinnabar-500 lg:w-[404px] w-[430px] lg:h-[230px] h-[200px] pt-[20px] pl-[20px] rounded-3xl">
					<div class="flex items-center gap-3">
						<div class="bg-cinnabar-100 lg:w-[55px] w-[60px] h-[50px] rounded-2xl flex justify-center items-center">
							<MessageIcon />
						</div>
						<h3 class="text-white-primary lg:text-[24px] lg:leading-[28px] text-[18px] leading-[24px] font-semibold">
							Tech Talks & Panel Discussions
						</h3>
					</div>
					<p class="font-normal lg:text-[22px] lg:leading-[33px] text-[20px] leading-[25px] text-white-primary pt-[13px]">
						Put your skills to the test and collaborate with peers in hackathons and coding competitions.
					</p>
				</div>
				<div class="bg-green-500 w-[404px] lg:h-[230px] h-[200px] pt-[20px] pl-[20px] rounded-3xl">
					<div class="flex items-center gap-3">
						<div class="bg-green-100 w-[50px] h-[50px] rounded-2xl flex justify-center items-center">
							<HomeIcon />
						</div>
						<h3 class="text-black-500 lg:text-[24px] lg:leading-[28px] text-[18px] leading-[24px] font-semibold">
							Workshops & Webinars
						</h3>
					</div>
					<p class="font-normal lg:text-[22px] lg:leading-[33px] text-[20px] leading-[25px] text-black-600 pt-[13px] lg:w-[367px] w-[300px]">
						Join hands-on workshops and insightful webinars conducted by industry professionals.
					</p>
				</div>
			</div>
			<div class="flex items-center justify-between mx-auto mb-[100px] flex-wrap gap-y-[29px] lg:gap-y-0">
				<img
					src="~/assets/images/side-image1.png"
					alt="card image"
					class="w-full lg:w-[270px] lg:h-[340px]"
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
					class="w-full lg:w-[270px] lg:h-[340px]"
				>
			</div>
			<div class="flex items-center justify-between lg:w-[90%] w-[95%] mx-auto flex-wrap gap-y-[29px] lg:gap-y-0">
				<div class="bg-blue-500 w-[404px] lg:h-[230px] h-[200px] pt-[20px] pl-[20px] rounded-3xl">
					<div class="flex items-center gap-3">
						<div class="bg-blue-100 w-[55px] h-[50px] rounded-2xl flex justify-center items-center">
							<InclusiveIcon />
						</div>
						<h3 class="text-white-primary lg:text-[24px] lg:leading-[28px] text-[18px] leading-[24px] font-semibold">
							Hackathons & Coding Challenges
						</h3>
					</div>
					<p class="font-normal lg:text-[22px] lg:leading-[33px] text-[20px] leading-[25px] text-white-primary pt-[13px]">
						Join hands-on workshops and insightful webinars conducted by industry professionals.
					</p>
				</div>

				<div class="bg-yellow-500 w-[404px] lg:h-[230px] h-[200px] pt-[20px] pl-[20px] rounded-3xl">
					<div class="flex items-center gap-3">
						<div class="bg-yellow-100 w-[50px] h-[50px] rounded-2xl flex justify-center items-center">
							<PeopleIcon />
						</div>
						<h3 class="text-black-500 lg:text-[24px] lg:leading-[28px] text-[18px] leading-[24px] font-semibold">
							Networking Meetups
						</h3>
					</div>
					<p class="font-normal lg:text-[22px] lg:leading-[33px] text-[20px] leading-[25px] text-black-600 pt-[13px] lg:w-[367px] w-[300px]">
						Connect with like-minded individuals and expand your professional network.
					</p>
				</div>
				<!-- <CardsCommunityCard
					background-color="bg-blue-500"
					color="text-white-primary"
					:image="cardImg3"
					heading="Hackathons & Coding Challenges"
					description="Join hands-on workshops and insightful webinars conducted by industry professionals."
				/>
				<CardsCommunityCard
					background-color="bg-yellow-500"
					color="text-black-600"
					:image="InclusiveIcon"
					heading="Networking Meetups"
					description="Connect with like-minded individuals and expand your professional network."
				/> -->
			</div>
		</div>
	</div>
</template>

<script setup>
import HomeIcon from '~/components/icons/HomeIcon.vue';
import InclusiveIcon from '~/components/icons/InclusiveIcon.vue';
import PeopleIcon from '~/components/icons/PeopleIcon.vue';
import MessageIcon from '~/components/icons/MessageIcon.vue';
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
