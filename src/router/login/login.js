import login from './login.vue'
import p1 from './p1/p1.vue'

export default {
  path: '/login',
  name: 'login',
  component: login,
  children: [
    {
      path: 'p1',
      name: 'p1',
      component: p1
    }
  ]
}
