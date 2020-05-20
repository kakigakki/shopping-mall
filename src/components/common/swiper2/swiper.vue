<template>
  <div
    class="swiper"
    @touchstart="touchstart"
    @touchmove="touchmove"
    @touchend="touchend"
  >
    <div class="imgBox">
      <slot name="item">
      </slot>
    </div>
    <div v-if="isIndicator&& itemLength > 1">
      <div class="indicator">
        <div
          v-for="(item,index) in itemLength"
          :key="index"
          :class="{active :index+1===currentIndex}"
          class="indi-item"
        >
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
    name:"swiper",
  data(){
    return {
      currentIndex:0,
      itemWidth :0,
      itemLength :0,
      isScrolling:false
    }
  },
  props:{
    interval:{
      type:Number,
      default:1500
    },
    moveRatio:{
      type:Number,
      default:0.5
    },
    animaDuration:{
      type:Number,
      default:500
    },
    isIndicator:{
      type:Boolean,
      default:false
    }
  },
  mounted:function(){
      setTimeout(()=>{
      //绑定页面元素
      this.handleDOM();
      //开启滚动定时器
      this.startTimer()
      },1000)
  },
  methods:{
      handleDOM(){
      this.imgBox = document.querySelector(".imgBox")
      this.imgs = document.querySelectorAll(".imgBox .swiperItem")
      //获取图片数(不包括移花接木用的图片)
      this.itemLength = this.imgs.length
       //获取每张图片的宽度
      this.itemWidth = this.imgBox.offsetWidth
      //在轮播图的前后各添加一张图
      if(this.itemLength >1){
      var img1 = this.imgs[0].cloneNode(true)
      var img2 = this.imgs[this.imgs.length -1].cloneNode(true)
      this.imgBox.insertBefore(img2,this.imgs[0])
      this.imgBox.appendChild(img1)
      //刚开始时显示第二张,因为第一张是最后一张
      this.setTransform(this.itemWidth)
      }
    },
    /* 开启自动轮播定时器 */
    startTimer(){
      this.timer = window.setInterval(()=>{
        this.currentIndex++
        this.imgBox.style.transition= `${this.animaDuration}ms linear`
        //滚动的主要方法
        this.scroll(this.currentIndex*this.itemWidth)
      },this.interval)
    },
    /* 关闭自动轮播定时器 */
    stopTimer(){
      clearInterval(this.timer)
    },
    /* 通过transform样式设置滚动效果 */
    setTransform(position){
      this.imgBox.style.transform = `translate(-${position}px,0)`
      this.imgBox.style["-webkit-transform"] = `translate(-${position}px,0)`
      this.imgBox.style["-ms-transform"] = `translate(-${position}px,0)`
    },
    /* 滚动的主要方法 */
    scroll(position){
        this.isScrolling = true
        //滚动到指定位置
        this.setTransform(position)
        //校验是否是第一张或者最后一张,然后进行移花接木
        this.clarifyPosition()

        this.isScrolling = false
    },
    /* 第一张与最后一张的衔接处理*/
    clarifyPosition(){
      //在滚动动画结束后调用移花接木大法
      setTimeout(() => {
          this.imgBox.style.transition = `0s`
          if(this.currentIndex >=this.itemLength+1){
             //如果滚到最后一张,将最后一张移花接木为第二张(页面中的第一张图片)
            this.currentIndex = 1
            this.setTransform(this.currentIndex*this.itemWidth)
          }else if(this.currentIndex <= 0){
              //如果滚到第一张,将第一张移花接木为倒数第二张(页面中的最后张图片)
            this.currentIndex = this.itemLength
            this.setTransform(this.currentIndex*this.itemWidth)
          }
        }, this.animaDuration);
    },
    /* 拖动事件 */
    touchstart(e){
      if(this.isScrolling) return
      //停止定时器
      this.stopTimer()
      //记录拖动开始时的点击位置
      this.startX = e.touches[0].pageX
    },
    touchmove(e){
      //记录拖动时的位置
      this.curX = e.touches[0].pageX
      this.moveDistance = this.curX - this.startX
      let curPosition = this.currentIndex * this.itemWidth
       //获取总共拖动的距离
      let Distance = -this.moveDistance + curPosition
      //让图片被拖动
      this.scroll(Distance)
    },
    touchend(){
      let movedDis = Math.abs(this.moveDistance)
      //设置吸附点,当拖动大于这个临界值时,吸附到下一章
      let changePoint = this.moveRatio * this.itemWidth
      if(movedDis===0){
        return
      }
      else{
        if(movedDis>=changePoint && this.moveDistance <0){
          //当拖动的距离为负时,且拖动距离绝对值大于吸附点时,滚动图片
          this.currentIndex++
        }else if(movedDis>=changePoint && this.moveDistance >0){
          //当拖动的距离为正时,且拖动距离绝对值大于吸附点时,滚动图片
          this.currentIndex--
        }
        this.scroll(this.currentIndex*this.itemWidth)
      }
      //拖动完成后,继续自动滚动
      this.startTimer()
    }
  },
}
</script>

<style scoped>
.swiper {
  overflow: hidden;
  position: relative;
}
.imgBox {
  display: flex;
}
.indicator {
  position: absolute;
  width: 100%;
  bottom: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.indi-item {
  width: 8px;
  height: 8px;
  margin: 2px;
  border-radius: 4px;
  background-color: rgba(165, 42, 42, 0.438);
}
.active {
  background-color: rgba(165, 42, 42, 1);
}
</style>