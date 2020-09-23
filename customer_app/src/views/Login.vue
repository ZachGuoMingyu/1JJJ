<template>
  <div class="login">
    <!-- 头部区域 -->
    <div class="header">
      <div class="header_logo">家</div>
      <div class="header_title">
        <span>外卖云服务平台</span>
        <span>顾客端</span>
      </div>
    </div>
    <!-- 表单输入区域 -->
    <div class="login_inputArea">
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
          <van-button color="rgb(22, 89, 160)" round block type="info" native-type="submit">
            登录
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
// 引入辅助函数
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      // 用户名
      username: '',
      // 密码
      password: '',
    };
  },
  methods: {
    // 使用辅助函数 获取vuex中actions中的方法
    ...mapActions('login',['login']),
    // 登录按钮点击事件
    onSubmit() {
      // 配置参数
      let params = {
        username: this.username,
        password: this.password,
        type: 'customer'
      }
      // 调用方法 进行登录验证
      this.login(params)
      // 登录成功 跳转到根页面
      .then(r => {
        this.$router.push('/home/index')
      })
    },
  },
};
</script>

<style scoped>
/* 设置头部区域样式 */
.header {
  width: 100%;
  background-color: rgb(22, 89, 160);
  color: white;
  height: 260px;
  overflow: hidden;
}
/* 设置logo样式 */
.header_logo {
  width: 70px;
  height: 70px;
  border: 1px solid white;
  margin: 0 auto;
  text-align: center;
  line-height: 70px;
  font-size: 30px;
  font-weight: bold;
  border-radius: 50%;
  margin-top: 60px;
}
/* 设置title样式 */
.header_title {
  text-align: center;
  margin-top: 10px;
  font-size: 25px;
  font-weight: bold;
}
.header_title span:last-child {
  font-size: 18px;
  margin-left: 10px;
}
</style>
