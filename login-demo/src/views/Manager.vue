<template>
  <div>
    <!-- 用于接收和管理首页，关于页面，我的页面 -->
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/manager/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/manager/about">关于</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/manager/me">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style scoped>
</style>