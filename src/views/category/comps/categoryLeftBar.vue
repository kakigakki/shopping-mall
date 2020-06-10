<template>
  <div class="bar">
    <div class="item" v-for="(item,index) in list" :key="index" @click="choose(item.maitKey,index,item.title)" :class="{isActive:CheckedIndex ===index}">
      {{item.title}}
    </div>
  </div>
</template>

<script>
export default {
  name:"leftBar",
  props:{
    list:{
      type:Array
    }
  },
  methods:{
    choose(maitKey,index,title){
      this.CheckedIndex = index
      this.$emit("emitMaitkey",maitKey,index,title)
    },
    setSticky(){

    }
  },
  data(){
    return {
      CheckedIndex:0
    }
  }
}
</script>

<style scoped>
.bar{
  background: #e2e1e1;
}
.item{
  padding:18px 0;
  font-size: 13px;
  text-align: center;
  box-shadow: -1px -1px 0px 0px rgba(0, 0, 0, 0.308);
}

.isActive{
  background: #fff;
}
</style>