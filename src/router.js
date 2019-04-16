import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import MyCenter from './views/MyCenter.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'MyCenter',
      component: MyCenter
    }
  ]
})
