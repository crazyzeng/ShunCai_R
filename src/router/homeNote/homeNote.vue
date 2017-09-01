<template>
	<div id="main">
		<h1>我是homeNote</h1>
	  <div class="homeNote pic_blo">
	  	<a href="JavaScript:void(0)" style="display: block;">
	  		<img src="/static/img/picture/jeanne3.jpg" >
	  	</a>
	  </div>
	  <end></end> 
	</div>
</template>

<script>
import footer from '@/components/structure/home/footer/footer'
export default {
  name: 'index',
  components: {
    'end': footer
  }
}

</script>

<style>
</style>