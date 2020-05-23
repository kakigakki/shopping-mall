<template>
    <div>
        <homeNav />
        <scroll
            class="wrapper"
            :listen-scroll="true"
            :probe-type="3"
            ref="scroll"
            @scroll="showBackToTop"
            @pullingUp="pullData"
        >
            <div class="content">
                <mianswiper :banner="banner" />
                <recommand :reco="recoList" />
                <feature />
                <tabController
                    :genre="['流行', '新款', '精选']"
                    @chooseGenre="chooseGenre"
                />
                <showGoods :goods="goods[genre].list"></showGoods>
            </div>
            <backArrow v-show="showBackArrow" @click.native="backToTop" />
        </scroll>
    </div>
</template>
<script>
import homeNav from "./compos/homeNav";
import mianswiper from "./compos/mainSwiper";
import recommand from "./compos/recommand";
import feature from "./compos/feature";
import tabController from "components/shoppingMall/tabController";
import showGoods from "components/shoppingMall/showGoods";
import scroll from "components/common/scroll/myScroll";
import backArrow from "./compos/backArrow";

import { getMultiData, getGoodsData } from "network/homeData";
export default {
    name: "Home",
    components: {
        homeNav,
        mianswiper,
        recommand,
        feature,
        tabController,
        showGoods,
        scroll,
        backArrow,
    },
    data() {
        return {
            banner: [],
            recoList: [],
            goods: {
                pop: {
                    list: [],
                    page: 1,
                },
                new: {
                    list: [],
                    page: 1,
                },
                sell: {
                    list: [],
                    page: 1,
                },
            },
            genre: "pop",
            showBackArrow: false
        };
    },
    created() {
        this.$nextTick(()=>{
        getMultiData().then((res) => {
            this.banner = res.data.banner.list;
            this.recoList = res.data.recommend.list;
        });
        this.getGoods("pop");
        this.getGoods("new");
        this.getGoods("sell");
        })
    },
    methods: {
        getGoods(type) {
            getGoodsData(type, this.goods[type].page)
                .then((res) => {
                    console.log(res.data.list);
                    this.goods[type].list.push(...res.data.list);
                    this.goods[type].page = this.goods[type].page + 1;
                    return res
                })
                .catch(() => console.log("没有更多的数据了"))
                .finally(()=>{this.$refs.scroll.finishPullUp()});
        },
        chooseGenre(index) {
            switch (index) {
                case 0:
                    this.genre = "pop";
                    break;
                case 1:
                    this.genre = "new";
                    break;
                case 2:
                    this.genre = "sell";
                    break;
                default:
                    break;
            }
        },
        showBackToTop(pos) {
            if (-pos.y > 1000) {
                this.showBackArrow = true;
            } else {
                this.showBackArrow = false;
            }
        },
        backToTop() {
            this.$refs.scroll.scrollTo(0, 0, 300);
        },
        pullData(){
            if(this.goods[this.genre].page!==1){
                console.log(this.genre);
                this.getGoods(this.genre)
            }else{
                this.$refs.scroll.finishPullUp()
            }
        }
    },
};
</script>
<style scoped>
.wrapper {
    margin-top: 42px;
    color: var(--color-text);
    height: calc(100vh - 92px);
    overflow: hidden;
}

</style>
