<template>
  <navbar>
    <template>
      <p>购物车({{cartLength?cartLength:0}})</p>
    </template>
  </navbar>
</template>

<script>
import navbar from  "components/common/navbar/navbar"
import {mapGetters} from "vuex"
export default {
  name:"cartNav",
  components:{
    navbar
  },
  computed:{
    ...mapGetters(["cartLength"])
  }
}
</script>
<style scoped>
</style>