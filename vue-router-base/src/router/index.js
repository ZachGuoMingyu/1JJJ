// 1.引入Vue
import Vue from 'vue'
// 2.引入VueRouter
import VueRouter from 'vue-router'
// 引入对应的页面组件
import HomeView from '../views/HomeView.vue'

// 3.告诉Vue 我们要使用VueRouter
Vue.use(VueRouter)

// 5.配置页面组件与路径的映射关系
const routes = [
  // 路由重定向
  {
    path:'/',
    redirect:'/footballNews'
  },
  // 首页路由
  {
    // 配置的路径
    path: '/',
    // 命名路由
    name: 'home',
    // 引入一个页面组件 
    component: HomeView,
    // 子路由  嵌套路由
    children:[
      // 以对象的形式 设置子路由页面的一一映射关系
      // 足球新闻
      {
        // 子路由的路径 不需要补全 Vue会自动帮助我们补全
        path:'footballNews',
        name: 'FootballNews',
        component: () => import('../views/FootballNews.vue')
      },
      // 篮球新闻
      {
        path: 'basketballNews',
        name: 'BasketballNews',
        component: () => import('../views/BasketballNews.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // 懒加载路由
    component: () => import('../views/AboutView.vue')
  },
  // 用户界面的路由
  {
    // 路径
    path: '/user/:userId',
    // 命名路由
    name: 'User',
    // 引入对应的页面组件
    component: () => import('../views/User.vue')
  }
]

// 4.创建一个VueRouter的实例
const router = new VueRouter({
  // 路由模式
  mode: 'history',
  base: process.env.BASE_URL,
  // 路由路径与页面的一一映射关系
  routes
})

// 6.导出路由的配置文件
export default router
