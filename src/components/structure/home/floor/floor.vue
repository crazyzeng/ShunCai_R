<template>
	    <div id="floor">
			<div id="first_F">
				<div class="box_header">
            		<span class="lf"><b>1F&nbsp;&nbsp;&nbsp;观音</b></span>
            		<span class="rt"><a href="#">更多商品&gt;&gt;</a></span>
        		</div>
        		<div class="floor_box">
					<ul>
						<li v-for="first_F in first_Fs">
							<a href="JavaScript:void(0)">
								<img :src="first_F.url" width="100%"/>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div id="second_F">
				  <div class="box_header">
            		<span class="lf"><b>2F&nbsp;&nbsp;&nbsp;笑佛</b></span>
            		<span class="rt"><a href="#">更多商品&gt;&gt;</a></span>
        			</div>
        		<div class="floor_box">
					<ul>
						<li v-for="second_F in second_Fs">
							<a href="JavaScript:void(0)">
								<img :src="second_F.url" width="100%"/>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div id="third_F">
				<div class="box_header">
            		<span class="lf"><b>3F&nbsp;&nbsp;&nbsp;圆玉</b></span>
            		<span class="rt"><a href="#">更多商品&gt;&gt;</a></span>
        		</div>
        		<div class="floor_box">
					<ul>
						<li v-for="third_F in third_Fs">
							<a href="JavaScript:void(0)">
								<img :src="third_F.url" width="100%"/>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div id="fourth_F">
				<div class="box_header">
            		<span class="lf"><b>4F&nbsp;&nbsp;&nbsp;叶子玉</b></span>
            		<span class="rt"><a href="#">更多商品&gt;&gt;</a></span>
        		</div>
        		<div class="floor_box">
					<ul>
						<li v-for="fourth_F in fourth_Fs">
							<a href="JavaScript:void(0)">
								<img :src="fourth_F.url" width="100%"/>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
</template>

<script>
export default {
  data () {
    return {
      first_Fs: [
        {url: '/static/img/shuncai/Avalokitesvara/Avalokitesvara1.jpeg'},
        {url: '/static/img/shuncai/Avalokitesvara/Avalokitesvara2.jpeg'},
        {url: '/static/img/shuncai/Avalokitesvara/Avalokitesvara3.jpeg'},
        {url: '/static/img/shuncai/Avalokitesvara/Avalokitesvara4.jpeg'}
      ],
      second_Fs: [
        {url: '/static/img/shuncai/Buddha/Buddha1.jpeg'},
        {url: '/static/img/shuncai/Buddha/Buddha2.jpeg'},
        {url: '/static/img/shuncai/Buddha/Buddha3.jpeg'},
        {url: '/static/img/shuncai/Buddha/Buddha4.jpeg'}
      ],
      third_Fs: [
        {url: '/static/img/shuncai/jade/jade1.jpeg'},
        {url: '/static/img/shuncai/jade/jade2.jpeg'},
        {url: '/static/img/shuncai/jade/jade3.jpeg'},
        {url: '/static/img/shuncai/jade/jade4.jpeg'}
      ],
      fourth_Fs: [
        {url: '/static/img/shuncai/leaf/leaf1.jpeg'},
        {url: '/static/img/shuncai/leaf/leaf2.jpeg'},
        {url: '/static/img/shuncai/leaf/leaf3.jpeg'},
        {url: '/static/img/shuncai/leaf/leaf4.jpeg'}
      ]
    }
  },
  mounted () {
    $('#hot_sell_img img').on('click', function () {
      var hotSellImgSrc = $(this).attr('src')
      window.open(hotSellImgSrc)
    })
    $('#floor img').on('click', function () {
      var floorImgSrc = $(this).attr('src')
      window.open(floorImgSrc)
    })
  }
}
</script>

<style>
</style>