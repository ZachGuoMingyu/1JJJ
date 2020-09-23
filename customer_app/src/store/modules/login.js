// 引入axios
import { post_json, get } from '../../http/axios'

// 导出vuex
export default{
  // 命名空间
  namespaced: true,
  // 状态或数据管理
  state:{},
  // 修改state中的状态或数据
  mutations:{},
  // 执行异步操作
  actions:{
    // 登录
    async login(context, params){
      let res = await post_json('/user/login', params)
      // console.log(res);
    }
  }
}