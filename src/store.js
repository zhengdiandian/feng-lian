import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let JSONParse = JSON.parse
export default new Vuex.Store({
  state: {
    authToken: window.sessionStorage.getItem('token'),
    userInfo: JSONParse(window.sessionStorage.getItem('userInfo')),
    MutualRule: JSONParse(window.sessionStorage.getItem('MutualRule'))
  },
  mutations: {
    set_authToken: ((state, data) => {
      state.authToken = data
      window.sessionStorage.setItem('token', data)
}),
    set_userInfo:((state,data) => {
      state.userInfo = data
      window.sessionStorage.setItem('userInfo', JSON.stringify(data))
    }),
    // set_writingData: ((state, data)=>{
    //   state.writingData = data
    //   window.sessionStorage.setItem('writingData', JSON.stringify(data))
    // }),
    set_MutualRule: ((state, data)=>{
      debugger
      state.MutualRule = data
      window.sessionStorage.setItem('MutualRule', JSON.stringify(data))
    })
  },
  actions: {

  }
})
