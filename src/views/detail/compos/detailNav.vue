<template>
    <navbar showFront :color="'white'">
    <template>
       <div class="tabBtn">
          <a href="#" 
          v-for="(item,index) in navGenre" 
          :key="index" 
          :class="{active:index == currentIndex}"
          @click="whereAmI(index)" >{{item}}</a>
       </div>
    </template>
  </navbar>
</template>

<script>
import navbar from "components/common/navbar/navbar"
export default {
  name:"detailNav",
  components:{
    navbar
  },
  data(){
    return {
      navGenre:["商品","参数","评论","推荐"],
      currentIndex :0
    }
  },
  methods:{
    whereAmI(index){
      this.currentIndex=index
      this.$emit("jumpTo",index)
    }
  },
}
</script>

<style scoped>
.tabBtn{
  display: flex;
  text-align: center;
}
.tabBtn a{
  flex: 1;
}
.active{
  color: var(--color-tint);
}
</style>