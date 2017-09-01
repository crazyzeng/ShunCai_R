<template>
	<div>
		<nav id="nav" v-bind:class="nav_height">
			<ul id="nav_ul" v-bind:class="nav_ul_style">
				<li id="nav_logo" v-bind:class="nav_ul_li">
					<p href="#">{{message}}</p>
				</li>
				<li v-for="del in nav_title" v-bind:class="nav_ul_li">
					<a href="#">{{del.text}}</a>
				</li>
				
				<li class="search" v-bind:class="rt">
                	<input type="text" class="search_input">
                	<a href="#" class="search_current">
                    	<img src="/static/img/shuncai/index/search.png">
                	</a>
            	</li>
			</ul>
		</nav>
	</div>
	
		
		
		
</template>

<script>
export default{
  name: 'nav',
  data () {
    return {
      nav_height: 'nav_height',
      nav_ul_style: 'nav_ul_style',
      message: 'Logo',
      nav_ul_li: 'nav_ul_li',
      nav_title: [
      {text: '项链'},
      {text: '手镯'},
      {text: '手链'},
      {text: '玉佩'},
      {text: '原石'},
      {text: '佛像'},
      {text: '精美摆件'},
      {text: '玉石屏风'},
      {text: '其他商品'}
      ],
      lf: 'lf',
      rt: 'rt'
    }
  }
}

</script>

<style>
</style>