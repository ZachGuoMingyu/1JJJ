import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // 默认显示登录界面
  {
    path: '/',
    redirect: '/login'
  },
  // 登录
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  // 根页面
  {
    path: '/home',
    name: 'Home',
    component: Home,
    // 子页面
    children:[
      // 首页
      {
        path: 'index',
        component: () => import('../views/childPages/index.vue')
      },
      // 订单
      {
        path: 'order',
        component: () => import('../views/childPages/order.vue')
      },
      // 用户
      {
        path: 'user',
        component: () => import('../views/childPages/user.vue')
      },
    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
