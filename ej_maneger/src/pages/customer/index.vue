<template>
  <div class="customer">
    <!-- 顶部标题 -->
    <div class="customer_title">顾客管理</div>
    <!-- 头部区域 -->
    <div class="customer_header">
      <!-- 新增按钮 -->
      <el-button type="primary" @click="addCustomer">新增</el-button>
      <!-- 搜索框 -->
      <el-input v-model="searchInput" placeholder="请输入状态"></el-input>
      <!-- 查询按钮 -->
      <el-button type="primary" @click="toSearch">查询</el-button>
    </div>
    <!-- 表格区域 -->
    <div class="table">
      <el-table :data="customerObj.list" stripe style="width: 100%">
        <!-- 编号 -->
        <el-table-column prop="id" label="编号" align="center">
        </el-table-column>
        <!-- 姓名 -->
        <el-table-column prop="realname" label="姓名" align="center">
        </el-table-column>
        <!-- 手机号 -->
        <el-table-column
          prop="telephone"
          label="手机号"
          align="center"
        ></el-table-column>
        <!-- 状态 -->
        <el-table-column prop="status" label="状态" align="center">
        </el-table-column>
        <!-- 操作 -->
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <span class="setSpan" @click="deleteCustomerById(scope.row.id)"
              >删除</span
            >
            <span class="setSpan" @click="editCustomer(scope.row)">编辑</span>
            <span class="setSpan" @click="toCustomerDetail(scope.row.id)">详情</span>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 分页 -->
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="pageSize"
      layout="total, prev, pager, next"
      :total="total"
    >
    </el-pagination>

    <!-- 模态框 -->
    <el-dialog :title="dialogTitle" :visible.sync="dialogVisible" width="40%">
      <!-- 模态框内容区域 -->
      <!-- 表单 -->
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
            <el-option label="禁用" value="禁用"></el-option>
            <el-option label="启用" value="启用"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <!-- 取消按钮 -->
        <el-button @click="dialogVisible = false">取 消</el-button>
        <!-- 确定按钮 -->
        <el-button type="primary" @click="saveOrUpdate('ruleForm')">
          确 定
        </el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import axios from "@/http/axios";
export default {
  data() {
    return {
      // 搜索内容
      searchInput: "",
      // 所有顾客信息对象
      customerObj: {},
      // 当前页数
      currentPage: 1,
      // 每页显示的数据条数
      pageSize: 10,
      // 数据总条数
      total: 100,
      // 控制模态框的显示与隐藏
      dialogVisible: false,
      // 模态框的标题
			dialogTitle: "",
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
				status: ''
			},
			// 表单验证规则
			rules: {
				username: [
					{ required: true, message: '请输入用户名', trigger: 'blur' },
				],
				realname: [
					{ required: true, message: '请输入姓名', trigger: 'blur' },
				],
				telephone: [
					{ required: true, message: '请输入电话', trigger: 'blur' },
				],
				password: [
					{ required: true, message: '请输入密码', trigger: 'blur' },
				],
				status: [
					{ required: true, message: '请选择状态', trigger: 'blur' },
				],
			}
    };
  },
  created() {
    this.findAllCustomerData();
  },
  methods: {
    // 获取所有顾客信息
    async findAllCustomerData() {
      // 配置对应的参数
      let params = {
        page: this.currentPage - 1,
        pageSize: this.pageSize,
      };
      // 异步加载 获取获取
      await axios.post("/customer/query", params).then((res) => {
        // console.log(res.data.data);
        this.customerObj = res.data.data;
        this.total = this.customerObj.total;
      });
    },
    // 分页切换事件
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.findAllCustomerData();
    },
    // 根据状态查询
    async toSearch() {
      // 配置相应的参数
      let params = {
        page: this.currentPage - 1,
        pageSize: this.pageSize,
        status: this.searchInput,
      };
      // 防止status为空造成数据请求错误 先做判断
      if (params.status == "") {
        delete params.status;
        // 网络请求 获取数据
        await axios.post("/customer/query", params).then((res) => {
          // console.log(res.data.data);
          this.customerObj = res.data.data;
          this.total = this.customerObj.total;
        });
      } else {
        // 网络请求 获取数据
        await axios.post("/customer/query", params).then((res) => {
          // console.log(res.data.data);
          this.customerObj = res.data.data;
          this.total = this.customerObj.total;
        });
      }
    },

    // 单个删除
    deleteCustomerById(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        // 处理确定操作
        .then(async () => {
          await axios.get("/customer/deleteById?id=" + id).then((res) => {
            // 当对最后一页的最后一条数据进行删除时 currentPage会出现错误 手动更正它
            // 通过计算获取当前总页数
            // ceil 向上取整
            const totalPage = Math.ceil(
              (this.customerObj.total - 1) / this.pageSize
            );
            // 经过判断 更正currentPage的值
            this.currentPage =
              this.currentPage > totalPage ? totalPage : this.currentPage;

            this.currentPage = this.currentPage < 1 ? 1 : this.currentPage;
            // 删除成功提示
            this.$message({
              type: "success",
              message: "删除成功!",
            });
            // 刷新页面数据
            this.findAllCustomerData();
          });
        })
        // 处理取消操作
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },

    // 新增顾客
    addCustomer() {
			// 重置表单数据对象
			this.ruleForm = {}
      // 设置模态框标题
      this.dialogTitle = "添加顾客信息";
      // 显示模态框
      this.dialogVisible = true;
    },
		// 编辑顾客信息
		editCustomer(row){
			// 获取当前对象进行显示
			// 当我们直接把row对ruleForm进行赋值的时候 会导致不保存也出现数据更改的情况
			// 只是因为浅拷贝导致的 使用扩展运算符将row进行拆解 然后再拼接
			console.log({...row});
			this.ruleForm = {...row}
			// 设置模态框标题
      this.dialogTitle = "编辑顾客信息";
      // 显示模态框
      this.dialogVisible = true;
		},

		// 更新或保存用户信息
		saveOrUpdate(ruleForm){
			// 表单验证 验证成功 发送网络请求 验证失败 检查数据
			this.$refs[ruleForm].validate(async (valid) => {
				if (valid) {
					await axios.post('/customer/saveOrUpdate', this.ruleForm)
					.then(res => {
						// 提示新增或编辑成功
						let message = ''
						if (this.ruleForm.id) {
							message = '编辑顾客信息'
						}else{
							message = '新增顾客'
						}
						this.$notify({
							title: '成功',
							message: message + '成功!',
							type: 'success'
						});
						// 刷新页面数据
						this.findAllCustomerData()
						// 关闭模态框
						this.dialogVisible = false
					})
				} else {
					
					return false;
				}
			});
		},

		// 跳转到顾客详情页面
		toCustomerDetail(id){
			this.$router.push({
				path: '/customer/customerDetail',
				query:{id: id}
			})
		}

  },
};
</script>
<style scoped>
/* 设置customer样式 */
.customer {
  background-color: #fff;
  width: 99%;
  min-height: calc(100vh - 70px);
  padding: 10px;
  overflow: hidden;
}
/* 设置title样式 */
.customer_title {
  border-bottom: 1px solid black;
  padding-bottom: 10px;
  font-size: 20px;
}
/* 设置头部区域样式 */
.customer_header {
  margin-top: 10px;
}
/* 设置输入框样式 */
.customer_header .el-input {
  width: 220px;
}
/* 设置操作按钮样式 */
.setSpan {
  color: rgb(57, 157, 254);
  cursor: pointer;
}
</style>
