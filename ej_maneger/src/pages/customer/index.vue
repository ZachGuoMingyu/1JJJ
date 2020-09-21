<template>
  <div class="customer">
    <!-- 标题 -->
    <div class="customer_title">顾客管理</div>
    <!-- 头部区域 -->
    <div class="customer_header">
      <!-- 新增按钮 -->
      <el-button type="primary" @click="addCustomer">添加</el-button>
      <!-- 搜索内容 -->
      <el-input v-model="searchInput" placeholder="请输入状态"></el-input>
      <!-- 查询按钮 -->
      <el-button type="primary" @click="searchCustomerByStatus">查询</el-button>
    </div>
    <!-- 表格展示区域 -->
    <div class="customer_table">
      <el-table :data="customerObj.list" stripe style="width: 100%">
        <!-- 编号 -->
        <el-table-column prop="id" label="编号" align="center"></el-table-column>
        <!-- 姓名 -->
        <el-table-column prop="realname" label="姓名" align="center"></el-table-column>
        <!-- 手机号 -->
        <el-table-column prop="telephone" label="手机号" align="center"></el-table-column>
        <!-- 状态 -->
        <el-table-column prop="status" label="状态" align="center"></el-table-column>
        <!-- 操作 -->
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <span class="setSapn" @click="deleteCustomerById(scope.row.id)">删除</span>
            <span class="setSapn" @click="editCustomer(scope.row)">编辑</span>
            <span class="setSapn" @click="toCustomerDetail(scope.row.id)">详情</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="pageSize"
      background
      layout="total, prev, pager, next"
      :total="total"
    ></el-pagination>

    <!-- 模态框 -->
    <el-dialog title="添加顾客信息" :visible.sync="dialogVisible" width="50%">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
				<!-- 用户名 -->
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
				<!-- 姓名 -->
				<el-form-item label="姓名" prop="realname">
          <el-input v-model="ruleForm.realname"></el-input>
        </el-form-item>
				<!-- 手机号 -->
				<el-form-item label="手机号" prop="telephone">
          <el-input v-model="ruleForm.telephone"></el-input>
        </el-form-item>
				<!-- 密码 -->
				<el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
				<!-- 状态 -->
        <el-form-item label="状态" prop="status">
          <el-select v-model="ruleForm.status" placeholder="请选择状态">
            <el-option label="启用" value="启用"></el-option>
            <el-option label="禁用" value="禁用"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveOrUpdate('ruleForm')">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
// 引入辅助函数
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      // 搜索框的内容
      searchInput: "",
      // 当前页数
      currentPage: 1,
      // 每页显示数据的条数
      pageSize: 10,
      // 数据总条数
      total: 100,
      // 控制模态框的显示与隐藏
      dialogVisible: false,
			// 表单数据对象
			ruleForm: {
				// 用户名
				username: '',
				// 姓名
				realname: '',
				// 手机号
				telephone: '',
				// 密码
				password: '',
				// 状态
				status:''
			},
			// 表单验证规则
			rules: {
				username: [
					{ required: true, message: '请输入用户名', trigger: 'blur' }
				],
				realname: [
					{ required: true, message: '请输入姓名', trigger: 'blur' }
				],
				telephone: [
					{ required: true, message: '请输入手机号', trigger: 'blur' }
				],
				password: [
					{ required: true, message: '请输入密码', trigger: 'blur' }
				],
				status: [
					{ required: true, message: '请选择状态', trigger: 'blur' }
				]
			}
    };
  },
  created() {
    // 对应的生命周期钩子函数中进行函数自执行 加载默认数据
    this.findAllCustomerData();
  },
  computed: {
    // 利用辅助函数 获取state中的数据
    ...mapState("customer", ["customerObj"]),
  },
  methods: {
    // 辅助函数 来获取actions中的方法
    // 第一个参数 命名空间对应的名称
    ...mapActions("customer", ["findAllCustomer", "deleteCustomer","saveOrUpdateCustomer"]),

    // 获取所有顾客信息
    findAllCustomerData() {
      // 配置传递的参数
      let params = {
        // 从第一页开始加载数据 请求数据的时候 参数默认从0开始 此时 我们可以使用currentPage - 1即可
        page: this.currentPage - 1,
        pageSize: this.pageSize,
      };
      this.findAllCustomer(params)
        // 加载数据完毕以后 我们可以根据数据 获取到总数据条数
        .then((r) => {
          this.total = this.customerObj.total;
        });
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.findAllCustomerData();
    },
    // 根据状态查询数据
    searchCustomerByStatus() {
      // 配置参数
      let params = {
        page: this.currentPage - 1,
        pageSize: this.pageSize,
        status: this.searchInput,
      };
      if (params.status == "") {
        // 如果status参数为空 那么其实就是相当于做了一个分页查询的操作 为了不让它为空的时候影响数据的获取 我们可以直接删除这个属性
        delete params.status;
        this.findAllCustomer(params).then((r) => {
          this.total = this.customerObj.total;
        });
      } else {
        this.findAllCustomer(params).then((r) => {
          this.total = this.customerObj.total;
        });
      }
    },

    // 根据id删除顾客信息
    deleteCustomerById(id) {
      this.$confirm("此操作将永久删除该顾客信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          // 点击确定的时候触发
          // 执行删除操作
          this.deleteCustomer(id).then((r) => {
            // 对页数进行处理
            const totalPage = Math.ceil(
              (this.customerObj.total - 1) / this.pageSize
            );
            this.currentPage =
              this.currentPage > totalPage ? totalPage : this.currentPage;
            this.currentPage = this.currentPage < 1 ? 1 : this.currentPage;
            // 提示删除成功
            this.$message({
              type: "success",
              message: "删除成功!",
            });
            // 重新刷新页面数据
            this.findAllCustomerData();
          });
        })
        .catch(() => {
          // 点击取消的时候触发
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },

    // 添加顾客
    addCustomer() {
			// 添加 将表单对象置空
			this.ruleForm = {}
      // 显示模态框
      this.dialogVisible = true;
		},
		// 编辑顾客信息
		editCustomer(row){
			// 将已有对象信息进行赋值显示
			// 直接进行赋值 是浅复制 会有响应式数据的变化 我们可以使用三点语法将其拆解 重新赋值
			this.ruleForm = {...row}
			// 显示模态框
      this.dialogVisible = true;
		},
		// 保存或更新顾客信息
		saveOrUpdate(ruleForm){
			// 通过$refs 根据传递过来的ref字符串 找到对应的表单数据进行验证
			// validate element自带的验证机制
			this.$refs[ruleForm].validate((valid) => {
				if (valid) {
					// 表单数据通过验证 发送网络请求
					this.saveOrUpdateCustomer(this.ruleForm)
					.then(r => {
						// 提示编辑或新增成功通知
						// 新增的时候id是不存在的 
						let messageInfo = ''
						if (this.ruleForm.id) {
							messageInfo = '编辑'
						}else{
							messageInfo = '新增'
						}
						this.$notify({
							title: '成功',
							message: messageInfo + '成功!',
							type: 'success'
						});
						// 刷新页面数据
						this.findAllCustomerData()
						// 关闭模态框
						this.dialogVisible = false
					})
				} else {
					// 表单数据未通过验证 根据提示 完善数据
					return false;
				}
			});
		},
		// 跳转到详情页面
		toCustomerDetail(id){
			// 编程式导航
			this.$router.push({
				path: '/customer/customerDetail',
				query: {
					id: id
				}
			})
		}
  },
};
</script>
<style scoped>
/* 设置customer整体样式 */
.customer {
  width: 99%;
  background-color: #fff;
  /* 最小高度 vh视框高度*/
  min-height: calc(100vh - 70px);
  padding: 10px;
  overflow: hidden;
}
/* title设置样式 */
.customer_title {
  border-bottom: 1px solid black;
  padding-bottom: 10px;
}
/* 设置头部区域样式 */
.customer_header {
  margin-top: 10px;
  margin-bottom: 10px;
}
/* 输入框的样式 */
.customer_header .el-input {
  width: 200px;
}
/* 设置表格的样式 */
.customer_table {
  width: 100%;
  /* 最高高度 */
  max-height: 500px;
  padding-bottom: 10px;
  overflow: auto;
}
/* 设置操作区域样式 */
.setSapn {
  color: rgb(70, 160, 252);
  cursor: pointer;
}
</style>
