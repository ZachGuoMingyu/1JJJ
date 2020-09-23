// 引入axios
import { post, get } from '../../http/axios'

// 导出vuex
export default {
  // 命名空间
  namespaced: true,
  // 状态或数据管理
  state: {
    // 前五个栏目数组
    fiveCategory: [],
    // 前四个产品数组
    fourProduct:[]
  },
  // 修改state中的状态或数据
  mutations: {
    // 获取前五个栏目数据
    getFiveCategory(state, categoryData){
      state.fiveCategory = categoryData
    },
    // 获取前四个产品数据
    getFourProduct(state, productData){
      state.fourProduct = productData
    }
  },
  // 执行异步操作
  actions: {
    // 获取前五个栏目数据
    async getFiveCategoryData(context){
      let fiveCategoryData = await post('/category/query',{
        page: 0,
        pageSize: 5
      })
      // console.log(fiveCategoryData.data.list);
      context.commit('getFiveCategory', fiveCategoryData.data.list)
    },
    // 获取前四个产品数据
    async getFourProductData(context){
      let fourProductData = await post('/product/query',{
        page: 0,
        pageSize: 4
      })
      // console.log(fourProductData.data.list);
      context.commit('getFourProduct', fourProductData.data.list)
    }
  }
}