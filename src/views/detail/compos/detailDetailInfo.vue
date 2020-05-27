<template>
  <div>
    <p>{{detailInfo.desc}}</p>
    <div v-for="(item,index) in detailInfo.imgs" :key="index" class="img">
      <img :src="item" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name:"detailDetailInfo",
  props:{
    detailInfo:{
      type:Object
    }
  }
}
</script>

<style scoped>
 p{
  font-size: 18px;
  padding: 20px 0px;
  box-shadow: inset 0px 4px 0px 1px rgba(0, 0, 0, 0.04)
}

.img{
  width: 100%;
}
.img img{
  width: 100%;
  padding: 5px 10px;
}

</style>