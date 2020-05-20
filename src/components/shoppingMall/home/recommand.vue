<template>
  <div class="recommand">
    <div v-for="(item,index) in reco" :key="index">
        <img :src="item.image" alt="">
        <p>{{item.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name:"recommand",
  props:{
    reco:{
      type:Array
    }
  }
}
</script>

<style scoped>
.recommand{
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  padding-bottom: 20px;
  border-bottom: rgb(211, 211, 211) 6px solid;;
  box-shadow: inset 0px -1px 1px 0px rgba(0, 0, 0, 0.137);
}
.recommand img{
  height: 72px;
  margin: 10px 0;
}
</style>