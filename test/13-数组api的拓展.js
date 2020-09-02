// Array.from()
// 用于将两类对象转为真正的数组: 类似数组的对象(array - like object)和可遍历(iterable)的对象(包括ES6新增的数据结构Set和Map) 

// let str = 'hello'
// let arr = Array.from(str)
// console.log(arr);

// Array.of()
// 用于将一组值，转换为数组。这个方法的主要目的，是弥补数组构造函数Array()的不足。因为参数个数的不同，会导致Array()的行为有差异。 

//使用数组构造器创建数组时 如果只有一个参数且为数字 那么代表数组的长度为10
// let arr = new Array(10) 
//使用数组构造器创建数组时 如果有两个或两个以上个数值的时候 为数组的值
// let arr = new Array(10, 20)
// let arr = Array.of(10)
// let arr = Array.of(10,20)
// console.log(arr);


// 数组的实例方法
// 以前使用过的数组的实例方法 forEach,filter,splice....
// Array.prototype.find()与Array.prototype.findIndex()
// let arr = [1, 24, 35, 102, 29]

// 在数组中找出大于20的值
// Array.prototype.find() 会返回满足条件的第一个值 如果没有满足条件的 则返回undefined
// let result = arr.find((item) => {
//   return item > 20
// })
// console.log(result);

// Array.prototype.findIndex() 会返回满足条件的第一个值的索引 如果没有满足条件的 则返回-1
// 找出大于25的值的位置
// let result = arr.findIndex((item) => {
//   return item > 125
// })
// console.log(result);

// Array.prototype.includes()
// 该方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的includes方法类似
// let arr = [1,2,3,4]
// console.log(arr.includes(2));

// Array.prototype.fill()
// fill方法使用给定值，填充一个数组
let arr = [1,2,3,4,5]
arr.fill(6)
console.log(arr);

