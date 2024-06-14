<template>
    <div class="bg-aboutHeader w-full h-[100vh] bg-black-600">
            <div class="py-10">
                <Header />
            </div>
            <div class="flex lg:flex-row flex-col gap-5 lg:gap-10 lg:px-[7rem] px-[1rem] lg:mt-20 mt-2">
                <div class="pl-4 lg:pt-32 pt-14 z-30 w-[100%]">
                    <h2 class="text-white-primary font-custom font-semibold lg:text-[77px] text-[30px] lg:leading-[96px] leading-[40px]">Building <br />
                        Strong Connection <br /> with each others</h2>
                </div>
                <div class="w-[30%] lg:w-[50%]">

                    <div class="flex flex-col items-center relative lg:left-24 left-[13rem]">
                        <div class="bg-green-500 lg:w-[170px] w-[90px] h-[90px] lg:h-[170px] rounded-full flex items-center justify-center z-20">
                            <img src="~/assets/images/aboutimages/image-71.png" class="lg:w-[160px] lg:h-[160px] w-[90px] h-[90px] mt-5 z-20" alt="">
                        </div>
                        <div
                            class="bg-white-primary lg:w-[132px] w-[90px] rounded-md flex flex-col items-center relative lg:bottom-5 bottom-3 lg:py-2 py-1 z-30">

                            <p class="font-custom leading-[11px] lg:text-[10px] text-[8px] lg:font-semibold font-medium text-black-600">Product Designer
                            </p>
                            <p class="font-custom leading-[11px] lg:text-[10px] text-[8px] font-normal text-green-500">Living at Akobo</p>
                        </div>
                        <div class="relative lg:top-[-9rem] top-[-7.3rem] lg:left-[4rem] left-[2.2rem]">
                            <img src="~/assets/images/aboutimages/vector17.png" class="z-10" alt="">
                            <div class="flex relative bottom-4 flex-col items-center">
                                <div class="bg-amber-500 lg:w-[100px] lg:h-[100px] w-[60px] h-[60px] rounded-full flex items-center justify-center">
                                    <img src="~/assets/images/aboutimages/image-34.png" class="lg:w-[75px] lg:h-[75px] w-[50px] h-[50px] z-20 lg:mt-5 mt-3"
                                        alt="">
                                </div>
                                <div
                                    class="bg-white-primary lg:w-[132px] w-[90px] rounded-md flex flex-col items-center relative bottom-1 lg:bottom-5 lg:py-2 py-1 z-30">

                                    <p class="font-custom leading-[11px] lg:text-[10px] text-[8px] font-semibold text-black-600">Frontend Designer
                                    </p>
                                    <p class="font-custom leading-[11px] lg:text-[10px] text-[8px] font-normal text-amber-500">Living at
                                        Moniya</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div>
                        <img src="~/assets/images/aboutimages/vector-18.png" class="z-10 relative lg:bottom-[14.5rem] lg:left-[2rem] bottom-[10rem] left-[11.5rem]" alt="">
                        <div class="flex flex-col items-center relative lg:bottom-[20rem] bottom-[14rem] lg:right-[8rem] right-[-6rem] z-20">
                                <div class="bg-blue-500 lg:w-[130px] lg:h-[130px] w-[90px] h-[90px] rounded-full flex items-center justify-center">
                                    <img src="~/assets/images/aboutimages/image-131.png" class="lg:w-[100px] lg:h-[100px w-[90px] h-[90px]"
                                        alt="">
                                </div>
                                <div
                                    class="bg-white-primary lg:w-[132px] w-[90px] rounded-md flex flex-col items-center relative bottom-5 lg:py-2 py-1">

                                    <p class="font-custom leading-[11px] lg:text-[10px] text-[8px] font-semibold text-black-600">QA Tester
                                    </p>
                                    <p class="font-custom leading-[11px] lg:text-[10px] text-[8px] font-normal text-green-500">Living at
                                        Bodija</p>
                                    </div>
                                </div>

                    </div>

                    <div class="">
                        <div
                            class="bg-cinnabar-500 lg:w-[150px] lg:h-[150px] w-[85px] h-[85px] rounded-full flex items-center justify-center relative lg:right-64 right-[-0.5rem] lg:bottom-[42rem] bottom-[29.5rem] z-20">
                            <img src="~/assets/images/aboutimages/image-130.png" class="lg:w-[120px] lg:h-[120px] w-[75px] h-[75px] lg:mt-5 mt-[-0.5rem]" alt="">
                        </div>
                        <div class=" relative lg:right-28 lg:bottom-[58.8rem] right-[-6.5rem] bottom-[35rem] z-40">
                            <div class="lg:ml-4">
                                <img src="~/assets/images/aboutimages/vector-14.png"  class="relative bottom-6 left-4" alt="">
                            </div>
                            <div class=" bg-white-primary lg:w-[132px] w-[85px] rounded-md flex flex-col items-center py-1 lg:py-2 relative bottom-8 right-7">

                                <p class="font-custom leading-[11px] lg:text-[10px] text-[8px] font-semibold text-black-600">Backend
                                    Developer</p>
                                <p class="font-custom leading-[11px] lg:text-[10px] text-[8px] font-normal text-cinnabar-500">Living at
                                    Bodija</p>
                            </div>
                        </div>
                        <div>
                            <img src="~/assets/images/aboutimages/vector-15.png" class="z-10 relative lg:bottom-[58rem] lg:right-[8rem] bottom-[35rem] right-[-4rem]" alt="">
                        </div>
                        <div>
                            <img src="~/assets/images/aboutimages/vector-16.png" class="z-10 relative lg:bottom-[76rem] lg:left-[1rem] bottom-[49rem] left-[10rem]" alt="">
                        </div>
                    </div>

                </div>
            </div>
        </div>
</template>

<script>
import Header from '@/components/common/Header'

export default {
    components: {
        Header,
    },
};
</script>

<style scoped>
.bg-aboutHeader {
    background-image: url('@/assets/images/aboutimages/Group-1000004498.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
</style>