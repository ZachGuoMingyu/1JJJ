// function test(a,b,c) {
  
// }

// 函数形参设置默认值
// function test(a, b = 123) {
//   console.log(a, b);
// }
// test()

// function test(a, b = 123, c, d, e) {
//   console.log(a, b);
// }
// test()

// // 获取函数形参的个数
// console.log(test.length);

// 函数默认值配合解构赋值
// function test({x, y = 123}) {
//   console.log(x, y);
// }
// test({x:1, y: 10})

// rest 参数
function add(...values) {
  console.log(values);
}
add(1,2,3,4,5,6,7)