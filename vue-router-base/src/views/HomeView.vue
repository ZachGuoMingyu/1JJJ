<template>
  <div>
    <div>我是首页</div>
    <!-- 配置二级路由的跳转 -->
    <!-- 在页面使用嵌套路由的时候 对应的路径需要补全 -->
    <!-- <router-link to="/footballNews">足球新闻</router-link> |
    <router-link to="/basketballNews">篮球新闻</router-link> -->
    <!-- 渲染的标签 -->
    <!-- 编程式导航 -->
    <button @click="toFootballPage">足球新闻</button>
    <button @click="toBasketballPage">篮球新闻</button>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    methods: {
      // 跳转足球新闻页面
      toFootballPage(){
        // $router是vue提供的方法的实例 通过$router 访问路由的实例
        // 只要是控制路由的切换或跳转 就用$router
        this.$router.push({
          // 要跳转的页面的路径
          // path: '/footballNews'
          // 命名路由
          name:'FootballNews',
          params:{
            msg:'我是传递过来的param'
          }
        })
      },
      // 跳转到篮球新闻页面
      toBasketballPage(){
        this.$router.push({
          // path-query
          path:'/basketballNews',
          query:{
            msg:'我是传递过来的参数'
          }
        })
      }
      // $route 想要获取到路由传递过来的参数 就使用$route来接收
    },
  }
</script>

<style scoped>

</style>