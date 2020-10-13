<template>
  <div>
    我是用户管理界面
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
import { get } from '../http/axios'
export default {
  data() {
    return {
      testArr: [],
    };
  },
  methods: {
    async btnClick(){
      // 使用封装好的axios工具进行网络请求
      let res = await get('/manager/category/findAllCategory')
      console.log(res);
    }
  },
};
</script>

<style scoped>
</style>