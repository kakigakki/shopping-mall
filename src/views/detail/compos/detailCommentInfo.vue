<template>
  <div class="detailComment">
        <p  class="title">用户评价</p>
      <div class="userInfo">
        <img :src="commentInfo.user.avatar" alt="">
        <span>{{commentInfo.user.uname}}</span>
      </div>
      <p class="comment">
        {{commentInfo.content}}
      </p>
      <div class="goodInfo">
        <span>{{getCreatedDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="imgs">
        <div v-for="item in commentInfo.images" :key="item">
          <img :src="item" alt="">
        </div>
      </div>
      <div class="showMore">
        <span><a href="#">查看更多</a></span>
      </div>
  </div>
</template>

<script>
export default {
  name:"detailCommentInfo",
  props:{
    commentInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  computed:{
    getCreatedDate(){
      let date = new Date(this.commentInfo.created*1000)
      return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }
  }
}
</script>

<style scoped>
.detailComment{
  margin:20px 10px;
}
.title{
  text-align: center;
  font-size:25px;
  font-weight: 1000;
}
.userInfo{
  margin: 10px 0px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.userInfo img{
  height: 50px;
}
.comment{
  font-size: 18px;
  margin-bottom: 18px;
}
.goodInfo{
  font-size: 17px;
  color: rgb(156, 156, 156);
}

.showMore{
  text-align: right;
  margin-right: 10px;
  font-size: 18px;
  font-weight: 1000;
}
.imgs{
  display: grid;
  grid-template-columns: repeat(4,80px);
  justify-content: left;
  align-items: center;
}
.imgs img{
  width: 80px;
  height: 80px;
  object-fit: cover;
  vertical-align: middle;
}
</style>