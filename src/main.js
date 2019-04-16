import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'muse-ui/lib/styles/base.less'
import { Button, Select, BottomNav, Carousel, AppBar, Icon, TextField } from 'muse-ui'
import 'muse-ui/lib/styles/theme.less'
import 'muse-ui/dist/muse-ui.css'
import theme from 'muse-ui/lib/theme'
// import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'material-design-icons/iconfont/material-icons.css'
import * as colors from 'muse-ui/lib/theme/colors'

theme.add('custom-theme', {
  primaryColor: '#fff',
  primary: colors.indigo,
  secondary: colors.pinkA200
})
theme.use('custom-theme')
theme.add('teal', {
  primary: '#fff',
  secondary: '#ff4081',
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
Vue.use(TextField)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
