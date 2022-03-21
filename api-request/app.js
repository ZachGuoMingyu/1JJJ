// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  },
  // 基于Promise封装的网络请求方法
  Promise: function (promise) {
    let APIURL = 'https://api.muxiaoguo.cn/api';
    return new Promise(function (resolve, reject) {
      wx.request({
        url: APIURL + promise.url,
        data: promise.data,
        method: promise.method,
        header: {
          "Content-Type": promise.contentType
        },
        success(res) {
          //跟服务器通信是否正常
          if (res.statusCode === 200) {
            //返回接口的正常数据
            resolve(res.data);
          } else {
            wx.showToast({
              title: res.data.msg,
              icon: 'none',
              duration: 1500
            });
            resolve();
          }
        },
        fail(e) {
          wx.showToast({
            title: "网络异常",
            icon: 'none',
            duration: 1500
          });
          reject(e)
        }
      });
    })
  }
})