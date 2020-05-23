<template>
  <div class="imgBox">
    <div class="imgItem" v-for="(item,index) in goods" :key="index">
      <img :src="item.show.img" alt="">
      <p class="title">
        {{item.title}}
      </p>
      <p class="info">
        <span>{{item.price}}</span>
        <img class="collect" src="~assets/img/common/collect.svg" alt="">
        <span>{{item.cfav}}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name:"showGoods",
  props:{
    goods:{
      type:Array
    }
  }
}
</script>

<style scoped>
.imgBox{
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  flex-wrap: wrap;
}
.imgItem{
  width: 48%;
  font-size: 12px;
  line-height: 12px;
}
.imgItem>img{
 width: 100%;
}
.imgItem .info{
    display: flex;
    justify-content: center;
    align-items: center;
}
.imgItem .info span:nth-child(1)::after{
  content: "";
  display: inline-block;
  width: 10px;
}
.imgItem .title{
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}

.collect{
  height: 12px;
}

</style>