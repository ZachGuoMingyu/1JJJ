// 使用构造函数初始化map
let map = new Map()

// Map.prototype.set(key, value)
// Map方法设置键名key对应的键值为value，然后返回整个map结构
map.set('test', 'hello') //map结构的箭头并不是箭头函数 只是map的一种表现形式
let obj = {name: 'zhangsan'}
map.set(obj, 'world')

//如果key已经有值，则键值会被更新，否则就新生成该键。
map.set('test', 'ES6')

// Map.prototype.get(key) get方法读取key对应的键值，如果找不到key，返回undefined
// console.log(map.get(obj));

// Map.prototype.has(key)	 has方法返回一个布尔值，表示某个键是否在当前 Map 对象之中
// console.log(map.has(obj));

// Map.prototype.delete(key)  delete方法删除某个键，返回true。如果删除失败，返回false
// map.delete(obj)

// Map.prototype.clear()	清除所有成员，没有返回值
// map.clear()


// Map.prototype.size 返回 Map 结构的成员总数
// console.log(map.size);
// console.log(map);

// Map.prototype.keys()	  返回键名的遍历器
let keys = map.keys()
// console.log(keys);

// Map.prototype.values()	  返回键值的遍历器
let values = map.values()
// console.log(values);

// Map.prototype.entries()	  返回键值对的遍历器
let entries = map.entries()
// console.log(entries);

// 使用for of进行遍历
for (let key of keys) {
  // console.log(key);
}

for (let value of values) {
  // console.log(value);
}

for (const entrie of entries) {
  // console.log(entrie);
}

map.forEach((value, key) => {
  console.log(value, key);
})

// map高级使用
// 将对象转换为map
let obj2 = {name: 'zhangsan', age: 12}
let map2 = new Map(Object.entries(obj2))
console.log(map2);