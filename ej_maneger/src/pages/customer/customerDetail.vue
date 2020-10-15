<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="基本信息" name="first">基本信息</el-tab-pane>
      <el-tab-pane label="订单信息" name="second">订单信息</el-tab-pane>
      <el-tab-pane label="服务地址" name="third">服务地址</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<style scoped>

</style>