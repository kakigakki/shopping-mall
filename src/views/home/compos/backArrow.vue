<template>
  <div>
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name:"backArrow"
}
</script>

<style scoped>
  div{
    width: 50px;
    position: absolute;
    bottom: 70px;
    right: 20px;
    z-index: 1;
    opacity: 0.7;
  }
  img{
    width: 100%;
  }
</style>