<template>
	<div id="nav_mid" :class="lf">
		<div id="swiper"> 
        	<div class="wrapper" :style="{width:originalData.img_width+'px',height:originalData.img_height+'px'}" @mouseover="stop" @mouseout="play">
            	<div class="wrapper-content" :class="{wrapper_trans:isTrans}" :style="{width:originalData.img_width*(originalData.num+2)+'px',height:originalData.img_height+'px',left:-originalData.img_width+'px'}" ref="wrapperContent">
            		<!--介于部分浏览器还不支持webP文件格式，在此设定点击看大图的全部用jpeg，只看不点的用webP文件格式-->
            		<!--图片轮播的，暂时都用webp只看不点-->
          			<!--新增的，在图片上增加alt属性“查看大图”，用jpeg，可看大图-->
                	<img class="wrapper-content_img" alt="4" src="/static/img/shuncai/leaf/leaf1.jpeg" :style="{width:originalData.img_width+'px',height:originalData.img_height+'px'}"/>
                	<img class="wrapper-content_img" alt="1" src="/static/img/shuncai/Avalokitesvara/Avalokitesvara1.jpeg" :style="{width:originalData.img_width+'px',height:originalData.img_height+'px'}"/>
                	<img class="wrapper-content_img" alt="2" src="/static/img/shuncai/Buddha/Buddha1.jpeg" :style="{width:originalData.img_width+'px',height:originalData.img_height+'px'}"/>
                	<img class="wrapper-content_img" alt="3" src="/static/img/shuncai/jade/jade1.jpeg" :style="{width:originalData.img_width+'px',height:originalData.img_height+'px'}"/>
                	<img class="wrapper-content_img" alt="4" src="/static/img/shuncai/leaf/leaf1.jpeg" :style="{width:originalData.img_width+'px',height:originalData.img_height+'px'}"/>
                	<img class="wrapper-content_img" alt="1" src="/static/img/shuncai/Avalokitesvara/Avalokitesvara1.jpeg" :style="{width:originalData.img_width+'px',height:originalData.img_height+'px'}"/>
            	</div>
            <div class="wrapper-buttons" :style="{left:(originalData.img_width-100)/2+'px'}">
                	<span :class="['wrapper-button',{'wrapper_on':index==1}]"  @click="turnTo(1)"></span>
                	<span :class="['wrapper-button',{'wrapper_on':index==2}]"  @click="turnTo(2)"></span>
                	<span :class="['wrapper-button',{'wrapper_on':index==3}]"  @click="turnTo(3)"></span>
                	<span :class="['wrapper-button',{'wrapper_on':index==4}]"  @click="turnTo(4)"></span>
            </div>

            	<a href="javascript:;" class="wrapper-arrow wrapper-prev" :style="{marginTop:-originalData.btn_width/2+'px'}" @click="prev">&lt;</a>
            	<a href="javascript:;" class="wrapper-arrow wrapper-next" :style="{marginTop:-originalData.btn_width/2+'px'}" @click="next">&gt;</a>
        	</div>
    	</div>
	</div>
</template>

<script>
export default{
  data () {
    return {
      originalData: {
        img_width: 0,
        img_height: 0,
        btn_width: 40,
        btn_height: 40,
        num: 4,
        delay: 300
      },
      isTrans: true, // 因为到最后一张图片，index为1时，需要立即跳到第二张index也为1的图片，这个用来是否给出transition
      index: 1,
      timer: null, // setInterval
      clickdelay: false, // 用来防止连续点击
      lf: 'lf'
    }
  },
  methods: {
    prev () {
      if (this.clickdelay) {
        return
      }
      this.clickdelay = true
      if (this.index === 1) {
        this.index = this.originalData.num
      } else {
        this.index -= 1
      }
      this.animate(-this.originalData.img_width)
    },
    next () {
      if (this.clickdelay) {
        return
      }
      this.clickdelay = true
      if (this.index === this.originalData.num) {
        this.index = 1
      } else {
        this.index += 1
      }
      this.animate(this.originalData.img_width)
    },
    animate (offset) {
      var node = this.$refs.wrapperContent
      var self = this
      var left = parseInt(node.style.left) - offset
      this.isTrans = true
      node.style.left = left + 'px'
      setTimeout(function () {
        if (left < -(self.originalData.num * self.originalData.img_width)) {
          self.isTrans = false
          node.style.left = -self.originalData.img_width + 'px'
          self.clickdelay = false
        }
        if (left > -100) {
          self.isTrans = false
          node.style.left = -self.originalData.num * self.originalData.img_width + 'px'
          self.clickdelay = false
        }
      }, this.originalData.delay)
    },
    play () {
      var self = this
      this.timer = setInterval(function () {
        self.next()
      }, 2000)
    },
    stop () {
      this.clickdelay = false // 用来防止连续点击
      clearInterval(this.timer)
      this.timer = null
    },
    turnTo (flag) {
      if (flag === this.index) {
        return
      } else {
        var offset = (flag - this.index) * this.originalData.img_width
        this.index = flag
        this.animate(offset)
      }
    }
  },
  mounted () {
/* 下面是判断过渡动画是否完成 */
    var node = this.$refs.wrapperContent
    var transitions = {
      'transition': 'transitionend',
      'OTransition': 'oTransitionEnd',
      'MozTransition': 'transitionend',
      'WebkitTransition': 'webkitTransitionEnd'
    }
    var self = this
    for (var t in transitions) {
      if (node.style[t] !== undefined) {
        var transitionEvent = transitions[t]
      }
    }
    transitionEvent && node.addEventListener(transitionEvent, function () {
      self.clickdelay = false
    })
    this.play()
    var swiper = $('#swiper').width()
    $('.wrapper').css('width', swiper)
    var navMidSwiperWidth = $('#nav_mid').width()
    var navMidSwiperHeight = $('#nav_box').height()
    this.originalData.img_width = navMidSwiperWidth
    this.originalData.img_height = navMidSwiperHeight
    //
    var swiperWidth = $('#swiper').width()
    var swpiperHeight = $('#nav_box').height()
    $('.wrapper').css('width', swiperWidth)
    $('.wrapper').css('height', swpiperHeight)
  },
  beforeDestroy () {
    clearTimeout(this.timer)
  }
}
</script>

<style>
</style>