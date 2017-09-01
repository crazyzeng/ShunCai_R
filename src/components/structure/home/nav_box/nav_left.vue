<template>
		<div id="nav_left" v-bind:class="[div_sides_bg,lf]">
			<ul>
           		 <li>
               		<b><a href="JavaScript:void(0)">{{necklace}}</a></b>
               		<span v-bind:class="rt">
                   		<a href="JavaScript:void(0)" v-for="necklace in necklaces">{{necklace.text}}</a>
               		</span>
            	</li>
            	<li>
               		<b><a href="JavaScript:void(0)">{{bracelet}}</a></b>
               		<span v-bind:class="rt">
                   		<a href="JavaScript:void(0)" v-for="bracelet in bracelets">{{bracelet.text}}</a>
               		</span>
           		</li>
           		<li>
               		<b><a href="JavaScript:void(0)">{{chain}}</a></b>
               		<span v-bind:class="rt">
                   		<a href="JavaScript:void(0)" v-for="chain in chains">{{chain.text}}</a>
               		</span>
           		</li>
           		<li>
            		<!--简单的锚点跳转未加动画效果，认为必要添加animate效果-->
               		<b><a class="jade" href="#first_F">{{jade}}</a></b>
                	<span v-bind:class="rt">
                   		<a href="#first_F" v-for="jade in jades">{{jade.text}}</a>
                	</span>
            	</li>
            	<li>
                	<b><a href="JavaScript:void(0)">{{roughJade}}</a></b>
                	<span v-bind:class="rt">
                    	<a href="JavaScript:void(0)" v-for="roughJade in roughJades">{{roughJade.text}}</a>
                	</span>
            	</li>
           		<li>
               		<b><a href="JavaScript:void(0)">{{buddha}}</a></b>
                	<span v-bind:class="rt">
               			<a href="JavaScript:void(0)" v-for="buddha in buddhas">{{buddha.text}}</a>
                	</span>            		</li>
           		<li>
               		<b><a href="JavaScript:void(0)">{{exquisiteGood}}</a></b>
               		<span v-bind:class="rt">
                   		<a href="JavaScript:void(0)" v-for="exquisiteGood in exquisiteGoods">{{exquisiteGood.text}}</a>
               		</span>
           		</li>
           		<li>
               		<b><a href="JavaScript:void(0)">{{foldingScreen}}</a></b>
               		<span v-bind:class="rt">
                   		<a href="JavaScript:void(0)" v-for="foldingScreen in foldingScreenes">{{foldingScreen.text}}</a>
               		</span>
           		</li>
            	<li>
               		<b><a href="JavaScript:void(0)">{{otherAccessory}}</a></b>
                	<span v-bind:class="rt">
                   		<a href="JavaScript:void(0)" v-for="otherAccessory in otherAccessories">{{otherAccessory.text}}</a>
                	</span>
           		</li>
			</ul>
		</div>
</template>

<script>
export default{
  name: 'nav',
  data () {
    return {
      necklace: '项链',
      necklaces: [
      {text: '项链1'},
      {text: '项链2'}
      ],
      bracelet: '手镯',
      bracelets: [
      {text: '手镯1'},
      {text: '手镯2'}
      ],
      chain: '手链',
      chains: [
      {text: '手链1'},
      {text: '手链2'}
      ],
      jade: '玉佩',
      jades: [
      {text: '玉佩1'},
      {text: '玉佩2'}
      ],
      roughJade: '原石',
      roughJades: [
      {text: '原石1'},
      {text: '原石2'}
      ],
      buddha: '佛像',
      buddhas: [
      {text: '佛像1'},
      {text: '佛像2'}
      ],
      exquisiteGood: '精致摆件',
      exquisiteGoods: [
      {text: '精致摆件1'},
      {text: '精致摆件2'}
      ],
      foldingScreen: '玉石屏风',
      foldingScreenes: [
      {text: '玉石屏风1'},
      {text: '玉石屏风2'}
      ],
      otherAccessory: '其他饰品',
      otherAccessories: [
      {text: '其他饰品1'},
      {text: '其他饰品2'}
      ],
      lf: 'lf',
      rt: 'rt',
      div_sides_bg: 'div_sides_bg'
    }
  },
  mounted () {
   // var navMidSwiperWidth = $('#nav_mid').width()
   // var navLeftHeight = $('#nav_box').height()
   // console.log(navLeftHeight)
   // this.originalData.img_width = navMidSwiperWidth
   // $('#nav_left').css('height', navLeftHeight)
    $('.jade').click(function () {
      var href = $(this).attr('href')
      var pos = $(href).offset().top
      $('html,body').animate({scrollTop: pos}, 1000)
      return false
    })
  }
}
</script>

<style>
</style>