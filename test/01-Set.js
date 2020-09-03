// 使用构造函数初始化Set
let set = new Set()

// Set.prototype.add(value)	添加某个值，返回Set结构本身
// set会去掉重复值的
set.add(100)
set.add(100)
set.add('hello')
set.add('world')
// Set.prototype.delete(value)	删除某个值，返回一个布尔值，表示删除是否成功
// set.delete(100)

// Set.prototype.has(value)	返回一个布尔值，表示该值是否为Set的成员
// console.log(set.has(1000));

// Set.prototype.clear()		清除所有成员，没有返回值
// set.clear()

// Set.prototype.size		返回Set实例的成员总数
// console.log(set.size);
// console.log(set);

// set中没有索引 key和value是一样的
// Set.prototype.keys()		返回键名的遍历器
let keys = set.keys()
// console.log(keys);
// Set.prototype.values()		返回键值的遍历器
let values = set.values()
// console.log(values);

// Set.prototype.entries()	返回键值对的遍历器
let entries = set.entries()
// console.log(entries);

// 使用for of循环  它是专门为迭代器服务的
for (let key of keys) {
  // console.log(key);
}

for (let value of values) {
  // console.log(value);
}

for (let entrie of entries) {
  // console.log(entrie);
}

// 注意 set和map只有forEach方法 没有其他的数组方法 比如filter等
set.forEach(function (value, key) {
  console.log(value, key);
})

// set的高级使用
// 数组去重
let arr = [1,1,3,3,2,2,5,5,6,7,7]
let set2 = new Set(arr)
// 使用Array.from 将迭代器转换为数组
let result = Array.from(set2)
console.log(result);

// 一句话解决数组去重
console.log([...new Set(arr)]);