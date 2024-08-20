<template>
	<div class="my-16">
		<div class="flex flex-col items-center justify-center mb-10 px-4">
			<h2
				class="text-black-600 lg:leading-[55px] leading-[35px] font-custom font-semibold lg:text-[46px] text-[35px]"
			>
				Our Core Values
			</h2>
			<p
				class="text-black-400 leading-[25px] lg:leading-[33px] font-custom font-normal text-[18px] lg:text-[22px] text-center"
			>
				a dynamic community shaping the future
				of tech in Ibadan
			</p>
		</div>
		<div class="flex justify-between flex-col lg:flex-row gap-[3rem] px-4 lg:px-10 mb-32">
			<div class="flex flex-col gap-[6rem] justify-between">
				<div class="flex flex-col justify-center items-center gap-1">
					<div class="bg-blue-100 w-[52px] h-[52px] rounded-2xl flex items-center justify-center">
						<InclusiveIcon />
					</div>
					<h2 class="text-black-600 leading-[28px] font-custom font-semibold text-[24px]">
						Inclusivity
					</h2>
					<p
						class="text-black-400 lg:leading-[33px] leading-[25px] text-[18px] font-custom font-normal lg:text-[22px] text-center"
					>
						Everyone is welcome
						at GDG Ibadan, regardless of skill level or background.
					</p>
				</div>

				<div class="flex flex-col justify-center items-center gap-1">
					<div class="bg-cinnabar-100 w-[52px] h-[52px] rounded-2xl flex items-center justify-center">
						<MessageIcon />
					</div>
					<h2 class="text-black-600 leading-[28px] font-custom font-semibold text-[24px]">
						Continuous Learning
					</h2>
					<p
						class="text-black-400 lg:leading-[33px] font-custom font-normal lg:text-[22px]  leading-[25px] text-[18px] text-center"
					>
						We encourage
						continuous learning and provide opportunities for skill development through workshops, events, and
						resources.
					</p>
				</div>
			</div>

			<div class="my-10 lg:my-0">
				<div class="bg-component lg:w-[458px] lg:h-[727px] w-[280px] h-[450px]">
					<!-- <img src="~/assets/images/aboutimages/Component-112.png" alt=""> -->
					<div
						class="bg-white-primary shadow-xl flex flex-col gap-2 justify-center items-center lg:w-[230px] w-[180px] rounded-[16px] relative lg:top-[12rem] lg:left-[19rem] top-[6rem] left-[10rem] py-2 lg:py-5 px-2"
					>
						<h2
							class="text-black-600 lg:leading-[19px] leading-[15px] font-custom lg:font-semibold font-medium lg:text-[16px] text-[13px] px-2 lg:w-[190px] lg:py-2 w-[170px] py-1 flex justify-center items-center"
						>
							Designers
						</h2>
						<h2
							class="text-black-600 lg:leading-[19px] leading-[15px] font-custom lg:font-semibold font-medium lg:text-[16px] text-[13px] px-2 lg:w-[190px] lg:py-2 w-[170px] py-1 flex justify-center items-center"
						>
							Digital Marketers
						</h2>
						<h2
							class="text-black-600 lg:leading-[19px] leading-[15px] font-custom lg:font-semibold font-medium lg:text-[16px] text-[13px] px-2 lg:w-[190px] lg:py-2 w-[170px] py-1 flex justify-center items-center"
						>
							Frontend Developer
						</h2>
						<h2
							class="text-black-600 lg:leading-[19px] leading-[15px] font-custom lg:font-semibold font-medium lg:text-[16px] text-[13px] px-2 lg:w-[190px] lg:py-2 w-[170px] py-1 flex justify-center items-center"
						>
							2D/3D Animators
						</h2>
						<h2
							class="text-black-600 lg:leading-[19px] leading-[15px] font-custom lg:font-semibold font-medium lg:text-[16px] text-[13px] px-2 lg:w-[190px] lg:py-2 w-[170px] py-1 flex justify-center items-center"
						>
							Products Managers
						</h2>
						<h2
							class="text-black-600 lg:leading-[19px] leading-[15px] font-custom lg:font-semibold font-medium lg:text-[16px] text-[13px] px-2 lg:w-[190px] lg:py-2 w-[170px] py-1 flex justify-center items-center"
						>
							UX Writers
						</h2>
						<h2
							class="text-black-600 lg:leading-[19px] leading-[15px] font-custom lg:font-semibold font-medium lg:text-[16px] text-[13px] px-2 lg:w-[190px] lg:py-2 w-[170px] py-1 flex justify-center items-center"
						>
							Backend Developer
						</h2>
					</div>
				</div>
			</div>

			<div class="flex flex-col gap-[6rem] justify-between">
				<div class="flex flex-col justify-center items-center gap-1">
					<div class="bg-green-100 w-[52px] h-[52px] rounded-2xl flex items-center justify-center">
						<HomeIcon />
					</div>
					<h2 class="text-black-600 leading-[28px] font-custom font-semibold text-[24px]">
						Community
					</h2>
					<p
						class="text-black-400 lg:leading-[33px] font-custom font-normal lg:text-[22px]  leading-[25px] text-[18px] text-center"
					>
						We believe in the power of community and collaboration to drive innovation and learning.
					</p>
				</div>

				<div class="flex flex-col justify-center items-center gap-1">
					<div class="bg-amber-100 w-[52px] h-[52px] rounded-2xl flex items-center justify-center">
						<PeopleIcon />
					</div>
					<h2 class="text-black-600 leading-[28px] font-custom font-semibold text-[24px]">
						Networking
					</h2>
					<p
						class="text-black-400 lg:leading-[33px] font-custom font-normal lg:text-[22px]  leading-[25px] text-[18px] text-center"
					>
						Connect with like-minded individuals, industry experts, and mentors to expand your professional network.
					</p>
				</div>
			</div>
		</div>

		<!-- <div class="containers w-full">
			<div class="bg-blue-500 section">
				<div class="flex justify-end overflow-hidden">
					<img
						src="~/assets/images/aboutimages/image-121.png"
						class="lg:w-[300px] lg:h-[300px] w-[220px] h-[220px] scroll-img"
						alt=""
					>
				</div>
				<div class="overflow-hidden">
					<h2 class="text-white-primary leading-[70px] font-custom font-semibold text-[68px] scroll">
						From Bodija
						to Broadband: Ibadan Gbese!
					</h2>
				</div>
			</div>

			<div class="bg-amber-500 section">
				<div class="flex justify-end overflow-hidden">
					<img
						src="~/assets/images/aboutimages/image-121.png"
						class="lg:w-[300px] lg:h-[300px] w-[220px] h-[220px] scroll-img"
						alt=""
					>
				</div>
				<div class="overflow-hidden">
					<h2 class="text-white-primary leading-[70px] font-custom font-semibold text-[68px] scroll">
						Tech Agbáyé in the Heart of Ibadan.
					</h2>
				</div>
			</div>

			<div class="bg-cinnabar-500 section">
				<div class="flex justify-end overflow-hidden">
					<img
						src="~/assets/images/aboutimages/image-121.png"
						class="lg:w-[300px] lg:h-[300px] w-[220px] h-[220px] scroll-img"
						alt=""
					>
				</div>
				<div class="overflow-hidden">
					<h2 class="text-white-primary leading-[70px] font-custom font-semibold text-[68px] scroll">
						Ise Owo Isese: Coding for Ibadan!
					</h2>
				</div>
			</div>

			<div class="bg-green-500 section">
				<div class="flex justify-end overflow-hidden">
					<img
						src="~/assets/images/aboutimages/image-121.png"
						class="lg:w-[300px] lg:h-[300px] w-[220px] h-[220px] scroll-img"
						alt=""
					>
				</div>
				<div class="overflow-hidden">
					<h2 class="text-white-primary leading-[70px] font-custom font-semibold text-[68px] scroll">
						Tech Agbáyé in the Heart of Ibadan.
					</h2>
				</div>
			</div>
		</div> -->
	</div>
</template>

<script setup>
import InclusiveIcon from '~/components/icons/InclusiveIcon.vue';
import MessageIcon from '~/components/icons/MessageIcon.vue';
import HomeIcon from '~/components/icons/HomeIcon.vue';
import PeopleIcon from '~/components/icons/PeopleIcon.vue';
</script>

<style scoped>
.border-section:hover {
    border: 1px solid #fff;
    background-color: #FFFDEA;
    cursor: pointer;
    width: 197px;
    padding-top: 12px;
    padding-bottom: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
}

@keyframes changeBackground {
    0% {
        background-image: url('@/assets/images/aboutimages/Component-112.png');
        opacity: .9;
    }

    33% {
        background-image: url('@/assets/images/aboutimages/Component-112.png');
        opacity: 1;
    }

    34% {
        background-image: url('@/assets/images/aboutimages/Component-108.png');
        opacity: .9;
    }

    66% {
        background-image: url('@/assets/images/aboutimages/Component-108.png');
        opacity: 1;
    }

    67% {
        background-image: url('@/assets/images/aboutimages/Component-107.png');
        opacity: .9;
    }

    100% {
        background-image: url('@/assets/images/aboutimages/Component-107.png');
        opacity: 1;
    }
}

.bg-component {
    animation: changeBackground ease-out 25s infinite;
    background-size: cover;
    background-position: center;
}

@keyframes scrollText {
    0% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(-100%);
    }
}

@keyframes scrollText {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes cycleSections {
  0%, 25% {
    opacity: 1;
  }
  30%, 100% {
    opacity: 0;
  }
}

/* .containers {
  position: relative;
  height: 500px;
  left: 0;
  right: 0;
  overflow: hidden;
  width: 100%;
}

.section {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: cycleSections 40s infinite;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.section:nth-child(2) {
  animation-delay: 10s;
}

.section:nth-child(3) {
  animation-delay: 20s;
}

.section:nth-child(4) {
  animation-delay: 30s;
}

.scroll {
  display: inline-block;
  white-space: nowrap;
  animation: scrollText 10s linear infinite;
}

.scroll-img {
  animation: scrollImage 10s linear infinite;
}

@keyframes scrollImage {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-450%);
  }
}

@media (max-width: 768px) {
  .scroll-img {
    animation-duration: 10s;
  }

  @keyframes scrollImage {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-170%);
  }
}
} */
</style>
