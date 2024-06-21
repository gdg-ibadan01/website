<template>
	<div class="pb-[65px] mt-[60px]">
		<div class="mission-container">
			<div class="max-w-[829px] mb-[63px]">
				<h2 class="text-[28px] lg:text-[46px] leading-[35px] lg:leading-[55px] font-semibold">
					Together, we can make a difference and shape the future of technology.
				</h2>
			</div>

			<div class="flex justify-between flex-wrap">
				<div
					class="lg:w-[433px] w-[100%] lg:h-[800px] h-[750px] py-[30px] rounded-[32px] bg-blue-500 px-0 lg:px-[27px] lg:py-[17px] relative mb-[28px] lg:mb-[0] flex flex-col-reverse lg:flex-col"
				>
					<div class="relative w-[100%] h-[500px]">
						<img
							src="~/assets/images/overlay-img-3.png"
							alt=""
							class="absolute z-30 bottom-[0px]"
						>
						<img
							src="~/assets/images/overlay-img-2.png"
							alt=""
							class="absolute z-20 bottom-0 lg:bottom-[50px] right-[30px] w-[204px] h-[390px] object-cover"
						>
						<img
							src="~/assets/images/overlay-img-1.png"
							alt=""
							class="absolute top-0 lg:top-[-50px] right-[15px] lg:right-0 z-10"
						>
					</div>
					<div
						class="lg:absolute static lg:bottom-[82px] bottom-0 max-w-[339px] px-[20px] lg:px-0 mb-5 lg:mb-0"
					>
						<h2 class="text-[36px] text-white-primary mb-[18px] font-semibold">
							About us
						</h2>
						<p class="text-white-primary text-[18px] leading-[26px]">
							We're a family of passionate learners and experts. Whether you're diving into coding for the
							first time or refining your skills, you'll find a welcoming space here to collaborate,
							discover, and thrive.
						</p>
					</div>
				</div>
				<div class="w-[711px] h='100% flex flex-col justify-between items-center">
					<div class="bg-orange-500 py-[36px] px-[30px] relative w-[100%] rounded-[32px] mb-[48px]">
						<div
							class="absolute lg:right-[10px] right-[10px] lg:top-[-100px] bottom-[0] w-[156px] lg:w-[352px] lg:h-[393px]"
						>
							<img
								src="~/assets/images/review-image.png"
								alt=""
								class="w-[100%] object-cover h-[100%]"
							>
						</div>
						<div class="flex lg:flex-col flex-col-reverse">
							<div class="w-[109px] lg:w-[216px]">
								<img
									src="~/assets/images/map-2.png"
									alt=""
								>
							</div>
							<div>
								<h2 class="mb-[12px] text-white-primary lg:text-[36px] text-[24px] font-semibold">
									Our Mission
								</h2>
								<p class="text-white-primary lg:text-[18px] text-[16px] font-normal">
									To provide a supportive platform where individuals can expand their tech skills,
									share
									knowledge, and connect with like-minded peers, ultimately contributing to the growth
									of
									the tech ecosystem in Ibadan and beyond.
								</p>
							</div>
						</div>
					</div>
					<div
						class="bg-green-500 py-[36px] lg:h-[360px] h-[440px] px-[30px] relative w-[100%] rounded-[32px] lg:flex-col flex-col"
					>
						<div
							class=" absolute lg:left-[30px] left-[10px] lg:top-[-50px] bottom-[-80px] w-[140px] lg:w-[210px] h-[244px]"
						>
							<img
								src="~/assets/images/build.png"
								alt=""
							>
						</div>
						<div class="relative right-0 w-[100%] h-[100%]">
							<img
								src="~/assets/images/members.png"
								alt=""
								class="absolute z-10 top-[-80px] right-[120px] w-[255px] h-[244px] object-cover"
							>
							<img
								src="~/assets/images/review.png"
								alt=""
								class="absolute z-20 right-[-100px] w-[370px] h-[365px] object-cover bottom-[-120px]"
							>
						</div>
						<div class="max-w-[401px] lg:absolute static bottom-[35px]">
							<h2 class="mb-[12px] text-white-primary lg:text-[36px] text-[24px] font-semibold">
								Why Join GDG
							</h2>
							<p class="text-white-primary lg:text-[18px] text-[16px] font-normal">
								You'll be part of a supportive community that empowers you to explore, grow, and succeed
								in the ever-evolving tech world.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="lg:px-[30px] px-[10px]">
			<div class="bottom-text-container">
				<h2 class="font-semibold lg:text-[90px] text-[25px] text-center">
					Explore Endless Opportunity.
				</h2>
			</div>
		</div>
	</div>
</template>

<style>
 .mission-container{
        width: 100%;
        padding: 100px 77px;
        background: linear-gradient(to bottom, #FEF3F2, #FEF3F200);
    }
    .bottom-text-container{
        border-right: 5px solid #84261E;
    }
    .bottom-text-container h2{
        background: linear-gradient(to right, #EA4335, #84261E);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        padding: 0;
    }

    @media screen and (max-width: 768px){
        .mission-container{
            padding: 100px 20px;
        }
    }
</style>
