class Foo {
	static name () {
		return "张三";
	}
    
	constructor(x) {
		this.age = x;
	}
 
	name() {
		console.log(this.name);
	}
}

// 实例化对象
let f = new Foo("李四");
console.log(Foo.name());
f.name();

// 静态方法可以和类的方法（原型上的） 可以重名

// super调用静态方法

class Baz extends Foo {
	static hello () {
		// super.name 等同于 Foo.name()
		return super.name() + ",我是Baz中的";
	}
}
console.log(Baz.hello());


