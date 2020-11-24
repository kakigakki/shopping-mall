<template>
  <div class="toast" v-if="show">
      {{text}}
  </div>
</template>

<script>
export default {
  name:"toast",
  data(){
    return {
      text:"",
      show:false
    }
  },
  methods:{
    showToast(text,duration){
      this.text =text
      this.show = true
      setTimeout(() => {
        this.text=""
        this.show=false
      }, duration);
  }
  }
}
</script>

<style scoped>
.toast{
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  z-index: 100;
  padding: 10px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.644);
  text-align: center;
  line-height: 40px;
  color: aliceblue;
}
</style>