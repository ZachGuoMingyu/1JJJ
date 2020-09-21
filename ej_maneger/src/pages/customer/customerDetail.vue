<template>
  <div class="customerDetail">
    <!-- 返回按钮 -->
    <el-button type="primary" icon="el-icon-arrow-left" size="small" plain @click="toBackCustomer">返回</el-button>
    <!-- 切换显示区域 -->
    <div class="customerDetail_tabs">
      <el-tabs stretch v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="基本信息" name="first">
          <!-- 头像 -->
          <div class="avator">
            <img :src="customerInfo.imgPhoto" alt="">
          </div>
          <!-- 姓名 -->
          <div class="realname">{{customerInfo.realname}}</div>
          <!-- 心情 -->
          <div class="shuoshuo">海纳百川有容乃大</div>
          <!-- 联系方式 -->
          <div class="tel">联系方式:{{customerInfo.telephone}}</div>
          <!-- 状态 -->
          <div class="status">状态:{{customerInfo.status}}</div>
          <!-- 地址 -->
          <div class="address">地址:{{customerInfo.province + customerInfo.city}}</div>
        </el-tab-pane>
        <el-tab-pane label="订单信息" name="second">
          <!-- 添加表格 -->
          <!-- 将已有数据源与表格进行匹配 展示对应信息 -->
          <!-- {{orderData[0].orderTime | dateParse}} -->
        </el-tab-pane>
        <el-tab-pane label="服务地址" name="third">
          <!-- 添加表格 -->
          <!-- 将已有数据源与表格进行匹配 展示对应信息 -->
          <!-- {{addressData}} -->
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
// 引入辅助函数
import { mapState, mapActions } from 'vuex'
  export default {
    data() {
      return {
        // 默认显示哪个tab
        activeName: 'first'
      }
    },
    created() {
      this.findAllData()
    },
    computed: {
      ...mapState('customer',['customerInfo','orderData','addressData'])
    },
    methods: {
      ...mapActions('customer',['findCustomerById','findOrderDataByCustomerId','findAddressByCustomerId']),
      // 获取所有所需数据
      findAllData(){
        // 获取顾客基本信息
        this.findCustomerById(this.$route.query.id)
        // 获取订单信息
        this.findOrderDataByCustomerId(this.$route.query.id)
        // 获取地址信息
        this.findAddressByCustomerId(this.$route.query.id)
      },
      handleClick(tab, event) {
        // console.log(tab, event);
      },
      // 返回顾客界面
      toBackCustomer(){
        this.$router.go(-1)
      }
    },
  }
</script>

<style scoped>
/* 设置顾客详情整体样式 */
.customerDetail{
  width: 99%;
  background-color: #fff;
  /* 最小高度 vh视框高度*/
  min-height: calc(100vh - 70px);
  padding: 10px;
  overflow: hidden;
}
/* 设置头像样式 */
.avator{
  width: 150px;
  height: 150px;
  background-color: gainsboro;
  border-radius: 50%;
  margin: 0 auto;
}
/* 设置头像img样式 */
.avator img{
  width: 130px;
  height: 130px;
  border-radius: 50%;
  margin: 10px 0 0 10px;
}
/* 姓名样式 */
.realname{
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  margin-top: 10px;
}
/* 心情样式 */
.shuoshuo{
  text-align: center;
  font-size: 20px;
  margin-top: 10px;
}
/* 电话状态地址统一样式 */
.tel,.status,.address{
  text-align: center;
  font-size: 18px;
  margin-top: 10px;
}
</style>