<template>
  <div>
    用户详情界面
    <button @click="goBack">返回</button>

    <!-- 接收动态路由传递过来的值 -->
    <!-- <h2>动态路由传递过来的值:{{$route.params}}</h2> -->

    <!-- 命名路由传递过来的值 -->
    <!-- <h2>{{this.$route.params}}</h2> -->

    <h2>{{this.$route.query}}</h2>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    }, 
    // 生命周期钩子函数
    created() {
      this.getData()
    },
    methods: {
      getData(){
        // 动态路由传递过来的值
        // console.log(this.$route.params);
      },
      goBack(){
        this.$router.go(-1)
      }
    },
  }
</script>

<style scoped>

</style>