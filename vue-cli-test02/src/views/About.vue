<template>
  <div>
    <el-button type="danger" @click="batchDelete">批量删除</el-button>
    <!-- 表格区域 -->
    <div class="table">
      <!-- data 数据源 数组类型 -->
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
        <el-table-column prop="name" label="栏目名称" align="center"></el-table-column>
        <!-- 父级栏目 -->
        <el-table-column prop="parent.name" label="父级栏目" align="center">
          <template slot-scope="scope">
            <p v-if="scope.row.parent == null">--</p>
            <p v-else>{{scope.row.parent.name}}</p>
          </template>
        </el-table-column>
        <!-- 描述 -->
        <el-table-column prop="comment" label="描述" align="center">
        </el-table-column>
        <!-- 操作 -->
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <!-- 删除 -->
            <el-button type="danger" icon="el-icon-delete" circle @click="deleteById(scope.row.id)"></el-button>
            <!-- 编辑 -->
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
// 引入axios
import { get } from '../http/axios'
export default {
  data() {
    return {
      categoryData:[],
      multipleSelection: []
    };
  },
  created() {
    this.getAllCategory()
  },
  methods: {
    // 获取所有栏目数据
    async getAllCategory(){
      let categoryData = await get('/manager/category/findAllCategory')
      console.log(categoryData.data);
      this.categoryData = categoryData.data
    },
    // 删除单个栏目
    deleteById(id){
      console.log(id);
    },
    // 批量删除
    batchDelete(){
      // 获取到选中的id
      let ids = this.multipleSelection.map( item => item.id)
      console.log(ids.toString());
    },
    handleSelectionChange(val) {
      // console.log(val);
      this.multipleSelection = val;
    },
  },
};
</script>

<style scoped>
</style>
