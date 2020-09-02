let obj = {
  name: 'zhangsan',
  age: 12,
  height: 1.88
}

// Object.keys(obj)
// 返回一个数组，成员是参数对象自身的(不含继承的)所有可遍历(enumerable)属性的键名

console.log(Object.keys(obj));

// Object.values(obj)
// 返回一个数组，成员是参数对象自身的(不含继承的)所有可遍历(enumerable)属性的键值

console.log(Object.values(obj));

// Object.entries(obj)
// 返回一个数组，成员是参数对象自身的(不含继承的)所有可遍历(enumerable)属性的键值 对数组

console.log(Object.entries(obj));