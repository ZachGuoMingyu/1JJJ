// 箭头函数的基本使用

// 没有形参的时候
// function test1() {
//   console.log('没有形参的时候');
// }
// test1()
// let test2 = () => {
//   console.log('没有形参的时候，小括号不可以省略');
// }
// test2()

// 有一个形参的时候
// function test1(a) {
//   console.log('有一个形参的时候');
// }
// test1()

// let test2 = a => {
//   console.log('有一个形参的时候，箭头函数可以省略小括号');
// }
// test2()

// 有两个及两个以上形参的时候
// function test1(a, b) {
//   console.log('有两个及两个以上形参');
// }
// test1()

// let test2 = (a, b) => {
//   console.log('有两个及两个以上形参,小括号不可以省略');
// }
// test2()

// 处理函数中有多行代码
// function test1() {
//   console.log(123);
//   console.log(234);
// }
// test1()
// let test2 = () => {
//   console.log(123);
//   console.log(234);
// }
// test2()

// 处理函数中只有一行代码 且为return 返回的时候
// function test1(a) {
//   return a + a
// }
// console.log(test1(100));

// let test2 = a => a + a
// console.log(test2(200));

// 处理函数中只有一行代码 不是return返回的时候
function test1() {
  console.log(123);
}
test1()

let test2 = () => console.log(123);
test2()

