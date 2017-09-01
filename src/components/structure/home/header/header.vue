<template>
	<header id="header" v-bind:class="header_style">
			<ul v-bind:class="lf">
				<li v-bind:class="lf">
					<p>{{message}}</p>
				</li>
				<li v-for="info in headerLf" v-bind:class="lf">
					<a href="JavaScript:void(0)">{{info.text}}</a>
				</li>
			</ul>
			<ul v-bind:class="rt" class="header_rt">
				<li v-for="fun in headerRt">
					<a href="JavaScript:void(0)">{{fun.text}}</a>
				</li>
			</ul>
	</header>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      message: 'WelCome ShunCaiCherrish',
      header_style: 'header_style',
      lf: 'lf',
      headerLf: [
        {text: '登陆'},
        {text: '免费注册'},
        {text: '我的账号'}
      ],
      headerRt: [
        {text: '购物车（0）'},
        {text: '我的订单'},
        {text: '关于我们'},
        {text: '联系客服'}
      ],
      rt: 'rt'
    }
  }
}
</script>

<style scoped>
	 @import '../../../style/basic.css';
	 @import '../../../style/del.css';
	 @import '../../../style/media.css';
</style>