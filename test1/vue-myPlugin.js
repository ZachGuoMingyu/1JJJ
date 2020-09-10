// 创建插件
// 匿名立即执行函数
(function () {
  // 定义MyPlugin
  const MyPlugin = {}

  MyPlugin.install = function (Vue, options) {
    // 1. 添加全局方法或 property
    Vue.myGlobalMethod = function () {
      console.log('全局方法Vue.myGlobalMethod');
    }

    // 2. 添加全局资源
    Vue.directive('my-directive', function (el, binding) {
      // 自定义指令
      el.textContent = binding.value.toUpperCase()
    })

    // 4. 添加实例方法
    Vue.prototype.$myMethod = function (methodOptions) {
      // 逻辑...
      console.log('实例方法$myMethod');
    }
  }

  // 向外暴露MyPlugin插件
  window.MyPlugin = MyPlugin
})()