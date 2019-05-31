/* eslint-disable no-trailing-spaces */
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  // base: '/?#/',
  routes: [
    // {
    //   path: '*',
    //   redirect: '/home'

    //   // component: function () {
    //   //   return import('./views/Home.vue')
    //   // }
    // },
    // {
    //   path: '',
    //   redirect: '/home'
    // },
    {
      path: '/',
      name: 'home',
      redirect: '/home',
      component: function () {
        return import('./views/Home.vue')
      },
      children: [
        {
          path: 'home', // 首页]
          name: 'homePage',
          component: function () {
            // 首页
            return import('./views/HomePage.vue')
          }
        },
        {
          path: '/notice', // 公告
          name: 'notice',
          component: function () {
            return import('./views/Notice')
          },
          children: [
            {
              path: 'newNotice',
              component: function () {
                return import('./views/notice/NewNotice') // 新公告
              }
            },
            {
              path: 'oldNotice',
              component: function () {
                return import('./views/notice/OldNotice') // 老公告
              }
            }
          ]
        },
        {
          path: '/my', // 我的
          name: 'MyCenter',
          component: function () {
            return import('./views/MyCenter.vue')
          },
          meta: {
            requiresAuth: true
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
      name: 'register',
      component: function () {
        return import('./views/newRegister.vue')
      }
    },
    {
      path: '/setpwd/:token/:smsCode/:account/:code',
      name: 'setpwd', // 设置密码
      component: function () {
        return import('./views/SetPassword.vue')
      },
      props: true
    },
    {
      path: '/reset', // 重新设置密码
      name: 'reset',
      component: function () {
        return import('./views/ResetPassword.vue')
      }
    },

    {
      path: '/mynot', // 我的未登录
      component: function () {
        return import('./views/MyNotLogin.vue')
      }
    },
    {
      path: '/perinfor', // 个人信息
      name: 'PerInfor',
      component: function () {
        return import('./views/PerInfor.vue')
      }
    },
    {
      path: '/mydetails', // 我的详细资料
      component: function () {
        return import('./views/MyDetails')
      }
    },
    {
      path: '/Editdetails', // 编辑我的详细资料
      name: 'Editdetails',
      component: function () {
        return import('./views/EditDetalis')
      }
    },
    {
      path: '/real', // 实名认证
      name: 'real',
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
      name: 'welfareagency',
      component: function () {
        return import('./views/WelfareAgency.vue')
      }
    },
    {
      path: '/CardBag', // 我的卡包
      component: function () {
        return import('./views/CardBag.vue')
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
      },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/myreward', // 我的奖励
      component: function () {
        return import('./views/MyReward.vue')
      }
    },
    {
      path: '/WithdrawalsRecord', // 提现记录
      component: function () {
        return import('./views/WithdrawalsRecord.vue')
      }
    },
    {
      path: '/RewardPresentation', // 奖励提现
      component: function () {
        return import('./views/RewardPresentation.vue')
      }
    },
    {
      path: '/myintegral', // 我的积分
      name: 'myintegral',
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
      path: '/recharge', // 充值
      name: 'recharge',
      component: function () {
        return import('./views/Recharge.vue')
      }
    },
    {
      path: '/setup', // 设置
      component: function () {
        return import('./views/SetUp.vue')
      }
    },
    {
      path: '/HelpCenter', // 帮助中心
      component: function () {
        return import('./views/HelpCenter.vue')
      }
    },
    {
      path: '/AccountSecurity', // 账号与安全
      component: function () {
        return import('./views/AccountSecurity.vue')
      }
    },
    {
      path: '/withdrawalPassword',
      name: 'withdrawalPassword',
      component: function () {
        return import('./views/AccountSecurity/withdrawalPassword.vue') // 提现密码设置
      }
    },
    {
      path: '/PasswordSettings',
      component: function () {
        return import('./views/AccountSecurity/PasswordSettings.vue') // 登陆密码设置
      }
    },
    {
      path: '/UnderstandUs', // 了解我们
      name: 'UnderstandUs',
      component: function () {
        return import('./views/UnderstandUs')
      }
    },
    {
      path: '/joinPlan/:productCode', // 加入计划
      name: 'joinPlan',
      component: function () {
        return import('./views/joinPlan')
      }

    },
    {
      path: '/hlepPlan/:productCode', // 帮助计划
      name: 'hlepPlan',
      component: function () {
        return import('./views/hlepPlan')
      },
      meta: {
        // requiresAuth: true
        mustAuth: true
      }
    },
    {
      path: '/myhlepPlan', // 我的 申请   帮助计划
      name: 'myhlepPlan',
      component: function () {
        return import('./views/MyHelpPlan')
      }
    },
    {
      path: '/myPlanNews', // 我的计划消息
      name: 'myplannews',
      component: function () {
        return import('./views/news/MyPlanNews')
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
      path: '/minePlan', // 我的帮助计划
      name: 'minePlan',
      component: function () {
        return import('./views/minePlan')
      },
      meta: {
        mustAuth: true
      }
    },
    {
      path: '/owe',
      name: 'owe',
      component: function () {
        return import('./views/Owe') // 感恩
      }
    },
    {
      path: '/planInitial', // 计划生成
      name: 'planInitial',
      component: function () {
        return import('./views/PlanInitial')
      }
    },
    {
      // path: '/rank', // 我的计划
      path: '/ranklist', // 排行榜
      name: 'rankinglist',
      component: function () {
        return import('./views/RankingList.vue')
      },
      meta: {
        mustAuth: true
      }
    },
    {
      path: '/inform', // 健康告知
      name: 'inform',
      component: function () {
        return import('./views/Inform')
      }
    },
    {
      path: '/scale', // 本期互助金规模
      name: 'CurrentScale',
      component: function () {
        return import('./views/CurrentScale')
      },
      meta: {
        mustAuth: true
      }
    },
    {
      path: '/impower', // 授权页面
      name: 'impower',
      component: function () {
        return import('./views/impowerState')
      }
    },
    {
      path: '/invitation', // 分享页面
      name: 'invitation',
      component: function () {
        return import('./views/invitation')
      }
    },
    {
      path: '/InviteFriends', // 邀请页
      name: 'InviteFriends',
      component: function () {
        return import('./views/ScalePage')
      },
      meta: {
        mustAuth: true
      }
    },
    {
      path: '/newRegister', // 注册弹窗
      name: 'newLogin',
      component: function () {
        return import('./views/newRegister')
      }
    },
    {
      path: '/InvitationNoMember', // 邀请页（非会员）
      name: 'InvitationNoMember',
      component: function () {
        return import('./views/InvitationNoMember')
      },
      meta: {
        mustAuth: true
      }
    },
    {
      path: '/addBank', // 添加银行卡
      name: 'addBank',
      component: function () {
        return import('./views/bank/addBank')
      }
    },
    {
      path: '/bankIssue',
      name: 'bankIssue',
      component: function () {
        return import('./views/bank/bankIssue')
      }
    },
    {
      path: '/AssistanceConvention', // 互助计划公约
      name: 'AssistanceConvention',
      component: function () {
        return import('./views/AssistanceConvention')
      }
    },
    {
      path: '/MemberConvention', // 会员公约
      name: 'MemberConvention',
      component: function () {
        return import('./views/MemberConvention')
      }
    },
    {
      path: '/compensate',
      //  普通赔付
      name: 'compensate',
      component: function () {
        return import('./views/compensate/compensate')
      },
      children: [
        {
          path: 'inputForm',
          component: function () {
            return import('./views/compensate/components/InputForm') //上传文字
          }
        },
        {
          path: 'imageForm',
          component: function () {
            return import('./views/compensate/components/ImageForm')//上传图片
          }
        },
        {
          path: 'defrayment',
          component: function () {
            return import('./views/compensate/components/defrayment')//支付
          }

        }
      ]

    },
    {
      path: '/news',
      //  消息中心
      name: 'news',
      component: function () {
        return import('./views/news/news.vue')
      }
    },
    {
      path: '/SystemNews',
      //  系统消息
      name: 'SystemNews',
      component: function () {
        return import('./views/news/SystemNews.vue')
      }
    },
    {
      path: '/PlatformNews',
      //  平台消息
      name: 'PlatformNews',
      component: function () {
        return import('./views/news/PlatformNews.vue')
      }
    },
    {
      path: '/NewsDetail',
      //  消息详情
      name: 'NewsDetail',
      component: function () {
        return import('./views/news/NewsDetail.vue')
      }
    },
    {
      path: '/NoticeDetails',
      //  公示详情
      name: 'NoticeDetails',
      component: function () {
        return import('./views/notice/NoticeDetails.vue')
      }
    },
    {
      path: '/selectAddFamily',
      component: function () {
        return import('./views/family/selectAddFamily')
      }
    },
    {
      path: '/addFamily',
      component: function () {
        return import('./views/family/addFamily')
      },

    },
    {
      path: '/addFamilyTwo',
      component: function () {
        return import('./views/family/addFamilyTow')
      },

    }
    // {
    //   path: '*',
    //   name: '*',
    //   component: function () {
    //     // 首页
    //     return import('./views/Home.vue')
    //   }
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
