// 对象原型的拓展
// 以前使用对象的原型
// 1.Object.prototype
// 2.obj.__proto__

let obj = {}
// console.log(Object.prototype);
// console.log(obj.__proto__);
// console.log(Object.prototype === obj.__proto__);

// es6中 Object.getPrototypeOf(obj)
// 方法返回指定对象的原型（内部[[Prototype]]属性的值)
// console.log(Object.getPrototypeOf(obj));
// console.log(Object.getPrototypeOf(obj) === obj.__proto__);

let arr = [1,2,3]
// console.log(Object.getPrototypeOf(arr));

// 设置原型
// 以前设置原型
// arr.__proto__ = {test: 234}
// console.log(arr.forEach);

// es6中 
// Object.setPrototypeOf(obj, prototype)
// 方法设置一个指定的对象的原型(即, 内部[[Prototype]]属性）到另一个对象或null
Object.setPrototypeOf(arr, {test: 123})
console.log(arr.forEach);
console.log(arr.test);
console.log(arr.forEach === Array.prototype.forEach);
