<template>
    <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(item, index) in banner" :key="index">
            <img :src="item.image" alt="" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
    name: "homeSwiper",
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
                },
                loop:true
            },
        };
    },
    props: {
        banner: {
            type: Array,
        },
    },
};
</script>

<style lang="scss" scoped>
.swiper {
    width: 100%;
}
.swiper img {
    width: 100%;
}
.swiper-pagination-bullet-active {
    opacity: 1;
    background: var(--color-tint);
}
</style>
