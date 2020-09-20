// 在Vuex中 需要处理网路请求 我们就需要导入axios 
// @ 以根目录的方式定义相对路径 相当于src/
import axios from '@/http/axios'

// 配置Vuex结构
export default {
  // vuex中的store分成模块来管理 需要在index.js中引入每一个Vuex模块进行配置 为了解决不同模块命名冲突的问题  将不同模块的namespaced 全部开启 之后 在不同的页面中再使用getters，actions，mutations，state的时候 需要根据不同的模块名来获取
  namespaced: true,
  // 保存数据或状态
  state: {
    customerData: {}
  },
  // 修改state中的状态
  mutations: {
    // 对state中的数据进行更新赋值
    getCustomerData(state, customerData){
      state.customerData = customerData
    }
  },
  // 处理异步操作
  actions: {
    // 获取所有顾客信息
    async findAllCustomer(context, params){
      let customerData = await axios.post('/customer/query', params)
      // console.log(customerData.data.data);
      // 将数据commit给mutations 
      context.commit('getCustomerData', customerData.data.data)
    },
    // 根据id删除顾客信息
    async deleteCustomerById(context, id){
      let res = await axios.get('/customer/deleteById?id=' + id)
    }
  }
}