<template>
  <div>
      <swiper       
      :interval="2000"
      isIndicator
       class="detailSwiper">
        <template v-slot:item>
            <swiperItem v-for="(item,index) in imgs" :key="index">
              <template>
                <img :src="item" alt="">
              </template>
            </swiperItem>
        </template>
      </swiper>
  </div>
</template>

<script>
import {swiper,swiperItem} from "components/common/swiper2"
export default {
  name:"detailSwiper",
  components:{
    swiper,
    swiperItem
  },
  props:{
    imgs:{
      type:Array
    }
  }
}
</script>

<style scoped>
.detailSwiper{
  overflow: hidden;
  height: 300px;
}
</style>