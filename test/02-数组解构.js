// 数组的解构赋值 
// 解构的本质属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。
// 如果解构不成功，变量的值就等于undefined。
// let [a, b, c] = [1, 2, 3, 4]
// console.log(a, b, c);

// 不完全解构
// let [a, [b], c] = [1, [2, 3], 4]
// console.log(a,b,c);

// 集合解构
// let [a, ...b] = [1, 2, 3, 4, 5]
// console.log(a, ...b);

// 数组解构默认值
// let [a, b = 2] = [1]
// console.log(a, b);

// 数组解构赋值默认值也可为函数
function test() {
  console.log('aaa');
  return 10
}

let [a = test] = []
console.log(a);