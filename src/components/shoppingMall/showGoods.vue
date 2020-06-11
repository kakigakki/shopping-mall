<template>
    <div class="imgBox">
        <div
            class="imgItem"
            v-for="(item, index) in goods"
            :key="index"
            @click="toDetailPage(item.iid)"
        >
            <img
                v-lazy="item.image || item.img || item.show.img"
                alt=""
                @load="imgLoad"
            />
            <p class="title">
                {{ item.title }}
            </p>
            <p class="info">
                <span>{{ item.price }}</span>
                <img
                    class="collect"
                    src="~assets/img/common/collect.svg"
                    alt=""
                />
                <span>{{ item.cfav }}</span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "showGoods",
    props: {
        goods: {
            type: Array,
        },
    },
    methods: {
        imgLoad() {
            this.$bus.$emit("imgLoad");
        },
        toDetailPage(iid) {
            if (iid) {
                this.$router.push({
                    path: "/detail" + iid,
                });
            }
        },
    },
};
</script>

<style scoped>
.imgBox {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    flex-wrap: wrap;
}
.imgItem {
    width: 48%;
    font-size: 12px;
    line-height: 12px;
}
.imgItem > img {
    width: 100%;
    border-radius: 10px;
}
.imgItem .info {
    display: flex;
    justify-content: center;
    align-items: center;
}
.imgItem .info span:nth-child(1) {
    color: var(--color-tint);
}
.imgItem .info span:nth-child(1)::after {
    content: "";
    display: inline-block;
    width: 10px;
}
.imgItem .title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.collect {
    height: 12px;
}
</style>
