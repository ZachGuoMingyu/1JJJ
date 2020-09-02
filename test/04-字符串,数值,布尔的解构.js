// 数组解构
// 使用数组解构来解构字符串 数值 布尔

// 字符串 
// 字符串是可以使用数组解构的 因为它是可遍历的 所有可遍历的我们都称之为 iterator 迭代器
// let str = 'hello'
// let [a,b,c,d,e] = str
// console.log(a,b,c,d,e);

// 数值 number 数值类型是不可使用数组解构的 因为它不是迭代器
// let num = 123
// let [a,b,c] = num
// console.log(a,b,c);

// 布尔 
// let bool = true
// let [a, b, c, d] = bool
// console.log(a,b,c,d);

// 对象解构
// 使用对象解构来解构字符串 数值 布尔 并不是对三者的值进行解构 而是把三者转换为构造器类型
// 这里我们拿字符串类型举例 当对字符串进行对象解构时 其实是把字符串转换成String()构造器类型 那么String()的一些属性 和 对象方法我们就可以使用了 比如length match() split()....

// 字符串
// let {length} = 'hello123'
// console.log(length);

// let {trim} = 'hello'
// console.log(trim === String.prototype.trim);

// 数值
// let {valueOf} = 123
// console.log(valueOf === Number.prototype.valueOf);

// 布尔
let {toString} = true
console.log(toString === Boolean.prototype.toString);