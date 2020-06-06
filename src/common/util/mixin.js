import { debounce } from "common/util/util"

export const imgLoadMixin = {
  data() {
    return {
      imgLoadFunc: null,
      refresh: null
    }
  },
  mounted() {
    this.refresh = debounce(this.$refs.scroll.refresh, 10)
      //当每有一张图片加载时,bscroll重新加载,防止拖动bug
    this.imgLoadFunc = () => this.refresh();
    this.$bus.$on("imgLoad", this.imgLoadFunc)
  },
  deactivated() {
    //解除图片加载监视,如果不加第二个参数,会把所有路由上的ImgLoad给解除
    this.$bus.$off("imgLoad", this.imgLoadFunc)
  },

}

export const backToTopMixin = {
  data() {
    return {
      showBackArrow: false
    }
  },
  methods: {
    backToTop() {
      this.$refs.scroll.scrollTo(0, 0, 300);
    }
  },
}