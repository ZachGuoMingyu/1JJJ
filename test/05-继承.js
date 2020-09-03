// 创建一个父类
class Animal{
  // 构造器
  constructor(name){
    // 实例属性
    this.name = name
  }
  // 实例方法
  sayName(){
    console.log(this.name);
  }
  // 静态方法
  static sayMy(){
    console.log(this);
  }
}

// 创建一个子类继承自Animal类
class Dog extends Animal{
  // 子类也需要一个构造器
  constructor(name, age){
    // 子类构造器里必须要调用父类构造函数
    super(name) //相当于将父类的 this.name = name 继承了下来
    // 如果父类中没有子类中需要的属性 子类自己生成即可
    this.age = age
  }
  // 实例方法
  sayAge(){
    console.log(this.age);
    // 调用父类的实例方法 通过super
    super.sayName()
  }

  // 静态方法
  static sayDog(){
    console.log(this);
    // 调用父类的实例方法
    super.sayMy()
  }
  // 总结一句话 调用父类里的属性或方法通过super关键字类调用
}

// 创建一个子类
let dog = new Dog('可乐', 12)
// dog.sayAge()
// Dog.sayDog()
// Animal.sayMy()
// console.log(dog);

console.log(Dog.__proto__ === Animal);
