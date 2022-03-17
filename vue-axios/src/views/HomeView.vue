<template>
  <div>
    <!-- 点击按钮 查询历史上的今天 -->
    <button @click="searchHisTodData">历史上的今天</button>
    <ul>
      <li v-for="(item,index) in hisTodData" :key="index">
        {{item.title}}
      </li>
    </ul>
    <!-- 点击按钮 查询城市天气 -->
    <input type="text" v-model="cityName">
    <button @click="searchCityWeather">查询</button>
    <div>当前城市气温为:</div>
    
  </div>
</template>

<script>
// 导入axios
import axios from "axios";
// 导入封装的axios方法
import {get, post} from '@/http/axios'
import qs from 'qs'
export default {
  data() {
    return {
      // 历史上的今天
      hisTodData:[],
      // 城市名称
      cityName: ''
    }
  },
  methods: {
    // 历史上的今天
    searchHisTodData(){
      // 根据网络请求方式 参数格式 发送网络请求
      axios({
        // 没有参数的get请求 直接使用接口地址进行数据的获取即可
        // 有参get请求 可以直接拼接参数 ?a=1&b=2....
        // url:'https://api.muxiaoguo.cn/api/lishijr?api_key=0b0c3893a95d6987'
        url:'https://api.muxiaoguo.cn/api/lishijr',
        // 还可以使用params字段进行参数的传递
        params:{
          api_key:'0b0c3893a95d6987'
        }
      }).then(res => {
        // 根据实际需要 选取特定的数据
        // console.log(res.data.data);
        // 将符合条件的数据赋值给data中对应的变量
        this.hisTodData = res.data.data
      })
    },
    // 查询天气
    searchCityWeather(){
      axios({
        url:'https://api.muxiaoguo.cn/api/tianqi',
        // 默认请求为get方式 
        method:'post',
        // 先使用params 和 data试一下
        data:qs.stringify({
          api_key:'779d7e46708290a5',
          city: this.cityName,
          type: 1
        }),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
      }).then(res => {
        console.log(res.data.data.temp);
      })
    },
    // 查询垃圾分类 - 使用封装的post
  },
};
</script>

<style scoped>
</style>