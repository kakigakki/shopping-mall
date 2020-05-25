<template>
  <navbar>
      <template>
      <p class="text">购物街</p>
      </template>
  </navbar>
</template>

<script>
import navbar from  "components/common/navbar/navbar"
export default {
  name:"HomeNav",
  components:{
    navbar
  }
}
</script>

<style scoped>
.text{
  text-align: center;
}
</style>