<template>
  <!-- 
  仅限我们当前的课堂练习 
  1.使用VueCLI搭建项目结构
  2.根据当前需求安装所需第三方 
    element-ui 第三方组件库 vue add element
    axios 网络请求工具 npm install axios --save
    qs url序列化工具 npm install qs --save
  3.创建组件，配置路由
  4.封装axios网络请求工具
  5.根据需求进行开发
  -->
  <div class="about">
    <!-- 顶部按钮区域 -->
    <div class="button">
      <el-button type="primary">新增</el-button>
      <el-button type="danger" @click="batchDeleteClick">批量删除</el-button>
    </div>
    <!-- 表格 -->
    <el-table
      ref="multipleTable"
      :data="categoryData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <!-- 编号 -->
      <el-table-column type="selection" align="center"></el-table-column>

      <!-- 栏目名称 -->
      <el-table-column prop="name" label="栏目名称" align="center">
        <!-- 作用域插槽 -->
        <template slot-scope="scope">
          <p v-if="scope.row.name == null">--</p>
          <p v-else>{{scope.row.name}}</p>
        </template>
      </el-table-column>

      <!-- 父级栏目 -->
      <el-table-column prop="parent.name" label="父级栏目" align="center">
        <template slot-scope="scope">
          <p v-if="scope.row.parent == null">--</p>
          <p v-else>{{scope.row.parent.name}}</p>
        </template>
      </el-table-column>

      <!-- 描述 -->
      <el-table-column prop="comment" label="描述" align="center">
        <template slot-scope="scope">
          <p v-if="scope.row.comment == null">--</p>
          <p v-else>{{scope.row.comment}}</p>
        </template>
      </el-table-column>

      <!-- 操作 -->
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" circle></el-button>
          <el-button @click="deleteClick(scope.row.id)" type="danger" icon="el-icon-delete" circle></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// 导入axios
import { get } from '../http/axios'
export default {
  data() {
      return {
        // 栏目数据
        categoryData: [],
        // 多选数组
        multipleSelection: []
      }
    },
    // 利用生命周期钩子函数 让方法自执行
    created() {
      this.findAllCategory()
    },
    methods: {
      // 获取全部栏目数据
      // 使用async await 配合 axios 来进行网络请求
      async findAllCategory(){
        let categoryData = await get('/manager/category/findAllCategory')
        // console.log(categoryData.data);
        this.categoryData = categoryData.data
      },
      // 单个删除
      async deleteClick(id){
        // console.log(id);
        let res = await get('/manager/category/deleteCategoryById?id='+id)
        this.findAllCategory()
      },

      // 拿到多选以后被选中的对象的数组
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },

      // 批量删除
      batchDeleteClick(){
        // 拿到批量删除的id
        let ids = this.multipleSelection.map( item => item.id)
        console.log(ids.toString());
        // 处理参数格式
        // 发送请求
      }
    }
};
</script>

<style scoped>
</style>
