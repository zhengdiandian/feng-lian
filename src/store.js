import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let JSONParse = JSON.parse
export default new Vuex.Store({
  state: {
    authToken: window.sessionStorage.getItem('token'),
    userInfo: JSONParse(window.sessionStorage.getItem('userInfo'))
  },
  mutations: {
    set_authToken: ((state, data) => {
      state.authToken = data
      window.sessionStorage.setItem('token', data)
}),
    set_userInfo:((state,data) => {
      state.userInfo = data
      window.sessionStorage.setItem('userInfo', JSON.stringify(data))
    })
  },
  actions: {

  }
})
