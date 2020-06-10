<template>
<div class="category">
  <categoryNav class="nav"></categoryNav>
  <div class="activedSticky" v-show="selectedCatagory.isShow">{{selectedCatagory.title}}</div>
    <div class="grid">
      <scroll class="wrapper" :probe-type="2" :bounce="false" @scroll="scrollLeftBar">
        <div class="content">
          <categoryLeftBar class="categoryBar" :list="categoryList" @emitMaitkey="choose" ref="leftBar"></categoryLeftBar>
        </div>
      </scroll>
      <scroll class="wrapper" :probe-type="2" ref="scroll">
        <div class="content">
          <categoryRightZone :list="categoryGoods"></categoryRightZone>
        </div>
      </scroll>
      </div>
</div>
</template>

<script>
import categoryNav from "./comps/categoryNav"
import categoryLeftBar from "./comps/categoryLeftBar"
import categoryRightZone from "./comps/categoryRightZone"
import scroll from "components/common/scroll/myScroll"

import {imgLoadMixin} from "common/util/mixin"

import {getCategory,getSubcategory} from "network/categoryData"
   export default {
    name: "Category",
    components:{
      categoryNav,
      categoryLeftBar,
      categoryRightZone,
      scroll
    },
    mixins:[imgLoadMixin],
    data(){
      return{
        category:{},
        categoryGoods:[],
        selectedCatagory:{
          checkedIndex:0,
          title:"正在流行",
          isShow:false
        }
      }
    },
    computed:{
      categoryList(){
        return this.category.list
      }
    },
    created(){
      getCategory().then(res=>{
        this.category= res.data.category
        console.log(this.category.list);
      })
      //getCategoryDetail("10062603","pop").then(res=>console.log(res))
    },
    methods:{
      choose(maitKey,index,title){
        this.selectedCatagory.isShow =false
        this.selectedCatagory.checkedIndex= index
        this.selectedCatagory.title = title
        getSubcategory(maitKey).then(res=>{
        this.categoryGoods = res.data.list
       })
      },
      scrollLeftBar(pos){
        console.log(pos.y);
        -pos.y>=this.selectedCatagory.checkedIndex*50?this.selectedCatagory.isShow=true:this.selectedCatagory.isShow=false
      }
    }
  }
</script>

<style scoped>
.wrapper{
  height: calc(100vh - 91px);
  overflow: hidden;
  margin-top: 42px;
}
.grid{
  display: grid;
  grid-template-columns: 25% 75%;
}

.activedSticky{
  position: fixed;
  top: 42px;
  width: 25vw;
  padding:18px 0;
  font-size: 13px;
  text-align: center;
  background: #fff;
  z-index: 9;
}
</style>
