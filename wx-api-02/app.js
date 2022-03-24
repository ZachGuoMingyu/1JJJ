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
    // 首页想关于页面的传值
    testArr:[
      {
        id:1,
        name:'zhangsan'
      },
      {
        id:2,
        name:'lisi'
      }
    ]
  }
})
