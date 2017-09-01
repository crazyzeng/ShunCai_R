import Vue from 'vue'
import Router from 'vue-router'
import login from '@/router/login/login.js'
import loginAnimate from '@/router/loginAnimate/loginAnimate.js'
import home from '@/router/home/home.js'
import detail from '@/router/detail/detail.js'
import homePicture from '@/router/homePicture/homePicture.js'
import homeNote from '@/router/homeNote/homeNote.js'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
   {path: '/', redirect: '/login'},
    login,
    loginAnimate,
    home,
    detail,
    homePicture,
    homeNote
  ]
})
