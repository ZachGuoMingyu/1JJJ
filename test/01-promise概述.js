// 分析 以前使用ajax进行网络请求 - 异步操作
$.ajax({
  url:'',
  method: '',
  data:'',
  success(res){
    console.log(1);
  },
  error(err){
    console.log(2);
  }
})
console.log(3);

// 学生管理系统  获取年级的数据    根据年级获取班级的数据    根据班级获取学生的数据
//             findAllGrade    findClassByGradeId     findStudentByClassId
$.ajax({
  url:'xxx/findAllGrade',
  method:'get',
  success(res){
    // res 全部年级的数据
    // 获取第一个年级下所有的班级
    // 假设 获取下来的年级数据中有一个字段 gradeId
    // 根据第一个年级id获取班级数据
    $.ajax({
      url:'xxx/findClassByGradeId',
      method:'get',
      date: res.data[0].gradeId,
      success(res){
        // res 当前年级下的班级数据
        // 假设 获取下来的班级数据中有一个 classId
        // 这种回调现象 一般叫做回调金字塔 或 回调地狱
        $.ajax({
          url: 'xxx/findStudentByClassId',
          method:'get',
          data: res.data[0].classId,
          success(res){
            console.log(res);
          },
          error(err){
            
          }
        })
      },
      error(err){

      }
    })
  },
  error(err){

  }
})

// 为了解决这种现象 ES6推出了几种解决方案
// Promise 最基础的 掌握
// Generator 基于Promise的 更高级的 了解
// async  比Generator还要高级的 了解 在vue中会使用

// 这里 先拿vue中的axios来举一个例子 axios也是一个网络请求工具  是基于promise和http的 

async function getStudeng() {
  let grade = await axios.get('xxx/findAllGrade')
  let classData = await axios.get('xxx/findClassByGradeId?gradeId='+grade.gradeId)
  let student = await axios.get('xxx/findStudentByClassId?classId=' + classData.classId)
}