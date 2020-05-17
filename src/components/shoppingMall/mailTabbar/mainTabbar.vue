<template>
   <div id="app">
        <tabbar>
            <template>
                <tabbarItem>
                    <template v-slot:img1>
                        <img src="~assets/img/tabbar/home.svg" />
                    </template>
                    <template v-slot:img2>
                        <img src="~assets/img/tabbar/home_active.svg" alt="" />
                    </template>
                    <template v-slot:text>
                        <div>首页</div>
                    </template>
                </tabbarItem>
                <tabbarItem>
                    <template v-slot:img1>
                        <img src="~assets/img/tabbar/category.svg" />
                    </template>
                    <template v-slot:img2>
                        <img
                            src="~assets/img/tabbar/category_active.svg"
                            alt=""
                        />
                    </template>
                    <template v-slot:text>
                        <div>分类</div>
                    </template>
                </tabbarItem>
                <tabbarItem>
                    <template v-slot:img1>
                        <img src="~assets/img/tabbar/shopcart.svg" />
                    </template>
                    <template v-slot:img2>
                        <img
                            src="~assets/img/tabbar/shopcart_active.svg"
                            alt=""
                        />
                    </template>
                    <template v-slot:text>
                        <div>购物车</div>
                    </template>
                </tabbarItem>
                <tabbarItem>
                    <template v-slot:img1>
                        <img src="~assets/img/tabbar/profile.svg" />
                    </template>
                    <template v-slot:img2>
                        <img
                            src="~assets/img/tabbar/profile_active.svg"
                            alt=""
                        />
                    </template>
                    <template v-slot:text>
                        <div>我的</div>
                    </template>
                </tabbarItem>
            </template>
        </tabbar>
    </div>
</template>

<script>
import tabbar from "components/common/tabbar/tabbar";
import tabbarItem from "components/common/tabbar/tabbarItem";
export default {  
  name:"mainTabbar",
  components:{
    tabbar,
    tabbarItem
  }
}
</script>

<style>

</style>