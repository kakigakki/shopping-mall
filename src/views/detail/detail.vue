<template>
  <div>
    <detailNav
      @jumpTo="jumpTo"
      class="nav"
      ref="nav"
    />
    <scroll
      class="wrapper"
      ref="scroll"
      :probe-type="3"
      @scroll="scrollEvent"
    >
      <div class="content">
        <detailSwiper :imgs="images" />
        <detailBaseInfo :base-info="baseInfo"></detailBaseInfo>
        <detailShopInfo :shop-info="shopInfo"></detailShopInfo>
        <detailDetailInfo
          :detail-info="detailInfo"
          @detailImgLoad="detailImgLoad"
        ></detailDetailInfo>
        <detailRuleInfo
          :params="ruleInfo"
          ref="params"
        ></detailRuleInfo>
        <detailCommentInfo
          :comment-info="commentInfo"
          ref="comment"
        ></detailCommentInfo>
        <showGoods
          :goods="recommend"
          ref="recommend"
        ></showGoods>
      </div>
      <backArrow
        v-show="showBackArrow"
        @click.native="backToTop"
      />
    </scroll>
    <detailBottomBar :cart-info="detailCartInfo"></detailBottomBar>
  </div>
</template>

<script>
//组件
import detailNav from "./compos/detailNav"
import detailSwiper from "./compos/detialSwiper"
import detailBaseInfo from "./compos/detailBaseInfo"
import detailShopInfo from "./compos/detailShopInfo"
import detailDetailInfo from "./compos/detailDetailInfo"
import detailRuleInfo from "./compos/detailRuleInfo"
import detailCommentInfo from "./compos/detailCommentInfo"
import detailBottomBar from "./compos/detailBottomBar"
//公共组件
import showGoods from "components/shoppingMall/showGoods"
import backArrow from "components/shoppingMall/backArrow";

//插件
import scroll from "components/common/scroll/myScroll"
//网络请求
import {getDetail,BaseInfo,getRecommend} from "network/detailData"
//工具
import {imgLoadMixin,backToTopMixin} from "common/util/mixin"
import {debounce} from "common/util/util"
export default {
  name:"detail",
  mixins:[imgLoadMixin,backToTopMixin],
  components:{
    detailNav,
    detailSwiper,
    detailBaseInfo,
    detailShopInfo,
    detailDetailInfo,
    detailRuleInfo,
    detailCommentInfo,
    detailBottomBar,
    showGoods,
    backArrow,
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
      },
      commentInfo:{
        user:{
        }
      },
      recommend:[], 
      eachZoneTop:null, //放标题栏4个元素的offsetTop
      debounceEachZoneTop :null, //防抖:标题栏4个元素的offsetTop更新
      detailCartInfo:{}
    }
  },
  created(){
    getDetail(this.$route.params.id).then(res =>{
      let result = res.result
      let info = res.result.itemInfo
      this.images = info.topImages
      console.log(this.images);
      this.baseInfo = new BaseInfo(info.title,info.highPrice,info.highNowPrice,info.discountDesc,info.discountBgColor,result.columns[0],result.columns[1],result.columns[2],result.shopInfo.services)
      this.shopInfo = result.shopInfo
      this.detailInfo.desc = result.detailInfo.desc
      this.detailInfo.imgs = result.detailInfo.detailImage[0].list
      Object.assign(this.ruleInfo,{info:result.itemParams.info, rule:result.itemParams.rule})
      if(result.rate.cRate){
          this.commentInfo = result.rate.list[0]
      }
      this.$set(this.detailCartInfo,"checked",true)
      this.detailCartInfo.id = res.iid
      this.detailCartInfo.img = info.topImages[0],
      this.detailCartInfo.title = info.title,
      this.detailCartInfo.desc = result.detailInfo.desc,
      this.detailCartInfo.price = info.highNowPrice,
      this.detailCartInfo.cartCount = 1
  
    }),
    getRecommend().then(res=>{
        this.recommend = res.data.list
    }),
    
    this.debounceEachZoneTop = debounce(()=>{
      this.eachZoneTop = []
      this.eachZoneTop.push(0)
      //因为此时scroll的content还没有加载完成,所以此时offsetParent是body,所以需要减掉44
      this.eachZoneTop.push(this.$refs.params.$el.offsetTop -44) 
      this.eachZoneTop.push(this.$refs.comment.$el.offsetTop -44)
      this.eachZoneTop.push(this.$refs.recommend.$el.offsetTop -44)
      this.eachZoneTop.push(Number.MAX_VALUE)
    },10)
  },
  methods:{
    //详情页标题点击回调
    jumpTo(index){
      this.$refs.scroll.scrollTo(0,-this.eachZoneTop[index],1000)
    },
    //详情页大图加载回调
    detailImgLoad(){
      //详情页大图每次加载,都刷新bscroll(debounce过的)
      this.refresh()
       //详情页大图每次加载,都重新计算标题栏四个元素的offsetTop(debounce过的)
      this.debounceEachZoneTop()
    },
    scrollEvent(pos){
        //滚动内容区时,显示对应的标题
        for (let i = 0; i < this.eachZoneTop.length; i++) {
          if(this.$refs.nav.currentIndex !==i&&(-pos.y>=this.eachZoneTop[i]&&-pos.y<this.eachZoneTop[i+1])){            
            this.$refs.nav.currentIndex = i
          }
        }
        //显示返回顶部小按钮
        this.showBackArrow =-pos.y > 1000
    }
  }
}
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
}
.wrapper {
  margin-top: 44px;
  height: calc(100vh - 99px);
  overflow: hidden;
}
</style>