import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MyCenter from './views/Mycenter.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/home',
          component: function () {
            return import('./views/HomePage.vue')
          }
        }
      ]
    },
    {
      path: '/login',
      component: function () {
        return import('./views/Login.vue')
      }
    },
    {
      path: '/',
      name: 'MyCenter',
      component: MyCenter
    }
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: Home,
    //   children: [
    //     {
    //       path: '/home',
    //       component: function () {
    //         return import('./views/HomePage.vue')
    //       }
    //     }
    //   ]
    // }
  ]
})
