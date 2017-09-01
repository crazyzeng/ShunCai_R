<template>
	<div id="rt_fixed">
			<ul>
				<li>
					 <a href="JavaScript:void(0)" style="position: relative;">
					 	<img src="/static/img/shuncai/index/l04.png" >
					 </a>
					 <div>{{tel}}</div>
				</li>
				<li>
					 <a href="JavaScript:void(0)" style="position: relative;">
					 	<img src="/static/img/shuncai/index/l05.png" >
					 </a>
					 <div>{{QQ}}</div>
				</li>
				<li>
					 <a href="JavaScript:void(0)"  id="goTop" style="position: relative;" @click="goTop">
					 	<img src="/static/img/shuncai/index/l06.png" >
					 </a>
				</li>
			</ul>
		</div>
</template>

<script>
export default{
  data () {
    return {
      tel: '13330333303',
      QQ: '1234567890123'
    }
  },
  methods: {
    goTop () {
      var timer = null
      cancelAnimationFrame(timer) // 取消帧动画
      timer = requestAnimationFrame(function fn () { // 请求帧动画
        var oTop = document.body.scrollTop || document.documentElement.scrollTop
        if (oTop > 0) {
          document.body.scrollTop = document.documentElement.scrollTop = oTop - 50 // 每次移动50px
          timer = requestAnimationFrame(fn)
        } else {
          cancelAnimationFrame(timer)
        }
      })
    }
  },
  mounted () {
    $('#rt_fixed ul li a').on('click', function () {
      $(this).siblings('div').toggle(500)
      $(this).parent().siblings().find('div').css('display', 'none')
    })
  }
}
</script>

<style>
</style>