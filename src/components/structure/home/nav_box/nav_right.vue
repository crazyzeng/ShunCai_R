<template>
	<div id="nav_right" v-bind:class="[div_sides_bg,rt]">
		<div>Introduce of company</div>
	</div>
</template>

<script>
export default {
  data () {
    return {
      rt: 'rt',
      div_sides_bg: 'div_sides_bg'
    }
  },
  mounted () {
   // var navMidSwiperWidth = $('#nav_mid').width()
    var navRightHeight = $('#nav_box').height()
   // console.log(navLeftHeight)
   // this.originalData.img_width = navMidSwiperWidth
    $('#nav_right').css('height', navRightHeight) - 20
  }
}

</script>

<style>
</style>