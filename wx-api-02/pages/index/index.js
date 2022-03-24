// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {

  },
  // 跳转到关于
  switchToAbout() {
    // 获取到全局变量中的参数
    console.log(app.globalData.testArr);
    wx.switchTab({
      url: '/pages/about/about',
    })
  },
  // 使用API
  searchAPI() {
    // 1.判断小程序的API，回调，参数，组件等是否在当前版本可用。
    let canI1 = wx.canIUse('console.log')
    let canI2 = wx.canIUse('text.selectable')
    let canI3 = wx.canIUse('gmy.test')
    console.log(canI1, canI2, canI3);

    // 2.获取系统信息
    wx.getSystemInfo({
      success: (result) => {
        console.log(result);  
      },
    })
    // 获取系统设置相关
    console.log(wx.getSystemSetting().bluetoothEnabled);
    // 获取设备基础信息
    console.log(wx.getDeviceInfo());

    // 3.在小程序中更新微信的版本
    wx.updateWeChatApp({
      success: (res) => {
        console.log(res);
      },
    })

    // 4.提示相关
    wx.showToast({
      title: '成功',
    })

    wx.showActionSheet({
      itemList:["A","B","C"],
      success(res){
        console.log(res.tapIndex);
      },
      fail(res){
        console.log(res.errMsg);
      }
    })

    // 5.数据缓存
    let token = 'eqiowueo12i3j192i3eqwoeji'
    // 存储数据
    wx.setStorage({
      key: 'token',
      data: token,
      // 开启加密存储
      encrypt: true,
      success(res) {
        console.log(res);
      }
    })
    // 获取数据
    wx.getStorage({
      key: 'token',
      encrypt: true,
      success(res) {
        console.log(res);
      }
    })

    // 6.图片预览
    wx.previewImage({
      current: 'https://t7.baidu.com/it/u=4162611394,4275913936&fm=193&f=GIF',
      urls: [
        'https://t7.baidu.com/it/u=4162611394,4275913936&fm=193&f=GIF',
        'https://t7.baidu.com/it/u=1951548898,3927145&fm=193&f=GIF',
        'https://t7.baidu.com/it/u=1831997705,836992814&fm=193&f=GIF'
      ]
    })

    // 7.选择本地图片或视频
    wx.chooseMedia({
      // 可选图片的最多数量
      count: 9,
      // 文件类型
      mediaType: ['image', 'video'],
      // 图片和视频的来源
      sourceType: ['album', 'camera'],
      // 拍摄视频最长拍摄时间
      maxDuration: 30,
      // 使用前置或后置摄像头
      camera: 'back',
      // 成功回调
      success(res) {
        console.log(res)
        console.log(res)
      }
    })
  },
  // 位置API
  mapAPI(){
    // 首先要获取当前的定位
    wx.getLocation({
      type: 'wgs84',
      success (res) {
        console.log(res.latitude);
        console.log(res.longitude);
        // 成功之后获取对应的经纬度
        let latitude = res.latitude
        let longitude = res.longitude
        // 使用API打开对应的经纬度
        wx.openLocation({
          latitude,
          longitude,
          scale: 18
        })
      }
     })    
    
    // 选择位置
    wx.chooseLocation({
      success(res){
        console.log(res);
      }
    })
  }
})