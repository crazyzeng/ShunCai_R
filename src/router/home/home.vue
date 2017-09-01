<template>
	<div id="main">
	  <top></top>
	  
	  <router-link :to="{ path: '/login' }">跳到登陆页面</router-link>
	  <router-link to='/home/home1'>to home1</router-link>
	  <navtop></navtop>
      
      <div id="nav_box">
      <navleft></navleft>
      <navmid></navmid>
      <navright></navright>
      <div class="clear"></div>
      </div>
      
      <rtfixed></rtfixed>
      
      <hotsell></hotsell>
      
      <floor></floor>
      
      <footersup></footersup>
	  
	  <router-view></router-view>
	  <end></end> 
	   <div class="home pic_blo">
	  	<img src="/static/img/picture/saber1.jpg"/>
	  </div>
	  
	</div>
</template>

<script>
import header from '@/components/structure/home/header/header'
import nav from '@/components/structure/home/nav/nav'
import footer from '@/components/structure/home/footer/footer'
import navLeft from '@/components/structure/home/nav_box/nav_left'
import navMid from '@/components/structure/home/nav_box/nav_mid'
import navRight from '@/components/structure/home/nav_box/nav_right'
import rtFixed from '@/components/structure/home/rt_fixed/rt_fixed'
import hotSell from '@/components/structure/home/hot_sell/hot_sell'
import floor from '@/components/structure/home/floor/floor'
import footerSup from '@/components/structure/home/footer_sup/footer_sup'
export default {
  name: 'index',
  components: {
    'top': header,
    'navtop': nav,
    'end': footer,
    'navleft': navLeft,
    'navmid': navMid,
    'navright': navRight,
    'rtfixed': rtFixed,
    'hotsell': hotSell,
    'floor': floor,
    'footersup': footerSup
  },
  mounted () {
    $(window).resize(function () { // 当浏览器大小变化时
    // 动态响应屏幕尺寸，调整对应div的尺寸
      var swiper = $('#swiper').width()
      $('.wrapper').css('width', swiper)
    })
  }
}
</script>

<style>
#nav_box{
 margin-top: 20px;
 width:100%;
 height: 100%;		
}
</style>