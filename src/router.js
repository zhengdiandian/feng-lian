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
            // 首页
            return import('./views/HomePage.vue')
          }
        }
      ]
    },
    {
      path: '/login', // 登陆
      component: function () {
        // 登入
        return import('./views/Login.vue')
      }
    },
    {
      path: '/forgetPassword', // 忘记密码
      component: function () {
        return import('./views/ForgetPassword.vue')
      }
    },
    {
      path: '/register', // 注册
      component: function () {
        return import('./views/register.vue')
      }
    },
    {
      path: '/setpwd', // 设置密码
      component: function () {
        return import('./views/SetPassword.vue')
      }
    },
    {
      path: '/reset', // 重新设置密码
      component: function () {
        return import('./views/ResetPassword.vue')
      }
    },
    {
      path: '/my', // 我的
      name: MyCenter,
      component: MyCenter
    },
    {
      path: '/mynot', // 我的未登录
      component: function () {
        return import('./views/MyNotLogin.vue')
      }
    },
    {
      path: '/perinfor', // 个人信息
      name: PerInfor,
      component: PerInfor
    },
    {
      path: '/real', // 实名认证
      component: function () {
        return import('./views/RealName.vue')
      }
    },
    {
      path: '/code', // 二维码
      component: function () {
        return import('./views/QRcode.vue')
      }
    },
    {
      path: '/report', // 上传体检报告
      component: function () {
        return import('./views/UploadReport.vue')
      }
    },
    {
      path: '/welfareagency', // 福利社
      component: function () {
        return import('./views/WelfareAgency.vue')
      }
    },
    {
      path: '/share', // 我的共享用户
      component: function () {
        return import('./views/ShareUser.vue')
      }
    },
    {
      path: '/myplan', // 我的计划
      component: function () {
        return import('./views/MyPlan.vue')
      }
    },
    {
      path: '/myreward', // 我的奖励
      component: function () {
        return import('./views/MyReward.vue')
      }
    },
    {
      path: '/MyIntegral', // 我的积分
      component: function () {
        return import('./views/MyIntegral.vue')
      }
    },
    {
      path: '/assis', // 互助记录
      component: function () {
        return import('./views/AssistanceRecord.vue')
      }
    },
    {
      path: '/palnned', // 计划充值
      component: function () {
        return import('./views/PlannedRecharge.vue')
      }
    },
    {
      path: '/setup', // 设置
      component: function () {
        return import('./views/SetUp.vue')
      }
    },
    {
      path: '/joinPlan', // 加入计划
      name: 'joinPlan',
      component: function () {
        return import('./views/joinPlan')
      }
    },
    {
      path: '/hlepPlan', // 帮助计划
      name: 'hlepPlan',
      component: function () {
        return import('./views/hlepPlan')
      }
    },
    {
      path: '/orderInfo', // 订单确认
      name: 'orderInfo',
      component: function () {
        return import('./views/orderInfo')
      }
    },
    {
      path: '/minePlan', // 我的计划
      name: 'minePlan',
      component: function () {
        return import('./views/minePlan')
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
