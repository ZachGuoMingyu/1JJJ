// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    aboutMsg:'我是关于界面的消息'
  },
  // 返回上一页
  toBack(){
    // 逆向传值
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.emit('acceptAboutPageParam', this.data.aboutMsg)
    // 返回上一页 直接调用 wx.navigateBack 函数即可
    wx.navigateBack()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 接收传递过来的值 第一种方式
    console.log(options);
    // 接收首页传递过来的值 第二种方式
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.on('toAboutPagePassParams', function (data) {
      console.log(data);
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})