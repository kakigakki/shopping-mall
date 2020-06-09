<template>
  <div class="zone">
    <div class="item" v-for="item of list" :key="item.title">
        <img :src="item.image" alt="" @load="imgLoad">
        <p>{{item.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name:"rightZone",
  props:{
    list:{
      type:Array
    }
  },
  methods:{
    imgLoad(){
      this.$bus.$emit("imgLoad")
    }
  }
}
</script>

<style scoped>
.zone{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 15px;
  grid-column-gap: 15px;
  justify-items: center;
  align-items: center;
  width: 100%;
}
.item{
  width: 80%;
  text-align: center;
}
.item img{
  width: 100%;
}
</style>