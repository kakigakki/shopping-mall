<template>
  <div class="nav" :style="{backgroundColor : color}">
    <div v-if="showFront" class="img" @click="back">
      <img class="leftArrow" src="~assets/img/common/back.svg" alt="">
    </div>
    <div class="center">
      <slot ></slot>
    </div>
    <div v-if="showBack" class="img" @click="foward">
      <img class="rightArrow" src="~assets/img/common/back.svg" alt="">
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
  },
  methods:{
    back(){
      this.$router.go(-1)
    },
    foward(){
      this.$router.go(1)
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
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  justify-items: stretch;
  align-items: center;
  z-index: 1;
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.055);

}
.nav img{
  height: 35px;
  vertical-align: middle;
}
.nav img:nth-child(1){
  transform: scale(0.7);
}
.nav .center{
  grid-column: 2/3  ;
}

.center{
  text-align: center;
}


</style>