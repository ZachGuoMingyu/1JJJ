// 需要一个迭代器
// 数组的keys values entries ,set的keys values entries
let set = new Set([1,2,3,4])

let values = set.values()
// console.log(values);

// 模拟iterator的遍历过程 Iterator的数据都自带next()方法
console.log(values.next()); //{ value: 1, done: false } value 当前位置的值 done 是否遍历结束

console.log(values.next());//{ value: 2, done: false }
console.log(values.next());//{ value: 3, done: false }
console.log(values.next());//{ value: 4, done: false }
console.log(values.next());//{ value: undefined, done: true }