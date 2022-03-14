// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    name:'zhangsan'
  },
  // 修改姓名
  changeName(e){
    console.log(e.detail.name);
    this.setData({
      name: e.detail.name
    })
  }
})
