class A extends Array {
	constructor(args) {
		super(args)
		this[Symbol.isConcatSpreadable] = true;
	}
}

class B extends Array {
	constructor(args) {
		super(args);
	}
	// 表示B这个数组实例，调用concat是不会展开的
	get [Symbol.isConcatSpreadable]() {
		return false
	}

} 

let a = new A();
a[0] = 2;
a[1] = 3;

let b = new B();
b[1] = "a";
b[0] = "b";
b[2] = [111,2222]

// A中的Symbol.isConcatSpreadable是定义在实例上的
console.log(["hello", "Symbol"].concat(a))

// B中的Symbol.isConcatSpreadable是定义在类本身的
console.log(["hello", "Symbol"].concat(b))

// 无论哪种方式，只要是作为  Symbol.isConcatSpreadable作为对象的属性，给予一个布尔类型，就能实现调用数组concat方法的展开与否

