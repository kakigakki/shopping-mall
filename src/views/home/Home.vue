<template>
  <div class="home">
    <homeNav/>
    <mianswiper :banner="banner"/>
    <recommand :reco="recoList"/>
  </div>
</template>
<script>
import homeNav from "components/shoppingMall/home/homeNav"
import mianswiper from "components/shoppingMall/home/mainSwiper"
import recommand from "components/shoppingMall/home/recommand"
import {getMultiData} from "network/homeData"
export default {
    name: "Home",
    components:{
      homeNav,
      mianswiper,
      recommand
    },
    data(){
      return {
        banner:[],
        recoList:[]
      }
    },
    created(){
      getMultiData().then(res=>{
        this.banner=res.data.banner.list
        this.recoList = res.data.recommend.list
      })
    }
  }
</script>

<style scoped>
.home{
  color: var(--color-text)
}
</style>
