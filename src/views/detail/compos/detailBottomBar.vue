<template>
  <div class="bar">
    <div class="QA">
      <i class="icon QA"></i>
      <p>客服</p>
    </div>
    <div class="shop">
      <i class="icon shop"></i>
      <p>店铺</p>
    </div>
    <div class="collect">
      <i class="icon collect"></i>
      <p>收藏</p>
    </div>
    <div
      class="addToCart"
      @click="addCart"
    >
      <span>加入购物车</span>
    </div>
    <div class="buy">
      <span>购买</span>
    </div>
  </div>
</template>

<script>
export default {
  name:"detailBottomBar",
  props:{
    cartInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    //点击购物车后,将商品信息发送到vuex管理
    addCart(){
      this.$store.dispatch("addCart",this.cartInfo)
    }
  }
}
</script>

<style scoped>
.bar {
  background: #fff;
  position: absolute;
  bottom: 0;
  height: 55px;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
}

.icon {
  height: 30px;
  width: 30px;
  display: block;
  background-image: url("~assets/img/detail/detail_bottom.png");
  background-size: 30px 204px;
}
.icon.QA {
  background-position: 0 -68px;
}
.icon.shop {
  background-position: 0 -130px;
}
.icon.collect {
  background-position: 0 4px;
}

.QA,
.shop,
.collect {
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.addToCart,
.buy {
  flex-basis: 25%;
  text-align: center;
  line-height: 55px;
}

.addToCart {
  background: rgb(207, 160, 30);
  font-size: 17px;
  font-weight: 700;
  color: #fff;
}
.buy {
  background: var(--color-tint);
  font-size: 17px;
  font-weight: 700;
}

.addToCart span {
  color: rgb(48, 47, 47);
}

.buy span {
  color: #fff;
}
</style>