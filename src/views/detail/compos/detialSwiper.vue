<template>
    <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="item in imgs" :key="item">
            <img :src="item" alt="" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
    name: "detailSwiper",
    title: "Pagination / Dynamic bullets",
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            swiperOption: {
                pagination: {
                    el: ".swiper-pagination",
                    dynamicBullets: true,
                },
                autoplay:{
                    delay:1000
                }
            },
        };
    },
    props: {
        imgs: {
            type: Array,
        },
    },
};
</script>

<style lang="scss" scoped>
.swiper img {
    width: 100%;
    height: 400px;
    object-fit: cover;
}
.swiper-pagination-bullet-active {
    opacity: 1;
    background: var(--color-tint);
}
</style>
