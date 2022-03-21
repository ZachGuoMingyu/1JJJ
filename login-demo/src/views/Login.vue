<template>
  <div class="login">
    <!-- 头部区域 -->
    <div class="header">
      <!-- 头部标题区域 -->
      <div class="title">
        XXX应用
      </div>
    </div>
    <!-- 登录表单区域 -->
    <div class="loginArea">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit"
            >提交</van-button
          >
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
// 引入axios
import {post_json} from '../http/axios'
// 设置token
import {setToken} from '../http/tokenUtils'
import { Toast } from 'vant';
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async onSubmit() {
      // 配置参数
      let params = {
        username: this.username,
        password: this.password
      }
      // console.log(params);
      // 发送登录请求
      let res = await post_json('/user/login', params)
      // console.log(res.data.data.token);
      // 判断是否登录成功
      if (res.data.status == 200) {
        // 保存token
        setToken(res.data.data.token)
        // 跳转到首页
        this.$router.push('/manager/home')
      }else{
        // 提示错误信息
        Toast(res.data.message);
      }
      
    },
  },
};
</script>

<style scoped>
/* 登录页面整体样式 */
.login{
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(#005AA7,#FFFDE4);
  overflow: hidden;
}
/* 头部样式 */
.header{
  width: 100%;
  text-align: center;
  position: absolute;
  top: 120px;
}
/* 头部标题样式 */
.header .title{
  font-size: 40px;
  color: white;
}
/* 登录区域样式 */
.loginArea{
  /* 卡片效果 */
  box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.2);
  /* transition: 0.3s; */
  width: 90%;
  background-color: white;
  border-radius: 5px;
  height: 200px;
  padding: 10px;
  margin: 260px auto;
}
</style>