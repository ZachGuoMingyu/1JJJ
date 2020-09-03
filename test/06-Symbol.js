// js中的数据类型 string number boolean undefined null 引用类型 object
// symbol
let s = Symbol()
let s2 = Symbol()
// console.log(s, s2); //虽然打印看起来相同 但是实际是不同的
// console.log(s === s2); //false
let str = 'abc123'
let obj = {
  [str]: 'ES6',
  [s]: 'hello',
  [s2]: 'world'
}
console.log(obj[s]);
// 为什么我们使用symbol类型用于属性表达式呢? 因为它是独一无二的 所以可以保证key值不重复

// 注意 symbol传递的参数并不是它的值 而是它的描述
let s3 = Symbol('这是一个Symbol')
console.log(s3.description);