<template>
  <div>
    <!-- 输入垃圾名称 点击查询按钮 查询并且弹出提示 -->
    <div class="inputClass">
      <van-field v-model="rubName" label="垃圾名称" placeholder="请输入垃圾名称" />
    </div>
    <van-button @click="searchRubType" round type="primary">查询</van-button>
  </div>
</template>

<script>
// 引入axios封装的方法
import {get, post} from '../http/axios'
// 函数的使用需要进行引入
import { Dialog } from 'vant';
export default {
  data() {
    return {
      // 垃圾名称
      rubName:''
    }
  },
  methods: {
    // 使用async await
    async searchRubType(){
      // 声明需要用到的参数
      let data = {
        api_key:'cc83785552bf0604',
        m: this.rubName,
      }
      let res = await post('/lajifl', data)
      console.log(res);
      Dialog.alert({
        title: '您查询的垃圾种类是',
        message: res.data.data.type,
      }).then(() => {
        // on close
      });
    }
  },
};
</script>

<style scoped>
.inputClass{
  width: 80%;
  margin: 10px auto;
  border-radius: 20%;
  /* border: 1px solid; */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  
}
</style>