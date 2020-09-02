// Object.is(value1, value2)  判断两个值是否全等
// console.log(Object.is(1, 1));

// +0 和 -0 比较
// console.log(+0 === -0);
// console.log(Object.is(+0, -0));

// NaN
// console.log(NaN === NaN);
// console.log(Object.is(NaN, NaN));

// Object.assign(target, ...sources)
// 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象
// 将obj1,obj2,obj3的属性复制到target中
// 当我们使用Object.assign 向目标对象进行复制的时候 如果源对象里有重复的属性 那么后面的会覆盖前面的
let obj1 = {name: 'zhangsan'}
let obj2 = {name: 'lisi', age: 12}
let obj3 = {height: 1.88}

let target = {}
// Object.assign(target, obj1, obj2, obj3)
// console.log(target);

// clone对象
Object.assign(target, obj1)
console.log(target);
obj1.name = 'lisi'
console.log(target);


