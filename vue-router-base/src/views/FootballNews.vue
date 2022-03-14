<!--
 * @Description: 
 * @Author: ZachGmy
 * @Date: 2022-03-11 15:16:43
 * @LastEditors: ZachGmy
 * @LastEditTime: 2022-03-14 16:04:36
-->
<template>
  <div class="football">
    我是足球新闻页面
    <button @click="goBack">返回</button>
    <div>{{$route.params}}</div>
  </div>
</template>

<script>
  export default {
    // 如果在methods或者计算属性中要使用路由传递过来的参数
    methods: {
      goBack(){
        console.log(this.$route.params);
        // this.$router.go(-1)
      }
    },
  }
</script>

<style scoped>
/* 设置页面全局样式 */
.football{
  background-color: royalblue;
}
</style>