<template>
  <div class="nav" :style="{backgroundColor : color}">
    <div v-if="showFront" class="img">
      <img class="leftArrow" src="~assets/img/navbar/ic_arrowr_1.svg" alt="">
    </div>
    <div class="center">
      <slot ></slot>
    </div>
    <div v-if="showBack" class="img">
      <img class="rightArrow" src="~assets/img/navbar/ic_arrowr.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name:"navbar",
  props:{
    showBack:{
      type:Boolean,
      default:false
    },
    showFront:{
      type:Boolean,
      default:false
    },
    color:{
      type:String,
      default:"#ff8198"
    }
  }
}
</script>

<style>
.nav{
  width: 100%;
  color: white;
  height: 42px;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1;

}
.nav img{
  height: 35px;
}
.nav .center{
  flex-basis: 60%;
  text-align: center;
}

</style>