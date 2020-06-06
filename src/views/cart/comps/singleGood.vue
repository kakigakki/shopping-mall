<template>
  <div v-if="Object.keys(itemInfo)">
    <div class="checkButton">
            <checkButton
              v-bind:checked ="itemInfo.checked"
              @click.native="change"
            ></checkButton>
          </div>
          <div class="imgBox">
            <img
              :src="itemInfo.img"
              alt=""
            >
          </div>
          <div class="info">
            <p>{{itemInfo.title}}</p>
            <p>{{itemInfo.desc}}</p>
            <div class="other">
              <span>¥{{itemInfo.price}}</span>
              <span>×{{itemInfo.cartCount}}</span>
            </div>
    </div>
  </div>
</template>

<script>
import checkButton from "./checkButton"
export default {
  name:"singleGood",
  props:{
    itemInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  components:{
    checkButton
  },
  methods:{
    change(){
      this.$store.commit("changeCheck",this.itemInfo)
    }
  }
}
</script>

<style scoped>
.checkButton {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(10%, -50%);
}
.imgBox {
  float: left;
}
img {
  height: 130px;
  border-radius: 7px;
  margin: 7px;
}
.info {
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.info p {
  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 7px;
}

.info p:nth-child(1) {
  font-size: 22px;
  font-weight: 1000;
}

.info p:nth-child(2) {
  font-size: 16px;
}
.other {
  margin: 0 7px;
}
.other span:nth-child(1) {
  color: var(--color-tint);
  font-size: 19px;
  float: left;
}
.other span:nth-child(2) {
  color: var(--color-tint);
  font-size: 19px;
  float: right;
}
</style>