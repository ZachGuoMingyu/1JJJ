// 使用拓展运算符进行数组合并
// let arr1 = [1,2,3]
// let arr2 = [4,5,6]
// let arr3 = [...arr1, ...arr2]
// console.log(arr3);

// 复制数组
let arr4 = ['a','b','c']
let arr5 = [...arr4]
arr4[1] = 'e'
console.log(arr5);


// 复制对象
let obj = {name: 'zhangsan', age: 12}
let obj2 = {...obj}
obj.name = 'lisi'
console.log(obj2);