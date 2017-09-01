<template>
  <div id="main_detail">
  	<div class="detailP pic_blo">
  		<img src="/static/img/picture/misli1.jpg"/>
  	</div>
    <div class="detail text-center">{{detail}}</div>
  </div>
</template>

<script>
  export default {
    name: 'detail',
    data () {
      return {
        detail: '我是detail页面,别看了这里啥也没有'
      }
    },
    components: {}
  }
</script>

<style>
  .detail {
    margin-top: 10%;
    font-size: 2.4em;
    font-weight: bold;
  }
</style>
