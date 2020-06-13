<template>
  <div class="category">
    <categoryNav class="nav"></categoryNav>
    <div
      class="sticky"
      :class="{
                isBottomSticky: selectedCatagory.isBottom,
                isTopSticky: selectedCatagory.isTop,
            }"
      v-show="selectedCatagory.isShow"
    >
      {{ selectedCatagory.title }}
    </div>
    <div class="grid">
      <scroll
        class="wrapper"
        :probe-type="2"
        :bounce="false"
        @scroll="scrollLeftBar"
        ref="wrap1"
      >
        <div class="content">
          <categoryLeftBar
            class="categoryBar"
            :list="categoryList"
            @emitMaitkey="choose"
            ref="leftBar"
          ></categoryLeftBar>
        </div>
      </scroll>
      <scroll
        class="wrapper"
        :probe-type="2"
        ref="scroll"
        @scroll="scrollLeftBar2"
      >
        <div class="content">
          <categoryRightZone
            :list="categoryGoods"
            :more-goods="detailGoods"
          ></categoryRightZone>
        </div>
        <backArrow
          v-show="showBackArrow"
          @click.native="backToTop"
        />
      </scroll>
    </div>
  </div>
</template>
<script>
import categoryNav from "./comps/categoryNav";
import categoryLeftBar from "./comps/categoryLeftBar";
import categoryRightZone from "./comps/categoryRightZone";
import backArrow from "components/shoppingMall/backArrow";

import scroll from "components/common/scroll/myScroll";

import { imgLoadMixin ,backToTopMixin} from "common/util/mixin";

import {
    getCategory,
    getSubcategory,
    getCategoryDetail,
} from "network/categoryData";
export default {
    name: "Category",
    components: {
        categoryNav,
        categoryLeftBar,
        categoryRightZone,
        backArrow,
        scroll,
    },
    mixins: [imgLoadMixin,backToTopMixin],
    data() {
        return {
            category: {},
            categoryGoods: [],
            selectedCatagory: {
                checkedIndex: 0,
                title: "正在流行",
                isShow: false,
                isBottom: false,
                isTop: false,
            },
            detailGoods: {
                pop: [],
                new: [],
                sell: [],
            },
        };
    },
    computed: {
        categoryList() {
            return this.category.list;
        },
    },
    created() {
        //获取分类导航列表
        getCategory().then((res) => {
            this.category = res.data.category;
        });
        //初始化时,获取正在流行
        getSubcategory("3627").then((res) => {
            this.categoryGoods = res.data.list;
        });
        //初始化时,获取正在流行详情商品
        this.getMoreGoods("10062603");
    },
    methods: {
        //点击分类导航时获取右栏数据
        choose(maitKey, index, title, miniWallkey) {
            this.selectedCatagory.isShow = false;
            this.selectedCatagory.checkedIndex = index;
            this.selectedCatagory.title = title;
            getSubcategory(maitKey).then((res) => {
                this.categoryGoods = res.data.list;
            });
            //点击分类时,加载详情商品
            this.getMoreGoods(miniWallkey);
            //点击分类时,右栏回顶部
            this.$refs.scroll.scrollTo(0,0,300)
            this.showBackArrow = false
        },

        scrollLeftBar(pos) {
            //滚动左边导航栏,顶部and底部吸附效果实现
            if (-pos.y >= this.selectedCatagory.checkedIndex * 50) {
                this.selectedCatagory.isTop = true;
                this.selectedCatagory.isShow = true;
            } else if (
                -pos.y <=
                (this.selectedCatagory.checkedIndex + 1) * 50 -
                    this.$refs.wrap1.$el.offsetHeight
            ) {
                this.selectedCatagory.isBottom = true;
                this.selectedCatagory.isShow = true;
            } else {
                this.selectedCatagory.isBottom = false;
                this.selectedCatagory.isShow = false;
                this.selectedCatagory.isTop = false;
            }
            
        },
        scrollLeftBar2(pos){
            //显示返回顶部小按钮
            this.showBackArrow =-pos.y > 1000
        },
        getMoreGoods(detailKey) {
            getCategoryDetail(detailKey, "pop").then((res) =>
                this.detailGoods.pop=res
            );
            getCategoryDetail(detailKey, "new").then((res) =>
                this.detailGoods.new=res
            );
            getCategoryDetail(detailKey, "sell").then((res) =>
                this.detailGoods.sell=res
            );
        },
    },
};
</script>

<style scoped>
.wrapper {
  height: calc(100vh - 91px);
  overflow: hidden;
  margin-top: 42px;
}
.grid {
  display: grid;
  grid-template-columns: 25% 75%;
}

.sticky {
  position: fixed;
  width: 25vw;
  padding: 18px 0;
  font-size: 15px;
  color: var(--color-tint);
  text-align: center;
  background: #fff;
  z-index: 9;
  border-left: 4px solid var(--color-tint);
}
.isBottomSticky {
  bottom: 49px;
}
.isTopSticky {
  top: 42px;
}
</style>
