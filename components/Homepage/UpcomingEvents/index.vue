<template>
	<div class="px-[20px] lg:px-[37px] py-[110px] flex items-center justify-center">
		<div class="upcoming-events-container rounded-[40px] py-[85px]">
			<div class="max-w-[850px] mx-auto mb-[84px]">
				<h2 class="text-center text-white-primary text-[28px] lg:text-[46px] lead-[40px] mb-3 font-semibold">
					Explore our upcoming events that makes impact.
				</h2>
				<p class="text-center text-white-primary text-[16px] lg:text-[22px] font-normal mb-[20px]">
					Whether you're a beginner, intermediate, or expert in the tech field, our events offer valuable
					opportunities to learn, network, and stay updated with the latest industry trends.
				</p>
				<div class="flex items-center justify-center gap-[25px]">
					<button
						class="bg-black-600 text-white-primary w-[241px] text-[12px] lg:text-[16px] rounded-[32px] py-[22px] font-semibold"
					>
						Upcoming Events
					</button>
					<button
						class="bg-white-primary w-[241px] rounded-[32px] text-[12px] lg:text-[16px] py-[22px] font-semibold"
					>
						Past Events
					</button>
				</div>
			</div>
			<div class="flex items-center justify-center gap-[50px] flex-wrap">
				<div class="w-[525px] h-[autopx] rounded-[24px] p-6 bg-white-primary event-card">
					<div
						class="flex items-center justify-between mb-[17px] lg:mb-[45px] text-black-600 font-semibold text-[12px] lg:text-[16px]"
					>
						<p>12/12/2024</p>
						<p>3:00pm</p>
					</div>
					<div class="w-[100%]">
						<h2 class="font-semibold text-black-600 mb-[12px] text-[14px] lg:text-[16px] max-w-[328px]">
							Tech
							Workshop: Introduction to
							Web Development
						</h2>
						<p class="text-black-400 max-w-[412px] text-[12px] lg:text-[14px] mb-[12px]">
							Join us for a hands-on workshop on web development basics. Learn HTML, CSS, and JavaScript
							from industry experts.
						</p>
						<div class="flex items-center gap-[16px] w-[100%]">
							<button
								class="text-black-600 font-semibold py-[8px] px-[16px] rounded-[8px] text-[10px] lg:text-[16px] border-[1px] border-black-200"
							>
								AI
							</button>
							<button
								class="text-black-600 font-semibold py-[8px] px-[16px] rounded-[8px] text-[10px] lg:text-[16px] border-[1px] border-black-200"
							>
								Design
							</button>
							<button
								class="text-black-600 font-semibold py-[8px] px-[16px] rounded-[8px] text-[10px] lg:text-[16px] border-[1px] border-black-200"
							>
								Design System
							</button>
						</div>
					</div>
				</div>
				<div class="w-[525px] h-[autopx] rounded-[24px] p-6 bg-white-primary event-card">
					<div
						class="flex items-center justify-between mb-[17px] lg:mb-[45px] text-black-600 font-semibold text-[12px] lg:text-[16px]"
					>
						<p>12/12/2024</p>
						<p>3:00pm</p>
					</div>
					<div class="w-[100%]">
						<h2 class="font-semibold text-black-600 mb-[12px] text-[14px] lg:text-[16px] max-w-[328px]">
							Tech
							Workshop: Introduction to
							Web Development
						</h2>
						<p class="text-black-400 max-w-[412px] text-[12px] lg:text-[14px] mb-[12px]">
							Join us for a hands-on workshop on web development basics. Learn HTML, CSS, and JavaScript
							from industry experts.
						</p>
						<div class="flex items-center gap-[16px] w-[100%]">
							<button
								class="text-black-600 font-semibold py-[8px] px-[16px] rounded-[8px] text-[10px] lg:text-[16px] border-[1px] border-black-200"
							>
								AI
							</button>
							<button
								class="text-black-600 font-semibold py-[8px] px-[16px] rounded-[8px] text-[10px] lg:text-[16px] border-[1px] border-black-200"
							>
								Design
							</button>
							<button
								class="text-black-600 font-semibold py-[8px] px-[16px] rounded-[8px] text-[10px] lg:text-[16px] border-[1px] border-black-200"
							>
								Design System
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
</script>

<style>
    .upcoming-events-container{
        width: 100%;
        background: linear-gradient(180deg, #182553, #182553),linear-gradient(180deg, #182553, #1F3B89);
        background-blend-mode: overlay;
    }

    .event-card{
        background-image: url('../../../assets/images/event-card-bg.png');
        background-size: contain;
        background-position: right;
        background-repeat: no-repeat;
    }
    .tags-container{
        display: flex;
    }

    @media screen and (max-width: 768px) {
        .upcoming-events-container{
            padding: 50px 20px;
        }
    }
</style>
