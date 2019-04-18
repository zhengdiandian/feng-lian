import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MyCenter from './views/MyCenter.vue'
import PerInfor from './views/PerInfor.vue'
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
      path: '/',
      component: function () {
        return import('./views/Login.vue')
      }
    },
    {
      path: '/my',
      name: MyCenter,
      component: MyCenter
    },
    {
      path: '/mynot',
      component: function () {
        return import('./views/MyNotLogin.vue')
      }
    },
    {
      path: '/perinfor',
      name: PerInfor,
      component: PerInfor
    },
    {
      path: '/forgetPassword',
      component: function () {
        return import('./views/ForgetPassword.vue')
      }
    },
    {
      path: '/real',
      component: function () {
        return import('./views/RealName.vue')
      }
    },
    {
      path: '/register',
      component: function () {
        return import('./views/register.vue')
      }
    },
    {
      path: '/setpwd',
      component: function () {
        return import('./views/SetPassword.vue')
      }
    },
    {
      path: '/reset',
      component: function () {
        return import('./views/ResetPassword.vue')
      }
    },
    {
      path: '/qr',
      component: function () {
        return import('./views/QRcode.vue')
      }
    },
    {
      path: '/report',
      component: function () {
        return import('./views/UploadReport.vue')
      }
    },
    {
      path: '/wa',
      component: function () {
        return import('./views/WelfareAgency.vue')
      }
    },
    {
      path: '/share',
      component: function () {
        return import('./views/ShareUser.vue')
      }
    },
    {
      path: '/myplan',
      component: function () {
        return import('./views/MyPlan.vue')
      }
    },
    {
      path: '/myreward',
      component: function () {
        return import('./views/MyReward.vue')
      }
    },
    {
      path: '/joinPlan',
      name: 'joinPlan',
      component: function () {
        return import('./views/joinPlan')
      }
    },
    {
      path: '/hlepPlan',
      name: 'hlepPlan',
      component: function () {
        return import('./views/hlepPlan')
      }
    }
    // {
    //   path: '/',
    //   name: PerInfor,
    //   component: PerInfor
    // }
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
