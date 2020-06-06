<template>
  <div
    class="boughtGood"
  >
    <div
      v-for="(item,index) in cartList"
      :key="index"
      class="good clear-fix"
    >
      <singleGood :item-info="item"></singleGood>
    </div>
  </div>
</template>

<script>
import singleGood from "../comps/singleGood"
import {mapGetters} from "vuex"
export default {
  name:"cartGood",
  components:{
    singleGood
  },
  computed:{
    ...mapGetters(["cartList"])
  }
}
</script>

<style scoped>
.good {
  position: relative;
  width: 100%;
  padding-left: 25px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.103);
}
</style>