<template>
  <div class="bar">
    <div class="item" v-for="item of list" :key="item.title" @click="choose(item.maitKey)">
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
    choose(maitKey){
      this.$emit("emitMaitkey",maitKey)
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
  border-bottom: 1px solid gray;
}
</style>