function clone(origin) {
	return Object.assign({},origin);
}
let obj1 = {a: 1};

let obj2 = clone(obj1);
obj2.a = "哈哈";
console.log(obj1);

console.log(obj2);

// 上面这个是深度拷贝，但是一旦 {key,value}  value这个是一个对象，那这种拷贝就是浅拷贝

