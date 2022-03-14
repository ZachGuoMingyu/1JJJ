// components/myHeader.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 可以在组件中定义相对应的属性，属性值可以在组件使用时指定
    innerText:{
      // 期望的数据是什么类型
      type: String,
      // 默认值
      value: '我是默认值'
    },
    name:{
      type: String,
      value: '我是默认值'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 子组件通过事件的方式向父组件传递参数
    // 修改姓名事件
    changeName(){
      this.triggerEvent('changeName',{
        name: 'lisi'
      })
    }
  }
})
