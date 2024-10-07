<template>
	<div class="bg-black-600 py-[92px] px-[23px] lg:px-[100px] w-[100%] sponsors-container">
		<div class="max-w-[864px] mb-[27px]">
			<h2 class="text-white-primary text-[28px] lg:text-[46px]">
				To our sponsors and thought leaders,
			</h2>
			<h2 class="text-white-primary text-[28px] lg:text-[46px]">
				We Say <span class="thank-you-text font-semibold">a
					Big Thank You</span>
			</h2>
			<p class="text-[16px] lg:text-[22px] text-white-primary">
				We are excited to bring you an incredible
				experience, made possible
				by the support of our sponsors.
			</p>
		</div>
		<div class="sponsor-cards-container w-[100%] pb-[72px]">
			<div class="flex justify-between items-center flex-wrap gap-y-[38px]">
				<!-- <CardsSponsorCard
					name="Lacasera.africa"
					:image="lacasera"
				/> -->
				<CardsSponsorCard
					name="Cardify.com"
					:image="cardify"
				/>
				<CardsSponsorCard
					name="Turing.com"
					:image="turing"
				/>
				<CardsSponsorCard
					name="Youverify.com"
					:image="youverify"
				/>
				<CardsSponsorCard
					name="Alt School"
					:image="altschool"
				/>
				<CardsSponsorCard
					name="Heyfood.ng"
					:image="heyfood"
				/>
				<CardsSponsorCard
					name="Ship.com"
					:image="ship"
				/>
				<CardsSponsorCard
					name="Digitalocean.com"
					:image="digitalocean"
				/>
				<CardsSponsorCard
					name="Codemagic.com"
					:image="codemagic"
				/>
				<CardsSponsorCard
					name="Halal.com"
					:image="halal"
				/>
				<CardsSponsorCard
					name="1App.ng"
					:image="oneapp"
				/>
			</div>
		</div>
		<div
			class="py-[70px] flex justify-between lg:gap-[50px] gap-0 items-center flex-wrap lg:flex-nowrap map-section-container"
		>
			<div class="lg:w-[45%] w-[100%] mx-auto mb-[70px]">
				<h2 class="text-white-primary text-[28px] lg:text-[46px] mb-[12px] leading-[33px] lg:leading-[55px]">
					Stay Connected & Get Involved today!
				</h2>
				<p class="text-white-primary mb-[50px]">
					Ready to connect with fellow tech enthusiasts, expand your skills, and contribute to the tech
					community? Join GDG Ibadan today and embark on an exciting journey of learning and collaboration.
				</p>
				<button class="bg-white-primary w-[241px] rounded-[32px] py-[22px] font-semibold">
					Join Our
					Community
				</button>
			</div>
			<div class="lg:w-[55%] w-[100%] mx-auto flex flex-col avatar-section-container">
				<div class="flex justify-between items-center lg:mb-[26px] mb-[20px] lg:max-w-[450px] w-[90%]">
					<div class="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px] bg-green-500 rounded-full items-center border-[3px] border-white-primary justify-center flex overflow-hidden">
						<img
							src="~/assets/images/homeimages/image92.png"
							class="lg:w-[90px] lg:h-[90px] w-[40px] h-[40px] mt-2"
							alt=""
						>
					</div>
					<div class="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px] bg-blue-500 rounded-full items-center border-[3px] border-white-primary justify-center flex overflow-hidden">
						<img
							src="~/assets/images/homeimages/image108.png"
							class="lg:w-[89px] lg:h-[89px] w-[40px] h-[40px] mt-2"
							alt=""
						>
					</div>
				</div>
				<div class="flex items-center justify-between lg:mb-[35px] mb-[20px] w-[100%]">
					<div class="bg-white-primary max-w-[450px] rounded-[24px] py-[30px] px-[23px]">
						<h2 class="text-[16px] font-bold mb-1 thank-you-text">
							Most common among Testifiers
						</h2>
						<p class="lg:text-[14px] text-[10px] mb-1 text-black-400">
							Met incredible people, attended insightful workshops, and even found opportunities for
							collaboration on exciting projects. This community truly fosters growth and learning!
						</p>
						<div class="flex items-center">
							<AvatarCircles />
							<p class="font-bold thank-you-text relative right-8">
								5000+
							</p>
						</div>
					</div>
					<div>
						<div class="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px] bg-cinnabar-500 rounded-full items-center border-[3px] border-white-primary justify-center flex overflow-hidden">
							<img
								src="~/assets/images/homeimages/image85.png"
								class="lg:w-[81px] lg:h-[81px] w-[36px] h-[36px] mt-2"
								alt=""
							>
						</div>
					</div>
				</div>
				<div class="flex justify-between items-center mb-[30px] lg:max-w-[450px] w-[90%]">
					<div class="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px] bg-yellow-500 rounded-full items-center border-[3px] border-white-primary justify-center flex overflow-hidden">
						<img
							src="~/assets/images/homeimages/image116.png"
							class="lg:w-[86px] lg:h-[86px] w-[39px] h-[39px] mt-2"
							alt=""
						>
					</div>
					<div class="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px] bg-green-500 rounded-full items-center border-[3px] border-white-primary justify-center flex overflow-hidden">
						<img
							src="~/assets/images/homeimages/image71.png"
							class="lg:w-[85px] lg:h-[85px] w-[38px] h-[38px] mt-2"
							alt=""
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import AvatarCircles from '@/components/AvatarCircles/AvatarCircles.vue';
import halal from '~/assets/images/sponsors/SuegFTtO_400x400 (1)@2x.svg';
import cardify from '~/assets/images/sponsors/Cardify-Africa-Logo-Black-544-by-180.svg';
import youverify from '~/assets/images/sponsors/logo_iffgzd1.svg';
import codemagic from '~/assets/images/sponsors/codemagic1.svg';
// import cardify from '~/assets/images/sponsors/Cardify.png';
import heyfood from '~/assets/images/sponsors/heyfood.png';
import altschool from '~/assets/images/sponsors/altschool-africa-logo-4365C6B160-seeklogo.com@1.5x.svg';
import ship from '~/assets/images/sponsors/shiip@1.5x.svg';
import digitalocean from '~/assets/images/sponsors/digitalocean-2.svg';
import turing from '~/assets/images/sponsors/1649160813047@1.5x.svg';
import oneapp from '~/assets/images/sponsors/1appnewlogo.8e95dfd0@1.5x.svg';
</script>

<style>
 .sponsors-container {
     background-image: url('../../../assets/images/sponsors-bg.png');
     background-repeat: no-repeat;
     background-position: top 180px center;
     background-size: contain;
 }
    .thank-you-text {
        background: linear-gradient(to right, #EA4335, #84261E);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

	.map-section-container {
		background-image: url('../../../assets/images/world-map.png');
		background-repeat: no-repeat;
		background-position: right center;
		background-size: 826px 540px;
	}

    @media screen and (max-width: 768px) {
        .sponsors-container{
            background-image: url('../../../assets/images/sponsors-bg-mobile.png');
            background-repeat: no-repeat;
            background-position: top 230px center;
            background-size: contain;
        }

		.map-section-container{
			background: none;
		}

		.avatar-section-container{
			background-image: url('../../../assets/images/world-map.png');
			background-repeat: no-repeat;
			background-position: center;
			background-size: 100% 245px;
		}
    }
</style>
