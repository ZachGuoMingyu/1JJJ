<template>
  <div>
    我是用户界面
    <button @click="toUserDetail">跳转到用户详情页</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        id: 'id123'
      }
    },
    methods: {
      toUserDetail(){
        // 编程式导航
        // $router 是vuerouter插件提供的 存在与每一个组件内 可以通过它的push方法进行路由的跳转
        // this.$router.push('/userDetail')
        // 路由跳转传值
        // 1.动态路由传值
        // this.$router.push('/userDetail/'+this.id)

        // 2.通过命名路由传值
        // this.$router.push({
        //   name: 'UserDetail',
        //   params: {id: this.id}
        // })

        // 3.通过query传值
        this.$router.push({
          path:'/userDetail',
          query:{id: this.id}
        })
      }
    },
  }
</script>

<style scoped>

</style>