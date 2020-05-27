<template>
    <div>
      <div class="shop">
        <img :src="shopInfo.shopLogo" alt="">
        <span>{{shopInfo.name}}</span>
      </div>
      <div class="info">
        <table class="mainInfo">
          <tbody>
            <tr>
              <td>{{sold}}</td>
              <td>{{shopInfo.cGoods}}</td>
            </tr>
            <tr>
              <td>总销量</td>
              <td><a href="http://m.meilishuo.com/shop/index/1172ua9c">全部宝贝</a></td>
            </tr>
          </tbody>
        </table>
        <table class="review">
          <tbody>
            <tr v-for="(item,index) in shopInfo.score" :key="index">
                <td>{{item.name}}</td>
                <td v-if="item.isBetter" class="isBetter"><span>{{item.score}}</span></td>
                <td v-else class="isLower"><span>{{item.score}}</span></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="enterShop">
        <a href="http://m.meilishuo.com/shop/index/1172ua9c">进店逛逛</a>
      </div>
    </div>
</template>

<script>
export default {
  name:"detailShopInfo",
  props:{
    shopInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return {
      isBetter:true
    }
  },
  computed:{
    sold(){
      return this.shopInfo.cSells>=10000
      ?(this.shopInfo.cSells/10000).toFixed(1)+"万"
      :this.shopInfo.cSells
    }
  }
}
</script>

<style scoped>
.isBetter{
  color: red;
}
.isBetter:after{
  content: "高";
  color: #fff;
  display: inline-block;
  background-color:red;
}
.isLower{
  color: rgb(94, 197, 94);
}
.isLower::after{
  content: "低";
    color: #fff;
  display: inline-block;
  background-color:rgb(94, 197, 94) ;
}
.review span{
  display: inline-block;
  width: 35px;
  text-align: center;
}
.shop{
  margin: 10px 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.shop img{
  height: 60px;
  margin-right: 5px;
}

.info{
  display: grid;
  grid-template-columns: 50% 50%;
  justify-items: stretch;
  align-items: center;
  margin:0 10px;
}
.info .mainInfo{
  border-right: 1px solid rgba(0, 0, 0, 0.171);
}
.info .mainInfo tbody{
  text-align: center;
}

.info .mainInfo tbody tr td{
  padding: 3px 0;
}
.review {
margin-left: 20px;
}
.review tbody tr td{
  padding: 3px 0;
}
.enterShop{
  margin: 10px 0 30px 0;
  display: flex;
  justify-content: center;
}
.enterShop a{
  display: inline-block;
  height: 20px;
  line-height: 10px;
  background-color: rgba(148, 204, 241, 0.76);
  padding: 5px 40px;
  border-radius: 5px;
}


</style>