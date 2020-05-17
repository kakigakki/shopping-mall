<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.tabbar {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 49px;
  background-color: #ff8198;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
