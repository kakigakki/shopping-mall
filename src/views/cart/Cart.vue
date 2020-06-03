<template>
  <div>
    <cartNav></cartNav>
    <scroll class="wrapper" ref="scroll" :probe-type="3" >
      <div class="content">
        <cartGood></cartGood>
      </div>
    </scroll>
    <cartTotalBar></cartTotalBar>
  </div>
</template>

<script>
import cartNav from "./comps/cartNav"
import cartGood from "./comps/cartGood"
import cartTotalBar from "./comps/cartTotalBar"
//插件
import scroll from "components/common/scroll/myScroll"

  export default {
    name: "Cart",
    components:{
      cartNav,
      cartGood,
      cartTotalBar,
      scroll
    }
  }
</script>

<style scoped>
.wrapper{
  height: calc(100vh - 91px);
  overflow: hidden;
  margin-top: 42px;
}
</style>
