import Vue from 'vue'
import Vuex from 'vuex'
// 引入login模块
import login from './modules/login'
// 引入首页模块
import index from './modules/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login,
    index,
  }
})
