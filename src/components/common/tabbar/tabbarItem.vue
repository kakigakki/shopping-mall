<template>
    <div class="item">
        <div v-if="isShow" class="img1">
            <slot name="img1"></slot>
        </div>
        <div v-else class="img2"><slot name="img2"></slot></div>
        <div class="text"><slot name="text"></slot></div>
    </div>
</template>

<script>
export default {
    name: "tabbarItem",
    data() {
        return {
            isShow: true,
        };
    },
};
</script>

<style scoped>
.item {
    text-align: center;
}
.item img {
    height: 25px;
    width: 25px;
    vertical-align: middle;
}
</style>
