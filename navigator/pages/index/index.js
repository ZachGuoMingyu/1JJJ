// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    msg: '我是首页传递过来的数据',
  },
  //跳转到关于页面的方法
  toAboutPage() {
    // 调用跳转页面的api进行处理了
    wx.navigateTo({
      // url 要跳转到的页面的路径
      // 1.第一种正向传值方式 拼接url
      url: '/pages/about/about?msg=' + this.data.msg,

      // 3.逆向传值
      events: {
        acceptAboutPageParam(param) {
          console.log('backData', param);
        }
      },

      // 2.第二种正向传值方式 在成功回调中利用eventChannel进行通信
      // 这里要给打开的页面传递数据 第一个参数 方法
      // 第二个参数 需要传递的数据
      success: function (res) {
        res.eventChannel.emit('toAboutPagePassParams', {
          id: 123
        })
      }
    })
  },
  
})