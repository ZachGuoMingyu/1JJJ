import Vue from 'vue'
import App from './App.vue'
// 7.导入已经配置好的路由表
import router from './router'
import Router from 'vue-router'
// 阻止编程式导航 频繁点击一个路由会报错
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
Vue.config.productionTip = false

new Vue({
  // 8.在Vue实例中注册路由表
  router,
  render: h => h(App)
}).$mount('#app')
