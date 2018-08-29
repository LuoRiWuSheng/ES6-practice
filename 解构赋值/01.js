function f() {
	return "hello";
}

let [x = f()] = [1];

console.log(x); // 1

// 下面的情况是，如果你解构右侧的是是 恒等于 ==== undefined 那么就会去执行 f() 函数，拿到对应的值；否则，将不会去调用f() 惰性求值
let [y = f()] = [undefined];
console.log("y-->",y); // hello

let [z = f()] = [null];

console.log("z-->",z); // null  因为null 不是恒等于 undefined 所以，解构赋值仍然取右侧的值

let [k=f()] = [];
console.log("k-->",k); // hello   
// 上面的 []  等价于  [][0] 空数组取下标为0的元素  肯定是 undefined  注意 [][0]不是二维数组  js没有二维数组
