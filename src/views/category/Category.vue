<template>
<div class="category">
  <categoryNav class="nav"></categoryNav>
    <div class="grid">
      <scroll class="wrapper" :probe-type="2" :bounce="false">
        <div class="content">
          <categoryLeftBar class="categoryBar" :list="categoryList" @emitMaitkey="choose"></categoryLeftBar>
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
        categoryGoods:[]
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
      choose(maitKey){
       getSubcategory(maitKey).then(res=>{
         this.categoryGoods = res.data.list
       })
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
</style>
