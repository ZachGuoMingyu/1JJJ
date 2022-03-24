<!--
 * @Description: 
 * @Author: ZachGmy
 * @Date: 2022-03-21 16:52:08
 * @LastEditors: ZachGmy
 * @LastEditTime: 2022-03-24 13:00:06
-->
<template>
  <div class="home">
    <!-- 顶部导航 -->
    <div class="navBar">
      <van-nav-bar
        title="首页"
      />
    </div>
    <!-- 轮播图 -->
    <div class="swiper">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in swiperData" :key="item.id">
          <img :src="item.url" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 菜单栏 -->
    <div class="gridMenu">
      <van-grid :column-num="3">
        <van-grid-item v-for="item in categoryData" :key="item.id" :icon="item.icon" :text="item.name" />
      </van-grid>
    </div>
    <!-- 商品展示列表 -->
    <div class="proList">
      <van-card
        v-for="item in productData"
        :key="item.id"
        :price="item.price + '.00'"
        :desc="item.description"
        :title="item.name"
        :thumb="item.photo"
      />
    </div>
    <div style="height: 100px;"></div>
  </div>
</template>

<script>
// 引入axios
import {get, post} from '../../http/axios'
  export default {
    data() {
      return {
        // 轮播图数组
        swiperData:[],
        // 菜单栏数据
        categoryData:[],
        // 产品列表展示数据
        productData:[]
      }
    },
    // 生命周期钩子函数
    created() {
      // 自动获取轮播图数据
      this.getSwiperData()
      // 自动获取菜单栏数据
      this.getProductCategory()
      // 自动获取产品列表展示输数据
      this.getProductData()
    },
    methods: {
      // 获取轮播图数组 在页面加载时自动获取数据
      async getSwiperData(){
        // 发送网络请求
        let swiperData = await get('/carousel/findAll')
        // 赋值给data中的变量
        this.swiperData = swiperData.data.data
      },
      // 获取产品分类数据
      async getProductCategory(){
        // 设置参数
        let data = {
          page: 1,
          pageSize: 6
        }
        // 发送请求
        let categoryData = await get('/productCategory/pageQuery', data)
        console.log(categoryData);
        // 赋值给data中的变量
        this.categoryData = categoryData.data.data.list
      },
      // 获取首页产品列表展示信息
      async getProductData(){
        // 设置参数
        let data = {
          page: 1,
          pageSize: 10
        }
        // 发送网络请求
        let productData = await get('/product/pageQuery', data)
        // console.log(productData);
        this.productData = productData.data.data.list
      }
    },
  }
</script>

<style scoped>
.my-swipe .van-swipe-item img{
  width: 100%;
  height: 250px;
}
</style>