<template>
  <div class="item" @click="activate">
    <div v-if="noShow" class="img1">
      <slot name="img1"></slot>
    </div>
    <div v-else class="img2"><slot name="img2"></slot></div>
    <div class="text" :style="{ color: tcolor }">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbarItem",
  data() {
    return {
      actived: true
    };
  },
  methods: {
    activate() {
      this.$router.replace({
        path: this.path
      });
    }
  },
  props: {
    textcolor: {
      type: String,
      default: "#ff5777"
    },
    path: {
      type: String
    }
  },
  computed: {
    tcolor() {
      if (!this.noShow) {
        return this.textcolor;
      } else {
        return "";
      }
    },
    noShow() {
      return this.$route.path.indexOf(this.path) === -1;
    }
  }
};
</script>

<style scoped>
.item {
  text-align: center;
  cursor: pointer;
}
.item img {
  height: 23px;
  width: 23px;
  vertical-align: middle;
}
</style>
