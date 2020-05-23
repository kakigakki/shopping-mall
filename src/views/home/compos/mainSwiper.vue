<template>
    <div>
    <swiper
      :interval="2000"
      isIndicator
    >
      <template v-slot:item>
        <swiperItem v-for="(item,index) in banner" :key="index">
          <template>
            <img
              :src="item.image"
              alt=""
            >
          </template>
        </swiperItem>
      </template>
    </swiper>
  </div>
</template>
<script>
import {swiper,swiperItem} from "components/common/swiper2"  
export default {
  name:"mainSwiper",
    components:{
      swiper,swiperItem
    },
    props:{
      banner:{
        type:Array
      }
    }
}
</script>

<style>

</style>