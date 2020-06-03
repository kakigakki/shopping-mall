<template>
  <div >
    <p class="title">
      {{baseInfo.title}}
    </p>
    <div class="price">
      <span>¥{{baseInfo.lowPrice}}</span>
      <span>¥{{baseInfo.highPrice}}</span>
      <span :style="{backgroundColor : baseInfo.discountColor}">{{baseInfo.discountText}}</span>
    </div>
    <div class="saleInfo">
      <span>{{baseInfo.sold}}</span>
      <span>{{baseInfo.collect}}</span>
      <span>{{baseInfo.express}}</span>
    </div>
    <div class="services">
      <div v-for="(item,index) in baseInfo.services" :key="index" class="serviceItem">
        <img :src="item.icon" alt="">
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"detailBaseInfo",
  props:{
    baseInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
p.title{
  margin: 10px 0;
  font-size: 20px;
  font-weight: 1000;
}
.price span{
  margin-right: 8px;
}
.price span:nth-child(1){
    color:var(--color-tint);
    font-size: 30px;
}
.price span:nth-child(2){
    font-size: 17px;
    text-decoration: line-through;
}
.price span:nth-child(3){
    display: inline-block;
    font-size: 15px;
    transform: translate(0,-50%);
    border-radius: 5px;
    padding:2px;
}
.saleInfo{
  display: grid;
  grid-template-columns: auto auto auto ;
  justify-content: space-between;
  padding: 13px 5px 11px 5px;
  box-shadow: inset 0px -1px 0px 0px rgba(0, 0, 0, 0.041);
  font-size: 15px;
}

.services{
 padding: 15px 5px;
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
  box-shadow: inset 0px -4px 0px 1px rgba(0, 0, 0, 0.041);
}
.services img{
  height: 20px;
  vertical-align: middle;
}
.services span{
  line-height: 20px;
  font-size: 16px;
  vertical-align: baseline;
}

</style>