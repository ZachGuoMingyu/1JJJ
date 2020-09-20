<template>
  <div class="customer">
    <!-- 标题 -->
    <div class="customer_title">顾客管理</div>
    <!-- 头部 -->
    <div class="customer_header">
      <!-- 新增按钮 -->
      <el-button type="primary">新增</el-button>
      <!-- 搜索内容 -->
      <el-input v-model="searchInput"></el-input>
      <!-- 查询按钮 -->
      <el-button type="primary" @click="searchCustomer">查询</el-button>
    </div>
    <!-- 表格区域 -->
    <div class="customer_table">
      <el-table :data="this.customerData.list" stripe style="width: 100%">
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
						<span class="setSpan" @click="deleteCustomer(scope.row.id)">删除</span>
						<span class="setSpan">编辑</span>
						<span class="setSpan">详情</span>
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
      :total="total">
    </el-pagination>
  </div>
</template>
<script>
// 引入辅助函数
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      // 搜索内容
			searchInput: "",
			// 当前页数
			currentPage: 1,
			// 每页展示多少条数据
			pageSize: 10,
			// 数据总数
			total: 100,
			tableData: [{
				date: '2016-05-02',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1518 弄'
			}, {
				date: '2016-05-04',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1517 弄'
			}, {
				date: '2016-05-01',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1519 弄'
			}, {
				date: '2016-05-03',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1516 弄'
			}]
    };
  },
  created() {
		// 在相应的生命周期钩子函数中 执行默认加载数据的方法
		this.findAllCustomerData()
	},
	computed: {
		// 通过辅助函数 获取到state中的额全部顾客信息对象
		...mapState('customer',['customerData'])
	},
  methods: {
		// 通过辅助函数 获取对应的方法
		// 第一个参数 命名空间 自定义的文件夹名或js文件名
		...mapActions('customer',['findAllCustomer', 'deleteCustomerById']),
		// 获取所有顾客信息
		findAllCustomerData(){
			// 配置所需参数
			let params = {
				page: this.currentPage - 1,
				pageSize: this.pageSize
			}
			// 调用actions中的方法 发送网络请求
			this.findAllCustomer(params)
			// 获取到数据以后 对数据总条数进行更新
			.then(r => {
				this.total = this.customerData.total
			})
		},
		handleCurrentChange(val) {
			this.currentPage = val
			this.findAllCustomerData()
		},
		// 根据状态查询顾客信息
		searchCustomer(){
			// 查询之前 将页数重置为第一页
			this.currentPage = 1
			// 配置参数
			let params = {
				page: this.currentPage - 1,
				pageSize: this.pageSize,
				status: this.searchInput
			}
			// 进行一个判断
			if (params.status == '') {
				// 如果用户什么都不输入 status就是空字符串 这个时候就相当于是查询所有数据
				// 为了防止空字符串有问题 我们可以将其删掉
				delete params.status
				this.findAllCustomer(params)
				.then(r => {
					this.total = this.customerData.total
				})
			}else{
				this.findAllCustomer(params)
				.then(r => {
					this.total = this.customerData.total
				})
			}
		},

		// 根据id删除顾客
		deleteCustomer(id){
			this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(() => {
				// 点击确定执行
				// 发送请求 执行删除操作
				this.deleteCustomerById(id)
				.then(r => {
					// 如果当前我们删除的是最后一页的最后一条数据 正常的情况应该是返回到上一页显示上一页的数据 但是我们目前这样做 并没有实现这样的效果 因为我们在最后一页删除最后一条数据的时候 currentPage还是记录的最后一页 并不是最新的页数 这个时候我们需要做一个判断来处理
					const totalPage = Math.ceil((this.customerData.total - 1) / this.pageSize)
					this.currentPage = this.currentPage > totalPage ? totalPage : this.currentPage
					this.currentPage = this.currentPage < 1 ? 1 : this.currentPage
					// 提示是否删除成功
					this.$message({
						type: 'success',
						message: '删除成功!'
					});
					// 刷新界面数据
					this.findAllCustomerData()
				})
			}).catch(() => {
				// 点击取消执行
				this.$message({
					type: 'info',
					message: '已取消删除'
				});          
			});
		}
	},
};
</script>
<style scoped>
/* 设置customer全局样式 */
.customer {
  width: 99%;
  background-color: #fff;
  min-height: calc(100vh - 70px);
  padding: 10px;
  overflow: hidden;
}
/* 设置title样式 */
.customer_title {
  border-bottom: 1px solid black;
  padding-bottom: 10px;
}
/* 设置头部区域样式 */
.customer_header {
  margin-top: 10px;
  margin-bottom: 10px;
}
/* 设置搜索框长度 */
.customer_header .el-input {
  width: 200px;
}
/* 设置操作样式 */
.setSpan{
	color: rgb(70, 160, 252);
	cursor: pointer;
}
</style>
