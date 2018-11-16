import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Initialisation from './views/Initialisation.vue'
import Ours from './views/Ours.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/initialisation',
      name: 'Initialisation',
      component: Initialisation
    },
    {
      path: '/ours',
      name: 'Ours',
      component: Ours
    }
  ]
})
