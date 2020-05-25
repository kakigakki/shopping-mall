<template>
  <div class="tab">
      <slot>
        <div v-for="(item,index) in genre" :key="index" class="item" :class="{active:index === currentIndex}" @click="click(index)">
          <span>{{item}}</span>
        </div>
      </slot>
  </div>
</template>

<script>
export default {
  name:"TabController",
  props:{
    genre:{
      type:Array
    }
  },
  data(){
    return {
       currentIndex :0
    }
  },
  methods:{
    click(index){
      this.currentIndex = index
      this.$emit("chooseGenre",index)
    }
  }
}
</script>

<style scoped>
  .tab{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    background: #fff;
  }
  .tab .item{
    flex:1;
    text-align: center;
    line-height: 40px;
    position: relative;
  }
  .item span{
    padding: 5px;
    font-size: 16px;
  }

.item::after{
  content: "";
  display: block;
  position: absolute;
  bottom: 2px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 50%;
  transform: translate(-200%,0);
  opacity: 0;
  height: 3px;
  background: var(--color-tint);
}

.item.active::after{
  transition: transform 0.3s,opacity 0.3s 0.1s;
  transform: translate(0,0);
  opacity: 1;
}
.item.active span{
  color:var(--color-tint)
}

</style>