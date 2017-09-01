import home from './home.vue'
import home1 from './home1/home1.vue'

export default {
  path: '/home',
  name: 'home',
  component: home,
  children: [
    {
      path: 'home1',
      name: 'home1',
      component: home1
    }
  ]
}
