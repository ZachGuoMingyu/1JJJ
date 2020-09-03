// 通过class创建一个类 其实就是构造函数的语法糖
class Animal{
  // 构造器
  constructor(name){
    // this指向的就是实例对象
    this.name = name
  } //类中 不用写逗号分隔
  // 实例方法 其实实例方法就是构造原型中的方法 所以实例对象可以调用
  sayName(){
    console.log(this.name);
  }

  // 静态方法 其实就是构造函数中的静态方法 像我们之前使用过的Array.from,Array.of,Object.is.... 构造函数中的方法 只有构造函数可以调用 以此类推 类中的静态方法 也只有类可以调用 实例对象是不可以调用的
  static sayMy(){
    console.log(this);
  }
}
// 静态属性 是写在类外的 由类来声明 也只能由类来调用
Animal.staticAttr = 'staticAttr'

// 通过类创建一个实例对象
let animal = new Animal('可乐')
animal.sayName()
// animal.sayMy() //静态方法实例对象不可以调用
Animal.sayMy()
console.log(Animal.staticAttr);
// console.log(animal);


