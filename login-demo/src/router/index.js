import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // 默认加载页面
  {
    path:'/',
    redirect:'/login'
  },
  // 登录页面
  {
    path:'/login',
    name:'Login',
    component: () => import('../views/Login.vue')
  },
  // 总路由管理页面
  {
    path:'/manager',
    name:'Manager',
    component: () => import('../views/Manager.vue'),
    children:[
      // 首页
      {
        path:'home',
        component: () => import('../views/Home/Home.vue')
      },
      // 关于
      {
        path: 'about',
        component: () => import('../views/About/About.vue')
      },
      // 我的
      {
        path: 'me',
        component: () => import('../views/Me/Me.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
