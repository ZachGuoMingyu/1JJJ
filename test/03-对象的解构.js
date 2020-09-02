// 对象解构赋值 
// let {username, age} = {age: 12, username: 'zhangsan'} 
// console.log(username, age);

// 如果变量名与属性名不一致，必须写成下面这样。重命名
// let {username, age:userage} = {age: 12, username: 'zhangsan'}
// console.log(username, userage);

// 对象解构嵌套赋值
let obj = { p: ['Hello', { y: 'World' }] };
let { p: [x, { y }] } = obj; 
console.log(x,y);