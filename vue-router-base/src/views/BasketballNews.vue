<template>
  <div class="basketball">
    我是篮球新闻页面
    <!-- 接收路由传递过来的参数 -->
    <div>{{$route.query}}</div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.basketball{
  background-color: burlywood;
}
</style>