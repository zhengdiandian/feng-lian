import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'muse-ui/lib/styles/base.less'
import { Button, Select, BottomNav, Carousel, AppBar, Icon, TextField, Divider, List, SubHeader, Slider, Stepper,Avatar } from 'muse-ui'
import 'muse-ui/lib/styles/theme.less'
import 'muse-ui/dist/muse-ui.css'
import theme from 'muse-ui/lib/theme'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
// import 'material-design-icons/iconfont/material-icons.css'
import * as colors from 'muse-ui/lib/theme/colors'
import './assets/font/iconfont.css'
import 'muse-ui-message/dist/muse-ui-message.css'
import Message from 'muse-ui-message'
import Axios from 'axios'
Vue.use(Message)
console.log('store',store)
theme.add('custom-theme', {
  primaryColor: '#fff',
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
    navBar: '#fff'
  }
}, 'light')

theme.use('teal')

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
Vue.config.productionTip = false
// Axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
Axios.interceptors.response.use(function (response) {
  // token 已过期，重定向到登录页面
  if (response.data.code == 4){
    localStorage.clear()
    router.replace({
      path: '/signin',
      query: {redirect: router.currentRoute.fullPath}
    })
  }
  return response
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})
Axios.defaults.baseURL = 'http://test.wxapi.fenglianhz.com:8888/'
//   .create({
//   baseURL: 'http://47.110.79.190:8080/mockjsdata/31'
// })
Axios.interceptors.request.use(
  config => {
    var xtoken = window.sessionStorage.getItem('token')
    if(xtoken != null){
      config.headers['authToken'] = xtoken
    }
    if(config.method=='post'){
      config.data = {
        ...config.data,
        _t: Date.parse(new Date())/1000,
      }
    }else if(config.method=='get'){
      config.params = {
        _t: Date.parse(new Date())/1000,
        ...config.params
      }
    }
    return config
  },function(error){
    return Promise.reject(error)
  }
)

Vue.prototype.$axios = Axios
router.beforeEach((to, from, next) => {
  if (to.matched.some(to => to.meta.requiresAuth)) {
    //对matched不了解的建议看官方api文档,或我7.1节的说明
    //数组some方法,如果meta.requiresAuth为ture,则返回true.此时,说明进入该路由前需要判断用户是否已经登录
    console.log(this)
    if (!window.sessionStorage.getItem('token')) {   //如果没登录,则跳转到登录页
      next({
        path: '/login',
        query: { redirect: to.fullPath }  //官方例子的这个小细节很好,通过query将要跳转的路由路径保存下来,待完成登录后,就可以直接获取该路径,直接跳转到登录前要去的路由
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
