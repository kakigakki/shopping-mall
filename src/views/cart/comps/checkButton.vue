<template>
  <span
    :class="{checked:checked}"
  >
  </span>
</template>

<script>
export default {
  name:"checkButton",
  props:{
    checked:{
      type:Boolean,
      default:false
    }
  },
  watch:{
    checked : function(newValue){
      this.checked = newValue
    }
  }
}
</script>

<style scoped>
span {
  display: inline-block;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  border: 1px var(--color-tint) solid;
}
span.checked {
  background: var(--color-tint);
  text-align: center;
  line-height: 25px;
  font-size: 19px;
  font-weight: 2000;
  color: aliceblue;
  border: 0px;
}

span.checked::after {
  content: "✔";
}
</style>