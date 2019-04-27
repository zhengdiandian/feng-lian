import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authToken: window.sessionStorage.getItem('token'),
  },
  mutations: {
    set_authToken: ((state, data) => {
      state.authToken = data
      window.sessionStorage.setItem('token', data)
})
  },
  actions: {

  }
})
