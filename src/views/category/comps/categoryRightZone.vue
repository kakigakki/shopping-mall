<template>
    <div>
        <div class="zone">
            <div class="item" v-for="(item, index) in list" :key="index">
                <img :src="item.image" alt="" @load="imgLoad" />
                <p>{{ item.title }}</p>
            </div>
        </div>
        <tabController
            :genre="['流行', '新款', '精选']"
            @chooseGenre="choose"
            class="tab"
            v-if="list.length"
        ></tabController>
        <showGoods :goods="moreGoods[genre]"></showGoods>
    </div>
</template>

<script>
import tabController from "components/shoppingMall/tabController";
import showGoods from "components/shoppingMall/showGoods";
export default {
    name: "rightZone",
    props: {
        list: {
            type: Array,
            default() {
                return [];
            },
        },
        moreGoods: {
            type: Object,
        },
    },
    data() {
        return {
            genre: "pop",
        };
    },
    components: {
        tabController,
        showGoods,
    },
    methods: {
        imgLoad() {
            this.$bus.$emit("imgLoad");
        },
        choose(index) {
            console.log(index);
            switch (index) {
                case 0:
                    this.genre = "pop";
                    break;
                case 1:
                    this.genre = "new";
                    break;
                case 3:
                    this.genre = "sell";
                    break;
                default:
                    break;
            }
        },
    },
};
</script>

<style scoped>
.zone {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 15px;
    grid-column-gap: 15px;
    justify-items: center;
    align-items: center;
    width: 100%;
}
.item {
    width: 80%;
    text-align: center;
    font-size: 14px;
}
.item img {
    width: 100%;
}

.tab {
    margin-top: 20px;
    box-shadow: 0px -3px 9px 0px #c7c3c3;
}
</style>
