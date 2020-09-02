let arr = [1, 2, 3, 4, 5]

// Array.prototype.keys() keys()是对键名的遍历
let keys = arr.keys()
console.log(keys);
// Array.prototype.values() values()是对键值的遍历
let values = arr.values()
console.log(values);
// Array.prototype.entries() entries()是对键值对的遍历
let entries = arr.entries()
console.log(entries);

// keys
// for (let key of keys) {
//   console.log('key' + key);
// }

// // values
// for (let value of values) {
//   console.log('value' + value);
// }

arr.forEach(function (item, index) {
  console.log(item, index);
})
