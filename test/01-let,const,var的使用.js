// 在ES5中 使用var来定义变量 变量声明提前
// var a = 10
// console.log(a);

// 在es6中 使用let来定义变量
// 变量声明不会被提升，即在变量声明之前无法使用该变量
// let a = 10
// console.log(a);

// 具有局部作用域，即let声明的变量只能在对应代码块中使用
// {
//   var a = 10
//   let b = 20
// }
// console.log(a);
// console.log(b);

// 不允许重复声明
// var a = 10
// var a = 20
// console.log(a);

// let b = 10
// let b = 20
// console.log(b);

// test = 10

// console.log(test);

// var test

// 暂时性死区
// test = 10

// console.log(test);

// let test

// const声明的变量在声明的时候就需要赋值，并且只能赋值一次，不能修改
const a = 100
console.log(a);
