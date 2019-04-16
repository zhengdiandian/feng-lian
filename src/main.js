import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'muse-ui/lib/styles/base.less'
import { Button, Select } from 'muse-ui'
// import 'muse-ui/lib/styles/theme.less'
import 'muse-ui/dist/muse-ui.css'

Vue.use(Button)
Vue.use(Select)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
