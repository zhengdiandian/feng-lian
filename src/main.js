import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'muse-ui/lib/styles/base.less'
import { Button, Select, BottomNav, Carousel, AppBar, Icon, TextField, Divider, List, SubHeader, Slider, Stepper, Avatar, Dialog, Snackbar } from 'muse-ui'
import 'muse-ui/lib/styles/theme.less'
import 'muse-ui/dist/muse-ui.css'
import theme from 'muse-ui/lib/theme'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
// import 'material-design-icons/iconfont/material-icons.css'
import * as colors from 'muse-ui/lib/theme/colors'
import './assets/font/iconfont.css'
// import 'muse-ui-message/dist/muse-ui-message.css'
// import 'muse-ui-message/dist/muse-ui-message.css'
import Message from 'muse-ui-message'
import Axios from 'axios'
import qs from 'qs'
import Util from '@/assets/js/unit.js'
import Toast from 'muse-ui-toast'
import wx from 'wechat-js-sdk'
window.wx = wx
Vue.prototype.windom = window
Vue.prototype.Util = Util
Vue.use(Button)
Vue.use(Select)
Vue.use(BottomNav)
Vue.use(Carousel)
Vue.use(AppBar)
Vue.use(Icon)
Vue.use(Divider)
Vue.use(TextField)
Vue.use(List)
Vue.use(SubHeader)
Vue.use(Slider)
Vue.use(Stepper)
Vue.use(Avatar)
Vue.use(Dialog)
Vue.use(Snackbar)
Vue.config.productionTip = false
// Axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
Axios.interceptors.response.use((response) => {
  // token 已过期，重定向到登录页面
  if (response.data.code == 402 || response.data.code == 400) {
    localStorage.clear()
    window.alert('登录失效请重新登录')
    window.location=`${Axios.defaults.baseURL}/v1/user/login/weixinLogin?urlAddrType=2&&userCode=`
    // router.replace({
    //   path: '/login',
    //   query: { redirect: router.currentRoute.fullPath }
    // })
    if (response.data.code == 302) {
      debugger
    }
  }
  return response
}, function (error) {
  debugger
  // Do something with response error
  return Promise.reject(error)
})
Axios.defaults.baseURL = 'http://wxapi.fenglianhz.com/h5'
// Axios.defaults.baseURL = 'http://testv2.wxapi.fenglianhz.com/h5'
// Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
// Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// Axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
//   .create({
//   baseURL: 'http://47.110.79.190:8080/mockjsdata/31'
// })
Axios.interceptors.request.use(
  config => {
    var xtoken = window.localStorage.getItem('token')
    if (xtoken != null) {
      config.headers['authToken'] = xtoken
    }
    if (config.method == 'post') {
      config.data = qs.stringify({
        ...config.data
        // _t: Date.parse(new Date())/1000,
      })
    } else if (config.method == 'get') {
      config.params = qs.stringify({
        // _t: Date.parse(new Date())/1000,
        ...config.params
      })
    }
    return config
  }, function (error) {
    return Promise.reject(error)
  }
)

Vue.prototype.$axios = Axios
router.beforeEach((to, from, next) => {
  // debugger
  if (to.matched.some(to => to.meta.requiresAuth)) {
    // 数组some方法,如果meta.requiresAuth为ture,则返回true.此时,说明进入该路由前需要判断用户是否已经登录
    console.log(this)
    if (!window.localStorage.getItem('token') || !window.localStorage.getItem('userInfo')) { // 如果没登录,则跳转到登录页
      window.location=`${Axios.defaults.baseURL}/v1/user/login/weixinLogin?urlAddrType=2&&userCode=`
      // next({
      //   path: '/login',
      //   query: { redirect: to.fullPath } // 通过query将要跳转的路由路径保存下来,待完成登录后,就可以直接获取该路径,直接跳转到登录前要去的路由
      // })
    }else {
       return next() // 确保一定要调用 next()
    }
  }
  if (to.matched.some(to => to.meta.mustAuth)) {
    // debugger
    if (!window.localStorage.getItem('token') || !window.localStorage.getItem('userInfo')) {
      console.log(this)
      // debugger
      Toast.info('请先登入', { color: '#f8b62d' })
      return next(false)
    }
  } else {
    next() // 确保一定要调用 next()
  }
  next()
})
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
Vue.use(Toast, {
  position: 'top', // 弹出的位置
  time: 3000, // 显示的时长
  closeIcon: 'close', // 关闭的图标
  close: true, // 是否显示关闭按钮
  successIcon: 'check_circle', // 成功信息图标
  infoIcon: 'info', // 信息信息图标
  warningIcon: 'priority_high', // 提醒信息图标
  errorIcon: 'warning' // 错误信息图标
})
Vue.use(Message, {
  successIcon: 'check_circle', // 成功图标
  infoIcon: 'info', // 信息图标
  warningIcon: 'priority_high', // 提醒图标
  errorIcon: 'warning', // 错误图标
  iconSize: 24, // 图标大小
  width: 200, // 对话框的宽度
  maxWidth: '80%', // 对话框最大宽度
  className: '', // 对话框的样式
  okLabel: '确定', // 对话框确定按钮文字
  cancelLabel: '取消', // 对话框取消按钮文字
  transition: 'scale' // 对话框显示的动画 'slide-left', 'slide-right', 'fade', 'scale'
})
console.log('store', store)
theme.add('custom-theme', {
  primaryColor: '#ffffff',
  primary: colors.indigo,
  secondary: colors.pinkA200
})
theme.use('custom-theme')
theme.add('teal', {
  primary: '#fff',
  secondary: '#333333',
  success: '#4caf50',
  warning: '#fdd835',
  info: '#2196f3',
  error: '#f44336',
  track: '#bdbdbd',
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'gba(0, 0, 0, 0.54)',
    alternate: '#fff',
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)' // 提示文字颜色
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  background: {
    paper: '#fff',
    chip: '#e0e0e0',
    default: '#fafafa',
    navBar: '#ffffff'
  }
}, 'light')

theme.use('teal')
