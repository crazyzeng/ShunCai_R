<template>
  <div>
    <ul id="change_pages" v-bind:class="{ changeStyle: $route.path === '/homePicture'}">
      <li v-for="item in links">
      	<a 
      		@click="$goRoute(item.route)"
      		v-bind:class="{ fouce: selected === item.route}">
      	  {{item.text}}
      	</a>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        selected: this.$route.path,
        links: [
          {
            text: '登陆页面1',
            route: '/login'
          },
          {
            text: '登陆页面2',
            route: '/loginAnimate'
          },
          {
            text: '主页1',
            route: '/home'
          },
          {
            text: '主页2',
            route: '/homePicture'
          },
          {
            text: '主页3',
            route: '/homeNote'
          },
          {
            text: '详情页面',
            route: '/detail'
          }
        ]
      }
    },
    methods: {
      handleWatchRoute: function (route) {
        this.selected = route.path
      }
    },
    watch: {
      $route: 'handleWatchRoute'
    }
  }
</script>

<style scoped>
   @import './components/style/basic.css';
	 @import './components/style/del.css';
	 @import './components/style/media.css';
  ul li {
    display: inline-block;
    margin-right: 10px;
  }
  ul li a{
    display: inherit;
    padding: 5px 10px;
  }
  ul li a:hover{
    cursor: pointer;
    color: #fff;
    background-color: #138bec;
  }
  .fouce{
  	color:#FFF;
  	background-color:#138bec;
  }
  #change_pages{
  	top: 0;
  	left: 0;
  	background-color: rgba(0,0,0,0.15);
  	text-align: center;
  }
  .changeStyle{
  	width: 100%;
  	position: fixed;
  	z-index: 1005;
  }
</style>
