<template>
    <div>
        <homeNav/>
        <tabController
        :genre="['流行', '新款', '精选']"
        @chooseGenre="chooseGenre"
        ref="tabC1"
        class="tabC1"
        :class="{fix:tabControllerFix}"
        />
        <scroll
            class="wrapper"
            :listen-scroll="true"
            :probe-type="3"
            ref="scroll"
            @scroll="scrollEvent"
            @pullingUp="pullData"
        >
            <div class="content">
                <homeSwiper :banner="banner" />
                <recommand :reco="recoList" />
                <feature />
                <tabController
                    :genre="['流行', '新款', '精选']"
                    @chooseGenre="chooseGenre"
                    ref="tabC2"
                />
                <showGoods :goods="goods[genre].list"></showGoods>
            </div>
            <backArrow v-show="showBackArrow" @click.native="backToTop" />
        </scroll>
    </div>
</template>
<script>
//组件
import homeNav from "./compos/homeNav";
import homeSwiper from "./compos/homeSwiper";
import recommand from "./compos/recommand";
import feature from "./compos/feature";
import tabController from "components/shoppingMall/tabController";
import showGoods from "components/shoppingMall/showGoods";
import backArrow from "components/shoppingMall/backArrow";
//scroll库
import scroll from "components/common/scroll/myScroll";
//网络请求
import { getMultiData, getGoodsData } from "network/homeData";
//混入:监视各个路由的图片加载
import {imgLoadMixin,backToTopMixin} from "common/util/mixin"
export default {
    name: "Home",
    mixins:[imgLoadMixin,backToTopMixin],
    components: {
        homeNav,
        homeSwiper,
        recommand,
        feature,
        tabController,
        showGoods,
        scroll,
        backArrow
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
            tabControllerFix :false,
            leaveScroll:0
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
    mounted(){

    },
    activated(){
        //返回离开时记录的y轴的位置
        this.$refs.scroll.refresh()
        this.$refs.scroll.scrollTo(0,this.leaveScroll,0)
        
    },
    deactivated(){
        //记录当前的位置
        this.leaveScroll = this.$refs.scroll.getY()
    },
    methods: {
        //获取当前选中种类的图片展示
        getGoods(type) {
            getGoodsData(type, this.goods[type].page)
                .then((res) => {
                    this.goods[type].list.push(...res.data.list);
                    this.goods[type].page = this.goods[type].page + 1;
                    return res
                })
                .catch(() => console.log("没有更多的数据了"))
                .finally(()=>{this.$refs.scroll.finishPullUp()});
        },
        //切换种类
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
            //让两个种类导航栏都可以互相传递索引
            this.$refs.tabC1.currentIndex = index
            this.$refs.tabC2.currentIndex = index
        },
        scrollEvent(pos) {
            //显示返回顶部小按钮
            this.showBackArrow =-pos.y > 1000

            //将导航栏吸顶
            this.tabControllerFix = -pos.y>this.$refs.tabC2.$el.offsetTop
        },
        //上拉加载数据
        pullData(){
            if(this.goods[this.genre].page!==1){
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
.tabC1{
position:absolute;
opacity: 0;
}

.fix{
position: fixed;
opacity: 1;
z-index: 9;
}

</style>
