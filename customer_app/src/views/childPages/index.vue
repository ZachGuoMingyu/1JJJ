<template>
  <div class="index">
    <!-- 顶部导航栏 吸顶效果-->
    <van-sticky :offset-top="0">
      <div class="header_title">e洁外卖平台</div>
    </van-sticky>
    <!-- 轮播图 -->
    <div class="swipe">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="../../assets/1.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/2.jpg" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 栏目 -->
    <div class="category">
      <van-grid :column-num="3">
        <van-grid-item v-for="value in fiveCategory" :key="value.id" :icon="value.icon" :text="value.name" />
        <!-- 带有徽标提示的 -->
        <van-grid-item icon="more-o" text="更多" badge="more" />
      </van-grid>
    </div>
    <!-- 产品 -->
    <div class="product">
      <van-grid :column-num="2">
        <van-grid-item v-for="item in fourProduct" :key="item.id">
          <van-image :src="item.photo" />
          <span>{{item.name}}</span>
        </van-grid-item>
      </van-grid>
    </div>
    <div style="height:50px"></div>
  </div>
</template>

<script>
// 引入辅助函数
import { mapState, mapActions } from 'vuex'
  export default {
    data() {
      return {
        
      }
    },
    created() {
      // 自执行
      this.getFiveCategory()
      this.getFourProduct()
    },
    computed: {
      ...mapState('index',['fiveCategory','fourProduct'])
    },
    methods: {
      // 辅助函数 获取actions中的方法
      ...mapActions('index',['getFiveCategoryData','getFourProductData']),
      // 获取前五个栏目数据
      getFiveCategory(){
        this.getFiveCategoryData()
      },
      // 获取前四个产品数据
      getFourProduct(){
        this.getFourProductData()
      }
    },
  }
</script>

<style scoped>
/* 顶部导航栏样式 */
.header_title{
  width: 100%;
  height: 40px;
  color: black;
  text-align: center;
  background-color: white;
  line-height: 40px;
  font-size: 20px;
  border: 1px solid rgb(241, 241, 241);
}
/* 设置轮播区域 和 图片样式 */
.swipe, .swipe img{
  width: 100%;
  height: 230px;
}
</style>