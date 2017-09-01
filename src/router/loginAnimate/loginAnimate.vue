<template>
	<div id="main_loginAnimate">
	  <div style="">
	  <router-link to='/login/p1' style='display: none;'>to p1</router-link>
	  </div>
	  <div id="login_filled"></div>
	  <form id="login_form" action="" class="login" autocomplete="off" v-on:submit.prevent="onSubmit">
	  	<!--写绝对路径而不是/-->
	  	<input type="text" name="user" id="" value="" placeholder="User" onfocus="this.setAttribute('placeholder', '')" onblur="this.setAttribute('placeholder', 'User')" />
	  	<input type="password" name="password" id="" value="" placeholder="PassWord" onfocus="this.setAttribute('placeholder', '')" onblur="this.setAttribute('placeholder', 'PassWord')" />
	  	<input type="submit" name="" id="" value="Login" />
	  	
	  </form>  
	  
	  <router-view></router-view>
	</div>	
</template>

<script>
export default {
  methods: {
    onSubmit: function () {
      this.$goRoute('/homePicture')
    }
  }
}

</script>

<style>
	.login{
		margin: 0 auto;
		text-align: center;
		width: 350px;
		height: 300px;
		background: rgba(0,0,0,0.2);
	}
	#main_loginAnimate{
		min-height: 700px;
		text-align: center;
		background: url("/static/img/picture/unlimitedBlade3.jpg") no-repeat;
		background-size:100% ;
	}
	#login_filled{
		width: 100%;
		height: 10%;
		border: 1px solid #000;
	}
	#login_form{
		margin-top: 10%;
	}
	#login_form input{
		text-align: center;
		width: 200px;
		height: 40px;
		margin-top: 40px;
		background: transparent !important;
		border: 1px solid #000;
		color: #e98;
	}

	#login_form input:nth-child(3){
		cursor: pointer;
		color: #e98;
	}
</style>