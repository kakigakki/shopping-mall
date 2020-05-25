<template>
  <div>
    <detailNav class="nav"/>
    <scroll class="wrapper">
      <div class="content">
        <detailSwiper :imgs="images"/>
      </div>
    </scroll>
  </div>
</template>

<script>
import detailNav from "./compos/detailNav"
import detailSwiper from "./compos/detailSwiper"

import scroll from "components/common/scroll/myScroll"

import {getDetail} from "network/detailData"
export default {
  name:"detail",
  components:{
    detailNav,
    detailSwiper,
    scroll
  },
  data(){
    return {
      images:[]
    }
  },
  created(){
    getDetail(this.$route.params.id).then(res =>{
      this.images = res.result.itemInfo.topImages
    })
  },
  methods:{
  }
}
</script>

<style scoped>
.nav{
  position: fixed;
  top: 0;
}
.wrapper{
  margin-top: 44px;
}
</style>