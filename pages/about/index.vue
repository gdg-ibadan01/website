<template>
    <div class="">
        <AboutHeader />
        <OurValue />
        <OurImpact />
        <Individual />
        <CustomFooter />
    </div>
</template>

<script>
import AboutHeader from '~/components/AboutPage/AboutHeader/AboutHeader.vue';
import OurValue from '~/components/AboutPage/OurValue/OurValue.vue';
import OurImpact from '~/components/AboutPage/OurImpact/OurImpact.vue';
import Individual from '~/components/AboutPage/Individual/Individual.vue';
import CustomFooter from '@/components/common/Footer';

export default {
    components: {
        AboutHeader,
        OurValue,
        OurImpact,
        Individual,
        CustomFooter,
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