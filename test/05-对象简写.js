// 对象简写形式
let name = 'zhangsan'
let age = 12
let person = {
  // 在es5中
  // name: name,
  // age: age,
  // sayName: function () {
    
  // }

  // 在es6中 如果我们的属性名与变量名重名 可以省略 只写属性名即可 函数方法也可简写
  name,
  age,
  sayName(){
    console.log(this.name);
  }
}

console.log(person);
person.sayName()