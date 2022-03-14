<template>
  <div id="app">
    <nav>
      <!-- router-link 通过标签的方式控制页面跳转 to="页面的路由路径" -->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <!-- 用户界面的导航 -->
      <router-link to="/user/123321123123qwe">User</router-link>
    </nav>
    <!-- router-view 根据对应的路径 去 渲染对应的页面组件-->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
