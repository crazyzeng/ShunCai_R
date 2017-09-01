<template>
	<div id="hot_sell">
   		<div class="box_header">
       		<span class="lf"><b>热销产品 HOT！</b></span>
       		<span class="rt"><a href="#">更多商品&gt;&gt;</a></span>
   		</div>
    	<div id="hot_sell_img">
        	<ul>
           		<li v-for="hot_sell in hot_sells" >
           			<!--此处可以直接打开webp文件，来显示大图-->
               		<a href="JavaScript:void(0)">
               			<!--如果考虑到超大屏的情况，那么应该按照等比尺寸来设置图片大小-->
                   		<img :src="hot_sell.url" width="100%" title="查看大图" >
               		</a>
            	</li>
       		</ul>
   		</div>
	</div>
</template>
<script>
export default{
  data () {
    return {
      hot_sells: [
        {url: '/static/img/shuncai/Avalokitesvara/Avalokitesvara1.jpeg'},
        {url: '/static/img/shuncai/Buddha/Buddha2.jpeg'},
        {url: '/static/img/shuncai/jade/jade3.jpeg'},
        {url: '/static/img/shuncai/leaf/leaf1.jpeg'}
      ]
    }
  }
}
</script>

<style>
</style>