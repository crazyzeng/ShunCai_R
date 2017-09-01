import loginAnimate from './loginAnimate.vue'
import p1 from './p1/p1.vue'

export default {
  path: '/loginAnimate',
  name: 'loginAnimate',
  component: loginAnimate,
  children: [
    {
      path: 'p1',
      name: 'p1',
      component: p1
    }
  ]
}
