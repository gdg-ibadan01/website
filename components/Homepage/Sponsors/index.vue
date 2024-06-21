<template>
	<div class="bg-black-600 py-[92px] px-[23px] lg:px-[100px] w-[100%] sponsors-container">
		<div class="max-w-[864px] mb-[27px]">
			<h2 class="text-white-primary text-[28px] lg:text-[46px]">
				To our Sponsors and thought leaders.
			</h2>
			<h2 class="text-white-primary text-[28px] lg:text-[46px]">
				We Say <span class="thank-you-text font-semibold">a
					Big Thanks You</span>
			</h2>
			<p class="text-[16px] lg:text-[22px] text-white-primary">
				We are excited to bring you an incredible
				experince, made possible
				by the supports of our Sponsors
			</p>
		</div>
		<div class="sponsor-cards-container w-[100%] pb-[72px]">
			<div class="flex justify-between items-center flex-wrap gap-y-[38px]">
				<CardsSponsorCard
					name="Lacasera.africa"
					:image="lacasera"
				/>
				<CardsSponsorCard
					name="Cardify.com"
					:image="cardify"
				/>
				<CardsSponsorCard
					name="Heyfood.ng"
					:image="heyfood"
				/>
				<CardsSponsorCard
					name="Heyfood.ng"
					:image="heyfood"
				/>
				<CardsSponsorCard
					name="Alt School"
					:image="altschool"
				/>
				<CardsSponsorCard
					name="Halal.com"
					:image="halal"
				/>
				<CardsSponsorCard
					name="Halal.com"
					:image="halal"
				/>
				<CardsSponsorCard
					name="Lacasera.africa"
					:image="lacasera"
				/>
				<CardsSponsorCard
					name="Lacasera.africa"
					:image="lacasera"
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
					<img
						src="~/assets/images/avatars/green-avatar.png"
						class="lg:w-[100px] lg:h-[100px] object-cover w-[50px] h-[50px]"
						alt=""
					>
					<img
						src="~/assets/images/avatars/blue-avatar.png"
						class="lg:w-[100px] lg:h-[100px] object-cover w-[50px] h-[50px]"
						alt=""
					>
				</div>
				<div class="flex items-center justify-between lg:mb-[35px] mb-[20px] w-[100%]">
					<div class="bg-white-primary max-w-[450px] rounded-[24px] pt-[30px] px-[23px]">
						<h2 class="text-[16px] font-bold mb-1 thank-you-text">
							Most common among Testifiers
						</h2>
						<p class="lg:text-[14px] text-[10px] mb-1 text-black-400">
							Met incredible people, attended insightful workshops, and even found opportunities for
							collaboration on exciting projects. This community truly fosters growth and learning!
						</p>
						<div class="flex items-center">
							<img
								src="~/assets/images/avatars/group-avatar.png"
								class="lg:w-[100px] lg:h-[100px] lg:object-contain object-cover w-[50px] h-[50px]"
								alt=""
							>
							<p class="font-bold thank-you-text">
								5000+
							</p>
						</div>
					</div>
					<div>
						<img
							src="~/assets/images/avatars/red-avatar.png"
							alt=""
						>
					</div>
				</div>
				<div class="flex justify-between items-center mb-[30px] lg:max-w-[450px] w-[90%]">
					<img
						src="~/assets/images/avatars/yellow-avatar.png"
						class="lg:w-[100px] lg:h-[100px] object-cover w-[50px] h-[50px]"
						alt=""
					>
					<img
						src="~/assets/images/avatars/green-avatar-2.png"
						class="lg:w-[100px] lg:h-[100px] object-cover w-[50px] h-[50px]"
						alt=""
					>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import lacasera from '~/assets/images/sponsors/lacasera.png';
import cardify from '~/assets/images/sponsors/cardify.png';
import heyfood from '~/assets/images/sponsors/heyfood.png';
import altschool from '~/assets/images/sponsors/altschool.png';
import halal from '~/assets/images/sponsors/halal.png';
import oneapp from '~/assets/images/sponsors/1app.png';
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
