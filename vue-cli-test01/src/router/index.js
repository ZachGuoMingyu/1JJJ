import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    // 配置子路由 嵌套路由
    children: [
      // 路由重定向
      {
        path: '/',
        redirect: 'homeNews'
      },
      // 新闻
      {
        path: 'homeNews',
        component: () => import('../views/HomeNews.vue')
      },
      // 消息
      {
        path: 'homeMessage',
        component: () => import('../views/HomeMessage.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/user',
    name: 'User',
    component: () => import('../views/User.vue')
  },
  {
    path:'/userDetail',
    name: 'UserDetail',
    component: () => import('../views/UserDetail.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
