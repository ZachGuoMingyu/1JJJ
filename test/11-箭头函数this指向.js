// 默认的this输出
// console.log(this);

let say = () => console.log(this);
// say()

let obj = {
  name: 'zhangsan',
  // 箭头函数
  say,
  // 正常的函数
  sayName(){
    console.log(this);
  }
}

obj.say()
obj.sayName()