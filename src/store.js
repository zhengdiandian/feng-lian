import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let JSONParse = JSON.parse
export default new Vuex.Store({
  state: {
    authToken: window.localStorage.getItem('token'),
    userInfo: JSONParse(window.localStorage.getItem('userInfo')),
    MutualRule: JSONParse(window.localStorage.getItem('MutualRule'))
  },
  mutations: {
    set_authToken: ((state, data) => {
      state.authToken = data
      window.localStorage.setItem('token', data)
}),
    set_userInfo:((state,data) => {
      state.userInfo = data
      window.localStorage.setItem('userInfo', JSON.stringify(data))

    }),
    // set_writingData: ((state, data)=>{
    //   state.writingData = data
    //   window.localStorage.setItem('writingData', JSON.stringify(data))
    // }),
    set_MutualRule: ((state, data)=>{
      debugger
      state.MutualRule = data
      window.localStorage.setItem('MutualRule', JSON.stringify(data))
    })
  },
  actions: {

  }
})
