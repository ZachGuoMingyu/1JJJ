// index.js
// 获取应用实例
const app = getApp()
// 这里去掉前面的path/to/ 去掉中间的/dist
import Dialog from '@vant/weapp/dialog/dialog';
const request = require('../../utils/promise.js');
Page({
  data: {
    // 历史上的今天数组
    hisTodData: [],
    // 用户输入的值
    inputValue: ''
  },
  // 获取历史上的今天 有参get请求
  getHisTodData() {
    let that = this
    wx.request({
      // 传递参数第一种方式 拼接url
      // url: 'https://api.muxiaoguo.cn/api/lishijr?api_key=0b0c3893a95d6987',
      url: 'https://api.muxiaoguo.cn/api/lishijr',
      // 第二种方式 data对象
      data: {
        api_key: '0b0c3893a95d6987'
      },
      success(res) {
        console.log(res.data.data);
        // 向data中的变量赋值
        that.setData({
          hisTodData: res.data.data
        })
      }
    })
  },
  // 获取城市天气信息
  getCityWeather() {
    let that = this
    app.Promise({
      // 接口地址
      url: '/tianqi',
      // 请求参数
      data: {
        api_key: '779d7e46708290a5',
        city: that.data.inputValue,
        type: 1,
      },
      // 请求方式
      method: 'post',
      // 请求类型
      contentType: "application/x-www-form-urlencoded",
    }).then(function (res) {
      console.log(res);
      Dialog.alert({
        message: that.data.inputValue + "的温度是" + res.data.temp + "度",
        theme: 'round-button',
      }).then(() => {
        // on close
      });
    })
  },

  // 获取城市天气信息 第二种封装方式
  getCityWeather2(){
    let that = this
    request.POST('/tianqi',{
      api_key: '779d7e46708290a5',
      city: that.data.inputValue,
      type: 1,
    }).then(res => {
      console.log(res);
    })
  }
})