<template>
  <div>
    <detailNav class="nav"/>
    <scroll class="wrapper">
      <div class="content">
        <detailSwiper :imgs="images"/>
        <detailBaseInfo :base-info="baseInfo"></detailBaseInfo>
        <detailShopInfo :shop-info="shopInfo"></detailShopInfo>
        <detailDetailInfo :detail-info="detailInfo"></detailDetailInfo>
        <detailRuleInfo :params="ruleInfo"></detailRuleInfo>
      </div>
    </scroll>
  </div>
</template>

<script>
import detailNav from "./compos/detailNav"
import detailSwiper from "./compos/detailSwiper"
import detailBaseInfo from "./compos/detailBaseInfo"
import detailShopInfo from "./compos/detailShopInfo"
import detailDetailInfo from "./compos/detailDetailInfo"
import detailRuleInfo from "./compos/detailRuleInfo"

import scroll from "components/common/scroll/myScroll"

import {getDetail,BaseInfo} from "network/detailData"
export default {
  name:"detail",
  components:{
    detailNav,
    detailSwiper,
    detailBaseInfo,
    detailShopInfo,
    detailDetailInfo,
    detailRuleInfo,
    scroll
  },
  data(){
    return {
      images:[],
      baseInfo:{},
      shopInfo:{},
      detailInfo:{
        desc:"",
        imgs:[]
      },
      ruleInfo:{
        info:{},
        rule:{}
      }
    }
  },
  created(){
    getDetail(this.$route.params.id).then(res =>{
      console.log(res);
      let result = res.result
      let info = res.result.itemInfo
      this.images = info.topImages
      this.baseInfo = new BaseInfo(info.title,info.highPrice,info.highNowPrice,info.discountDesc,info.discountBgColor,result.columns[0],result.columns[1],result.columns[2],result.shopInfo.services)
      this.shopInfo = result.shopInfo
      this.detailInfo.desc = result.detailInfo.desc
      this.detailInfo.imgs = result.detailInfo.detailImage[0].list
      Object.assign(this.ruleInfo,{info:result.itemParams.info, rule:result.itemParams.rule})
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
  height: calc(100vh - 92px);
  overflow: hidden;
}
</style>