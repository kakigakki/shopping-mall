<template>
  <div class="bar">
    <div class="button">
      <checkButton :checked="checkedCount==cartLength" @click.native="checkAll"></checkButton>
    </div>
    <div class="selectAll">
      <span>全选</span>
    </div>
    <div class="totalPrice">
      <span>合计:¥{{totalPrice}}</span>
    </div>
    <div class="cash">
      <span>去计算({{checkedCount}})</span>
    </div>
  </div>
</template>

<script>
import checkButton from "../comps/checkButton"
import {mapGetters} from "vuex"
export default {
  name:"cartTotalBar",
  components:{
    checkButton
  },
  computed:{
    ...mapGetters(["cartLength","cartList"]),
    checkedGood(){
      return this.cartList.filter(item =>item.checked)
    },
    checkedCount(){
      return this.checkedGood.length
    },
    totalPrice(){
      return this.checkedGood.reduce((prev,cur)=>{return prev+cur.price*cur.cartCount},0)
    }
  },
  methods:{
    checkAll(){
      this.checkedCount === this.cartLength ?this.$store.commit("noCheckAny"):this.$store.commit("checkAll")
    }
  }
}
</script>

<style scoped>
.bar{
  position: absolute;
  bottom: 49px;
  display: grid;
  justify-items: stretch;
  align-items: center;
  grid-template-columns: 10% 10% 40% 40%;
  height: 40px;
  width: 100%;
  background: rgb(226, 225, 225);
  box-shadow: 1px 0 2px 1px rgba(0, 0, 0, 0.308);
}
.button{
  justify-self: right;

}
.selectAll{
justify-self: center;
}
.totalPrice{
  justify-self: center;
}

.cash{
  background: rgb(243, 81, 81);
  color: #fff;
  text-align: center;
  height: 100%;
  line-height: 40px;
   flex: 2;
}


</style>>

